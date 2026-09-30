# Parlons ! — Chatbot de prononciation FLE

**Concepteur : Junior BOOTO WABA · Version 0.1 · 30 septembre 2026**  
**Public :** élèves débutants A1. **Statut :** prototype à tester, sans résultats d’apprentissage mesurés.

## Objectif
Créer un coach conversationnel guidé : écouter une phrase française, la répéter et recevoir une aide. Neuf phrases originales couvrent présentation, goûts et nature. Le personnage Lina évite de demander l’identité réelle de l’enfant.

## Fonctionnement
Application HTML et JavaScript, sans clé API ni compte. La synthèse vocale fournit un modèle selon les voix disponibles. La reconnaissance vocale transcrit un essai ; le coach compare les mots et propose une nouvelle écoute. Les réponses sont scénarisées : aucun modèle génératif n’est connecté.

**La transcription ne mesure pas la qualité phonétique.** Aucun score, diagnostic de son ou niveau CECRL automatique. Une erreur de reconnaissance peut venir du navigateur, du bruit ou du micro. Une voix de synthèse n’est pas un enregistrement humain contrôlé.

## Démarrer sur ordinateur
Télécharger ce dossier en conservant index.html et app.js ensemble. Avec Python installé, lancer depuis ce dossier :
```bash
python -m http.server 8000
```
Ouvrir http://localhost:8000 dans le navigateur. Pour un accès partagé, héberger sur HTTPS. La présence de l’API et du service vocal dépend du navigateur : tester les appareils de l’école. Ce dépôt ne configure pas encore d’hébergement public.

## Utiliser en classe
Ouverture, classe entière : écouter « Bonjour ! », recueillir les mots connus et annoncer que l’on va travailler l’intelligibilité.
Les élèves vont écouter puis répéter en binômes, en alternant les rôles de locuteur et d’observateur. Débutants : une phrase, écoute lente et modèle de l’enseignant. Plus autonomes : trois phrases, écoute normale puis jeu de rôle sans modèle.
La fiche de suivi recueille « phrase choisie / aide utilisée / observation / prochain essai ». Le portfolio conserve le bilan écrit ; le dictionnaire vérifie le sens avant l’entraînement. Aucun manuel spécifique requis.
Clôture individuelle : chaque enfant dit deux phrases à l’enseignant. « Je peux dire deux phrases compréhensibles » : noter 0, 1 ou 2 phrases comprises, avec le niveau d’aide. « Je peux réessayer après un conseil » : observer un second essai. Ce sont des critères locaux ; la décision repose sur l’écoute humaine.

## Données et microphone
Le microphone reste désactivé jusqu’au choix explicite de l’utilisateur et à l’autorisation du navigateur. L’application ne sauvegarde ni audio ni historique ; elle n’utilise ni base de données ni suivi publicitaire.
Cependant, certains navigateurs envoient l’audio à un service distant pour la transcription. La synthèse peut aussi dépendre de voix distantes. L’enseignant doit vérifier le fonctionnement et les autorisations de l’établissement avant utilisation par les élèves. Sans autorisation, utiliser les modèles de l’enseignant et le travail en binômes sans activer le microphone.

## Vérifications et pilote
Contrôle de syntaxe JavaScript effectué à la création. Les fonctionnalités audio, les voix françaises, l’autorisation du microphone et la compatibilité des appareils restent à tester en conditions réelles.
Scénarios à vérifier : refus du micro, absence de parole, panne réseau, navigateur non compatible, changement de phrase pendant l’écoute, effacement de l’échange.
Pilote suggéré : six élèves, neuf phrases, observation enseignante de l’intelligibilité avant et après entraînement. Consigner les erreurs de transcription séparément. Une comparaison avant/après seule ne démontre pas un effet causal.

## Évolution
1. Valider les consignes, voix et usages sur les appareils de l’école.
2. Ajouter des modèles enregistrés par l’enseignant et des exercices auditifs contrôlés.
3. Comparer des solutions d’évaluation phonétique avant de proposer un retour sur les sons.
4. Ajouter un dialogue plus libre après définition de la gestion des données et du rôle enseignant.

## Documentation technique
- [SpeechRecognition — MDN](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)
- [Utiliser la Web Speech API — MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
- [SpeechSynthesis — MDN](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)

[Portfolio FLE](../../README.md)
