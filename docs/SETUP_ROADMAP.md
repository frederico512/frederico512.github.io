# Development Environment Setup Roadmap

**Last updated:** 3 November 2026
**Platform:** Windows 11
**Main editor:** Visual Studio Code
**Main project:** Personal Website

This document tracks the setup, configuration and learning roadmap for my development environment.

It is the source of truth for what has been completed, what remains, and what should be tackled next.

## 1. Main goals and priorities

My priorities, in order:

1. **Web development:** HTML, CSS, JavaScript, Node.js, npm, browser debugging.
2. **AI coding assistants:** Codex, Claude Code, Gemini/Antigravity, Ollama and API-based assistants.
3. **Arduino and electronics:** Arduino IDE 2, PlatformIO, C/C++, sensors and microcontrollers.
4. **Python:** Return to Python when a suitable project requires it.

### General preferences

- Prefer free tools and free tiers.
- Avoid unnecessary installations and bloated configurations.
- Understand what each tool does before installing it.
- Work step by step.
- Prefer PowerShell commands on Windows.
- Use Git regularly and understand commits before pushing changes.
- Keep project documentation updated.
- Do not add extensions just because an article recommends them.

---

## 2. Computer and development environment

### Operating system and editor

| Component              | Status              | Details                                                             |
| ---------------------- | ------------------- | ------------------------------------------------------------------- |
| Windows 11             | Completed           | Main operating system                                               |
| Visual Studio Code     | Completed           | Per-user installation                                               |
| VS Code executable     | Completed           | `%LOCALAPPDATA%\Programs\Microsoft VS Code`                         |
| `code` command in PATH | Partially completed | Temporary PATH addition was used; permanent PATH status unconfirmed |

### Git

| Task                                               | Status         |
| -------------------------------------------------- | -------------- |
| Install Git for Windows                            | Completed      |
| Upgrade Git                                        | Completed      |
| Configure Git username and email                   | Completed      |
| Set default branch to `main`                       | Completed      |
| Configure line endings (`core.autocrlf=true`)      | Completed      |
| Configure Windows certificate backend (`schannel`) | Completed      |
| Generate Ed25519 SSH key                           | Completed      |
| Connect GitHub SSH                                 | Completed      |
| Connect GitLab SSH                                 | Completed      |
| Enable Windows SSH agent                           | Completed      |
| Verify SSH key is loaded                           | Completed      |
| Verify push without repeated passphrase prompts    | To investigate |

**Installed Git version:** `2.56.0.windows.4`

Git configuration:

- Username: `frederico512`
- Email: `fmaf512@gmail.com`
- Default branch: `main`

SSH key location:

- Public key: `%USERPROFILE%\.ssh\id_ed25519.pub`
- Private key: `%USERPROFILE%\.ssh\id_ed25519`

Never share or commit the private key.

GitHub and GitLab SSH authentication both succeeded.

**Outstanding detail:** A Git push succeeded but requested the SSH passphrase twice despite the Windows SSH agent being enabled. Investigate the SSH agent/Git SSH integration later.

### Node.js and npm

| Task                                  | Status    |
| ------------------------------------- | --------- |
| Install Node.js LTS                   | Completed |
| Verify Node.js                        | Completed |
| Verify npm                            | Completed |
| Configure PowerShell execution policy | Completed |

Installed versions at last verification:

- Node.js: `v26.13.0`
- npm: `11.20.0`

PowerShell execution policy:

- CurrentUser: `RemoteSigned`

Native build tools were not installed. Only install them if a project actually requires native module compilation.

---

## 3. VS Code extensions

**29 extensions installed.**

### Main web development tools

- ESLint
- Prettier
- Live Server
- Auto Close Tag
- Auto Rename Tag
- CSS Peek

### Git tools

- GitLens
- Git Graph
- Git History

### Other installed extensions

- Code Runner
- Prettier ESLint
- Prettier SQL
- Peacock
- Auto Open Preview Panel
- Error Lens
- Indent Rainbow
- Material Icon Theme
- Material Theme
- Catppuccin for VSCode
- Code Spell Checker
- Markdown All in One
- Thunder Client
- Prisma
- Docker
- Containers
- Python
- Pylance
- Python Debugger
- Python Environments
- Import Cost

### Pending extension tasks

