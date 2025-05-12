'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import posthog from 'posthog-js';
import { useEffect } from 'react';

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  // Initialiser PostHog seulement côté client et une seule fois
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.posthog) {
      posthog.init('phc_2dFGpzn00XWYCpPChSeO0FsDYTEi86td9IzmQ8UWbOu', {
        api_host: 'https://eu.i.posthog.com',
        loaded: (posthog) => {
          console.log('PostHog chargé:', posthog);
        }
      });
      
      // Rendre disponible globalement pour débogage
      window.posthog = posthog;
    }
  }, []);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Suivre les changements de page
  useEffect(() => {
    if (typeof window !== 'undefined' && window.posthog && pathname) {
      let url = window.origin + pathname;
      if (searchParams.toString()) {
        url = url + `?${searchParams.toString()}`;
      }
      window.posthog.capture('$pageview', {
        $current_url: url,
      });
    }
  }, [pathname, searchParams]);

  return <>{children}</>;
}

// Ajout pour TypeScript - déclaration d'interface pour window
declare global {
  interface Window {
    posthog?: typeof posthog;
  }
}