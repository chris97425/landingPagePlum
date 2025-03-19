"use client";

import React from "react";

export const CTASection: React.FC = () => {
  return (
    <section className="flex gap-4 items-center p-6 mt-12 bg-[#0088FF] rounded-[30px] max-w-[424px] w-full">
      <div className="flex items-center gap-4">
        <div className="text-4xl">
          <span role="img" aria-label="QR Code">
            📱
          </span>
        </div>
        <div className="text-white">
          <h2 className="font-semibold text-lg">
            L&apos;application bientôt disponible
          </h2>
          <p className="text-sm opacity-90">
            Scanner pour télécharger
          </p>
        </div>
      </div>
    </section>
  );
}; 