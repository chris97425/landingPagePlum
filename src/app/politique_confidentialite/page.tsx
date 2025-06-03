"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function PolitiqueConfidentialite() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <>
      <Head>
        <title>Politique de confidentialité – Plüm</title>
        <meta
          name="description"
          content="Politique de confidentialité de l'application Plüm. Découvrez comment vos données sont collectées, utilisées et protégées."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
        {/* Header */}
        <header style={{ 
          backgroundColor: 'white', 
          borderBottom: '1px solid #e5e7eb', 
          position: 'sticky', 
          top: 0, 
          zIndex: 50, 
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' 
        }}>
          <div style={{ 
            maxWidth: '80rem', 
            margin: '0 auto', 
            padding: '0 1rem' 
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: isMobile ? 'space-between' : 'space-between', 
              paddingTop: '1rem', 
              paddingBottom: '1rem',
              position: 'relative'
            }}>
              {/* Back button */}
              <Link
                href="/"
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  fontSize: isMobile ? '0' : '0.875rem', 
                  fontWeight: '500', 
                  color: '#374151', 
                  textDecoration: 'none',
                  transition: 'color 0.2s ease-in-out',
                  padding: isMobile ? '0.5rem' : '0'
                }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = '#7c3aed'}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = '#374151'}
              >
                <svg style={{ width: '1.25rem', height: '1.25rem', marginRight: isMobile ? '0' : '0.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                {!isMobile && 'Accueil'}
              </Link>

              {/* Logo - centered on mobile */}
              <Link href="/" style={{
                position: isMobile ? 'absolute' : 'static',
                left: isMobile ? '50%' : 'auto',
                transform: isMobile ? 'translateX(-50%)' : 'none'
              }}>
                <Image
                  src="/plum-noir.svg"
                  alt="Plüm Logo"
                  width={isMobile ? 200 : 300}
                  height={isMobile ? 55 : 80}
                  priority
                  style={{ cursor: 'pointer' }}
                />
              </Link>

              {/* Spacer for mobile to maintain layout */}
              {isMobile && <div style={{ width: '1.25rem' }}></div>}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main style={{ 
          maxWidth: '80rem', 
          margin: '0 auto', 
          padding: '3rem 1rem' 
        }}>
          <h1 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            color: '#111827', 
            marginBottom: '1rem' 
          }}>
            Politique de confidentialité de l&apos;application <em>Plüm</em>
          </h1>
          <p style={{ 
            fontSize: '0.875rem', 
            color: '#6b7280', 
            marginBottom: '2rem' 
          }}>
            Dernière mise à jour : 03 Juin 2025
          </p>

          <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h2 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                color: '#1f2937', 
                marginBottom: '1rem' 
              }}>
                1. Introduction
              </h2>
              <p style={{ 
                color: '#4b5563', 
                lineHeight: '1.625', 
                marginBottom: '1rem' 
              }}>
                La présente politique de confidentialité explique comment nous collectons, utilisons,
                partageons et protégeons vos données personnelles lorsque vous utilisez l&apos;application <em>Plüm</em>,
                éditée par <strong>Plüm</strong>, immatriculée sous le numéro <strong>932 432 263 00014</strong> et domiciliée à
                VILLA A2, 16 RUE EUGENE DAYOT (ST GILLES), 97434 SAINT-PAUL.
              </p>
            </div>

            <div>
              <h2 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                color: '#1f2937', 
                marginBottom: '1rem' 
              }}>
                2. Données collectées
              </h2>
              <p style={{ 
                color: '#4b5563', 
                lineHeight: '1.625', 
                marginBottom: '1rem' 
              }}>
                Lors de l&apos;utilisation de l&apos;application <em>Plüm</em>, nous pouvons être amenés à collecter les types de données suivants :
              </p>
              <ul style={{ 
                listStyleType: 'disc', 
                paddingLeft: '1.25rem', 
                color: '#4b5563', 
                lineHeight: '1.625' 
              }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>Informations personnelles :</strong> nom, prénom, adresse e-mail, numéro de téléphone.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Informations de localisation :</strong> uniquement avec votre consentement explicite.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Données de connexion :</strong> adresse IP, identifiants de session, type d&apos;appareil.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Données d&apos;usage :</strong> actions dans l&apos;application, temps de navigation, préférences.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Données de paiement :</strong> via des prestataires tiers sécurisés (Stripe, Apple Pay, etc.).</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Données Google utilisateur :</strong> récupérées via la connexion Google (nom, adresse e-mail, photo de profil), exclusivement pour la gestion de votre compte utilisateur.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                color: '#1f2937', 
                marginBottom: '1rem' 
              }}>
                3. Finalités du traitement
              </h2>
              <p style={{ 
                color: '#4b5563', 
                lineHeight: '1.625', 
                marginBottom: '1rem' 
              }}>
                Ces données sont collectées pour :
              </p>
              <ul style={{ 
                listStyleType: 'disc', 
                paddingLeft: '1.25rem', 
                color: '#4b5563', 
                lineHeight: '1.625' 
              }}>
                <li style={{ marginBottom: '0.5rem' }}>Fournir et améliorer nos services.</li>
                <li style={{ marginBottom: '0.5rem' }}>Permettre l&apos;inscription et la gestion du compte utilisateur.</li>
                <li style={{ marginBottom: '0.5rem' }}>Assurer le support client.</li>
                <li style={{ marginBottom: '0.5rem' }}>Envoyer des notifications pertinentes.</li>
                <li style={{ marginBottom: '0.5rem' }}>Se conformer à nos obligations légales.</li>
                <li style={{ marginBottom: '0.5rem' }}>Authentifier et identifier les utilisateurs via leur compte Google.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                color: '#1f2937', 
                marginBottom: '1rem' 
              }}>
                4. Base légale
              </h2>
              <p style={{ 
                color: '#4b5563', 
                lineHeight: '1.625', 
                marginBottom: '1rem' 
              }}>
                Conformément au RGPD, les bases légales du traitement sont :
              </p>
              <ul style={{ 
                listStyleType: 'disc', 
                paddingLeft: '1.25rem', 
                color: '#4b5563', 
                lineHeight: '1.625' 
              }}>
                <li style={{ marginBottom: '0.5rem' }}>L&apos;exécution du contrat (utilisation de l&apos;app).</li>
                <li style={{ marginBottom: '0.5rem' }}>Le consentement de l&apos;utilisateur (notifications, géolocalisation).</li>
                <li style={{ marginBottom: '0.5rem' }}>L&apos;intérêt légitime (amélioration du service).</li>
                <li style={{ marginBottom: '0.5rem' }}>Le respect des obligations légales.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                color: '#1f2937', 
                marginBottom: '1rem' 
              }}>
                5. Partage des données
              </h2>
              <p style={{ 
                color: '#4b5563', 
                lineHeight: '1.625', 
                marginBottom: '1rem' 
              }}>
                Nous ne vendons jamais vos données. Elles peuvent être partagées uniquement avec :
              </p>
              <ul style={{ 
                listStyleType: 'disc', 
                paddingLeft: '1.25rem', 
                color: '#4b5563', 
                lineHeight: '1.625',
                marginBottom: '1rem' 
              }}>
                <li style={{ marginBottom: '0.5rem' }}>Des prestataires de services techniques (Firebase, Supabase, Stripe, Google).</li>
                <li style={{ marginBottom: '0.5rem' }}>Les autorités compétentes en cas d&apos;obligation légale.</li>
              </ul>
              <p style={{ 
                color: '#4b5563', 
                lineHeight: '1.625' 
              }}>
                Nous ne partageons, ne divulguons, ni ne revendons vos données Google à des tiers à des fins de publicité ciblée,
                d&apos;entraînement de modèles d&apos;IA ou d&apos;analyse marketing.
              </p>
            </div>

            <div>
              <h2 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                color: '#1f2937', 
                marginBottom: '1rem' 
              }}>
                6. Stockage et sécurité
              </h2>
              <p style={{ 
                color: '#4b5563', 
                lineHeight: '1.625' 
              }}>
                Vos données sont stockées de manière sécurisée sur nos serveurs et/ou ceux de nos partenaires certifiés.
                Nous appliquons toutes les mesures nécessaires (chiffrement, authentification forte, etc.)
                pour garantir leur confidentialité, intégrité et disponibilité.
              </p>
            </div>

            <div>
              <h2 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                color: '#1f2937', 
                marginBottom: '1rem' 
              }}>
                7. Durée de conservation
              </h2>
              <p style={{ 
                color: '#4b5563', 
                lineHeight: '1.625' 
              }}>
                Les données sont conservées uniquement le temps nécessaire à la finalité du traitement ou selon la loi.
                Vous pouvez à tout moment demander la suppression de vos données.
              </p>
            </div>

            <div>
              <h2 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                color: '#1f2937', 
                marginBottom: '1rem' 
              }}>
                8. Vos droits
              </h2>
              <p style={{ 
                color: '#4b5563', 
                lineHeight: '1.625', 
                marginBottom: '1rem' 
              }}>
                Conformément à la réglementation, vous disposez des droits suivants :
              </p>
              <ul style={{ 
                listStyleType: 'disc', 
                paddingLeft: '1.25rem', 
                color: '#4b5563', 
                lineHeight: '1.625',
                marginBottom: '1rem' 
              }}>
                <li style={{ marginBottom: '0.5rem' }}>Accès à vos données</li>
                <li style={{ marginBottom: '0.5rem' }}>Rectification ou suppression</li>
                <li style={{ marginBottom: '0.5rem' }}>Opposition ou limitation du traitement</li>
                <li style={{ marginBottom: '0.5rem' }}>Portabilité</li>
                <li style={{ marginBottom: '0.5rem' }}>Retrait du consentement à tout moment</li>
              </ul>
              <p style={{ 
                color: '#4b5563', 
                lineHeight: '1.625' 
              }}>
                Pour exercer vos droits, contactez-nous à : <strong>contact@plumservices.fr</strong>
              </p>
            </div>

            <div>
              <h2 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                color: '#1f2937', 
                marginBottom: '1rem' 
              }}>
                9. Cookies et technologies similaires
              </h2>
              <p style={{ 
                color: '#4b5563', 
                lineHeight: '1.625' 
              }}>
                L&apos;application peut utiliser des cookies ou outils similaires à des fins d&apos;analyse ou de performance.
                Vous pouvez les désactiver dans les paramètres de votre appareil.
              </p>
            </div>

            <div>
              <h2 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                color: '#1f2937', 
                marginBottom: '1rem' 
              }}>
                10. Modifications
              </h2>
              <p style={{ 
                color: '#4b5563', 
                lineHeight: '1.625' 
              }}>
                Cette politique peut être mise à jour. La dernière version est disponible sur :
                <br />
                <a
                  href="https://plumservices.fr/politique_confidentialite"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    color: '#7c3aed', 
                    textDecoration: 'none' 
                  }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.textDecoration = 'underline'}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.textDecoration = 'none'}
                >
                  https://plumservices.fr/politique_confidentialite
                </a>
              </p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer style={{ 
          borderTop: '1px solid #e5e7eb', 
          backgroundColor: '#e5e7eb' 
        }}>
          <div style={{ 
            maxWidth: '80rem', 
            margin: '0 auto', 
            padding: '2rem 1rem', 
            textAlign: 'center' 
          }}>
            <p style={{ 
              fontSize: '0.875rem', 
              color: '#4b5563', 
              marginBottom: '0.5rem' 
            }}>
              Ce document constitue notre politique de confidentialité officielle
            </p>
            <p style={{ 
              fontSize: '0.75rem', 
              color: '#111827' 
            }}>
              © 2025 Plüm Services — Tous droits réservés
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}