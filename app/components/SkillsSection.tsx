import type { IconType } from "react-icons";
import {
  SiBootstrap,
  SiDocker,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from "react-icons/si";

type Skill = {
  name: string;
  icon: IconType;
};

type SkillGroup = {
  category: string;
  description: string;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    description:
      "APIs, databases and server-side logic supporting the frontend.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "NestJS", icon: SiNestjs },
      { name: "Express.js", icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Docker", icon: SiDocker },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    category: "Frontend",
    description:
      "Interfaces that are responsive, accessible and pleasant to use.",
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="skills">
      <div className="skills__heading">
        <p className="skills__eyebrow">Technologies I work with</p>
        <h2 className="skills__title">Tech Stack</h2>
      </div>

      <div className="skills__grid">
        {skillGroups.map(({ category, description, skills }) => (
          <article className="skills__card" key={category}>
            <h3 className="skills__category">{category}</h3>
            <p className="skills__description">{description}</p>

            <ul className="skills__list">
              {skills.map(({ name, icon: Icon }) => (
                <li className="skills__item" key={name}>
                  <Icon className="skills__icon" aria-hidden="true" />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
