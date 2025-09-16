import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Aspiring Web Developer</h3>
            <p className="text-muted-foreground">
              I'm Nour Mohamed, an aspiring frontend developer passionate about
              building clean and user-friendly websites.
            </p>
            <p className="text-muted-foreground">
              With a growing foundation in HTML, CSS, and JavaScript, I'm eager
              to learn, improve my skills, and contribute to meaningful
              projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="space-button">
                Get in touch
              </a>
              <a
                href="/Nour-Elnabarawy--Resume.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 hover:text-background transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right side cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Exploring the core of web technologies and practicing
                    building projects to strengthen my understanding of modern
                    development practices
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Continuous Learning</h4>
                  <p className="text-muted-foreground">
                    I'm always looking for ways to improve my skills, whether by
                    exploring new technologies, solving coding challenges, or
                    building small projects. Learning is part of my daily
                    routine as a developer.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Career Growth</h4>
                  <p className="text-muted-foreground">
                    My focus is on gaining real-world experience, improving
                    every day, and building a career as a professional frontend
                    developer over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
