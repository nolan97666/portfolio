# 🚀 Portfolio Personnel - Nolan MAHADALI

Portfolio one-page premium, immersif et responsive pour étudiant ingénieur INSA Lyon.

## ✨ Caractéristiques

- **Design Premium** : Identité visuelle cyber/sécurité/réseau élégante et professionnelle
- **Responsive** : Parfaitement optimisé pour desktop, tablette et mobile
- **Animations Fluides** : Utilisation de Framer Motion pour des transitions smooth
- **Curseur Personnalisé** : Curseur animé cohérent avec le thème
- **Smooth Scroll** : Navigation fluide entre les sections
- **Vidéo Background** : Hero section avec fond vidéo immersif
- **Code Propre** : Architecture modulaire et maintenable

## 🛠️ Stack Technologique

- **React 18** - Framework UI
- **Vite** - Build tool et dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animations déclaratives
- **Lucide React** - Icônes modernes
- **PostCSS + Autoprefixer** - Traitement CSS avancé

## 📁 Structure du Projet

```
portfolio-nolan/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Navigation fixe avec smooth scroll
│   │   ├── Hero.jsx                # Section hero avec vidéo background
│   │   ├── Profile.jsx             # Présentation et formation
│   │   ├── Skills.jsx              # Compétences organisées
│   │   ├── Experiences.jsx         # Timeline des expériences
│   │   ├── Contact.jsx             # Section contact interactive
│   │   └── CustomCursor.jsx        # Curseur personnalisé
│   ├── styles/
│   │   └── globals.css             # Styles globaux et animations
│   ├── assets/
│   │   └── images/
│   │       ├── background_cyber.mp4 # Vidéo hero
│   │       └── photo cv             # Photo de profil
│   ├── App.jsx                     # Composant principal
│   ├── index.css                   # Imports Tailwind
│   └── main.jsx                    # Point d'entrée React
├── public/                         # Assets statiques
├── index.html                      # HTML principal
├── package.json                    # Dépendances
├── vite.config.js                  # Configuration Vite
├── tailwind.config.js              # Configuration Tailwind
├── postcss.config.js               # Configuration PostCSS
└── README.md                       # Cette documentation
```

## 🚀 Installation et Lancement

### Prérequis
- Node.js 16+ et npm/yarn

### Étapes

1. **Installer les dépendances**
```bash
cd portfolio-nolan
npm install
```

2. **Lancer le serveur de développement**
```bash
npm run dev
```
Le site s'ouvrira automatiquement sur http://localhost:3000

3. **Build pour la production**
```bash
npm run build
```

Les fichiers optimisés seront dans le dossier `dist/`

## 🎨 Palette de Couleurs

| Couleur | Code | Usage |
|---------|------|-------|
| Dark 900 | #0a0a12 | Fond principal |
| Dark 800 | #0f0f1a | Fond secondaire |
| Cyan Glow | #00f0ff | Accents primaires |
| Blue Electric | #0080ff | Gradients |
| Green Glow | #00ff41 | Accents secondaires |

## 📱 Sections

### 1. Hero
- Vidéo background immersive
- Présentation percutante
- CTA élégants
- Indicateur de scroll

### 2. Profile
- Présentation personnelle
- Formation académique
- Langues (avec progression visuelle)
- Photo optimisée

### 3. Skills
- Catégories de compétences
- Cartes interactives extensibles
- Badges technologiques
- Organisation logique

### 4. Experiences
- Timeline bidirectionnelle
- Détails des postes occupés
- Compétences acquises
- Localisation et périodes

### 5. Contact
- Coordonnées facilement copiables
- CTA principal attractif
- Formulaire intégré (optionnel)
- Information de footer

## ⌨️ Interactions Principales

- **Navbar** : Fixe en haut, devient glassmorphism au scroll
- **Smooth Scroll** : Navigation fluide vers les sections
- **Hover States** : Animations légères sur tous les éléments interactifs
- **Curseur Personnalisé** : Réactif aux hover buttons et liens
- **Mobile Menu** : Menu hamburger optimal en responsive

## 🎬 Animations

Toutes les animations utilisent Framer Motion pour :
- Apparition progressive des sections
- Hover effects premium
- Transitions fluides
- Stagger animations organisées

## 🔧 Personnalisation

### Modifier les couleurs
Éditer `tailwind.config.js` dans la section `colors`

### Modifier les textes
Les textes sont dans chaque composant, facilement modifiables

### Ajouter des sections
1. Créer un nouveau composant dans `src/components/`
2. L'importer dans `App.jsx`
3. Ajouter l'entrée navbar correspondante

### Remplacer les assets
- Vidéo : `src/assets/images/background_cyber.mp4`
- Photo : `src/assets/images/photo cv`

## 📊 Performance

- Build taille optimisée avec Vite
- CSS minifié avec Tailwind
- Images optimisées
- Code splitting automatique
- Lazy loading des composants possibles

## 🔐 Responsivité

Breakpoints utilisés :
- `sm` : 640px (tablettes/petits écrans)
- `md` : 768px (écrans medium)
- `lg` : 1024px (desktop standard)
- `xl` : 1280px (grand desktop)

## 📝 Licence

© 2025 Nolan MAHADALI - Tous droits réservés

## 🤝 Support

Pour toute question ou problème, consulter la documentation ou contacter directement via les informations de contact disponibles sur le portfolio.

---

Développé avec ❤️ et passion pour la technologie.
