# caterium.fr

Site de la marque Caterium, en Astro (pages statiques) avec un formulaire PHP.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère dist/
npm run preview  # prévisualise dist/ (le formulaire PHP ne fonctionne qu'en ligne)
```

## Où modifier quoi

| Besoin | Fichier |
| --- | --- |
| E-mail, nom, photo, mentions légales, hébergeur, Matomo | `src/config.ts` |
| Couleurs, typographies, boutons, grille de fond | `src/styles/global.css` (variables en haut) |
| Logo « La jauge » | `src/components/Logo.astro` et `public/favicon.svg` |
| Gammes (prix, contenu, FAQ, étapes, exemple) | `src/content/gammes/*.md` |
| Tableau comparatif des gammes | `src/pages/gammes/index.astro` |
| Panneau animé de l'accueil | `src/components/HeroPanel.astro` |
| Calculateur du temps perdu | `src/pages/calculateur.astro` |
| Clins d'œil cachés (console, logo) | `src/components/EasterEggs.astro` |
| Menu | `NAV` dans `src/config.ts` |
| Formulaire (destinataire, anti-spam, sujets) | `public/contact.php` |
| Sécurité, HTTPS, cache | `public/.htaccess` |

## Les gammes

- **Observation** (étape 0) : diagnostic, 600 €, déduits si le client signe une gamme sous 3 mois.
- **Constructor** (1 entrée) : automatiser une tâche, à partir de 1 200 €.
- **Assembler** (2 entrées, recommandée) : connecter deux outils, à partir de 3 500 €.
- **Manufacturer** (3 entrées et plus) : logiciel métier complet, à partir de 7 500 €.
- **Radar** (option) : visibilité (SEO technique, fiche Google), à partir de 600 €, puis 150 €/mois en option.
- Inclus partout : 3 mois de maintenance. Ensuite, abonnement de suivi 150 / 300 / 500 €/mois sans engagement.

## Clins d'œil cachés

- Console du navigateur : `demarrer()`, `surcadencer()`, `aide()`.
- Page d'accueil : 5 clics rapides sur le logo passent la cadence à 250 % pendant 5 secondes.
- Page 404 : « Aucune ressource détectée à cet emplacement ».

## À compléter avant la mise en ligne

- [ ] `src/config.ts` : nom complet, statut, SIRET, adresse, assureur RC Pro, LinkedIn
- [ ] Choisir l'hébergeur (o2switch ou Hostinger, serveur en France ou dans l'UE) et mettre à jour `host` dans `src/config.ts`
- [ ] Faire relire les CGV (`src/pages/cgv.astro`) et retirer le bandeau « Brouillon »
- [ ] Créer l'adresse `contact@caterium.fr` et l'alias `formulaire@caterium.fr`
- [ ] Ajouter des captures anonymisées des outils sur la page Réalisations
- [ ] Renseigner l'URL Matomo (et l'ajouter à la CSP du `.htaccess` si autre domaine)
- [ ] Choisir PHP 8.1 ou plus chez l'hébergeur

## Déploiement

Chaque push sur `main` construit le site et l'envoie en FTPS (`.github/workflows/deploy.yml`).
Créer les secrets `FTP_SERVER`, `FTP_USERNAME` et `FTP_PASSWORD` dans GitHub, avec un compte FTP limité au dossier du site.
Fonctionne avec o2switch comme avec Hostinger (hébergement mutualisé avec accès FTP).

Après la mise en ligne : déclarer `https://caterium.fr/sitemap-index.xml` dans Google Search Console.

## Charte

- Encre `#12101A`, crème `#F8F5EE`, violet `#6D3BFF` (texte : `#5A2BE0`), orange `#FF6B1A` (texte : `#B8430A`).
- Titres : Space Grotesk. Texte : Inter. Repères techniques : JetBrains Mono. Polices auto-hébergées.
- Boutons et titres en aplats ; dégradés réservés aux graphiques et à la section des gammes.
