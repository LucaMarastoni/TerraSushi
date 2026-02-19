import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  const explicitBase = process.env.VITE_BASE_PATH;
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
  const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

  return {
    plugins: [react()],
    // GitHub Pages project site base path (e.g. /TerraSushi/) in CI.
    // Override with VITE_BASE_PATH if needed (custom domain/root deploy).
    base: explicitBase || (isGitHubActions && repoName ? `/${repoName}/` : '/')
  };
});
