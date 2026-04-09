import React from "react";
import { ExternalLink, FolderGit2, Mail, ArrowRight } from "lucide-react";
import minhaFoto from "./assets/minha-foto.png";
const projects = [
  {
    index: "01",
    title: "Portal NovaLink",
    summary:
      "SaaS Full-Stack desenvolvido para provedores de internet (ISPs) e Call Centers. Centraliza alertas de rede (NOC) em tempo real, base de conhecimento, escalas de atendimento e diário de bordo gerencial, otimizando o SLA e reduzindo o tempo médio de atendimento (TMA).",
    stack: ["React", "Vite", "Node.js", "Express", "SQLite", "Tailwind"],
    year: "2026",
    tag: "SaaS / ISP Ops",
    link: "https://portal-novalink.vercel.app/",
    featured: true,
  },
  {
    index: "02",
    title: "Painel de Métricas",
    summary:
      "Dashboard de atendimentos, cancelamentos e avaliações com foco em leitura clara dos dados e apoio à tomada de decisão.",
    stack: ["Python", "Pandas", "Analytics"],
    year: "2026",
    tag: "Data",
    link: "#",
  },
  {
    index: "03",
    title: "Central de Chamados",
    summary:
      "Projeto voltado para análise de chamados e identificação de padrões operacionais, horários críticos e gargalos de atendimento.",
    stack: ["SQL", "Python", "ETL"],
    year: "2026",
    tag: "Suporte",
    link: "#",
  },
  {
    index: "04",
    title: "Sistema de Agendamento",
    summary:
      "Aplicação com autenticação por níveis, gestão de horários, notificações e fluxo pensado para uso real em serviços e atendimento.",
    stack: ["React", "Django", "PostgreSQL"],
    year: "2026",
    tag: "Web App",
    link: "#",
  },
];

const technologies = [
  "Python",
  "Django",
  "JavaScript",
  "React",
  "Node.js",
  "PostgreSQL",
  "SQL",
  "Pandas",
  "REST API",
  "Git",
];

const specialties = [
  "Desenvolvimento de sistemas web completos",
  "Criação de interfaces responsivas",
  "Integração entre frontend e backend",
  "Modelagem e análise de dados",
  "Organização visual com foco em usabilidade",
];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-10">
      <div className="mb-3 inline-flex items-center rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-lime-400">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function InfoTag({ children }) {
  return (
    <span className="rounded-full border border-zinc-800 bg-zinc-950/80 px-3 py-2 text-xs font-medium text-zinc-300">
      {children}
    </span>
  );
}

