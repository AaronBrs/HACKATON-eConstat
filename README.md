# HACKATON-eConstat

### Pour le chargement des données des APIS :
- API Adresse : ***Rien à faire***
- API Plaque Immatriculation :
  - Aller sur le site https://apiplaqueimmatriculation.com/tester-lapi/
  - Copier le token demo fourni
  - Coller le à la ligne 112 du fichier script.js
- API Simulée : 
  - Télécharger Mockoon à l'adresse suivante : https://mockoon.com/download/ et lancer l'application
  - Aller dans l'onglet **Settings**
  - Ajouter carAPI dans la case prefix sur la ligne API URL
  - Dans l'onglet **Routes**, créer une nouvelle ***"HTTP route"*** en cliquant sur le **+** bleu à côté de la case filter
  - A droite de la case où il y a écrit GET, mettre la route /infosVehicules (ne pas mettre le **/**)
  - Une fois la route créée, vous pouvez copier le JSON ci-dessous dans le body de la requête
  - Lancer le serveur en cliquant sur la flèche verte en haut à gauche
  - ***Remarque*** : En cas d'erreur CORS, aller dans l'onglet **Headers** et cliquer sur le texte *add CORS headers*

```json
{
  "immatVehicule": "KL-321-OP",
  "fatigue": "Normal",
  "luminositeExt":"Sombre",
  "freqCard":"101BPM",
  "vitesseMomentImpact":67.2,
  "pressionPneus": "2.5 - NORMAL",
  "temperaturePneus":"45°C",
  "ceintureConducteur": "NON",
  "zoneImpact":"Arrière-droit",
  "severiteImpact":"Forte",
  "styleConduite":"Lente",
  "localisation":"27, rue des magnolias 45160 OLIVET"
}
```

### Démarrage de l'application
- Début de la navigation sur la page connexion.html
- Ouvrir le ficher connexion.html depuis le dossier du projet et vous pouvez ensuite naviguer entre les différentes pages