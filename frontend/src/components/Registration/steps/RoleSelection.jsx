import { useFormContext } from "react-hook-form";

import { CardDescription, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Store, UserRound } from "lucide-react";
import { FormField, FormItem } from "@/components/ui/form";

export function RoleSelection() {
  const form = useFormContext();
  const { watch } = form;
  const selectedRole = watch("role");

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Choose Your Role</h2>
        <p className="text-muted-foreground mt-2">
          Select how you want to use our platform
        </p>
      </div>

      <FormField
        control={form.control}
        name="role"
        render={({ field }) => (
          <FormItem>
            <RadioGroup
              onValueChange={(value) => field.onChange(value)}
              defaultValue={field.value}
              className="grid grid-cols-1 gap-4 md:grid-cols-2"
            >
              <div className="relative">
                <RadioGroupItem
                  value="customer"
                  id="customer"
                  className="sr-only"
                />
                <Label
                  htmlFor="customer"
                  className={`border-muted bg-popover hover:bg-accent hover:text-accent-foreground flex h-full cursor-pointer flex-col items-center justify-between rounded-md border-2 p-6 ${
                    selectedRole === "customer" ? "border-primary" : ""
                  }`}
                >
                  <UserRound className="mb-4 h-12 w-12 text-blue-500" />
                  <CardTitle className="text-xl">Customer</CardTitle>
                  <CardDescription className="mt-2 text-center">
                    I want to find and hire service providers for my needs
                  </CardDescription>
                </Label>
              </div>

              <div className="relative">
                <RadioGroupItem
                  value="vendor"
                  id="vendor"
                  className="sr-only"
                />
                <Label
                  htmlFor="vendor"
                  className={`border-muted bg-popover hover:bg-accent hover:text-accent-foreground flex h-full cursor-pointer flex-col items-center justify-between rounded-md border-2 p-6 ${
                    selectedRole === "vendor" ? "border-primary" : ""
                  }`}
                >
                  <Store className="mb-4 h-12 w-12 text-green-500" />
                  <CardTitle className="text-xl">Vendor</CardTitle>
                  <CardDescription className="mt-2 text-center">
                    I want to offer my services and connect with customers
                  </CardDescription>
                </Label>
              </div>
            </RadioGroup>
          </FormItem>
        )}
      />
    </div>
  );
}
