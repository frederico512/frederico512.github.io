# Project instructions for Codex and other coding assistants

Read this file and `docs/PROJECT_CONTEXT.md` before making changes. Follow `docs/DEVELOPMENT_GUIDE.md` for detailed standards. The user is learning web development, so explain important decisions in clear language and do not hide complexity behind unnecessary tools.

## Project goal

Maintain a simple, professional personal website that can gradually become a portfolio. The current project is a static website built with HTML, CSS, and vanilla JavaScript.

## Non-negotiable defaults

- Keep the site lightweight and understandable.
- Do not introduce a framework, bundler, package manager dependency, UI library, CSS framework, analytics script, external font, or third-party service unless the user has approved the reason and trade-offs.
- Do not create `package.json` or install npm packages just to serve this static site. Live Server is sufficient for local development.
- Prefer native browser features and semantic HTML.
- Make the website usable on mobile, tablet, and desktop.
- Preserve progressive enhancement: core content and navigation must work without JavaScript wherever practical.
- Use the existing visual tokens in `css/styles.css`; do not scatter arbitrary colours, spacing, or typography values throughout the stylesheet.
- Do not invent personal details, credentials, employment history, skills, project claims, contact information, or social profiles. Keep placeholders until the user supplies real content.

## Before editing

1. Inspect the relevant files and understand the current implementation.
2. Read applicable project documentation.
3. For a non-trivial task, state a brief plan and identify affected files before editing.
4. Prefer the smallest change that solves the stated problem. Do not rewrite unrelated sections.
5. Ask before adding dependencies, external services, data collection, a backend, a framework, or a deployment configuration that could expose the site publicly. Explain the benefit and cost first.

## Code standards

### HTML
- Use valid HTML5, `lang="en"`, UTF-8, and a responsive viewport.
- Use semantic landmarks (`header`, `nav`, `main`, `section`, `article`, `footer`) where appropriate.
- Keep one clear page-level `h1`; preserve a logical heading hierarchy.
- Use links for navigation and buttons for actions.
- Give images appropriate alternative text. Use empty `alt` only for decorative images.
- Associate form labels with controls if forms are introduced; do not rely on placeholder text as a label.
- Use descriptive link text and meaningful page titles and descriptions.
- Avoid unnecessary ARIA. Prefer native HTML semantics.

### CSS
- Keep styles in `css/styles.css` unless the stylesheet becomes difficult to navigate; explain before splitting it.
- Use the existing CSS custom properties for colours, spacing, typography, widths, radii, and shadows.
- Use mobile-first responsive rules and content-driven layouts (`minmax`, `clamp`, flexbox, grid) where appropriate.
- Keep selectors simple and avoid deeply nested selectors, ID selectors for styling, and `!important` except for a clearly justified accessibility override.
- Provide visible keyboard focus. Respect `prefers-reduced-motion`.
- Avoid fixed widths that cause horizontal scrolling on small screens.
- Do not use inline styles or add styling frameworks without approval.

### JavaScript
- Use vanilla JavaScript and ES modules (`type="module"`).
- Prefer `const`; use `let` only when reassignment is needed. Use descriptive names.
- Keep scripts small, focused, and defensive when querying the DOM.
- Do not add JavaScript for something HTML or CSS can do reliably.
- Avoid global variables, `eval`, unsafe HTML injection, and `innerHTML` for untrusted content. Prefer `textContent` and safe DOM methods.
- Handle user input and errors deliberately if interactive features are added.
- Do not add a library for a small task that browser APIs can handle.

## Quality checks

After changes, perform the checks that are practical for the task:
- Inspect the changed code for consistency with this guide.
- Open the page with Live Server and check the changed area.
- Check a narrow mobile width and a desktop width.
- Test links and keyboard focus where relevant.
- Check the browser console for errors.
- For HTML/CSS changes, consider the W3C validator and browser accessibility tools before publishing.
- State honestly which checks were performed and which were not. Do not claim tests passed if they were not run.

There is no automated test or lint command configured in this starter. Do not invent one. Introduce a test/lint tool only when there is a clear need and the user agrees.

## Git and safety

- Never run destructive Git commands (`reset --hard`, force push, deleting branches, or discarding user changes) unless the user explicitly asks and understands the effect.
- Never commit or push without an explicit request.
- Check `git status` and review `git diff` before recommending a commit.
- Never put passwords, API keys, tokens, private keys, or other secrets in the repository or front-end code.
- Treat all browser-delivered code and configuration as public. A front-end environment variable is not secret.
- Do not add tracking, analytics, cookies, or data collection without explicit approval and an appropriate privacy discussion.

## Documentation and handoff

- Update `README.md`, `docs/PROJECT_CONTEXT.md`, `docs/DEVELOPMENT_GUIDE.md`, `docs/ROADMAP.md`, or `docs/DECISIONS.md` when a change makes them inaccurate.
- Keep the project context factual. Mark unknown details as undecided rather than guessing.
- At the end of each task, report: what changed, why, how it was checked, and any remaining work or risks.
- Explain new concepts briefly because the owner is learning and wants to understand the code, not only receive generated code.
