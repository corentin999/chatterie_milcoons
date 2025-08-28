# 🐾 Chatterie Milcoons

Site vitrine et outil d’administration pour la chatterie familiale Milcoons, développé en **Next.js** (React) et **Node.js**.  
Ce projet permet de présenter les chats/chatons disponibles, de gérer leur statut, et de faciliter les contacts, tout en offrant une interface d’administration sécurisée.

## ✨ Fonctionnalités principales

- Affichage des chats/chatons avec statut (“Disponible”, “Réservé”, etc.)
- Galerie photos, fiches détaillées
- Formulaire de contact
- Interface d'administration sécurisée (ajout/modification/suppression des chats/chatons, gestion du statut)
- Design responsive (mobile/tablette/desktop)

## 🛠️ Stack technique

- [Next.js](https://nextjs.org/) (React)
- Node.js (API/Backend)
- Base de données : MongoDB ou PostgreSQL (à préciser)
- Authentification : NextAuth.js ou JWT
- UI : Tailwind CSS (ou Chakra UI/Material UI selon choix)
- Déploiement : Vercel ou autre

## 🚀 Lancer le projet en local

1. **Cloner le repo**
   ```bash
   git clone https://github.com/corentin999/chatterie_milcoons.git
   cd chatterie_milcoons
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement**
   - Copier `.env.example` en `.env.local` et compléter les valeurs nécessaires (base de données, secrets, etc.)

4. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

5. **Accéder au site**
   - Public : [http://localhost:3000](http://localhost:3000)
   - Admin : [http://localhost:3000/admin](http://localhost:3000/admin) (connexion requise)

## 🔒 Sécurité

- L’interface d’administration est protégée par authentification.
- **Ne jamais commiter d’identifiants ou secrets dans le dépôt public.**
- Voir `.env.example` pour la configuration locale.

## 📱 Responsive Design

Le site est 100% responsive, adapté à tous les appareils.

## 📂 Structure du projet (exemple)

```
.
├── components/
├── pages/
│   ├── index.tsx
│   ├── chats/
│   └── admin/
├── public/
├── styles/
├── utils/
├── lib/
├── README.md
├── .env.example
└── ...
```

## 📝 Licence

Projet open-source à but non commercial, pour portfolio et usage familial.

---

**Développé par [corentin999](https://github.com/corentin999)**