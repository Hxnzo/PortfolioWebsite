import React, { useState } from 'react';
import Section from './Section';
import Reveal from './Reveal';
import cnl from '../Pictures/CNL.png';
import opg from '../Pictures/OPG.png';
import otu from '../Pictures/OTU.png';

// Ordered chronologically so the roadmap reads left-to-right as a journey.
const EXPERIENCES = [
  {
    key: 'otu',
    logo: otu,
    company: 'Ontario Tech University',
    short: 'OTU',
    title: 'Undergraduate Research Assistant',
    duration: '4-Month Co-op',
    dates: 'May 2022 - Sep 2022',
    tech: ['Python', 'Django', 'Full-Stack'],
    details: [
      'Developed a full-stack application using Python and Django to facilitate seamless learning of mathematical concepts for students and professors, featuring math questions, solution videos, transcripts, and quizzes.',
      'Boosted math learning efficiency by 50% through the application enabling students to take notes, complete quizzes, and securely store all student data for faculty review, resulting in enhanced academic outcomes.',
    ],
  },
  {
    key: 'opg',
    logo: opg,
    company: 'Ontario Power Generation',
    short: 'OPG',
    title: 'Software Engineering Intern',
    duration: '12-Month Internship',
    dates: 'May 2023 - May 2024',
    tech: ['Python', 'SQL', 'Power BI', 'Express.js', 'Electron', 'VBA'],
    details: [
      'Developed a Python script to automate the extraction, transformation, and transfer of data between SQL databases, visualizing the processed data in a Power BI dashboard for system responsible engineers.',
      'Built a software solution for managing outsourced work assignments, utilizing SQL and Express.JS for backend operations, and creating a responsive, intuitive front-end interface with Electron JS.',
      'Designed a Power BI dashboard for project management, integrating real-time SQL data to provide stakeholders with instant access to work order details, expenses, work plans, scopes, and associated projects.',
      'Created an Excel macro using VBA to extract data from SQL Server and present it in a user-friendly format, tailored to the needs of system responsible engineers.',
    ],
  },
  {
    key: 'cnl',
    logo: cnl,
    company: 'Canadian Nuclear Laboratories',
    short: 'CNL',
    title: 'Computer Science Student',
    duration: '4-Month Co-op',
    dates: 'May 2024 - Aug 2024',
    tech: ['Python', 'SQL Server', 'ASP.NET', 'Machine Learning'],
    details: [
      'Collaborated on the development of an internal machine learning model using Python and SQL to predict work package statuses, partnering with a Senior Data Engineer to create a test model that forecasted timelines.',
      'Designed and implemented logic checks in ASP.NET and SQL Server to enforce correct task sequencing for work packages, enhancing project scheduling accuracy and improving task dependency reliability for managers.',
      'Created a dynamic webpage for the S&T department using ASP.NET and SQL Server, enabling managers to efficiently track employee assignments and total hours worked by extracting and displaying work package data.',
    ],
  },
];

const Experience = () => {
  const [selectedKey, setSelectedKey] = useState('cnl');
  const selectedIndex = EXPERIENCES.findIndex((exp) => exp.key === selectedKey);
  const selected = EXPERIENCES[selectedIndex];
  const progress = (selectedIndex / (EXPERIENCES.length - 1)) * 100;
  // The track spans from the center of the first column to the center of the
  // last, whatever the number of stops.
  const trackInset = `${100 / (EXPERIENCES.length * 2)}%`;

  return (
    <Section id="experience" eyebrow="Where I've worked" title="Experience">
      {/* Roadmap: dashed track between the first and last stop, with an accent
          fill that follows the selected stop. */}
      <div className="relative mb-10">
        <div className="absolute top-6 sm:top-7" style={{ left: trackInset, right: trackInset }}>
          <div className="border-t-2 border-dashed border-edge" />
          <div
            className="absolute left-0 top-0 h-0.5 -translate-y-px bg-accent shadow-glow transition-all duration-700 ease-out motion-reduce:transition-none"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div
          className="relative grid"
          style={{ gridTemplateColumns: `repeat(${EXPERIENCES.length}, minmax(0, 1fr))` }}
        >
          {EXPERIENCES.map((exp, index) => {
            const active = exp.key === selectedKey;
            return (
              <Reveal key={exp.key} delay={index * 130}>
                <button
                  type="button"
                  onClick={() => setSelectedKey(exp.key)}
                  className="group flex w-full flex-col items-center gap-1.5 px-1 focus:outline-none sm:gap-2"
                >
                  <span
                    className={`relative flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-1.5 transition-all duration-300 group-focus-visible:ring-2 group-focus-visible:ring-accent group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-ink sm:h-14 sm:w-14 sm:p-2 ${
                      active
                        ? 'scale-110 border-accent shadow-glow'
                        : 'border-edge group-hover:scale-105 group-hover:border-accent/50'
                    }`}
                  >
                    {active && (
                      <span className="absolute -inset-1 rounded-full border-2 border-accent/40 animate-ping-slow motion-reduce:animate-none" />
                    )}
                    <img src={exp.logo} alt={exp.company} className="max-h-full max-w-full object-contain" />
                  </span>
                  <span
                    className={`text-center text-sm font-medium leading-tight transition-colors duration-300 ${
                      active ? 'text-accent' : 'text-body group-hover:text-accent/80'
                    }`}
                  >
                    <span className="md:hidden">{exp.short}</span>
                    <span className="hidden md:block">{exp.company}</span>
                  </span>
                  <span className="text-center text-[11px] leading-tight text-muted sm:text-xs">{exp.dates}</span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Selected experience */}
      <div className="rounded-2xl border border-edge bg-surface p-6 shadow-card sm:p-8">
        {/* Keyed by selection so the content re-animates on every switch */}
        <div key={selected.key} className="animate-fade-in motion-reduce:animate-none">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">{selected.title}</h3>
              <p className="mt-1 font-medium text-accent">{selected.company}</p>
            </div>
            <span className="tag !text-accent">{selected.duration}</span>
          </div>

          <ul className="mt-6 space-y-4">
            {selected.details.map((detail, index) => (
              <li
                key={index}
                className="flex gap-3 text-sm leading-relaxed text-muted animate-fade-in motion-reduce:animate-none sm:text-base"
                style={{ animationDelay: `${100 + index * 90}ms` }}
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {detail}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {selected.tech.map((item, index) => (
              <span
                key={item}
                className="tag animate-fade-in motion-reduce:animate-none"
                style={{ animationDelay: `${150 + index * 60}ms` }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
