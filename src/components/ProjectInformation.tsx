import Link from "next/link";
import { projects } from "./Projects";
import Image from "next/image";

const ProjectInformation = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-7 gap-y-12">
      {projects.map((project, index) => (
        <Link
          href={project.url}
          target="_blank"
          rel="noreferrer noopener"
          key={index}
          className="block hover:opacity-75 transition-opacity"
        >
          <div className="text-[13px]">
            <div className="mb-2">
              <Image
                src={project.image}
                alt={project.projectName}
                height={788}
                width={1500}
                className="w-full rounded"
              />
            </div>
            <div className="flex flex-wrap gap-x-2 gap-y-2.5 capitalize tracking-wide text-slate-500 hover:opacity-60 transition-opacity">
              <span className="text-amber-400">{project.projectName}</span>
              <span className="text-slate-300">{`(${project.type} Project - ${project.date})`}</span>
            </div>
            <p className="text-slate-300">{project.description}</p>
            <ul className="flex flex-wrap">
              {project.technologies.map((tech, idx) => (
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
export default ProjectInformation;
