
interface AboutSectionProps {
  bio: string;
}

export const AboutSection = ({ bio }: AboutSectionProps) => {
  return (
    <section id="about" className="py-10">
      <h2 className="section-title">About</h2>
      <div className="section-content">
        <p className="mb-4">{bio}</p>
      </div>
    </section>
  );
};
