"use client";

import * as React from "react";
import Image from "next/image"
import { ChatBubble } from "@/components/ChatBubble";
import posthog from 'posthog-js';

export default function Home() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 500);
    };
    
    // Check initially
    checkIfMobile();
    
    // Add event listener
    window.addEventListener("resize", checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const handleRecruitmentClick = (e: React.MouseEvent) => {
    posthog.capture('surveyRecrutement');
  };

  return (
    <main className="main-content">
      {/* Logo */}
      <Image 
        src="/plum-noir.svg"
        alt="Plüm Logo"
        width={360}
        height={100}
        className="logo"
        priority
      />
        <ChatBubble />

      <div className="page-container">  
      {/* Chat Bubble */}

      {/* Main Title */}
      
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <div className="box-location">
          <Image 
            src="/location.svg"
            alt="Location icon"
            width={16}
            height={16}
            style={{ marginRight: '4px' }}
          />
          <span style={{ fontSize: '14px' }}>Saint-Denis </span>
        </div>
        <div className="box-location">
          <Image 
            src="/location.svg"
            alt="Location icon"
            width={16}
            height={16}
            style={{ marginRight: '4px' }}
          />
          <span style={{ fontSize: '14px' }}>Saint-Paul </span>
        </div>
      </div>
      <div className="main-title-container">
      {!isMobile &&
      <h1 className="main-title">
        plüm recrute à la Réunion :)
      </h1>
      }
       {isMobile &&
      <h1 className="main-title">
        plüm recrute à la Réunion :)
      </h1>
      }

      

      {/* Subtitle */}
      <p className="subtitle">
        Garde d&apos;enfants, ménage & linge... <br />Nous recrutons notre première équipe de prestataires.
      </p>

      <a href="https://plumservices.typeform.com/recrutement?utm_source=website" className="button-link" onClick={handleRecruitmentClick}>
      <div className="button-container">
          <div className="qr-text">
            <span className="qr-title-button">Rejoignez l'aventure!</span>
          </div>
        </div>
      </a>

    
      </div>
   
      </div>
         {/* Store Buttons */}
         <div className="store-buttons">
        <Image
          src="/apple-google-play.png"
          alt="App Store and Google Play buttons"
          width={300}
          height={40}
          className="store-buttons-image"

        />
      </div>
    </main>
  );
} 