"use client";

import { motion } from "framer-motion";
import { 
  SiGo, 
  SiNodedotjs, 
  SiDocker, 
  SiRedis, 
  SiMongodb, 
  SiTypescript,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiApachekafka,
  SiSqlite
} from "react-icons/si";

const experienceData = [
  {
    id: 1,
    company: "Bytescare",
    date: "May 2025 — Present",
    responsibilities: "Develop, test, and deploy production-ready anti-piracy solutions. Architect new backend microservices, manage cloud infrastructure, and enforce code quality through PR reviews.",
    projects: [
      {
        name: "Internal Ops Portal",
        info: "Engineered custom web crawlers tailored to specific operational requirements, automating data extraction pipelines to significantly increase internal team efficiency.",
        tech: [
          { name: "Node.js", icon: SiNodedotjs },
          { name: "Express", icon: SiExpress },
          { name: "TypeScript", icon: SiTypescript },
          { name: "Docker", icon: SiDocker },
        ]
      },
      {
        name: "Sales Tracking Service",
        info: "Architected an end-to-end customer tracking service, streamlining the sales lifecycle from initial onboarding through secure payment processing.",
        tech: [
          { name: "Node.js", icon: SiNodedotjs },
          { name: "NestJS", icon: SiNestjs },
          { name: "MongoDB", icon: SiMongodb },
          { name: "TypeScript", icon: SiTypescript },
          { name: "Docker", icon: SiDocker },
        ]
      },
      {
        name: "Secure Authentication System",
        info: "Implemented a robust OTP-based login system alongside traditional password authentication, enforcing strict security measures for user access.",
        tech: [
          { name: "Node.js", icon: SiNodedotjs },
          { name: "Express", icon: SiExpress },
          { name: "MongoDB", icon: SiMongodb },
          { name: "TypeScript", icon: SiTypescript },
          { name: "Docker", icon: SiDocker },
        ]
      }
    ]
  },
  {
    id: 2,
    company: "Credilio",
    date: "March 2023 — November 2024",
    responsibilities: "Developed and tested robust, production-ready backend solutions for high-volume fintech applications.",
    projects: [
      {
        name: "Waterfall Business Report Engine",
        info: "Built a complex data aggregation engine processing over 100,000 rows to generate real-time Year-to-Date reports across 30+ parameters and 20 banks, empowering data-driven business decisions.",
        tech: [
          { name: "Node.js", icon: SiNodedotjs },
          { name: "NestJS", icon: SiNestjs },
          { name: "PostgreSQL", icon: SiPostgresql },
          { name: "TypeScript", icon: SiTypescript },
          { name: "Docker", icon: SiDocker },
        ]
      },
      {
        name: "Credit Card Recommendation Engine",
        info: "Designed an algorithmic recommendation engine evaluating 50+ user parameters to maximize credit card approval rates based on specific bank criteria.",
        tech: [
          { name: "Node.js", icon: SiNodedotjs },
          { name: "NestJS", icon: SiNestjs },
          { name: "PostgreSQL", icon: SiPostgresql },
          { name: "TypeScript", icon: SiTypescript },
          { name: "Docker", icon: SiDocker },
        ]
      },
      {
        name: "Asynchronous Bank Data Processing",
        info: "Developed a high-throughput processing service using Kafka to ingest, parse, and store complex Excel files containing hundreds of thousands of rows into the core database.",
        tech: [
          { name: "Node.js", icon: SiNodedotjs },
          { name: "NestJS", icon: SiNestjs },
          { name: "Kafka", icon: SiApachekafka },
          { name: "PostgreSQL", icon: SiPostgresql },
          { name: "SQLite", icon: SiSqlite },
          { name: "TypeScript", icon: SiTypescript },
          { name: "Docker", icon: SiDocker },
        ]
      }
    ]
  }
];

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience__heading">
        <p className="experience__eyebrow">Career</p>
        <h2 className="experience__title">Experience</h2>
      </div>

      <div className="experience__grid">
        {experienceData.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="experience__card"
          >
            <div className="experience__header">
              <h3 className="experience__company">{job.company}</h3>
              <span className="experience__date">{job.date}</span>
            </div>
            
            <p className="experience__responsibilities">
              {job.responsibilities}
            </p>

            <div className="experience__projects">
              {job.projects.map((project, pIndex) => (
                <div key={pIndex} className="experience__project">
                  <h4 className="experience__project-name">{project.name}</h4>
                  <p className="experience__info">{project.info}</p>
                  
                  <div className="experience__tech">
                    {project.tech.map((tech, tIndex) => {
                      const Icon = tech.icon;
                      return (
                        <span key={tIndex} className="experience__tech-item">
                          <Icon className="experience__tech-icon" />
                          {tech.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}