import React from 'react';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';
import { HiArrowDown } from 'react-icons/hi';
import { Link } from 'react-scroll';
import mePic from '../Pictures/Me2.jpg';

const SOCIALS = [
  { label: 'Email', href: 'mailto:hanzalah.patel@ontariotechu.net', Icon: AiOutlineMail },
  { label: 'GitHub', href: 'https://github.com/Hxnzo', Icon: AiOutlineGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hanzalah-patel/', Icon: AiOutlineLinkedin },
];

const Home = () => {
  return (
    <section id="home" name="home" className="relative overflow-hidden">
      {/* soft accent glow behind the hero */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]" />

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col-reverse items-center justify-center gap-12 px-6 pt-24 pb-16 sm:px-8 md:flex-row md:justify-between md:gap-8">
        <div className="max-w-xl text-center md:text-left">
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent animate-fade-in motion-reduce:animate-none">
            Hi, my name is
          </p>
          <h1
            className="font-display text-4xl font-bold text-white animate-fade-in motion-reduce:animate-none sm:text-6xl"
            style={{ animationDelay: '100ms' }}
          >
            Hanzalah Patel
          </h1>
          <h2
            className="mt-2 font-display text-2xl font-semibold text-muted animate-fade-in motion-reduce:animate-none sm:text-4xl"
            style={{ animationDelay: '200ms' }}
          >
            Software Engineer
          </h2>
          <p
            className="mt-5 text-base leading-relaxed text-muted animate-fade-in motion-reduce:animate-none sm:text-lg"
            style={{ animationDelay: '300ms' }}
          >
            Software Engineering graduate who builds full-stack web apps and data-driven tools.
            Passionate about AI, clean interfaces, and solving real problems with code.
          </p>

          <div
            className="mt-8 flex flex-wrap items-center justify-center gap-4 animate-fade-in motion-reduce:animate-none md:justify-start"
            style={{ animationDelay: '400ms' }}
          >
            <Link to="projects" smooth offset={-64} duration={500} className="btn-primary cursor-pointer">
              View Projects
            </Link>
            <Link to="contact" smooth offset={-64} duration={500} className="btn-ghost cursor-pointer">
              Get in Touch
            </Link>
          </div>

          <div
            className="mt-8 flex items-center justify-center gap-5 animate-fade-in motion-reduce:animate-none md:justify-start"
            style={{ animationDelay: '500ms' }}
          >
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="text-muted transition-all duration-300 hover:-translate-y-1 hover:text-accent"
              >
                <Icon size={28} />
              </a>
            ))}
          </div>
        </div>

        <div className="relative shrink-0 animate-fade-in motion-reduce:animate-none" style={{ animationDelay: '200ms' }}>
          <div className="absolute inset-0 rounded-full bg-accent/20 blur-2xl" />
          <img
            src={mePic}
            alt="Hanzalah Patel"
            className="relative h-52 w-52 rounded-full border-2 border-accent/60 object-cover shadow-glow sm:h-64 sm:w-64 md:h-72 md:w-72"
          />
        </div>
      </div>

      <Link
        to="about"
        smooth
        offset={-64}
        duration={500}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 cursor-pointer text-muted transition-colors hover:text-accent md:block"
        aria-label="Scroll to About"
      >
        <HiArrowDown size={24} className="animate-bounce" />
      </Link>
    </section>
  );
};

export default Home;
