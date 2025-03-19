"use client";

import * as React from "react";
import Image from 'next/image'
import { ChatBubble } from "@/components/ChatBubble";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <main className="main-content">
      {/* Logo */}
      <Image 
        src="/plum_logo_noir.svg"
        alt="Plüm Logo"
        width={300}
        height={80}
        className="logo"
        priority
      />
        <ChatBubble />

      <div className="page-container">  
      {/* Chat Bubble */}

      {/* Main Title */}
      <div className="main-title-container">
      <h1 className="main-title">
        <span>Uber</span> vous a déposé au restaurant,<br />
        mais qui a gardé vos enfants?
      </h1>

      {/* Subtitle */}
      <p className="subtitle">
        Cuisine, babysitting, ménage...Plüm adoucit votre journée.
      </p>

      {/* QR Code Section */}
      <div className="qr-container">
        <Image
          src="/qr-code 1.png"
          alt="QR Code"
          width={80}
          height={80}
        />
        <div className="qr-text">
          <span className="qr-title">L'application bientôt disponible</span>
          <span className="qr-subtitle">Scanner pour télécharger</span>
        </div>
      </div>
      </div>
      {/* Store Buttons */}
      <div className="store-buttons">
        <Image
          src="/Apple - Google play.png"
          alt="App Store and Google Play buttons"
          width={300}
          height={40}
        />
      </div>
      </div>
    </main>
  );
} 