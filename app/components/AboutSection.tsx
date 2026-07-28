export default function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="about__grid">
        <div>
          <h2 className="about__title">About me</h2>

          <p className="about__text">
            I'm Rahul, a fullstack developer with a strong passion for backend 
            architecture and scalable infrastructure. I come from a solid Computer Science background, 
            which gives me a deep understanding of how to build robust systems that solve complex problems.
          </p>

          <p className="about__text about__text--spaced">
            Over the past couple of years, I've focused primarily on backend development and 
            system architecture using Golang, Node.js, and Python. I bridge the gap to the 
            frontend with TypeScript, while managing resilient deployments with Docker, Redis, and Postgres.
          </p>
        </div>

        <div className="about__facts">
          {[
            { label: "Based in", value: "India" },
            { label: "Focus", value: "Backend · Fullstack" },
            {
              label: "Main Stack",
              value: "React · Node.js · Express.js · PostgreSQL · NestJS · Docker",
            },
            { label: "Background", value: "Software Development" },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="about__fact-label">{label}</p>
              <p className="about__fact-value">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
