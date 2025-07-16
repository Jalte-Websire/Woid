"use client";

import { useState } from 'react';
import styles from './MessengerBubble.module.css';

export default function MessengerBubble() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.bubbleWrapper}>
      <button 
        className={`${styles.bubble} ${isExpanded ? styles.expanded : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className={styles.bubbleContent}>
          <div className={styles.onlineIndicator}>
            <div className={styles.onlineDot}></div>
            <div className={styles.onlineRing}></div>
          </div>
          
          <svg 
            className={styles.messageIcon} 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M21 11.5C21 16.1944 16.9706 20 12 20C10.5174 20 9.1257 19.6637 7.89878 19.0724C7.40705 18.8648 7.16119 18.7611 7.0572 18.7314C6.95321 18.7017 6.88266 18.6875 6.7663 18.6923C6.64994 18.6971 6.51997 18.7357 6.26003 18.8128L3.66667 19.5C3.0758 19.6665 2.78036 19.7498 2.59796 19.6814C2.43868 19.6214 2.31857 19.5013 2.25861 19.342C2.19024 19.1596 2.27357 18.8642 2.44024 18.2733L3.12719 15.6467C3.20433 15.3868 3.2429 15.2568 3.24768 15.1405C3.25245 15.0241 3.23821 14.9536 3.20851 14.8496C3.17882 14.7456 3.0751 14.4997 2.86765 14.008C2.30932 12.7811 2 11.393 2 10C2 5.30558 6.02944 1.5 11 1.5C11.1605 1.5 11.3198 1.50391 11.4778 1.51157M21 11.5C21 11.3395 20.9961 11.1802 20.9884 11.0222M21 11.5C21 11.6605 20.9961 11.8198 20.9884 11.9778M20.9884 11.0222C20.9083 6.54255 17.203 2.92079 12.5 2.51157M20.9884 11.0222C20.9917 11.0815 20.9942 11.1408 20.9959 11.2002M12.5 2.51157C12.1679 2.47467 11.8278 2.45585 11.4778 2.51157M12.5 2.51157C12.1476 2.48467 11.8179 2.47585 11.4778 2.51157" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>

          {isExpanded && (
            <span className={styles.bubbleText}>Chat med os</span>
          )}
        </div>
      </button>

      {isExpanded && (
        <div className={styles.chatPreview}>
          <div className={styles.chatHeader}>
            <div className={styles.headerInfo}>
              <h3>Woid Support</h3>
              <span className={styles.onlineStatus}>Online</span>
            </div>
            <button 
              className={styles.closeButton}
              onClick={() => setIsExpanded(false)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div className={styles.chatBody}>
            <div className={styles.welcomeMessage}>
              <p>👋 Hej! Hvordan kan vi hjælpe dig?</p>
              <p className={styles.responseTime}>Typisk svartid: Under 5 minutter</p>
            </div>
          </div>
          <div className={styles.chatFooter}>
            <input 
              type="text" 
              placeholder="Skriv en besked..." 
              className={styles.chatInput}
            />
            <button className={styles.sendButton}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 