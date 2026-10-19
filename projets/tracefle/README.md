# TraceFLE — le fil des apprentissages

**TraceFLE** est un prototype d’assistant pédagogique pour le FLE en primaire. Son idée centrale : relier les productions successives d’un élève aux objectifs « Je peux… », rendre visibles les indices observés et proposer une prochaine activité que l’enseignant peut examiner, modifier ou refuser.

## Ce que montre cette version

- un tableau de bord de démonstration pour un groupe fictif de Grade 4 — FLE A1 ;
- une chronologie de traces d’apprentissage ;
- une lecture transparente d’une production, avec éléments observés et limites ;
- trois propositions différenciées : soutien, cœur de cible et défi ;
- une saisie d’exemple qui simule la détection de quelques indices lexicaux ;
- la validation ou la modification d’une activité par l’enseignant.

## État du prototype

Cette version est une **maquette de concept**, pas encore un système d’IA. L’analyse de la zone de saisie repose sur quelques règles JavaScript déterministes. Aucun service d’IA, compte, stockage distant ni donnée réelle d’élève n’est connecté. Les élèves et leurs productions affichés sont entièrement fictifs.

## Lancer la maquette

Télécharge les trois fichiers du dossier (`index.html`, `style.css` et `app.js`) dans le même répertoire, puis ouvre `index.html` dans un navigateur récent. Aucun paquet ni service externe n’est requis.

## Hypothèse d’innovation

TraceFLE explore une continuité pédagogique longitudinale :

1. relier une tâche à un objectif observable ;
2. conserver plusieurs indices datés plutôt qu’un score isolé ;
3. distinguer ce que la production montre de ce qu’elle ne permet pas de conclure ;
4. proposer une prochaine étape différenciée avec une justification lisible ;
5. laisser la décision finale à l’enseignant.

Cette orientation est une hypothèse de conception à éprouver. Ce dépôt ne prétend pas que chaque fonctionnalité est inédite.

## Prochaines étapes envisagées

- formaliser un modèle de données minimal pour les objectifs, traces et décisions ;
- définir une méthode d’analyse avec citations exactes des productions et niveaux d’incertitude ;
- connecter un modèle d’IA dans un environnement sécurisé, sans envoyer de données personnelles d’élèves par défaut ;
- évaluer la qualité des propositions et garder un historique des corrections de l’enseignant ;
- documenter consentement, conservation, export et suppression des données avant tout pilote réel.

## Démonstration

Prototype hébergé : [TraceFLE — démonstrateur](https://tracefle-junior-booto.juniorbooto.chatgpt.site)
