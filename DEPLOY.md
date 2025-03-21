# Guide de déploiement d'une application Next.js sur Cloudflare Pages

Ce guide détaillé vous explique comment déployer une application Next.js existante sur Cloudflare Pages, en tenant compte des pièges courants et de leurs solutions.

## Prérequis

- Un projet Next.js fonctionnel
- Un compte Cloudflare
- Node.js et npm installés
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) (installé via `npm install -g wrangler`)

## Étape 1 : Préparation du projet

### Installation des dépendances nécessaires

```bash
# Installer le paquet next-on-pages
npm install --save-dev @cloudflare/next-on-pages
```

### Configuration du fichier Wrangler

Créez un fichier `wrangler.toml` à la racine de votre projet :

```toml
name = "votre-projet-name"
compatibility_date = "2024-09-23"
compatibility_flags = ["nodejs_compat"]
pages_build_output_dir = ".vercel/output/static"
```

### Mise à jour de next.config.mjs

Modifiez ou créez votre fichier `next.config.mjs` : dans le projet on a déja le fichier `next.config`
il faut juste renommer l'extension et le mettre en [mjs] 
```javascript
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration pour les images
  images: {
    unoptimized: true, // Important pour Cloudflare Pages
  },
  // Autres configurations...
};

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

export default nextConfig;
```

## Étape 2 : Configuration des scripts de déploiement

Ajoutez ces scripts à votre fichier `package.json` :

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "pages:build": "npx @cloudflare/next-on-pages",
  "preview": "npm run pages:build && wrangler pages dev",
  "deploy": "npm run pages:build && cp -r public .vercel/output/static/ && wrangler pages deploy"
}
```

> **Important** : Le script `deploy` inclut une commande qui copie explicitement le dossier `public` vers le dossier de sortie, résolvant ainsi les problèmes courants d'images manquantes.

## Étape 3 : Préparation des ressources statiques

### Vérification des noms de fichiers d'images

Pour éviter les problèmes d'affichage des images :

1. Renommez les fichiers d'images pour supprimer les espaces et caractères spéciaux
   - Exemple : `mon image.png` → `mon-image.png`
   
2. Mettez à jour les références à ces images dans votre code
   ```jsx
   <Image
     src="/mon-image.png" // Nom correct sans espace
     alt="Description"
     width={100}
     height={100}
     unoptimized // Recommandé pour Cloudflare
   />
   ```

## Étape 4 : Runtime Edge pour les routes serveur

Si votre application contient des routes API ou des composants serveur avec `getServerSideProps`, assurez-vous qu'ils utilisent le runtime Edge :

```javascript
// Dans chaque fichier serveur
export const runtime = "edge";

// Exemple pour une route API
export const runtime = "edge";
export async function GET(request) {
  // Votre code ici
}
```

## Étape 5 : Déploiement

### Option 1 : Déploiement via la ligne de commande

```bash
# Déployez votre application
npm run deploy
```

### Option 2 : Déploiement via GitHub/GitLab (Je ne l'ai pas utiliser )

1. Poussez votre code vers un repository GitHub ou GitLab
2. Connectez-vous à votre tableau de bord Cloudflare
3. Allez dans Pages > Créer une application
4. Choisissez "Connecter à Git"
5. Sélectionnez votre repository
6. Configurez les paramètres de build :
   - Framework preset : Next.js
   - Build command : `npm run pages:build && cp -r public .vercel/output/static/`
   - Build output directory : `.vercel/output/static`
   - Node.js version : 18 (ou plus récent)
7. Cliquez sur "Sauvegarder et déployer"

## Étape 6 : Dépannage des problèmes courants

### Images manquantes

Si certaines images ne s'affichent pas après le déploiement :

1. **Vérifiez les noms de fichiers** : Assurez-vous qu'ils ne contiennent pas d'espaces ou de caractères spéciaux
2. **Inspectez la console** : Utilisez F12 pour voir les erreurs spécifiques
3. **Essayez des balises img standards** : Remplacez temporairement
   ```jsx
   <img 
     src="/mon-image.png" 
     alt="Description" 
     width="100" 
     height="100" 
   />
   ```
4. **Redéployez avec la commande cp explicite** : Assurez-vous d'utiliser le script qui copie explicitement le dossier public

### Site inaccessible après déploiement

Si vous obtenez une erreur "Site inaccessible" :

1. **Patientez quelques minutes** : La propagation sur le réseau CDN de Cloudflare peut prendre du temps
2. **Vérifiez les logs de déploiement** dans le tableau de bord Cloudflare
3. **Assurez-vous que toutes les routes serveur utilisent le runtime Edge**

## Étape 7 : Configuration d'un domaine personnalisé

1. Dans votre tableau de bord Cloudflare Pages, allez dans votre projet
2. Cliquez sur "Domaines personnalisés"
3. Ajoutez votre domaine et suivez les instructions pour la vérification
4. Configurez les enregistrements DNS appropriés

## Conseils supplémentaires

- **Limitations** : Soyez conscient des [limitations](https://developers.cloudflare.com/pages/platform/limits/) de Cloudflare Pages
- **Performance** : Utilisez les outils d'analyse de Cloudflare pour surveiller les performances de votre site
- **Adaptateur alternatif** : Pour les projets complexes, envisagez d'utiliser [@opennextjs/cloudflare](https://github.com/cloudflare/next-on-pages#opennextcloudflare-adapter)

---

Ce guide vous aidera à déployer efficacement votre application Next.js sur Cloudflare Pages tout en évitant les problèmes courants. Si vous rencontrez des difficultés, n'hésitez pas à consulter la [documentation officielle](https://developers.cloudflare.com/pages/framework-guides/nextjs/ssr/get-started/) ou à demander de l'aide.