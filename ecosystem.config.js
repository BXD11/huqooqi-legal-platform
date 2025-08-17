module.exports = {
  apps: [
    {
      name: 'huqooqi-dev',
      script: 'npm',
      args: 'run dev',
      cwd: '/home/user/webapp/huqooqi',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      watch: false,
      max_memory_restart: '1G',
      exec_mode: 'fork',
      instances: 1,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s'
    }
  ]
};