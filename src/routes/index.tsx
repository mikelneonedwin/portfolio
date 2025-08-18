import About from "@/components/about";
import Profile from "@/components/profile";
import WorkExperience from "@/components/work-experience";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Profile />
      <div className="mt-12">
        <About />
        <WorkExperience />
      </div>
    </>
  );
}
