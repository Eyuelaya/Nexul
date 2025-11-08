// Vite server helpers removed.
// The project has been converted to a static-only frontend. If you need
// to re-enable server-side Vite integration, restore the original
// implementation from version control.

export function log() {
  // no-op
}

export async function setupVite() {
  throw new Error("backend removed: setupVite is not available");
}

export function serveStatic() {
  throw new Error("backend removed: serveStatic is not available");
}