- [ ] Explore GitLens Commit Graph.
- [ ] Learn GitLens file history and blame.
- [ ] Decide whether Git History is redundant.
- [ ] Understand the difference between Prettier and ESLint.
- [ ] Avoid installing more extensions until a real need arises.

Do not uninstall extensions just to reduce the count. Review them based on actual use.

---

## 4. VS Code settings and appearance

**Status: In progress.**

### Current preferences

- Font size: 14
- Font family: JetBrains Mono, with fallbacks
- Font ligatures: enabled
- Cursor blinking: solid
- Smooth scrolling: enabled
- Smooth caret animation: enabled
- Tab size: 2 spaces
- Word wrap: enabled
- Format on save: enabled
- Auto Save: after delay
- Final newline: enabled
- Trailing whitespace removal: enabled
- Bracket pair colorization: enabled
- Theme: Catppuccin Mocha
- File icons: Material Icon Theme
- Activity bar: top
- Menu bar: compact
- GitLens graph details: automatic positioning

### Current configuration

The current User Settings include:

```json
{
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.fontSize": 14,
  "editor.fontFamily": "'JetBrains Mono', Consolas, 'Courier New', monospace",
  "editor.fontLigatures": true,
  "editor.cursorBlinking": "solid",
  "editor.smoothScrolling": true,
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.wordWrap": "on",
  "editor.bracketPairColorization.enabled": true,
  "files.insertFinalNewline": true,
  "files.trimTrailingWhitespace": true,
  "files.autoSave": "afterDelay",
  "files.autosaveWhenNoErrors": "true",
  "workbench.colorTheme": "Catppuccin Mocha",
  "workbench.iconTheme": "material-icon-theme",
  "window.menuBarVisibility": "compact",
  "gitlens.graph.details.location": "auto",
  "workbench.activityBar.location": "top"
}
```

### Recommended next changes

- [x] Remove the invalid `files.autosaveWhenNoErrors` setting.
- [x] Consider setting `files.autoSaveDelay` to 1000 milliseconds.
- [x] Use language-specific Prettier formatter settings rather than one global formatter setting.
- [x] Verify JetBrains Mono is installed on Windows.
- [x] Try `editor.stickyScroll.enabled`.
- [ ] Decide whether to keep Sticky Scroll.
- [ ] Try the Catppuccin variants and settle on a preferred one.
- [ ] Inspect the project's Workspace Settings before modifying them.

### Configuration principles

**User Settings:** Personal preferences that apply to all projects.

**Workspace Settings:** Project-specific configuration, stored in the project's `.vscode/settings.json`.

Do not duplicate settings unnecessarily. Workspace Settings override User Settings when both define the same setting.

Keep the editor configuration simple and avoid blindly copying large settings lists from online articles.

---

## 5. GitHub and GitLab integration inside VS Code

**Status: Partially completed.**

SSH authentication is already configured. This section concerns the additional integrations inside VS Code.

| Task                                   | Status                  | Priority  |
| -------------------------------------- | ----------------------- | --------- |
| GitHub SSH authentication              | Completed               | Essential |
| GitLab SSH authentication              | Completed               | Optional  |
| Sign into GitHub inside VS Code        | Unconfirmed             | Useful    |
| Install GitHub CLI (`gh`)              | Unknown / not installed | Optional  |
| Install GitHub Pull Requests extension | Not installed           | Optional  |
| Install GitLab VS Code extension       | Not installed           | Optional  |
| Install GitLab CLI (`glab`)            | Unknown / not installed | Optional  |
| Configure VS Code Settings Sync        | Pending                 | Useful    |

### Recommended order

1. Sign into GitHub inside VS Code.
2. Verify the GitHub integration.
3. Consider GitHub Pull Requests when learning collaboration.
4. Consider Settings Sync.
5. Leave GitLab-specific integrations for later.

GitHub CLI and GitLab CLI are not required for ordinary Git push and pull operations.

---

## 6. Personal website project

**Status: Initial setup completed; development ongoing.**

### Project information

Project folder:

```text
C:\Users\fmaf5\Documents\Projects\personal-website
```

GitHub repository:

https://github.com/frederico512/frederico512.github.io

Published website:

https://frederico512.github.io

Hosting: GitHub Pages (free).

### Completed

