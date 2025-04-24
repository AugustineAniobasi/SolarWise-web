import { z } from "zod";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Form } from "@/components/ui/form";

import { RoleSelection } from "./steps/RoleSelection";
import { AuthMethod } from "./steps/AuthMethod";
import { BasicInfo } from "./steps/BasicInfo";
import { VendorInfo } from "./steps/VendorInfo";
import { DocumentUpload } from "./steps/DocumentUpload";
import { TermsAndConditions } from "./steps/TermsAndConditions";
import { ReviewSubmit } from "./steps/ReviewSubmit";

const mySchema = z.object({
  role: z.enum(["vendor", "customer"]),
  authMethod: z.enum(["google", "email"]),
  email: z.string().email().optional(),
  password: z.string().min(8).optional(),
  name: z.string().min(2).max(50),
  phone: z.string().min(10).max(15),
  location: z.object({
    city: z.string().min(2),
    country: z.string().min(2),
  }),
  identification: z.any().optional(),
  businessName: z.string().min(2).max(100).optional(),
  businessType: z.string().min(2).optional(),
  serviceDescription: z.string().min(10).optional(),
  businessAddress: z.string().min(5).optional(),
  businessDocuments: z.any().optional(),
  website: z.string().url().optional().or(z.literal("")),
  socialMedia: z.string().optional(),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

export function RegistrationForm() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const totalSteps = 7;

  // Initialize form with default values
  const form = useForm({
    resolver: zodResolver(mySchema),
    defaultValues: {
      role: undefined,
      authMethod: undefined,
      email: "",
      password: "",
      name: "",
      phone: "",
      location: {
        city: "",
        country: "",
      },
      businessName: "",
      businessType: "",
      serviceDescription: "",
      businessAddress: "",
      website: "",
      socialMedia: "",
      agreeToTerms: false,
    },
  });

  const { watch } = form;
  const role = watch("role");
  const authMethod = watch("authMethod");

  const progress = (step / totalSteps) * 100;

  // Handle next step
  const handleNext = async () => {
    // Validate current step before proceeding
    let isValid = false;

    switch (step) {
      case 1: // Role section
        isValid = !!role;
        break;
      case 2: // Auth method
        isValid = !!authMethod;
        break;
      case 3: // Basic info
        isValid = await form.trigger([
          "name",
          "phone",
          "location.city",
          "location.country",
        ]);
        break;
      case 4: // Vendor info (if vendor)
        if (role === "customer") {
          isValid = true; // Skip vendor for customers
        } else {
          isValid = await form.trigger([
            "businessName",
            "businessType",
            "serviceDescription",
            "businessAddress",
          ]);
        }
        break;
      case 5: // Documents
        isValid = true; // Assume documents are optional for now
        break;
      case 6: // Terms and conditions
        isValid = await form.trigger(["agreeToTerms"]);
        break;
      default:
        isValid = true;
    }

    if (isValid) {
      // Skip vendor info if customer
      if (step < totalSteps) {
        if (step === 3 && role === "customer") {
          setStep(5);
        } else {
          setStep(step + 1);
        }
      }
    } else {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields correctly.",
        variant: "destructive",
      });
    }
  };

  // Handle previous step
  const handlePrevious = () => {
    if (step > 1) {
      // Skip vendor info step for customers when going back
      if (step === 5 && role === "customer") {
        setStep(3);
      } else {
        setStep(step - 1);
      }
    }
  };

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      // Send the data to your backend
      console.log("Form submitted:", data);

      // Show success message
      toast({
        title: "Registration Successful",
        description:
          "Your account has been created. Please check your email for confirmation.",
      });

      // Redirect to login or dashboard
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast({
        title: "Registration Failed",
        description:
          "There was an error creating your account. Please try again.",
        variant: "destructive",
      });
      console.log("Registration error:", error);
    }
  };

  return (
    <div className="mx-auto w-full max-w-3xl">
      <Card className="p-6">
        <div className="mb-6">
          <div className="mb-2 flex justify-between text-sm">
            <span>
              Step {step} of {totalSteps}
            </span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {/* Step 1: Role Selection */}
            {step === 1 && <RoleSelection />}

            {/* Step 2: Authentication Method */}
            {step === 2 && <AuthMethod />}

            {/* Step 3: Basic Information */}
            {step === 3 && <BasicInfo />}

            {/* Step 4: Vendor Information (only for vendors) */}
            {step === 4 && role === "vendor" && <VendorInfo />}

            {/* Step 5: Document Upload */}
            {step === 5 && <DocumentUpload role={role} />}

            {/* Step 6: Terms and Conditions */}
            {step === 6 && <TermsAndConditions />}

            {/* Step 7: Review and Submit */}
            {step === 7 && <ReviewSubmit onSubmit={onSubmit} />}

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevious}
                disabled={step === 1}
                className="cursor-pointer"
              >
                Previous
              </Button>

              {step < totalSteps ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="bg-primary-500 hover:bg-primary-400 cursor-pointer font-semibold text-white"
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="bg-success-600 hover:bg-success-700 cursor-pointer"
                >
                  Complete Registration
                </Button>
              )}
            </div>
          </form>
        </Form>
      </Card>
    </div>
  );
}
