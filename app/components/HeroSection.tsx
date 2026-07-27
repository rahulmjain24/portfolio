"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__grid">
        <div className="hero__content">
          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Fullstack developer. Backend at heart.{" "}
            <span className="hero__title-accent">
              Ships products from idea to deployment.
            </span>
          </motion.h1>

          <motion.p
            className="hero__text"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.95,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Fullstack developer with a strong backend focus. I build robust APIs
            and the interfaces they power.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.95,
              delay: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <a href="#projects" className="hero__cta hero__cta--primary">
              See my work
            </a>

            <a href="#about" className="hero__cta hero__cta--ghost">
              About me
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero__portrait-wrap"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.3,
            delay: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className="hero__portrait-ring"
            initial={{
              scale: 0.8,
              rotate: -8,
            }}
            animate={{
              scale: 1,
              rotate: 0,
            }}
            whileHover={{
              scale: 1.04,
              rotate: 2,
              transition: {
                type: "spring",
                stiffness: 220,
                damping: 15,
              },
            }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 16,
              delay: 0.5,
            }}
          >
            <Image
              src="/Rahul_Jain.jpg"
              alt="Portrait of Rahul Jain"
              width={440}
              height={440}
              priority
              className="hero__portrait"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