function ButtonLink({ href = "#", children, blank = false, variant = "primary" }) {
  const styles =
    variant === "primary"
      ? "border-lime-400/40 bg-lime-400/10 text-lime-400 hover:bg-lime-400 hover:text-black"
      : "border-zinc-800 bg-zinc-950 text-zinc-200 hover:border-lime-400 hover:text-lime-400";

  return (
    <a
      href={href}
      target={blank ? "_blank" : undefined}
      rel={blank ? "noreferrer" : undefined}
      className={`inline-flex items-center gap-2 rounded-md border px-4 py-2.5 text-sm font-medium transition ${styles}`}
    >
      {children}
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="fixed left-0 right-0 top-0 z-50 h-px bg-gradient-to-r from-transparent via-lime-400/50 to-transparent" />

      <header className="border-b border-zinc-900 bg-[#0a0a0a]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <div className="text-sm font-semibold tracking-wide text-white">
              Seu Nome
            </div>
            <div className="text-xs text-zinc-500">Full-Stack Developer</div>
          </div>

          <nav className="hidden gap-6 text-sm text-zinc-400 md:flex">
            <a href="#about" className="transition hover:text-lime-400">
              Sobre
            </a>
            <a href="#projects" className="transition hover:text-lime-400">
              Projetos
            </a>
            <a href="#contact" className="transition hover:text-lime-400">
              Contato
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-zinc-900">
          <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-lime-400/10 blur-3xl" />

          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-24">
            <div className="relative z-10">
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
                Portfólio
              </div>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                Desenvolvedor full-stack com foco em sistemas web, dados e produto.
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
                Este portfólio reúne projetos que mostram minha evolução em desenvolvimento web, integração entre backend e frontend, análise de dados e construção de soluções voltadas para problemas reais.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="#projects" variant="primary">
                  Ver projetos <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href="#contact">Entrar em contato</ButtonLink>
              </div>
            </div>

            <div className="relative rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-950 to-zinc-900 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-lime-400" />
                <span className="text-sm font-semibold text-white">Resumo rápido</span>
              </div>
              <div className="space-y-3 text-sm text-zinc-400">
                <div>
                  <span className="text-zinc-200">Foco:</span> desenvolvimento full-stack e soluções para problemas reais
                </div>
                <div>
                  <span className="text-zinc-200">Base:</span> web apps, APIs, dashboards e automações
                </div>
                <div>
                  <span className="text-zinc-200">Objetivo:</span> crescer como desenvolvedor construindo projetos sólidos e úteis
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-zinc-800 bg-black/30 p-4">
                  <div className="text-xs text-zinc-500">Projetos</div>
                  <div className="mt-1 text-2xl font-bold text-white">04</div>
                </div>
                <div className="rounded-xl border border-zinc-800 bg-black/30 p-4">
                  <div className="text-xs text-zinc-500">Stack</div>
                  <div className="mt-1 text-2xl font-bold text-white">Full</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-b border-zinc-900">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <SectionTitle
              eyebrow="Sobre mim"
              title="Quem eu sou"
              description="Uma apresentação mais direta, com foco no que eu desenvolvo, nas tecnologias que utilizo e no tipo de solução que gosto de construir."
            />

            <div className="grid gap-10 md:grid-cols-[340px_1fr] md:items-start">
              <div>
                <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 p-2">
                  <img
                    src={minhaFoto}
                    alt="Foto de perfil"
                    className="h-full w-full rounded-xl object-cover grayscale"
                  />
                </div>
              </div>

              <div>
                <p className="text-sm leading-8 text-zinc-400 md:text-base">
                  Sou desenvolvedor full-stack com interesse em criar aplicações que combinem boa estrutura de código, interface organizada e utilidade prática. Tenho buscado evoluir principalmente em projetos que envolvem sistemas web, dashboards, integrações e análise de dados, sempre tentando transformar necessidades reais em soluções funcionais.
                </p>

                <div className="mt-10 grid gap-8 lg:grid-cols-2">
                  <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6">
                    <h3 className="mb-4 text-lg font-semibold text-white">Tecnologias</h3>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((item) => (
                        <InfoTag key={item}>{item}</InfoTag>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6">
                    <h3 className="mb-4 text-lg font-semibold text-white">Especialidades</h3>
                    <ul className="space-y-3 text-sm leading-7 text-zinc-400 md:text-base">
                      {specialties.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="border-b border-zinc-900">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <SectionTitle
              eyebrow="Projetos"
              title="Projetos em destaque"
              description="Seleção de trabalhos que representam meu nível atual em desenvolvimento web, sistemas internos e análise de dados."
            />

            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.index}
                  className={`group rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-950 to-zinc-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-lime-400/50 ${
                    project.featured ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="inline-flex rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-lime-400">
                        {project.tag}
                      </div>
                      <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                        {project.title}
                      </h3>
                    </div>
                    <div className="text-xs text-zinc-500">{project.year}</div>
                  </div>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400 md:text-base">
                    {project.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <InfoTag key={item}>{item}</InfoTag>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <ButtonLink href={project.link} blank variant="primary">
                      <ExternalLink className="h-4 w-4" /> Acessar projeto
                    </ButtonLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-900">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <SectionTitle
              eyebrow="Stack"
              title="Tecnologias que utilizo"
              description="Conjunto de ferramentas e tecnologias com as quais venho desenvolvendo meus projetos."
            />

            <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-950 to-zinc-900 p-6">
              <div className="flex flex-wrap gap-3">
                {technologies.map((item) => (
                  <InfoTag key={item}>{item}</InfoTag>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <SectionTitle
              eyebrow="Contato"
              title="Vamos conversar"
              description="Caso queira conhecer melhor meus projetos, trocar ideias ou falar sobre oportunidades, estes são meus canais."
            />

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-950 to-zinc-900 p-5 transition hover:border-lime-400/40">
                <div className="mb-3 text-sm font-semibold text-white">Email</div>
                <a
                  href="mailto:tadllyhenzon@gmail.coms"
                  className="inline-flex items-center gap-2 text-sm text-zinc-300 transition hover:text-lime-400"
                >
                  <Mail className="h-4 w-4" /> tadllyhenzon@gmail.coms
                </a>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-950 to-zinc-900 p-5 transition hover:border-lime-400/40">
                <div className="mb-3 text-sm font-semibold text-white">GitHub</div>
                <a
                  href="https://github.com/HenzonTadlly"
                  className="inline-flex items-center gap-2 text-sm text-zinc-300 transition hover:text-lime-400"
                >
                  <FolderGit2 className="h-4 w-4" /> Ver perfil
                </a>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-950 to-zinc-900 p-5 transition hover:border-lime-400/40">
                <div className="mb-3 text-sm font-semibold text-white">LinkedIn</div>
                <a
                  href="https://www.linkedin.com/in/henzon"
                  className="inline-flex items-center gap-2 text-sm text-zinc-300 transition hover:text-lime-400"
                >
                  <ExternalLink className="h-4 w-4" /> Acessar LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
