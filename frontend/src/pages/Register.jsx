import { RegistrationForm } from "@/components/Registration/RegistrationForm";

export default function RegisterPage() {
  return (
    <div className="px-4 py-10">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Create Your Account</h1>
        <p className="text-muted-foreground mt-2">
          Join our platform to connect with service providers and customers
        </p>
      </div>
      <RegistrationForm />
    </div>
  );
}
