import { Suspense } from "react";
import AuthVisualPanel from "@/components/auth/AuthVisualPanel";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      <Suspense fallback={<div className="flex flex-1 items-center justify-center">Loading...</div>}>
        <LoginForm />
      </Suspense>
      <AuthVisualPanel />
    </div>
  );
}
