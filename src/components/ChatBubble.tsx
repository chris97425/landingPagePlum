"use client";

import React from "react";
import Image from 'next/image';

export const ChatBubble: React.FC = () => {
  return (
    <section className="chat-bubble-container">
      <Image
        src="/avatarIa.png"
        alt="Chat avatar"
        width={40}
        height={40}
        className="chat-avatar"
      />
    

      <div className="chat-bubble">
      <Image
        src="/encoche.png"
        alt="Chat avatar"
        width={32}
        height={32}
        className="encoche"
      />
        Hello !
      </div>
    </section>
  );
}; 