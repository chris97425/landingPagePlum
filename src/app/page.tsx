"use client";

import * as React from "react";
import Image from "next/image"
import { ChatBubble } from "@/components/ChatBubble";

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

  return (
    <main className="main-content">
      {/* Logo */}
      <Image 
        src="/plum_logo.svg"
        alt="Plüm Logo"
        width={320}
        height={90}
        className="logo"
        priority
      />
        <ChatBubble />

      <div className="page-container">  
      {/* Chat Bubble */}

      {/* Main Title */}
      
      <div className="main-title-container">
      {!isMobile &&
      <h1 className="main-title">
        <span>Uber</span> vous a déposé au restaurant,<br />
        mais qui a gardé vos enfants?
      </h1>
      }
       {isMobile &&
      <h1 className="main-title">
        <span>Uber</span> vous a déposé<br /> au restaurant,<br />
        mais qui a gardé <br />vos enfants?
      </h1>
      }

      

      {/* Subtitle */}
      <p className="subtitle">
        Garde d&apos;enfants, garde d&apos;animaux, ménage... <br /><b>plüm</b> adoucit votre journée.
      </p>

      {/* QR Code Section - Desktop */}
      {!isMobile && (
        <div className="qr-container">
          <Image
            src="/qr-code 1.png"
            alt="QR Code"
            width={80}
            height={80}
          />
          <div className="qr-text">
            <span className="qr-title">L&apos;application bientôt disponible</span>
            <span className="qr-subtitle">Scanner pour télécharger</span>
          </div>
        </div>
      )}

      {/* QR Container - Mobile */}
      {isMobile && (
        <div className="qr-container">
          <span className="qr-title">L&apos;application plüm bientôt disponible ⏳</span>
        </div>
      )}
      </div>
   
      </div>
         {/* Store Buttons */}
         <div className="store-buttons">
        <Image
          src="/Apple - Google play.png"
          alt="App Store and Google Play buttons"
          width={300}
          height={40}
          className="store-buttons-image"

        />
      </div>
    </main>
  );
} 