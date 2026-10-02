import React from 'react';
import Section from './Section';

const HIGHLIGHTS = [
  { value: '3', label: 'Internships & Co-ops' },
  { value: '20+', label: 'Technologies Used' },
  { value: 'B.Eng', label: 'Software Engineering' },
];

const About = () => {
  return (
    <Section id="about" eyebrow="Get to know me" title="About Me">
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-3">
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            I'm a <span className="font-semibold text-white">Software Engineering graduate</span> from{' '}
            <span className="font-semibold text-white">Ontario Tech University</span>, programming since high
            school with a passion for <span className="font-semibold text-accent">Artificial Intelligence</span>{' '}
            and <span className="font-semibold text-accent">Web Development</span>.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Through my co-ops and internships at <span className="font-semibold text-white">Canadian Nuclear
            Laboratories</span>, <span className="font-semibold text-white">Ontario Power Generation</span>, and{' '}
            <span className="font-semibold text-white">Ontario Tech University</span>, I've built everything from
            machine learning models to full-stack web apps and data dashboards.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            I'm currently seeking a new grad role in{' '}
            <span className="font-semibold text-accent">full-stack, web, mobile, or data-focused development</span>,
            anywhere I can keep learning fast and shipping useful software.
          </p>
        </div>

        <div className="grid content-start gap-4 md:col-span-2">
          {HIGHLIGHTS.map(({ value, label }) => (
            <div
              key={label}
              className="flex items-center gap-4 rounded-xl border border-edge bg-surface p-5 transition-colors duration-300 hover:border-accent/50"
            >
              <span className="font-display text-3xl font-bold text-accent">{value}</span>
              <span className="text-sm font-medium text-muted">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
