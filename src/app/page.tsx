import type { Metadata } from "next";
import ExperienceInformation from "@/components/ExperienceInformation";
import ProjectInformation from "@/components/ProjectInformation";

export const metadata: Metadata = {
  title: "Richard Obaitan",
  description: "Front End Engineer | Designer",
};

export default function HomePage() {
  return (
    <div className="">
      <section id="about" className="text-[17px] md:text-lg space-y-5 pt-28">
        <p className="text-zinc-400 leading-relaxed">
          My career began in the world of precision and creativity as a 2D/3D
          CAD technician and graphic artist—where design thinking, attention to
          detail, and visual storytelling were my everyday tools. A chance
          encounter with the Python programming language opened the door to
          software engineering, sparking a passion that has since evolved into a
          full-fledged front-end development career.
        </p>
        <p className="text-zinc-400 leading-relaxed">
          Today, I merge my design background with modern development skills to
          craft intuitive, visually engaging, and high-performing digital
          experiences. I have had the privilege of contributing to impactful
          projects for both local and international startups, learning from
          diverse teams and pushing creative boundaries.
        </p>
        <p className="text-zinc-400 leading-relaxed">
          Most proudly, I am a co-founder of m30—a SaaS platform redefining
          affiliate marketing in Africa and setting sights on the global stage.
        </p>
      </section>

      <section id="experience" className="pt-28">
        <div className="mb-6 bg-slate-900/75 px-4 py-5 backdrop-blur">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
            Experience
          </h2>
        </div>
        <ExperienceInformation />
      </section>

      <section id="projects" className="pt-28">
        <div className="mb-6 bg-slate-900/75 px-4 py-5 backdrop-blur">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
            Projects
          </h2>
        </div>
        <ProjectInformation />
      </section>
    </div>
  );
}
