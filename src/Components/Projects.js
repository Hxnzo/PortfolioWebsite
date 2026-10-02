import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import Section from './Section';
import Reveal from './Reveal';
import h2z2 from '../Pictures/H2Z2.jpg';
import cbir from '../Pictures/CBIR.jpg';

const PROJECTS = [
  {
    title: 'Online Grocery Store',
    image: h2z2,
    description:
      'Full-stack grocery store with user accounts, product browsing, a dynamic cart, and a streamlined checkout with form validation and error handling to reduce cart abandonment.',
    tech: ['React', 'Redux', 'Express.js', 'MySQL', 'React Router', 'CSS3'],
    github: 'https://github.com/Hxnzo/Online_Grocery_Store',
  },
  {
    title: 'Content-Based Image Retrieval',
    image: cbir,
    description:
      'Python program that converts black-and-white images into barcodes using angled projections, then finds the most similar image via Hamming distance, with optimized preprocessing for faster, more accurate retrieval.',
    tech: ['Python', 'Pillow', 'Image Processing'],
    github: 'https://github.com/Hxnzo/Content-Based-Image-Retrieval',
  },
];

const Projects = () => {
  return (
    <Section id="projects" eyebrow="What I've built" title="Projects">
      <div className="grid gap-8 md:grid-cols-2">
        {PROJECTS.map(({ title, image, description, tech, github }, index) => (
          <Reveal key={title} delay={index * 120}>
          <article
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-edge bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-glow"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${title} on GitHub`}
                  className="shrink-0 text-muted transition-colors duration-300 hover:text-accent"
                >
                  <AiOutlineGithub size={26} />
                </a>
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-base">{description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {tech.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a href="https://github.com/Hxnzo" target="_blank" rel="noreferrer" className="btn-ghost">
          <AiOutlineGithub size={20} />
          See more on GitHub
        </a>
      </div>
    </Section>
  );
};

export default Projects;
