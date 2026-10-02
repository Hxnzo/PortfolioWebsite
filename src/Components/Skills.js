import React from 'react';
import Section from './Section';
import Reveal from './Reveal';

import pythonPic from '../Pictures/Python.png';
import javaPic from '../Pictures/Java.png';
import javascriptPic from '../Pictures/Javascript.png';
import cSharpPic from '../Pictures/CSharp.png';
import cPlusPlusPic from '../Pictures/C++.png';
import cPic from '../Pictures/C.png';
import kotlinPic from '../Pictures/Kotlin.png';
import htmlPic from '../Pictures/HTML.png';
import reactPic from '../Pictures/React.png';
import tailwindPic from '../Pictures/Tailwind.png';
import expressPic from '../Pictures/Express.png';
import djangoPic from '../Pictures/Django.png';
import aspDotNetPic from '../Pictures/ASP.png';
import mysqlPic from '../Pictures/MySQL.png';
import dockerPic from '../Pictures/Docker.png';
import kubernetesPic from '../Pictures/Kubernetes.png';
import azurePic from '../Pictures/Azure.png';
import gitPic from '../Pictures/Git.png';

const SKILL_GROUPS = [
  {
    heading: 'Languages',
    skills: [
      { name: 'Python', icon: pythonPic },
      { name: 'Java', icon: javaPic },
      { name: 'JavaScript', icon: javascriptPic },
      { name: 'C#', icon: cSharpPic },
      { name: 'C++', icon: cPlusPlusPic },
      { name: 'C', icon: cPic },
      { name: 'Kotlin', icon: kotlinPic },
    ],
  },
  {
    heading: 'Frontend & Backend',
    skills: [
      { name: 'HTML5', icon: htmlPic },
      { name: 'React', icon: reactPic },
      { name: 'Tailwind', icon: tailwindPic },
      { name: 'Express.js', icon: expressPic },
      { name: 'Django', icon: djangoPic },
      { name: 'ASP.NET', icon: aspDotNetPic },
      { name: 'MySQL', icon: mysqlPic },
    ],
  },
  {
    heading: 'Tools & Cloud',
    skills: [
      { name: 'Docker', icon: dockerPic },
      { name: 'Kubernetes', icon: kubernetesPic },
      { name: 'Azure', icon: azurePic },
      { name: 'Git', icon: gitPic },
    ],
  },
];

const Skills = () => {
  return (
    <Section id="skills" eyebrow="What I work with" title="Skills">
      <div className="space-y-10">
        {SKILL_GROUPS.map(({ heading, skills }) => (
          <div key={heading}>
            <h3 className="mb-4 font-display text-lg font-semibold text-muted">{heading}</h3>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-7">
              {skills.map(({ name, icon }, index) => (
                <Reveal key={name} delay={index * 60}>
                  <div className="group flex h-full flex-col items-center gap-3 rounded-xl border border-edge bg-surface p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-glow">
                    <span className="flex h-12 w-12 items-center justify-center">
                      <img src={icon} alt={name} className="max-h-full max-w-full object-contain" />
                    </span>
                    <span className="text-center text-xs font-medium text-muted transition-colors group-hover:text-white sm:text-sm">
                      {name}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
