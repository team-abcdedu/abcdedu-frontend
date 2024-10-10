import * as Sentry from '@sentry/react';
import { useEffect } from 'react';
import {
  useLocation,
  useNavigationType,
  createRoutesFromChildren,
  matchRoutes,
} from 'react-router-dom';

import { version } from '@/../package.json';

export const initSentry = () => {
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    release: version,
    environment: 'production',
    integrations: [
      Sentry.reactRouterV6BrowserTracingIntegration({
        useEffect,
        useLocation,
        useNavigationType,
        createRoutesFromChildren,
        matchRoutes,
      }),
    ],
    tracesSampleRate: 1.0,
    tracePropagationTargets: [
      'localhost',
      /^https:\/\/(dev\.abcdedu\.com|abcdedu\.com|www\.abcdedu\.com)$/,
    ],
    ignoreErrors: [/AxiosError/i, /토큰/i, /학생등급/i],
  });
};
