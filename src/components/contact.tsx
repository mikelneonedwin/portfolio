import { socials } from "@/constants/socials";

const Contact = () => {
  return (
    <div>
      {/* Header + optional external link */}
      <div className="flex flex-col md:flex-row items-start mb-6 gap-4">
        <h2 className="text-2xl font-bold leading-0">Get in Touch ✉️</h2>
        <div className="flex items-center justify-between md:justify-center px-4 md:px-0 gap-4 w-full md:w-auto">
          {socials.map(({ href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Link to ${href}`}
            >
              <Icon className="size-5 text-ring hover:text-primary" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
