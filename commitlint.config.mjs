/**
 * @type {import('@commitlint/types').UserConfig}
 */
const config = {
  extends: ['@commitlint/config-conventional'],

  rules: {
    // Allowed commit types (should match your cz-git config)
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci', 'chore'],
    ],

    // Allow commit without scope
    'scope-empty': [0],
    // If scope exists, it must be lowercase
    'scope-case': [2, 'always', 'lower-case'],

    // Subject rules
    'subject-empty': [2, 'never'],
    'subject-case': [2, 'always', 'lower-case'],
    'subject-full-stop': [2, 'never', '.'],

    // Type must be lowercase
    'type-case': [2, 'always', 'lower-case'],

    // Keep commit summary concise
    'header-max-length': [2, 'always', 50],

    // If body/footer written, must start with a blank line
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
  },
}

export default config
