'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavLinkProps {
  label: string;
  href: string;
  isActive: boolean;
}

const NavLink = ({
  label,
  href,
  isActive,
  onClick,
}: NavLinkProps & { onClick: () => void }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.substring(2); // remove '/#'
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    onClick(); // Close mobile menu on click
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`group flex z-20 items-center gap-2 px-1 h-10 text-sm hover:bg-secondary-50 hover:text-secondary-200 rounded ${
        isActive ? 'font-medium text-secondary-200' : 'font-light text-gray-400'
      }`}
    >
      <span
        className={`nav-indicator h-px bg-zinc-600 transition-all group-hover:w-12 group-hover:bg-amber-400 motion-reduce:transition-none ${
          isActive ? 'w-12 !bg-amber-400' : 'w-6'
        }`}
      ></span>
      <span
        className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-zinc-100 ${
          isActive ? 'text-zinc-100' : 'text-zinc-500'
        }`}
      >
        {label}
      </span>
    </Link>
  );
};

const navigationLinks = [
  {
    href: '/#about',
    label: 'About',
  },
  {
    href: '/#experience',
    label: 'Experience',
  },
  {
    href: '/#projects',
    label: 'Projects',
  },
];

export const Sidebar = ({ onLinkClick }: { onLinkClick?: () => void }) => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    navigationLinks.forEach((link) => {
      const sectionId = link.href.substring(2); // remove '/#'
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#101214] w-full h-full flex flex-col p-8 md:px-10 md:py-12 shadow-sm overflow-y-auto">
      <h1 className="text-2xl font-bold tracking-tight text-zinc-100">
        <Link href="/" className="hover:text-amber-300 transition-colors">
          Richard Obaitan
        </Link>
      </h1>
      <h3 className="mt-1 text-base tracking-tight text-zinc-400 flex gap-2">
        <span>Front End Engineer</span> | <span>Designer</span>
      </h3>
      <hr className="mt-6 mb-10 border-gray-700" />

      <div className="flex flex-col flex-grow justify-between">
        <div className="grid grid-cols-1 gap-1">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              isActive={activeSection === link.href.substring(2)}
              onClick={onLinkClick || (() => {})}
            />
          ))}

          <a
            href="/docs/richard-obaitan_resume.pdf"
            download="Richard-Obaitan-Resume.pdf"
            className="bg-blue-950 px-4 py-2 rounded w-fit mt-3 text-gray-100 text-[13px] font-medium"
          >
            Download Resume
          </a>
        </div>

        <ul
          className="ml-1 flex items-center gap-5 mb-8"
          aria-label="Social media"
        >
          <li className="text-xs shrink-0">
            <Link
              className="block hover:text-slate-200"
              href="mailto:elero.obaitan@gmail.com"
              aria-label="Email"
              title="Email"
            >
              <span className="sr-only">Email</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </Link>
          </li>
          <li className="text-xs shrink-0">
            <Link
              className="block hover:text-slate-200"
              href="https://www.linkedin.com/in/richard-obaitan/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn (opens in a new tab)"
              title="LinkedIn"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </Link>
          </li>
          <li className="text-xs shrink-0">
            <Link
              className="block hover:text-slate-200"
              href="https://github.com/Obaitan"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub (opens in a new tab)"
              title="GitHub"
            >
              <span className="sr-only">GitHub</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
