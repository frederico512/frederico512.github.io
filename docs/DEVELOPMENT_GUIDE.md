# Development Guide and Coding Standards

This document defines how the personal website should be designed, coded, reviewed, and extended. It is intended for the owner, human collaborators, Codex, and other AI coding assistants. The goal is not to follow fashionable tooling; it is to keep the site professional, accessible, secure, fast, and easy to understand.

## 1. Core principles

### Keep it simple

Use the smallest amount of technology that solves the current problem. The current site is static HTML, CSS, and vanilla JavaScript. Do not add a framework, build system, package, service, or abstraction because it might be useful someday. Add it only when a real requirement justifies its maintenance cost.

### Make it understandable

Prefer readable code over clever code. Use clear names, short functions, consistent formatting, and comments that explain intent or non-obvious decisions. Avoid comments that simply repeat the code.

### Build progressively

The site must remain useful as a simple website. Add capabilities in small, reviewable steps. Do not turn a small change into a redesign or rewrite.

### Accessibility and responsiveness are requirements

Accessibility and mobile support are part of implementation, not optional polish at the end.

### Do not fabricate content

Never invent facts about the owner. Use explicit placeholders until the owner supplies real details and approves their publication.

## 2. Project architecture

```text
personal-website/
├── .vscode/                  # Shared, non-personal editor settings
├── assets/
│   ├── icons/                # Favicons and small icons
│   └── images/               # Photos and project imagery
├── css/
│   └── styles.css            # Tokens, base, layout, components, responsive rules
├── docs/                     # Project context, decisions, standards and roadmap
├── js/
│   └── main.js               # Progressive enhancements only
├── AGENTS.md                 # Instructions for coding agents
└── index.html                # Current public page
```

Keep this structure until there is a concrete reason to change it. If the site later gains several pages, prefer clear, descriptive paths such as `about/index.html` and `projects/index.html`. If CSS becomes too large, it may be separated into files such as `tokens.css`, `base.css`, `layout.css`, and `components.css`; do this only when it improves navigation and maintainability.

### Where things belong

- Page content and page metadata belong in HTML.
- Visual presentation belongs in CSS.
- Behaviour that genuinely requires scripting belongs in JavaScript.
- Images, icons, and other static media belong in `assets/`.
- Setup and operating instructions belong in `README.md`.
- Technical and quality rules belong in this guide and `AGENTS.md`.
- Project facts and unresolved content decisions belong in `PROJECT_CONTEXT.md`.
- Important architecture choices belong in `DECISIONS.md`.

Avoid inline CSS, inline JavaScript, and duplicated style rules.

## 3. HTML standards

- Use HTML5 and declare `<!doctype html>`.
- Set the correct page language on the root element. The current page uses English (`lang="en"`); change it if the site's primary language changes.
- Include UTF-8, a responsive viewport, a meaningful page title, and a concise meta description.
- Use semantic landmarks: `header`, `nav`, `main`, `section`, `article`, and `footer` as appropriate.
- Give the page one clear `h1`. Use headings in a logical order; do not choose a heading level just for its visual size.
- Use `<a>` for navigation and navigation to resources. Use `<button>` for actions that happen on the current page.
- Use descriptive link text. Avoid vague labels such as "click here" when the destination can be named.
- Give meaningful images descriptive `alt` text. Decorative images should use `alt=""` and should not add redundant screen-reader noise.
- Set image `width` and `height` when possible to reduce layout movement while files load.
- Use real labels for form fields. Placeholders are examples, not labels.
- Keep markup valid and avoid unnecessary wrapper elements and ARIA attributes. Native HTML elements are preferred.
- Use HTML comments sparingly, mainly for TODOs or non-obvious structure.

## 4. CSS standards

### Design tokens

Use CSS custom properties near the top of the stylesheet for repeated design decisions: colours, font stacks, spacing, widths, radii, and shadows. When changing the visual identity, start with these tokens rather than searching for scattered literal values.

### Layout and responsive design

