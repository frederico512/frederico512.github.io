# Personal Website

A clean, responsive personal website that can grow into a portfolio. The first version is intentionally built with plain HTML, CSS, and a very small amount of JavaScript.

> **Before publishing:** replace every placeholder such as `Your Name`, the sample biography, project descriptions, and `your.email@example.com`. Do not publish the template copy unchanged.

## Goals

- Start simple and keep the project easy to understand.
- Use semantic, accessible HTML and responsive CSS.
- Avoid frameworks, build tools, and dependencies until there is a clear reason to add them.
- Keep the code organised so the site can grow without a rewrite.
- Use Git from the beginning and keep project documentation current.

## Requirements

- Visual Studio Code (or another code editor).
- A modern browser.
- Recommended VS Code extension: **Live Server** (`ritwickdey.liveserver`).
- Git is recommended for version control.

Node.js and npm are installed on the development computer, but this starter does **not** need them. A static HTML/CSS/JS website can run without a package manager or build step.

## Run locally

1. Open this folder in VS Code.
2. Open `index.html`.
3. Right-click in the editor and choose **Open with Live Server**. You can also use the Command Palette (`Ctrl+Shift+P`) and run **Live Server: Open with Live Server**.
4. Your browser should open the local website. Save a file to see changes refresh in the browser.

You can also open `index.html` directly in a browser, although Live Server is more convenient while developing.

## Project structure

```text
personal-website/
├── .vscode/
│   ├── extensions.json       # Suggested editor extensions
│   └── settings.json         # Shared project editor settings
├── assets/
│   ├── icons/                # Site icons and small SVG assets
│   └── images/               # Optimised images used by the site
├── css/
│   └── styles.css            # Design tokens, base styles, layout and components
├── docs/
│   ├── DECISIONS.md          # Important technical decisions and their reasons
│   ├── DEVELOPMENT_GUIDE.md  # Coding, accessibility, security and Git standards
│   ├── PROJECT_CONTEXT.md   # Portable brief for humans and other AI assistants
│   └── ROADMAP.md            # Staged plan for growing the website
├── js/
│   └── main.js               # Small progressive enhancements
├── AGENTS.md                 # Persistent instructions for Codex and coding agents
├── index.html                # Homepage
├── .editorconfig             # Consistent editor behaviour
├── .gitignore                # Files that should not be committed
└── README.md                 # Project overview and getting started
```

## Git: first local checkpoint

Open a terminal in the project folder and run:

```powershell
git init
git add .
git status
git commit -m "chore: initial personal website"
```

`git status` lets you review what will be committed. The first commit creates a checkpoint on your computer; it does not upload anything. Connect a GitHub repository and push only when you're ready.

Useful everyday commands:

```powershell
git status
git diff
git add .
git commit -m "feat: describe the change"
git push
```

Use meaningful commit messages. Examples: `feat: add projects section`, `fix: improve mobile navigation spacing`, `docs: update setup guide`.

## Working with AI coding assistants

- Read `AGENTS.md` and `docs/PROJECT_CONTEXT.md` before changing the project.
- Treat `docs/DEVELOPMENT_GUIDE.md` as the coding and quality standard.
- Ask the assistant to inspect the existing code before proposing a major rewrite.
- Make one understandable change at a time. Ask for a summary of changed files and checks performed.
- Do not accept new frameworks, dependencies, analytics, external scripts, or paid services without understanding and approving the trade-off.
- Review the diff before committing AI-generated changes.

Codex automatically recognises `AGENTS.md` in the project. Other assistants can use the same file as project instructions, or you can provide `docs/PROJECT_CONTEXT.md` and `docs/DEVELOPMENT_GUIDE.md` as context.

## Current limitations

This is a static front-end only. It has no backend, database, authentication, contact-form processing, analytics, or content management system. A contact link is not a working form. Those features require separate design and security decisions if they are added later.

## Before going live

- Replace all placeholder text and the example email address.
- Add only images you have permission to use; optimise them for the web and write meaningful alt text where appropriate.
- Check the page at mobile, tablet, and desktop widths.
- Test keyboard navigation and visible focus states.
- Check all links and browser console errors.
- Review page title, description, favicon, social sharing metadata, and the final domain.
- Confirm that no private information, credentials, or local-only files are included.
