# Analyser les performances des employés avec Python : une démarche reproductible

**Junior BOOTO WABA · 30 septembre 2026 · Python / analyse exploratoire**  
**Statut :** présentation du code disponible ; fichier original et résultats non récupérés.

Un projet d'analyse de données doit permettre au lecteur de comprendre la question, les transformations et les limites. Mon dépôt Employee Performance Analysis présente un parcours exploratoire autour des scores de performance, avec Python, pandas, seaborn et matplotlib.

## La question de départ

La démarche vise à examiner la distribution des scores, leur dispersion et les valeurs atypiques. Lorsque les colonnes sont présentes, elle permet aussi des comparaisons par département ou selon les heures supplémentaires, ainsi qu'une exploration des relations avec les heures travaillées.

Le fichier original HR_Analytics.csv n'est pas disponible dans le dépôt. Cet article décrit donc la méthode du script ; il ne rapporte aucun résultat d'entreprise.

## Du CSV aux sorties

| Étape | Ce que fait le script |
| --- | --- |
| Chargement | Lit le CSV et retire les espaces autour des noms de colonnes. |
| Harmonisation | Reconnaît plusieurs noms possibles pour le score de performance. |
| Conversion | Convertit les scores et les heures en nombres ; les valeurs non convertibles deviennent manquantes. |
| Description | Produit des statistiques descriptives et un relevé des valeurs manquantes. |
| Visualisation | Enregistre des distributions, boîtes à moustaches et graphiques conditionnels. |
| Exploration | Exporte les valeurs atypiques et, si possible, des comparaisons et corrélations. |

PerformanceScore est la colonne obligatoire ; PerformanceRating et Performance Score sont des alias acceptés. Department, HoursWorked et OverTime sont facultatives. Les analyses qui en dépendent sont omises lorsqu'elles manquent.

Ce nettoyage est limité : il ne garantit pas l'absence de doublons ni la cohérence métier des valeurs. Une inspection du jeu de données reste nécessaire.

## Repérer une valeur atypique

La règle utilisée calcule l'intervalle interquartile : IQR = Q3 − Q1. Les valeurs inférieures à Q1 − 1,5 × IQR ou supérieures à Q3 + 1,5 × IQR sont signalées.

Une valeur signalée mérite une vérification. Elle n'est pas automatiquement erronée et ne constitue pas un jugement sur un employé. Il faut tenir compte de l'échelle du score, du contexte et de la taille des groupes. Une corrélation descriptive ne démontre pas une cause.

## Reproduire le parcours

Après avoir téléchargé le dépôt et placé un CSV autorisé sur votre ordinateur, exécutez depuis la racine du dépôt :

```bash
python -m pip install -r employee-performance-analysis/requirements.txt
python employee-performance-analysis/scripts/analysis.py --input /chemin/vers/HR_Analytics.csv
```

Le script enregistre ses figures et tableaux dans le dossier local outputs. Le notebook permet de suivre le parcours de manière interactive. Ces commandes sont celles du projet ; cet article ne prétend pas qu'une nouvelle exécution sur le CSV original a été réalisée.

## La prochaine étape

Pour compléter l'étude de cas, il faudra choisir un jeu de données autorisé, documenter sa provenance et son schéma, vérifier les sorties puis rédiger des conclusions reliées aux graphiques. Des données synthétiques peuvent servir à démontrer le fonctionnement, à condition d'être clairement identifiées.

Ce projet représente mon apprentissage de l'analyse exploratoire : rendre la méthode lisible, faciliter sa reproduction et distinguer une observation d'une interprétation.

[Voir le projet](https://github.com/Junior-BOOTO/python.skills/tree/main/employee-performance-analysis) · [Lire le script](https://github.com/Junior-BOOTO/python.skills/blob/main/employee-performance-analysis/scripts/analysis.py) · [Ouvrir le notebook](https://github.com/Junior-BOOTO/python.skills/blob/main/employee-performance-analysis/notebooks/01_employee_performance_analysis.ipynb)

## English summary

This Python portfolio project explores employee performance distributions and flags unusual values using the IQR rule. The script produces descriptive tables and charts, with optional group comparisons. The original dataset and results are unavailable, so this article presents the implemented method rather than business findings. Data validation and contextual interpretation remain essential.

## Resumen en español

Este proyecto explora la distribución de los puntajes de desempeño y señala valores atípicos mediante la regla IQR. El script genera tablas descriptivas y gráficos, con comparaciones opcionales. El conjunto de datos original y sus resultados no están disponibles; el artículo presenta la metodología implementada. La validación de datos y la interpretación contextual siguen siendo necesarias.

[Retour au blog](../README.md)
