/** @type {import('cz-git').UserConfig} */
const config = {
  types: [
    { value: 'feat', name: 'feat:     A new feature' },
    { value: 'fix', name: 'fix:      A bug fix' },
    { value: 'docs', name: 'docs:     Documentation updates' },
    { value: 'style', name: 'style:    Code style changes (no logic)' },
    { value: 'refactor', name: 'refactor: Code restructuring (no features, no bug fixes)' },
    { value: 'perf', name: 'perf:     Performance improvements' },
    { value: 'test', name: 'test:     Adding or updating tests' },
    { value: 'build', name: 'build:    Build or dependency changes' },
    { value: 'ci', name: 'ci:       CI/CD config changes' },
    { value: 'chore', name: 'chore:    Other changes that do not modify src' },
  ],

  // whether to ask for scope
  useScope: true,
  allowCustomScopes: true,
  allowEmptyScopes: true,

  // formatting rules
  subjectLowerCase: true,
  maxHeaderLength: 50,

  // disable emoji, keep clean style
  useEmoji: false,
}

export default config
