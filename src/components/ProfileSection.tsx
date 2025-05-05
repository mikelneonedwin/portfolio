
import { Badge } from "@/components/ui/badge";

interface ProfileSectionProps {
  name: string;
  title: string;
  pronouns: string;
}

export const ProfileSection = ({ name, title, pronouns }: ProfileSectionProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-12">
      <div className="profile-image-border">
        <img
          src="/lovable-uploads/238900ba-24c8-41a9-bacf-e4d793878b35.png"
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover z-10 relative"
        />
      </div>
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-3xl font-bold text-white mb-1">{name}</h1>
        <div className="flex items-center gap-2 mb-3">
          <p className="text-gray-400">{title}</p>
          <Badge variant="secondary" className="text-xs">{pronouns}</Badge>
        </div>
      </div>
    </div>
  );
};
