
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <section id="contact" className="py-10">
      <h2 className="section-title">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="glass-card p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-secondary/50 border-white/10"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-secondary/50 border-white/10"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-secondary/50 border-white/10 min-h-[120px]"
                required
              />
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
        
        <div className="flex flex-col justify-center">
          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-2">Email</h3>
            <a href="mailto:your.email@example.com" className="text-blue-400 hover:text-blue-300 flex items-center">
              <Mail className="mr-2 h-4 w-4" />
              your.email@example.com
            </a>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-white mb-2">Connect</h3>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
