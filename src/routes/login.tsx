import { useAuthStore } from "@/shared/model/useAuthStore";
import { createFileRoute, redirect } from "@tanstack/react-router";

import logo from "@/assets/logo.png";
import logoKr from "@/assets/logo_kr.png";
import LoginForm from "@/features/login/ui/LoginForm";

const RouteComponent = () => {
  return (
    <div className="bg-primary h-screen flex flex-col items-center">
      <div className="flex flex-col gap-2 items-center my-[60px]">
        <img
          src={logo}
          alt="LOGO"
          className="aspect-[34/44] w-[34px] sm:w-auto"
        />

        <img
          src={logoKr}
          alt="에코카우"
          className="aspect-[176/44] w-[176px] sm:w-auto"
        />
        <span className="text-accent font-bold text-lg">출퇴근용</span>
      </div>

      {/* FORM */}
      <LoginForm />
    </div>
  );
};

export const Route = createFileRoute("/login")({
  beforeLoad: async () => {
    const { isAuthenticated } = useAuthStore.getState();
    if (isAuthenticated) {
      throw redirect({
        to: "/",
        replace: true,
      });
    }
  },
  component: RouteComponent,
});
