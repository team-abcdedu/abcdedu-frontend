import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [react(), svgr()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: id => {
            if (id.indexOf('node_modules') !== -1) {
              const module = id.split('node_modules/').pop().split('/')[0];
              return `vendor-${module}`;
            }
          },
        },
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      ...(mode === 'development'
        ? {
            proxy: {
              '/api': {
                target: env.VITE_API_ROOT,
                changeOrigin: true,
              },
            },
          }
        : {}),
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  };
});
