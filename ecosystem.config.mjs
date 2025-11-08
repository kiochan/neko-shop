export default {
  apps: [
    {
      name: 'neko-shop',
      script: 'pnpm',
      args: 'start',
      cwd: './',
      env: {
        NODE_ENV: 'production',
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
    },
  ],
}
