# FLE Learning Design
## Ingénierie pédagogique assistée par IA · Junior BOOTO WABA

**Concepteur pédagogique : Junior BOOTO WABA.**  
**Public :** grades 2–5, français langue étrangère, niveau actuel A1.  
**Statut :** première version documentaire et démonstrateur pédagogique, publiée le 29 septembre 2026.

Ce projet transforme six assistants pédagogiques en dispositif documenté de conception, de révision et d'évaluation de séquences FLE. Il montre comment un enseignant organise des rôles complémentaires pour produire des ressources adaptées au niveau réel des élèves et à une démarche d'investigation inspirée du PYP.

Les productions présentées ici sont des exemples de conception. Aucun gain de temps ou progrès d'élève n'est revendiqué sans mesure. Les instructions sont des propositions publiques de travail, pas un export exact des configurations privées.

## 1. Problème et objectifs de conception

La préparation doit articuler objectifs linguistiques, activités, différenciation et preuves d'apprentissage dans un temps de classe limité. Le dispositif vise à :
- rendre explicite le lien entre un objectif « Je peux », une activité et son évaluation ;
- conserver une cible A1 pour les quatre grades, en faisant varier l'étayage et la complexité des tâches ;
- intégrer compréhension orale (CO), compréhension écrite (CE), production orale (PO) et production écrite (PE) ;
- proposer une investigation accessible, un choix réel de l'élève et une réflexion courte ;
- produire une version que l'enseignant peut vérifier, adapter et utiliser.

## 2. Les six assistants

| Assistant | Responsabilité | Livrable attendu |
|---|---|---|
| Agent Coordinateur FLE Primary | Cadrer la demande, répartir les étapes, harmoniser et signaler les problèmes | Brief, liste de contrôle et dossier final |
| Coach PYP Planning | Proposer idée maîtresse, pistes de recherche, concepts, ATL, profil, action et réflexion | Cadre d'investigation proposé |
| FLE PYP LAB – Grade 2 | Reconnaître, nommer et associer avec un soutien visuel important | Séquence A1 courte et illustrable |
| FLE PYP LAB – Grade 3 | Construire une phrase simple et participer à un échange guidé | Séquence A1 avec modèles |
| FLE PYP LAB – Grade 4 | Décrire et classer à partir d'exemples accessibles | Séquence A1 différenciée |
| FLE PYP LAB – Grade 5 | Exprimer un choix et donner une raison simple avec étayage | Projet A1 et critères observables |

Les fonctions de recherche de ressources, correction et relecture sont des étapes du protocole ; elles ne supposent pas l'existence de GPTs supplémentaires. Les configurations de départ sont décrites dans [Assistants pédagogiques](../gpts-pedagogiques/README.md).

## 3. Architecture et transmission

L'enseignant transmet les dossiers entre assistants et décide de la version finale. Le Coordinateur fournit les consignes de délégation ; il n'appelle pas automatiquement les autres GPTs dans cette version.

| Étape | Responsable | Entrée → sortie |
|---|---|---|
| Cadrage | Enseignant + Coordinateur | Besoin de classe → brief validé |
| Investigation | Coach PYP | Brief → cadre PYP proposé |
| Conception | Agent du grade | Brief et cadre → activités et évaluations |
| Revue | Coordinateur + Coach, sous contrôle enseignant | Dossier → remarques et révision |
| Validation | Enseignant | Version révisée → version de classe approuvée |
| Retour d'expérience | Enseignant | Observations anonymisées → améliorations documentées |

### Fiche de transmission

Copier cette fiche à chaque étape :

- Grade et niveau observé :
- Thème et connaissances préalables :
- Durée disponible et nombre de séances :
- Objectifs « Je peux » :
- Vocabulaire et structures autorisés :
- Cadre PYP proposé ou unité institutionnelle autorisée :
- Ressources fournies et droits d'utilisation :
- Besoins d'étayage :
- Production attendue :
- Critères de réussite :
- Points encore incertains :
- Modifications faites depuis la version précédente :

Le Coordinateur conserve un index des unités, versions et décisions transversales. Les dossiers détaillés sont classés par grade et unité. Le transfert d'un fichier vers un GPT reste une action explicite de l'enseignant.

## 4. Consignes publiques réutilisables

### Coordinateur

