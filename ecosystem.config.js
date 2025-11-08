module.exports = {
  apps: [
    {
      name: 'neko-shop',
      script: 'node',
      args: '.next/standalone/server.js',
      cwd: './',
      env: {
        NODE_ENV: 'production',
        PORT: process.env.PORT || 3000,
      },
    },
  ],
}
