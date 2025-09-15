# Collaboration Guide

This project welcomes contributions!
Since some team members are new to development, please follow this guide carefully.

---

## 1. Using Git and GitHub

### Branching

- Always create a new branch from `dev`:

  ```bash
  git checkout dev
  git pull origin dev
  git checkout -b <categorie>/<what-you-have-down>
  ```

### Pull Requests (PRs)

- Push your branch to GitHub:

  ```bash
  git push origin <categorie>/<what-you-have-down>
  ```

- Open a Pull Request on GitHub.
- Link related issues by writing `Closes #7` in the PR description.

#### PR & Commit Categories

Use the following categories for **branch names**, **commit messages**, and **PR titles** to keep everything consistent:

- **feature** – New features or modules
  _Commit/PR example:_

  ```bash
  feat: add user authentication
  ```

- **bugfix** – Fixing existing issues or defects
  _Example:_

  ```bash
  fix: resolve login crash
  ```

- **refactor** – Improving code structure without changing behavior
  _Example:_

  ```bash
  refactor: simplify form component
  ```

- **chore** – Maintenance tasks, dependency updates, build scripts, etc.
  _Example:_

  ```bash
  chore: update dependencies
  ```

- **doc** – Documentation updates
  _Example:_

  ```bash
  docs: update contribution guide
  ```

- **style** – Style-only changes
  _Example:_

  ```bash
  style: fix style
  ```

- **ci** – Continuous Integration setup or configuration changes
  _Example:_

  ```bash
  ci: add lint workflow
  ```

### Code Review

- Every PR must be reviewed by at least one collaborator.
- Address comments and push changes before merging.
- Do not commit directly to `main`.

---

## 2. Basic Workflow for Contributing

1. Create a branch from `main`.
2. Make your changes locally.
3. Commit often with clear messages following the format:

   ```bash
   <categorie>: <short description>
   ```

   Example:

   ```bash
   feature: add login form validation
   ```

4. Push your branch and open a PR.
5. Request a review, fix feedback, then merge.

---

Remember: small, focused PRs are easier to review and merge.
