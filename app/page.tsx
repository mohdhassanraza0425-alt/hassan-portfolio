import {
  SiPython,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiScikitlearn,
  SiGit,
} from "react-icons/si";
import { FaChartBar, FaChartLine } from "react-icons/fa";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="text-xl font-bold">
          Hassan Raza<span className="text-blue-500">.</span>
        </div>

        <div className="hidden gap-8 text-sm text-zinc-300 md:flex">
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#skills" className="hover:text-white">
            Skills
          </a>
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative mx-auto flex min-h-[80vh] max-w-6xl items-center overflow-hidden px-6 py-20">
        <div className="flex w-full flex-col-reverse items-center justify-between gap-12 md:flex-row">
          
          {/* Hero Text */}
          <div className="max-w-3xl animate-[fadeInUp_0.8s_ease-out]">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
              Data Scientist & AI
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Hi, I'm
              <br />
              Mohammed Hassan Raza.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
              Final-year B.Tech student building practical skills in Python,
              SQL, data analysis, machine learning, and AI.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-full border border-zinc-700 px-6 py-3 font-medium text-white transition hover:bg-zinc-900"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative h-64 w-64 overflow-hidden rounded-full border border-zinc-700 bg-zinc-900 md:h-80 md:w-80">
              <Image
                src="/images/ChatGPT%20Image%20Sep%2017%2C%202026%2C%2010_31_27%20AM.png"
                alt="Mohammed Hassan Raza"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-zinc-800 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            About Me
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Learning, building, and improving.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            I'm currently completing my B.Tech and developing practical
            skills in Python, data analysis, SQL, machine learning, and
            AI. My focus is on learning by building real projects and
            gradually turning my knowledge into useful applications.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="border-t border-zinc-800 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            Skills
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Technologies
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {[
              { name: "Python", icon: SiPython },
              { name: "SQL", icon: SiPostgresql },
              { name: "NumPy", icon: SiNumpy },
              { name: "Pandas", icon: SiPandas },
              { name: "Data Analysis", icon: FaChartLine },
              { name: "Machine Learning", icon: SiScikitlearn },
              { name: "Power BI", icon: FaChartBar },
              { name: "Git & GitHub", icon: SiGit },
            ].map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="flex flex-col items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 text-center text-zinc-200"
              >
                <Icon className="text-3xl text-blue-400" aria-hidden="true" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="border-t border-zinc-800 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            Projects
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            What I'm building
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <p className="text-sm text-blue-400">Currently Building</p>
              <h3 className="mt-3 text-xl font-semibold">
                RAG Application
              </h3>
              <p className="mt-3 leading-7 text-zinc-400">
                An AI application using Retrieval-Augmented Generation to
                work with user-provided information.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <p className="text-sm text-blue-400">In Development</p>
              <h3 className="mt-3 text-xl font-semibold">
                Institute Management System
              </h3>
              <p className="mt-3 leading-7 text-zinc-400">
                A software system designed to manage students, attendance,
                fees, exams, homework, and performance.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <p className="text-sm text-blue-400">Planned</p>
              <h3 className="mt-3 text-xl font-semibold">
                Machine Learning Application
              </h3>
              <p className="mt-3 leading-7 text-zinc-400">
                A practical machine learning application that will be added
                after the model development phase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-zinc-800 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            Contact
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Let's connect.
          </h2>

          <p className="mt-5 text-lg text-zinc-400">
            I’m open to connecting with professionals, exploring
            opportunities, and collaborating on meaningful data and
            technology projects.
          </p>

          <div className="mt-8">
            <a
              href="mailto:mohdhassanraza0425@gmail.com"
              className="text-lg font-medium text-white underline underline-offset-8"
            >
              Email Me
            </a>
          </div>

          <div className="mt-4">
            <a
              href="tel:+917330930425"
              className="text-lg font-medium text-white underline underline-offset-8"
            >
              +91 73309 30425
            </a>
         </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-6 py-8 text-center text-sm text-zinc-500">
        © 2026 Mohammed Hassan Raza. Built with Next.js.
      </footer>
    </main>
  );
}

