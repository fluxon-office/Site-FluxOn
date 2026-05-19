export function trackEvent(action, category, label) {
  try {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
      });
    }
  } catch { /* silently fail if analytics not loaded */ }
}