> À partir de la fiche de transmission, vérifie le grade, le niveau A1, le temps et les ressources. Prépare un brief pour le Coach PYP puis pour l'agent du grade. Relie chaque objectif à une activité et à une preuve d'apprentissage. Contrôle séparément CO, CE, PO et PE, la différenciation et la clarté des consignes. Signale toute référence non vérifiée et toute information manquante. N'invente ni résultat de classe, ni source, ni contenu d'une archive inaccessible. Fournis une version révisable et les points à valider par l'enseignant.

### Coach PYP Planning

> Propose un cadre d'investigation accessible au grade et au niveau A1 : idée maîtresse, pistes de recherche, concepts, ATL et profil de l'apprenant. Explique comment les activités permettent observation, choix, action et réflexion. Garde la charge linguistique réaliste. Présente l'alignement comme une proposition à comparer au programme d'investigation de l'école. Ne prétends pas à une validation officielle par l'IB.

### Agents de grade

> Conçois une séquence FLE au niveau réel indiqué, selon le brief et le cadre d'investigation. Structure chaque séance en échauffement, activité principale, clôture d'évaluation et devoir facultatif adapté. Donne des consignes pour l'enseignant et pour les élèves, le vocabulaire, les modèles de phrases, deux niveaux d'étayage et les productions attendues. Prépare quatre tâches distinctes CO, CE, PO et PE avec corrigés ou critères. Utilise des supports originaux ou des sources autorisées et identifiables. Respecte le temps disponible et soumets la production à la relecture humaine.

Adaptation : Grade 2 = reconnaissance et mots ; Grade 3 = phrases modèles ; Grade 4 = description et classement ; Grade 5 = choix et raison simple. Cette progression ne change pas automatiquement le niveau CECRL.

## 5. Démonstrateur · Grade 3 · Les tâches ménagères

**Scénario proposé :** deux séances de 45 minutes, à adapter par l'enseignant.  
**Question :** Comment pouvons-nous aider à la maison ?  
**Idée maîtresse proposée :** partager des tâches contribue à la vie commune.  
**Pistes :** les tâches de la maison ; la manière de contribuer ; les choix de chacun.  
**Concepts proposés :** fonction et responsabilité.  
**ATL :** communication et collaboration. **Profil :** communicatif et altruiste.

**Objectifs :** « Je peux reconnaître quatre tâches », « Je peux dire comment j'aide », « Je peux comprendre un court message », « Je peux écrire deux phrases avec un modèle ».

**Langue :** je range ma chambre ; je mets la table ; je lave la vaisselle ; j'arrose les plantes. Éviter les stéréotypes : chacun peut choisir une tâche adaptée à son âge.

### Séance 1 · Reconnaître et choisir

- **Échauffement, 5 min :** l'enseignant mime une tâche ; les élèves observent et proposent une réponse, avec gestes si nécessaire.
- **Activité principale, 25 min :** associer quatre dessins originaux aux expressions ; écouter les expressions puis les répéter. En binômes, choisir deux tâches et dire « Je … ». Les élèves vérifient leurs associations avec la fiche modèle.
- **Clôture, 15 min :** réaliser la CO et la CE ci-dessous ; corriger collectivement après collecte des réponses.
- **Devoir facultatif :** dessiner une tâche que l'on peut faire. Aucune photo de la famille ou du domicile n'est demandée.

### Séance 2 · Contribuer et expliquer

- **Échauffement, 5 min :** retrouver les quatre expressions à partir des gestes.
- **Activité principale, 20 min :** créer une mini-affiche « J'aide à la maison » avec deux dessins et deux phrases. Choisir une tâche et partager sa production avec un camarade.
- **Clôture, 20 min :** recueillir PO et PE ; terminer par « Aujourd'hui, je peux… » et un choix d'action adapté à l'enfant.
- **Devoir facultatif :** relire les expressions ; toute action à la maison doit être appropriée et autorisée par la famille.

**Différenciation :** banque de mots et phrases à compléter pour les débutants ; phrases sans modèle pour les élèves plus autonomes. Le défi facultatif « Je range ma chambre et je mets la table » conserve une structure accessible.

### CO · Écouter un script original

L'enseignant lit deux fois, lentement, avec une pause entre les phrases :
« Bonjour ! Je m'appelle Lina. Je range ma chambre. Je mets la table. Mon frère arrose les plantes. »

