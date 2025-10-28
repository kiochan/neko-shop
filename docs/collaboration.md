# Collaboration Guide

This project welcomes contributions.
Please follow this guide to maintain consistency and readability across the codebase.

---

## 1. Git and GitHub Workflow

### Branching

Always branch from `dev`:

```bash
git checkout dev
git pull origin dev
git checkout -b <type>/<short-description>
```

Examples:

```
feat/user-login
fix/token-refresh
docs/api-guide
```

### Pull Requests (PRs)

Push your branch:

```bash
git push origin <type>/<short-description>
```

Open a PR and, if relevant, link issues using:

```
Closes #7
```

---

## 2. Commit and PR Title Format

All commit messages and PR titles must follow this format:

```
type(scope): short description
```

Rules:

1. `type` must be one of:
   `feat fix docs style refactor test chore ci build perf release`
2. `scope` is optional. If used, it must contain only:
   lowercase letters, digits, hyphens
   Example: `(user-profile)`
3. Description must start with a lowercase letter
4. Total length must not exceed 50 characters

### Valid examples

```
feat: add login support
fix(auth): handle token refresh failure
docs: update setup instructions
ci: add PR title validation
```

### Invalid examples

```
Feat: add login support          # type must be lowercase
feat(User): add login support    # scope must be lowercase
feat(api): Add login support     # description must start lowercase
feat: add login feature that is too long to fit in one line  # exceeds 50 chars
```

---

## 3. Code Review

- Every PR must be reviewed by at least one collaborator
- Apply feedback before merging
- Do not commit directly to `dev`

---

## 4. Recommended Contribution Workflow

1. Create a branch from `dev`
2. Implement changes in small, focused commits
3. Use the commit message format shown above
4. Push the branch and open a PR
5. Request review and revise if necessary
6. Merge once approved
