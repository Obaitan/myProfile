import Link from "next/link";
import { jobs } from "./Jobs";

export const ExperienceInformation = () => {
  return (
    <div className="grid gap-12">
      {jobs.map((job, index) => (
        <Link
          href={job.url}
          target="_blank"
          rel="noreferrer noopener"
          key={index}
          className="block hover:opacity-75 transition-opacity"
        >
          <div className="flex flex-wrap justify-between gap-x-6 gap-y-2.5 text-[13px] uppercase tracking-wide text-slate-500 hover:opacity-60 transition-opacity">
            <span className="text-amber-400">{job.company}</span>
            <span>{job.period}</span>
          </div>
          <div className="mt-1.5 grid gap-0.5 text-[15px]">
            <div className="flex flex-wrap items-center gap-2 font-medium leading-snug text-slate-300">
              <span>{job.position}</span>
              <span className="w-2.5 h-1 bg-slate-200"></span>
              <span>{job.location}</span>
            </div>

            <p className="text-slate-400">{job.description}</p>
            <ul className="flex flex-wrap">
              {job.technologies.map((tech, idx) => (
                <li key={idx} className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-slate-600/20 px-3 py-1 text-xs leading-5 text-slate-300">
                    {tech}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ExperienceInformation;
