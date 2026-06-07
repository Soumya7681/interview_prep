import { useSyncExternalStore } from "react";

// Client-side study progress, persisted in localStorage and exposed as an
// external store. Shared by the DSA checklist and the home dashboard, so a tick
// in one view is reflected in the other (and across browser tabs).

export const DSA_KEY = "dsa-progress-v1";

const EMPTY: ReadonlySet<number> = new Set();
let cache: Set<number> | null = null;
const listeners = new Set<() => void>();

function readStorage(): Set<number> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(DSA_KEY);
    if (!raw) return new Set();
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? new Set(arr.filter((n) => typeof n === "number")) : new Set();
  } catch {
    return new Set();
  }
}

function emit() {
  for (const l of listeners) l();
}

function handleStorage(e: StorageEvent) {
  if (e.key === DSA_KEY) {
    cache = null; // invalidate; next getSnapshot re-reads
    emit();
  }
}

function subscribe(cb: () => void): () => void {
  if (listeners.size === 0 && typeof window !== "undefined") {
    window.addEventListener("storage", handleStorage);
  }
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
    if (listeners.size === 0 && typeof window !== "undefined") {
      window.removeEventListener("storage", handleStorage);
    }
  };
}

// Must return a stable reference between renders unless the data changed,
// otherwise useSyncExternalStore loops. `cache` is only replaced on mutation.
function getSnapshot(): ReadonlySet<number> {
  if (cache === null) cache = readStorage();
  return cache;
}

function getServerSnapshot(): ReadonlySet<number> {
  return EMPTY;
}

function persist(next: Set<number>) {
  cache = next;
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(DSA_KEY, JSON.stringify([...next]));
    } catch {
      /* storage full or unavailable — fail silently */
    }
  }
  emit();
}

export function toggleDsa(id: number) {
  const next = new Set(getSnapshot());
  if (next.has(id)) next.delete(id);
  else next.add(id);
  persist(next);
}

export function clearDsa() {
  persist(new Set());
}

/** Subscribe a component to the persisted DSA progress set. */
export function useDsaProgress(): ReadonlySet<number> {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
