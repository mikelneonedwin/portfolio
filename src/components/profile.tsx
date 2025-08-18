import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Profile() {
  return (
    <div
      className="flex flex-col md:flex-row items-center gap-6 pt-8"
      id="about"
    >
      <Avatar className="size-24">
        <AvatarImage src="https://github.com/mikelneonedwin.png" />
        <AvatarFallback>WE</AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-center md:items-start gap-y-2">
        <h1 className="text-3xl font-bold">Winner Edwin</h1>
        <div className="flex items-center gap-2">
          <p className="text-secondary-foreground">Fullstack Web Developer</p>
          <Badge variant="secondary" className="text-xs">
            He/Him
          </Badge>
        </div>
      </div>
    </div>
  );
}
