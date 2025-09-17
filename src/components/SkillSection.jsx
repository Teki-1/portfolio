import { useState } from "react";
import { cn } from "../libs/utils";

const skills = [
  { name: "HTML", percentage: 75, level: "Intermediate", category: "Frontend" },
  { name: "CSS", percentage: 65, level: "Intermediate", category: "Frontend" },
  {
    name: "JavaScript",
    percentage: 55,
    level: "Intermediate",
    category: "Frontend",
  },
  { name: "React", percentage: 40, level: "Beginner", category: "Frontend" },
  {
    name: "TypeScript",
    percentage: 35,
    level: "Beginner",
    category: "Frontend",
  },
  { name: "Node.js", percentage: 40, level: "Beginner", category: "Backend" },
  {
    name: "Git/GitHub",
    percentage: 50,
    level: "Intermediate",
    category: "Tools",
  },
  { name: "VS Code", percentage: 65, level: "Intermediate", category: "Tools" },
];

const categories = ["all", "Frontend", "Backend", "Tools"];

export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left transition-all duration-700 ease-out"
                  style={{ width: skill.percentage + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