- Use a mobile-first approach: the default layout should work on small screens, then add breakpoints when the content needs them.
- Prefer flexible CSS: Grid, Flexbox, `minmax()`, `min()`, `max()`, and `clamp()`.
- Avoid fixed widths for content containers. Use `max-width` and fluid sizing.
- Do not create horizontal scrolling at a viewport width of 320 CSS pixels unless a specific content type requires it.
- Choose breakpoints based on where the layout stops working, not on a specific device brand.
- Keep readable line lengths for long text.

### Maintainability

- Use component-style class names such as `.project-card` and clear modifiers such as `.button-primary`.
- Keep selectors shallow and specific enough to understand.
- Avoid IDs for styling, overly broad selectors, deeply nested selectors, and `!important`.
- Avoid duplicating rules. Reuse a class or token when the same design decision appears more than once.
- Do not use inline styles or introduce a CSS framework without approval.
- Group rules logically and add section comments when the stylesheet becomes long.

### Interaction and motion

- Provide a visible `:focus-visible` treatment for keyboard users.
- Do not communicate information through colour alone.
- Respect `prefers-reduced-motion` and avoid unnecessary animation.
- Ensure hover effects have an equivalent usable keyboard/focus state where relevant.

## 5. JavaScript standards

JavaScript is an enhancement, not a prerequisite for reading the page or using its primary navigation.

- Use vanilla JavaScript and ES modules.
- Prefer `const`; use `let` only when reassignment is needed.
- Use descriptive names and small functions with one responsibility.
- Query the DOM deliberately and handle the possibility that an element is absent.
- Avoid global variables and avoid adding scripts for behaviour that HTML or CSS can handle.
- Use `addEventListener` for event handling when needed.
- Use `textContent` for plain text updates. Do not insert untrusted data with `innerHTML`.
- Never use `eval` or construct executable code from user input.
- Validate and handle user-provided data when interactive features are introduced.
- Handle errors in a way that helps the user recover; do not silently swallow failures.
- Do not add a dependency for a small task that native browser APIs can solve.

## 6. Accessibility checklist

Aim for WCAG 2.2 AA as the quality target. This is a goal to test against, not a claim of certification.

- [ ] All functionality can be reached and used with a keyboard.
- [ ] Focus is visible and follows a sensible order.
- [ ] A skip link lets keyboard users bypass repeated navigation.
- [ ] Heading levels and page landmarks describe the structure.
- [ ] Text and interactive controls have sufficient contrast.
- [ ] Links and buttons have clear names and understandable purposes.
- [ ] Images have appropriate alternative text.
- [ ] Forms, if added, have visible labels and useful error messages.
- [ ] Motion is reduced when the user requests reduced motion.
- [ ] The page remains usable at high zoom and on narrow screens.
- [ ] Accessibility is checked with keyboard testing and browser tooling; automated scans alone are not enough.

## 7. Security and privacy

A static website sends its HTML, CSS, JavaScript, and client-side configuration to every visitor. Anything placed in front-end code must be treated as public.

- Never put API keys, passwords, tokens, private keys, or secrets in HTML, CSS, JavaScript, or public repository files.
- Do not commit `.env` files or credentials. If a future backend needs secrets, keep them on the server and out of source control.
- Do not use `innerHTML` with untrusted content. Prefer safe DOM APIs and `textContent`.
- Review third-party scripts, embeds, fonts, analytics, and external services before adding them. They can affect privacy, performance, and security.
- Do not add analytics, cookies, tracking, newsletter collection, or contact-form processing without an explicit decision about purpose, provider, and privacy obligations.
- A front-end-only contact form cannot securely send or store messages by itself. A real form requires a backend or a reputable form service and appropriate anti-spam/privacy measures.
- For links opened in a new tab, use `rel="noopener noreferrer"` with `target="_blank"`.

## 8. Images, fonts, and performance

