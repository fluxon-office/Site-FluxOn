import { useEffect, useRef, useCallback } from 'react';

export function useScrollReveal() {
  const observerRef = useRef(null);

  const observeAll = useCallback(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.12 }
      );
    }

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
      if (!el.classList.contains('visible') && !el.dataset.observed) {
        el.classList.add('visible');
        el.dataset.observed = 'true';
      }
    });
  }, []);

  useEffect(() => {
    observeAll();
    // Also observe after a short delay (for components that render later)
    const timeout = setTimeout(observeAll, 500);
    return () => {
      clearTimeout(timeout);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [observeAll]);

  return observeAll;
}
