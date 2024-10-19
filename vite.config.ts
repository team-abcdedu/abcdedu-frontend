import { sentryVitePlugin } from '@sentry/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      react(),
      svgr(),
      sentryVitePlugin({
        org: 'abcdedu',
        project: env.SENTRY_PROJECT,
        // project: 'abcdedu-frontend',
        authToken: env.SENTRY_AUTH_TOKEN,
        // 생성된 sourcemap sentry에 업로드 후 삭제
        sourcemaps: {
          filesToDeleteAfterUpload: '**/*.map',
        },
      }),
    ],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    build: {
      sourcemap: mode === 'production', // Production에서만 sourcemap 생성
      rollupOptions: {
        output: {
          manualChunks: id => {
            if (id.includes('@sentry')) {
              return '@sentry';
            }
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
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './vitest.setup.ts',
    },
  };
});
