import React from 'react';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import Section from './Section';

const CONTACTS = [
  { label: 'GitHub', href: 'https://github.com/Hxnzo', Icon: AiOutlineGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hanzalah-patel/', Icon: AiOutlineLinkedin },
  { label: 'Phone', href: 'tel:+16476759946', Icon: AiOutlinePhone },
];

const Contact = () => {
  return (
    <>
      <Section id="contact" eyebrow="What's next" title="Get In Touch" center>
        <div className="mx-auto max-w-xl">
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            I'm currently looking for new grad software engineering opportunities. Whether you have a role in
            mind, a question, or just want to say hi, my inbox is always open.
          </p>

          <div className="mt-8">
            <a href="mailto:hanzalah.patel@ontariotechu.net" className="btn-primary text-base">
              <AiOutlineMail size={20} />
              Say Hello
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            {CONTACTS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="text-muted transition-all duration-300 hover:-translate-y-1 hover:text-accent"
              >
                <Icon size={30} />
              </a>
            ))}
          </div>
        </div>
      </Section>

      <footer className="border-t border-edge py-6 text-center text-xs text-muted">
        Designed & built by Hanzalah Patel
      </footer>
    </>
  );
};

export default Contact;