- [x] Create the starter website.
- [x] Extract the project.
- [x] Establish the final project location.
- [x] Open the project in VS Code.
- [x] Set up Codex Desktop for the project.
- [x] Create project documentation.
- [x] Create `AGENTS.md`.
- [x] Initialize Git with branch `main`.
- [x] Make the initial commit.
- [x] Create the GitHub repository.
- [x] Add the GitHub SSH remote.
- [x] Push the project to GitHub.
- [x] Enable GitHub Pages.
- [x] Verify the website is online.

### Remaining

- [ ] Personalize the website.
- [ ] Understand the HTML, CSS and JavaScript structure.
- [ ] Learn the Live Server workflow.
- [ ] Learn how to inspect browser errors.
- [ ] Practice Git add, commit, push and pull.
- [ ] Understand how GitHub Pages publishes changes.
- [ ] Keep README and project documentation updated.

### Important

GitHub Pages supports static websites. A Node.js backend or database will require a separate hosting solution if introduced later.

Never commit API keys, passwords, private keys or other secrets.

---

## 7. AI coding assistants

**Status: Started.**

### Codex

- [x] Install Codex Desktop.
- [x] Establish the project folder.
- [x] Create `AGENTS.md`.
- [x] Prepare an initial project prompt.
- [ ] Learn how to give Codex tasks.
- [ ] Review changes before accepting them.
- [ ] Learn how Codex uses the terminal.
- [ ] Develop a safe AI-assisted Git workflow.

### Future exploration

- [ ] Claude Code.
- [ ] Gemini / Antigravity.
- [ ] Ollama and local models.
- [ ] API-based assistants.

**Priority:** Learn Codex properly before adding more AI tools.

Use ChatGPT for planning, explanations and reviews. Use Codex for practical project work and local file changes.

Keep project instructions and context in the repository so different assistants can work from the same information.

---

## 8. Arduino and electronics

**Status: Upcoming.**

- [ ] Install Arduino IDE 2.
- [ ] Explore PlatformIO.
- [ ] Understand C/C++ tooling.
- [ ] Connect a microcontroller.
- [ ] Test a basic program.
- [ ] Learn serial monitor and debugging.
- [ ] Work with sensors and electronics.

Do not install all Arduino tools before starting the actual electronics project.

---

## 9. Python

**Status: Deferred.**

Python extensions are already installed:

- Python
- Pylance
- Python Debugger
- Python Environments

Return to Python when there is a concrete project or learning goal.

No additional Python installation is currently required.

---

## 10. Next session checklist

This is the recommended order for the next working session.

### Step 1 — Finish VS Code configuration

- [x] Clean up User Settings.
- [x] Verify JetBrains Mono.
- [x] Inspect `.vscode/settings.json`.
- [x] Confirm Prettier configuration.
- [x] Test Sticky Scroll.
- [x] Confirm Catppuccin appearance.

### Step 2 — GitHub integration

- [ ] Sign into GitHub inside VS Code.
- [ ] Verify the account integration.
- [ ] Decide whether to enable Settings Sync.
- [ ] Consider GitHub Pull Requests extension.

### Step 3 — GitLens

- [ ] Open Commit Graph.
- [ ] Find the initial website commit.
- [ ] Learn file history.
- [ ] Learn Git blame.
- [ ] Understand commit comparison.

### Step 4 — Practical development workflow

- [ ] Make a small website edit.
- [ ] Preview using Live Server.
- [ ] Inspect the result in a browser.
- [ ] Review changes in Git.
- [ ] Commit the changes.
- [ ] Push to GitHub.
- [ ] Verify the published website.

### Step 5 — Begin developing the website

Move from environment setup to actual web development.

---

## 11. Rules for maintaining this roadmap

This document should be updated as the setup progresses.

1. Only mark tasks completed after they have actually been verified.
2. Distinguish between completed, pending, optional and deferred tasks.
3. Record relevant software versions when they change.
4. Record important project paths and repository URLs.
5. Avoid adding unnecessary tools or extensions.
6. Keep the next-session checklist current.
7. Update the last-modified date after meaningful changes.
8. Do not remove completed tasks; preserve them as project history.

**When starting a new ChatGPT conversation, provide this file and ask:**

"Please read my SETUP_ROADMAP.md. Continue helping me from the next pending task. Keep the roadmap updated as we complete and verify each step."

The roadmap is the source of truth. Do not assume an item is completed simply because it was previously recommended.
