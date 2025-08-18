import { Badge } from "@/components/ui/badge";
import { GITHUB_URL } from "@/constants/globals";
import { socials } from "@/constants/socials";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Profile() {
  return (
    <div
      className="flex flex-col md:flex-row items-center gap-6 pt-8"
      id="about"
    >
      <Avatar className="size-28">
        <AvatarImage src={`${GITHUB_URL}.png`} />
        <AvatarFallback>WE</AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-center md:items-start gap-y-3">
        <h1 className="text-3xl font-bold leading-5">Winner Edwin</h1>
        <div className="flex items-center gap-2">
          <p className="text-secondary-foreground">Fullstack Web Developer</p>
          <Badge variant="secondary" className="text-xs">
            He/Him
          </Badge>
        </div>
        <div>
          <div className="flex gap-x-5 justify-between">
            {socials.map((social) => (
              <a
                href={social.href}
                target="_blank"
                key={social.href}
                className="/p-1.5 rounded-full /border-solid /border-ring /border-2 inline-block group hover:border-primary"
              >
                <social.icon className="text-primary group-hover:text-primary size-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
