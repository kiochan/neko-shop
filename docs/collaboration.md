# Collaboration Guide

This project welcomes contributions!  
Since some team members are new to development, please follow this guide carefully.

---

## 1. Using Git and GitHub

### Branching

- Always create a new branch from `main`:
  ```bash
  git checkout main
  git pull origin main
  git checkout -b feature/your-feature-name
  ```

````

### Pull Requests (PRs)

* Push your branch to GitHub:

  ```bash
  git push origin feature/your-feature-name
  ```
* Open a Pull Request on GitHub.
* Link related issues by writing `Closes #7` in the PR description.

### Code Review

* Every PR must be reviewed by at least one collaborator.
* Address comments and push changes before merging.
* Do not commit directly to `main`.

---

## 2. Basic Workflow for Contributing

1. Create a branch from `main`.
2. Make your changes locally.
3. Commit often with clear messages:

   ```bash
   git commit -m "Add login form validation"
   ```
4. Push your branch and open a PR.
5. Request a review, fix feedback, then merge.

---

Remember: small, focused PRs are easier to review and merge.
````
