# Portfolio One-Page — Aurélie Chea
> **Chef de Projet Web & Product Owner**

Site portfolio one-page moderne, épuré, accessible (WCAG AA/AAA) et sans dépendance lourde, conçu en **HTML5 sémantique, CSS moderne et JavaScript Vanilla**.

---

## 🎨 Direction Artistique & Caractéristiques
- **Palette** : Chaleureuse & élégante (écru/beige doux `#FBF9F5`, texte charbon `#242325`, touches terracotta `#B85D43` et rose poudré subtil inspiré du CV).
- **Typographie** : Sans-serif moderne (*Plus Jakarta Sans* avec fallbacks système fluides).
- **Navigation** : One-page avec défilement fluide, ancres et indicateur actif en temps réel (*Scrollspy*).
- **Accessibilité (a11y)** : Lien d'évitement (*Skip Link*), hiérarchie sémantique stricte, conformité des contrastes, support clavier complet (`Tab`, `Escape`) et modale accessible avec piège de focus.

---

## 🧭 Les 5 Sections du Site
1. **Hero (`#hero`)** : Accroche synthétique, badges de spécialités, CTA vers les réalisations, le contact et le CV, cadre photo épuré avec pastilles d'impact (*"10+ projets pilotés en agence"*, *"3 Ans D'expérience"*).
2. **Mon CV (`#cv`)** :
   - Expériences professionnelles (Marketing Tactics 2022-2025, Axalone France 2021-2022) avec missions détaillées.
   - Formations académiques (Master Cultures & Métiers du Web, Licence Pro Multimédia, DUT Informatique).
   - Boîte à outils catégorisée (Gestion & Agile, CMS WordPress/Drupal/Joomla, UI/UX Figma, SEO, Code HTML/CSS/PHP/JS/SQL).
3. **Mes projets (`#projets`)** : 4 études de cas représentatives avec filtres de catégories, maquettes vectorielles élégantes et modale détaillée interactive (Problématique > Rôle PM/PO > Actions > Résultats & KPIs).
4. **À propos (`#a-propos`)** : Parcours détaillé, 4 piliers méthodologiques (Cadrage, Agile, Coordination, SEO) et soft skills issus de vos passions (natation inter-régionale, taekwondo, arts, langues).
5. **Me contacter (`#contact`)** : Coordonnées directes (email cliquable avec bouton copier, localisation Noisy-le-Grand / Île-de-France, lien LinkedIn direct), et formulaire accessible avec validation.

---

## 🚀 Comment visualiser et tester le site
Vous pouvez ouvrir directement le site dans n'importe quel navigateur :
1. **Méthode directe** : Double-cliquez sur le fichier `index.html` dans le Finder.
2. **Méthode serveur local** (via le terminal dans ce dossier) :
   ```bash
   ruby -run -e httpd . -p 8000
   ```
   Puis ouvrez votre navigateur à l'adresse : `http://localhost:8000`

---

## 🛠️ Personnalisation facile

### 1. Ajouter votre vraie photo de profil
- Déposez votre photo dans le dossier `assets/images/` sous le nom `aurelie-chea.jpg` (ou `.png`).
- Dans `index.html`, modifiez simplement l'attribut `src` :
   ```html
   <img src="assets/images/aurelie-chea.jpg" alt="Portrait d'Aurélie Chea" class="hero-avatar-img" width="380" height="380">
   ```

### 2. Mettre à jour votre fichier CV PDF
- Déposez votre PDF final dans `assets/docs/` sous le nom `CV_Aurelie_Chea.pdf` (il remplacera le placeholder actuel). Tous les boutons de téléchargement du site pointent déjà directement vers ce fichier !

### 3. Remplacer ou enrichir les projets
- **Dans `index.html`** (section `#projets`) : vous pouvez modifier les titres, descriptions courtes, tags et métriques affichés sur les cartes.
- **Dans `assets/js/main.js`** (objet `projectsData`) : vous pouvez ajuster le texte détaillé qui s'ouvre dans la modale (contexte, rôle précis, actions et indicateurs chiffrés).
- **Images des projets** : Vous pouvez remplacer les maquettes vectorielles SVG dans `assets/images/` par vos propres captures d'écran (ex. `assets/images/projet-1.png`).

---

## 🌐 Déploiement en ligne (Gratuit)
Ce site étant 100% statique (HTML/CSS/JS pur), il peut être mis en ligne gratuitement en quelques secondes :
- **GitHub Pages** : Poussez ce dossier sur un dépôt GitHub et activez GitHub Pages dans les réglages.
- **Netlify / Vercel** : Glissez-déposez simplement ce dossier sur [Netlify Drop](https://app.netlify.com/drop).
