import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Asteroids Game",
    description: "Simple asteroids game made using JavaScript.",
    image: "/projects/Asteroids-game.png ",
    tags: ["CSS", "Canvas", "JavaScript"],
    demoUrl: "https://asteroids-game-five.vercel.app/",
    githubUrl: "https://github.com/Teki-1/asteroids-game",
  },
  {
    id: 2,
    title: "Browser Extensions Manager",
    description:
      "Manage your browser extensions and filter to the ones you have active/inactive.",
    image: "/projects/browser-extension-manager.png ",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://browser-extensions-manager-ui-main-beta.vercel.app/",
    githubUrl: "https://github.com/Teki-1/browser-extensions-manager-ui-main",
  },
  {
    id: 3,
    title: "Time tracking dashboard",
    description:
      "View time spent across multiple categories (Work, Play, Study, Exercise, Social, Self-Care).",
    image: "/projects/dashboard-screenshot.png ",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    demoUrl: "https://time-tracking-dashboard-nine-xi.vercel.app/",
    githubUrl: "https://github.com/Teki-1/time-tracking-dashboard",
  },
  {
    id: 4,
    title: "Product list with cart",
    description:
      "A responsive React application for displaying desserts with a working shopping cart.  The cart dynamically updates totals and shows per-product counts.",
    image: "/projects/products-list-with-cart.png ",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    demoUrl: "https://product-list-with-cart-main-lime.vercel.app/",
    githubUrl: "https://github.com/Teki-1/product-list-with-cart-main",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of projects showcasing my skills and experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card overflow-hidden shadow-xs card-hover "
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 ">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    {" "}
                    <ExternalLink />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    {" "}
                    <Github />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="space-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/Teki-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check my GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
