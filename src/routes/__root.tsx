import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import Lenis from "lenis";
import { useEffect } from "react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider open={false}>
        <AppSidebar />
        <main className="container mx-auto max-w-5xl">
          <Outlet />
        </main>
      </SidebarProvider>
    </ThemeProvider>
  );
}
