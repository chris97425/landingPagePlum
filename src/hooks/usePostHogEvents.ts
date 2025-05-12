'use client';

export function usePostHogEvents() {
  const trackDownloadClick = (source: 'scanner' | 'google_play' | 'app_store', properties?: Record<string, string>) => {
    if (typeof window !== 'undefined' && window.posthog) {
      console.log("Tracking download click:", source, properties);
      window.posthog.capture('app_download_click', {
        download_source: source,
        ...properties,
      });
    } else {
      console.error("PostHog n'est pas initialisé");
    }
  };

  return {
    trackDownloadClick,
  };
}