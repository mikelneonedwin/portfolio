import Experiences from "@/components/work-display";
import { workExperiences } from "@/constants/experiences";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/work-experience")({
  component: () => (
    <Experiences experiences={workExperiences} title="Work Experience" />
  ),
});
