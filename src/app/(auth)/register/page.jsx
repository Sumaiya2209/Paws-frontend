import AuthVisualPanel from "@/components/auth/AuthVisualPanel";
import RegisterForm from "@/components/auth/RegisterForm";

export const metadata = {
  title: "Register | Paws & Home",
  description: "Create your Paws & Home account.",
};

export default function RegisterPage() {
  return (
    <main className="flex h-screen w-full">
      <AuthVisualPanel
        badge="Join Us"
        title={
          <>
            Start your <br />
            adoption journey.
          </>
        }
        quote='"Every animal deserves a loving home—and every home deserves a loyal friend."'
        attribution="— Paws & Home"
      />
      <RegisterForm />
    </main>
  );
}
