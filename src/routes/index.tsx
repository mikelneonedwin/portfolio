import About from "@/components/about";
import Profile from "@/components/profile";
import Stack from "@/components/stack";
import WorkExperience from "@/components/work-experience";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Profile />
      <div className="mt-12 space-y-8">
        <About />
        <Stack />
        <WorkExperience />
        {/* <Contact /> */}
      </div>
    </>
  );
}