Entourer la bonne réponse :
1. Lina range : sa chambre / la table.
2. Lina met : les plantes / la table.
3. Son frère : lave la vaisselle / arrose les plantes.

**Corrigé :** sa chambre ; la table ; arrose les plantes. **Preuve :** nombre de réponses correctes sur 3. Il s'agit d'un script à lire ou à enregistrer, aucun fichier audio n'est joint.

### CE · Lire un message original

« Je m'appelle Sami. À la maison, je mets la table. Ma sœur range sa chambre. Nous aidons à la maison. »

1. Sami met la table. Vrai / Faux.
2. Sa sœur lave la vaisselle. Vrai / Faux.
3. Entoure la tâche de sa sœur : ranger sa chambre / arroser les plantes.

**Corrigé :** vrai ; faux ; ranger sa chambre. **Preuve :** réponses sur 3.

### PO · Dire deux phrases

Consigne : « Choisis deux cartes. Dis deux phrases pour expliquer comment tu aides. »  
Exemple : « Je range ma chambre. Je mets la table. »

Critères observables : deux tâches nommées ; emploi de « Je » et de l'expression travaillée ; message compréhensible. Les erreurs mineures sont acceptées si le sens reste clair.

### PE · Écrire deux phrases

Consigne : « Complète ou écris deux phrases sous tes dessins : Je … / Je … ».  
Réponses possibles : les quatre expressions travaillées.  
Critères : deux messages pertinents ; mots reconnaissables ; correspondance entre dessin et phrase.

Pour PO et PE, noter séparément : **avec aide**, **partiellement autonome**, **autonome**, avec un commentaire bref. Cette grille formative est une proposition locale ; elle ne remplace pas le barème institutionnel.

## 6. Validation et protocole d'évaluation du dispositif

Avant utilisation, l'enseignant vérifie :
- chaque objectif possède une activité et une preuve ;
- le vocabulaire et les structures sont connus ou enseignés ;
- les quatre tâches sont distinctes et les corrigés correspondent aux items ;
- les activités tiennent dans la durée annoncée ;
- la différenciation fournit un soutien concret ;
- les liens PYP sont pertinents pour l'unité réelle ;
- les textes sont originaux ou autorisés et les références sont vérifiables ;
- aucune donnée personnelle d'élève n'est diffusée.

**Critère de livraison :** tous les points sont validés ou explicitement corrigés ; un point bloquant entraîne une révision.

| Mesure à recueillir pendant un futur pilote | Méthode | État |
|---|---|---|
| Temps de préparation | Comparer deux tâches de périmètre similaire, en incluant la relecture | Non mesuré |
| Corrections nécessaires | Compter et classer les erreurs avant validation | Non mesuré |
| Adéquation A1 | Revue enseignante des mots, structures et consignes | À réaliser en classe |
| Réussite aux tâches | Résultats anonymisés CO/CE/PO/PE, avec contexte | Non recueillis |
| Utilité perçue | Courte réflexion enseignante après séance | Non recueillie |

Ces mesures décrivent une méthode d'évaluation, pas des résultats déjà obtenus. Une comparaison de temps ne démontre pas à elle seule un effet sur l'apprentissage.

## 7. Références et ressources du portfolio

- [Programme FLE PYP proposé pour les grades 2–5](../ib-pyp-french-programme/README.md).
- [Projet : tâches ménagères, grade 3 A1](../projets/taches-menageres-3e-a1/README.md).
- [Modèles des six assistants](../gpts-pedagogiques/README.md).
- [Portfolio FLE](../README.md).

Les références institutionnelles CECRL/PYP et les supports de classe doivent être consultés et vérifiés pour chaque adaptation. Ce projet n'est ni une certification ni une validation officielle par l'IB. Les liens publics vers les GPTs pourront être ajoutés après vérification de leur partage.

## 8. Évolution du projet

1. Tester et réviser le démonstrateur Grade 3.
2. Documenter un cas pour chacun des grades 2, 4 et 5.
3. Ajouter des exemples anonymisés de révisions et un journal de décisions.
4. Publier un bilan avec les mesures réellement recueillies.
5. Étudier une éventuelle orchestration technique dans une version distincte.

**Compétences illustrées :** analyse du besoin, conception de séquences, formulation de consignes IA, différenciation, évaluation formative, documentation et contrôle qualité.
