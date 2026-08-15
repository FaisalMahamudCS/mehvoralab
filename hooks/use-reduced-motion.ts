'use client'

import { useSyncExternalStore } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(QUERY)
  mq.addEventListener('change', onChange)
  return () => mq.removeEventListener('change', onChange)
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches
}

// The server cannot read media queries. Assume motion is allowed so the
// server markup matches the first client paint in the common case.
function getServerSnapshot() {
  return false
}

/**
 * Reads the user's reduced-motion preference and re-renders when it changes.
 * useSyncExternalStore rather than useEffect + setState: the value is external
 * browser state, so subscribing avoids the extra cascading render.
 */
export function useReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
