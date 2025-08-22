import { Sidebar } from '@/components/Sidebar';
import HeaderComponent from '@/components/Header';

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <div className="min-h-screen bg-zinc-950">
        <div className="mx-auto px-6 md:px-12 xl:px-0 w-full xl:w-[1160px] 2xl:w-[1320px] pt-16 pb-10 md:py-20 lg:py-0">
          <div className="lg:flex lg:gap-20">
            <Sidebar />
            <main className="lg:w-3/5 2xl:w-7/12 pt-12 xl:pt-[100px]">
              <section
                id="about"
                className="text-[17px] mb-12 scroll-mt-12 md:mb-16 lg:mb-24 lg:scroll-mt-16 space-y-5"
              >
                <p className="text-zinc-400 leading-relaxed">
                  My career began in the world of precision and creativity as a
                  2D/3D CAD technician and graphic artist—where design thinking,
                  attention to detail, and visual storytelling were my everyday
                  tools. A chance encounter with the Python programming language
                  opened the door to software engineering, sparking a passion
                  that has since evolved into a full-fledged front-end
                  development career.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  Today, I merge my design background with modern development
                  skills to craft intuitive, visually engaging, and
                  high-performing digital experiences. I have had the privilege
                  of contributing to impactful projects for both local and
                  international startups, learning from diverse teams and
                  pushing creative boundaries.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  Most proudly, I am a co-founder of m30—a SaaS platform
                  redefining affiliate marketing in Africa and setting sights on
                  the global stage.
                </p>
              </section>

              <section
                id="experience"
                className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              >
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-full bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Experience
                  </h2>
                </div>
                <div>
                  <ol className="group/list">
                    {/* Current Position */}
                    <li className="mb-12">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                          Jan 2024 — Present
                        </header>
                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-medium leading-snug text-slate-200">
                            <div>
                              <a
                                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                href="#"
                                target="_blank"
                                rel="noreferrer noopener"
                              >
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>
                                  UI/UX Lead/Front-End Engineer • Paylaterhub
                                  Ltd
                                </span>
                              </a>
                            </div>
                          </h3>
                          <p className="mt-2 text-sm leading-normal text-slate-400">
                            Leading UI/UX design and front-end development for
                            Paylaterhub, a platform that provides payroll
                            lending to employees with verifiable income in
                            Nigeria. Responsible for creating user-centered
                            designs and implementing responsive web interfaces.
                          </p>
                          <ul className="mt-2 flex flex-wrap">
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-orange-200/10 px-3 py-1 text-[13px] font-medium leading-5 text-orange-500">
                                UI/UX Design
                              </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-orange-200/10 px-3 py-1 text-[13px] font-medium leading-5 text-orange-500">
                                Front-End Development
                              </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-orange-200/10 px-3 py-1 text-[13px] font-medium leading-5 text-orange-500">
                                React
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>

                    {/* m30 Technologies */}
                    <li className="mb-12">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                          Jun 2023 — Jan 2025
                        </header>
                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-medium leading-snug text-slate-200">
                            <div>
                              <a
                                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                href="#"
                                target="_blank"
                                rel="noreferrer noopener"
                              >
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>
                                  UI/UX Lead/Front-End Engineer • m30
                                  Technologies Ltd
                                </span>
                              </a>
                            </div>
                          </h3>
                          <p className="mt-2 text-sm leading-normal text-slate-400">
                            Co-founded and led design and development efforts at
                            m30, a SaaS platform managing digital marketing for
                            businesses across Africa and the world. Drove
                            innovation in referral tracking and affiliate
                            marketing automation.
                          </p>
                          <ul className="mt-2 flex flex-wrap">
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-orange-200/10 px-3 py-1 text-[13px] font-medium leading-5 text-orange-500">
                                Co-founder
                              </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-orange-200/10 px-3 py-1 text-[13px] font-medium leading-5 text-orange-500">
                                UI/UX Lead
                              </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-orange-200/10 px-3 py-1 text-[13px] font-medium leading-5 text-orange-500">
                                Front-End Development
                              </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-orange-200/10 px-3 py-1 text-[13px] font-medium leading-5 text-orange-500">
                                SaaS Platform
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>

                    {/* aborise Gmbh */}
                    <li className="mb-12">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                          Oct 2022 — May 2023
                        </header>
                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-medium leading-snug text-slate-200">
                            <div>
                              <a
                                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                href="#"
                                target="_blank"
                                rel="noreferrer noopener"
                              >
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>Front-End Developer • aborise Gmbh</span>
                              </a>
                            </div>
                          </h3>
                          <p className="mt-2 text-sm leading-normal text-slate-400">
                            Developed front-end solutions for aborise, a German
                            start-up dedicated to effectively managing consumer
                            subscriptions in Europe. Focused on creating
                            intuitive user interfaces for subscription
                            management platforms.
                          </p>
                          <ul className="mt-2 flex flex-wrap">
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-orange-200/10 px-3 py-1 text-[13px] font-medium leading-5 text-orange-500">
                                Front-End Development
                              </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-orange-200/10 px-3 py-1 text-[13px] font-medium leading-5 text-orange-500">
                                JavaScript
                              </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-orange-200/10 px-3 py-1 text-[13px] font-medium leading-5 text-orange-500">
                                React
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>

                    {/* Algora Solutions */}
                    <li className="mb-12">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                          Feb 2020 — Present
                        </header>
                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-medium leading-snug text-slate-200">
                            <div>
                              <a
                                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                href="#"
                                target="_blank"
                                rel="noreferrer noopener"
                              >
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>
                                  Front-End Developer • Algora Solutions Ltd
                                </span>
                              </a>
                            </div>
                          </h3>
                          <p className="mt-2 text-sm leading-normal text-slate-400">
                            Providing enterprise, web, and mobile IT solutions
                            as well as consultancy services to clients in
                            Nigeria. Leading UI/UX design and front-end
                            development for various client projects and internal
                            solutions.
                          </p>
                          <ul className="mt-2 flex flex-wrap">
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-orange-200/10 px-3 py-1 text-[13px] font-medium leading-5 text-orange-500">
                                UI/UX Lead
                              </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-orange-200/10 px-3 py-1 text-[13px] font-medium leading-5 text-orange-500">
                                Front-End Development
                              </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-orange-200/10 px-3 py-1 text-[13px] font-medium leading-5 text-orange-500">
                                Consultancy
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>

                    {/* Eureka Academy */}
                    <li className="mb-12">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                          Apr 2021 — May 2022
                        </header>
                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-medium leading-snug text-slate-200">
                            <div>
                              <a
                                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                href="#"
                                target="_blank"
                                rel="noreferrer noopener"
                              >
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>
                                  Web Developer (Intern) • Eureka Academy
                                </span>
                              </a>
                            </div>
                          </h3>
                          <p className="mt-2 text-sm leading-normal text-slate-400">
                            Contributed to web development projects at Eureka
                            Academy, a Swedish education non-profit that aims to
                            provide free online learning resources. Gained
                            valuable experience in educational technology and
                            web development.
                          </p>
                          <ul className="mt-2 flex flex-wrap">
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-orange-200/10 px-3 py-1 text-[13px] font-medium leading-5 text-orange-500">
                                Web Development
                              </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-orange-200/10 px-3 py-1 text-[13px] font-medium leading-5 text-orange-500">
                                EdTech
                              </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-orange-200/10 px-3 py-1 text-[13px] font-medium leading-5 text-orange-500">
                                JavaScript
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
