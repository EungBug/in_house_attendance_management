import { useAuthStore } from "@/shared/model/useAuthStore";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

function RootLayout() {
  return (
    <div className="flex h-screen">
      <main className="flex-1">
        <header className="border-b h-14 flex items-center px-4">
          /* Header */
        </header>
        <div className="p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export const Route = createFileRoute("/_auth")({
  beforeLoad: async ({ location }) => {
    const { isAuthenticated } = useAuthStore.getState();

    if (!isAuthenticated) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: RootLayout,
});
