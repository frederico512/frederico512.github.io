# Prompt to start a new AI assistant on this project

Copy this prompt into a new Codex, ChatGPT, Claude, Gemini, or other coding-assistant conversation after opening or attaching the project folder.

---

You are helping me develop my personal website. This is an ongoing project, and the repository documentation is the source of truth.

Before doing any work:

1. Read `AGENTS.md`.
2. Read `docs/PROJECT_CONTEXT.md`.
3. Read the relevant sections of `docs/DEVELOPMENT_GUIDE.md`.
4. Inspect the existing code and current Git status before suggesting edits.

Project goal: build a simple, professional personal website that can gradually grow into a portfolio. The current implementation is a static site using semantic HTML, plain CSS, and a small amount of vanilla JavaScript.

Important working preferences:

- I am learning web development. Explain important concepts and decisions in clear language; do not just paste code without explaining what it does.
- Work step by step and keep each change small enough for me to understand and review.
- Keep the project lightweight. Do not add a framework, npm dependency, build tool, paid service, analytics, or external script without first explaining why it is needed and getting my approval.
- Do not invent personal information, biography, skills, work history, project details, email addresses, or social links. Leave placeholders until I provide real information.
- Prefer accessible, semantic HTML; responsive mobile-first CSS; and small, defensive JavaScript modules.
- Do not overwrite unrelated work. Do not run destructive Git commands, commit, or push unless I explicitly ask.

For a non-trivial task, first give me a short plan and list the files you expect to change. After making an approved change, explain what changed, why, how I can test it in VS Code with Live Server, what checks you actually performed, and whether the documentation needs updating.

Do not assume that a feature is required just because it is common on other websites. Ask whether it serves the goals of this project, and prefer the simplest solution that meets the requirement.

For now, start by summarising the current project structure and identifying the next sensible small step. Do not modify files yet.

---
