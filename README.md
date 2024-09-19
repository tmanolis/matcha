# Matcha

Ce projet contient une application web avec un frontend React, un backend utilisant le framework Nitro basé sur Node.js, une base de données PostgreSQL et pgAdmin pour la gestion de la base de données.

## Prérequis

- Docker
- Docker Compose

## Configuration

1. Créez un fichier `.env` à la racine du projet basé sur le modèle `.env.example`.
2. Remplissez le fichier `.env` avec vos propres valeurs pour les variables d'environnement.

## Démarrage des services

Pour lancer tous les services, exécutez la commande suivante à la racine du projet :

```bash
docker-compose up -d
```

## Accès aux services

- Frontend : http://localhost:5173
- Backend : http://localhost:3000
- pgAdmin : http://localhost:5050
  - Utilisez l'email et le mot de passe définis dans le fichier `.env`

## Connexion à la base de données via pgAdmin

1. Accédez à pgAdmin via http://localhost:5050
2. Connectez-vous avec les identifiants définis dans le fichier `.env`
3. Ajoutez un nouveau serveur avec les paramètres suivants :
   - Nom : Au choix
   - Hôte : database
   - Port : 5432
   - Base de données, utilisateur et mot de passe : comme définis dans le fichier `.env`

## Arrêt des services

Pour arrêter tous les services, exécutez :

```bash
docker-compose down
```

Pour arrêter les services et supprimer les volumes (cela effacera les données de la base de données), utilisez :

```bash
docker-compose down -v
```