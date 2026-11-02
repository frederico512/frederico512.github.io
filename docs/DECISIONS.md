# Architecture Decisions

Record decisions that affect how the website is built. Add a date and revisit a decision only when requirements change.

## 2026-11-02 — Start with a static website

**Decision:** Use HTML, CSS, and vanilla JavaScript without a framework or build step.

**Reason:** The first version is a small personal website. A static site is easy to understand, fast to load, inexpensive to host, and does not require a dependency toolchain.

**Revisit when:** The site needs complex interactions, content editing at scale, many repeated page templates, or other requirements that plain files no longer handle comfortably.

## 2026-11-02 — No npm dependencies for the starter

**Decision:** Do not create a `package.json` or install packages yet. Use VS Code Live Server for local preview.

**Reason:** npm is available on the development computer, but this site does not currently need a package manager, compiler, bundler, or development server dependency.

**Revisit when:** A concrete tool or build process is selected and its benefits justify the extra setup and maintenance.

## 2026-11-02 — Keep project instructions in the repository

**Decision:** Maintain a root `AGENTS.md` plus `docs/PROJECT_CONTEXT.md` and `docs/DEVELOPMENT_GUIDE.md`.

**Reason:** Codex can discover `AGENTS.md` automatically. The other Markdown documents make project goals and standards portable to other assistants and human collaborators.

**Revisit when:** The instructions become too large or the project grows enough to need scoped instructions in subfolders.
