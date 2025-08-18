import Experiences from "@/components/work-display";
import { personalProjects } from "@/constants/experiences";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  component: () => (
    <Experiences experiences={personalProjects} title="Personal Projects" />
  ),
});