- Prefer system fonts initially. External font services add network requests and may involve privacy considerations.
- Use images only when they improve the content. Do not add large decorative assets just to fill space.
- Use image formats such as WebP or AVIF when supported by the chosen workflow; keep an original source where appropriate.
- Resize images close to their displayed dimensions and compress them before committing.
- Add `width` and `height` to images where possible. Use responsive sources (`srcset` and `sizes`) when multiple image sizes are useful.
- Lazy-load below-the-fold images with `loading="lazy"`; do not lazy-load the main hero image if one is later added and it is important to initial rendering.
- Avoid unnecessary JavaScript and third-party requests.
- Check real page behaviour before optimising. Do not add complex caching or build tooling prematurely.

## 9. SEO and publishing readiness

Before the site is public:

- Write a unique, accurate `<title>` and meta description.
- Confirm the language, headings, and links reflect the actual site content.
- Add a favicon and social sharing metadata when the name, brand, and imagery are chosen.
- Add a canonical URL only after the final domain is known.
- Consider a sitemap and `robots.txt` when the site has a stable public URL and multiple pages.
- Check that placeholder text, example email addresses, and development-only content have been removed.
- Check that every external link works and that the site does not expose private information.
- Test on a real phone-sized viewport and at least two modern browsers.

Do not promise SEO rankings. Technical hygiene helps search engines understand pages; it does not guarantee placement.

## 10. Git workflow

Use Git to make changes reviewable and reversible.

### Before work

```powershell
git status
git pull
```

Run `git pull` only when a remote repository has been configured and the owner intends to sync with it.

### After a logical change

```powershell
git status
git diff
git add .
git commit -m "feat: describe the change"
```

Review what is staged before committing. Do not commit generated files, secrets, private keys, or local editor state.

Suggested commit prefixes:

- `feat:` new user-visible capability.
- `fix:` bug fix.
- `docs:` documentation-only change.
- `style:` formatting or visual styling without behaviour change.
- `refactor:` internal improvement without intended behaviour change.
- `chore:` maintenance and project configuration.

Never run destructive commands or push changes without the owner's explicit request.

## 11. Testing and review

There is no automated test suite or lint command in the starter. Do not pretend otherwise. For each meaningful change:

1. Open the site with Live Server.
2. Check the affected section at desktop and mobile widths.
3. Navigate using the keyboard, including Tab, Shift+Tab, Enter, and Space where appropriate.
4. Check the browser console for JavaScript errors and failed requests.
5. Check all changed links and interactive states.
6. When appropriate, validate HTML and inspect accessibility with browser tools.
7. Review the Git diff to catch unrelated or accidental changes.

When automated tests become worthwhile, explain the proposed tool, its setup cost, and the benefit before adding it.

## 12. Adding tools or changing architecture

A new tool or framework must solve a real, current problem. Before adding one:

1. Describe the problem that the current setup cannot solve comfortably.
2. Explain the proposed tool and at least one simpler alternative.
3. Explain ongoing costs: dependencies, updates, build steps, hosting, learning curve, and maintenance.
4. Get the owner's approval.
5. Keep the change small and document how to use the new tool.

Potential future additions, only when justified, include a local Node.js development server, a formatter/linter workflow, multiple pages, a static site generator, a backend, or a content management system. None is required for the current version.

## 13. Working with AI assistants

Give an AI assistant this document and `docs/PROJECT_CONTEXT.md` when starting work in a new tool or chat. For Codex, the root `AGENTS.md` is discovered automatically when the project folder is opened.

Use this task format:

> First inspect the existing project and read `AGENTS.md`, `docs/PROJECT_CONTEXT.md`, and the relevant parts of `docs/DEVELOPMENT_GUIDE.md`. Explain your plan before making a non-trivial change. Make only the requested change, follow the project standards, and do not add dependencies or invent personal content. Afterward, summarise changed files, explain key decisions, and list the checks you actually performed and any remaining issues.

AI-generated code is a proposal, not proof that something works. The owner should understand the change, review it in the browser, and inspect the diff before committing.

## 14. Definition of done

A change is ready to keep when:

- It solves the requested problem and does not introduce unrelated changes.
- It follows this guide and the project's design tokens.
- It works at mobile and desktop widths.
- Keyboard access and visible focus remain intact.
- The browser console has no new relevant errors.
- Documentation is updated where necessary.
- The Git diff has been reviewed.
- The owner understands what changed and why.
