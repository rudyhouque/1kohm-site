# Site 1kohm.fr · instructions pour Claude Code

Site portfolio de Rudy Houque, ingénieur électronique spécialiste des objets connectés, ancien cofondateur et directeur technique de BLUEGRioT. Il s'adresse à des recruteurs, des responsables innovation et R&D, et à de futurs clients potentiels.

## Comment le site est publié

- Site statique : du HTML, un fichier CSS, un fichier JS. Aucun outil de compilation, aucun framework.
- Hébergement OVH (offre Eco Starter), lié à ce dépôt GitHub. Chaque `git push` sur la branche `main` déclenche le déploiement automatique sur https://1kohm.fr via le webhook OVH.
- Donc : ne jamais pousser sur `main` un site cassé. Vérifier en local avant (voir plus bas).
- Pour un essai risqué, travailler sur une branche, puis fusionner dans `main` quand Rudy valide.

## Structure

```
index.html                 accueil
cintre-connecte/index.html projet Galeries Lafayette
choose/index.html          projet #Choose (Éram)
locacup/index.html         projet Locacup
salons/index.html          CES, CES Asia, VivaTech
projets/index.html         liste filtrable (alimentée par CAT dans assets/site.js)
mentions-legales/index.html
404.html
assets/site.css            tous les styles (thème clair, thème sombre, couche « projet » via body.deep)
assets/site.js             catalogue CAT, filtres, visionneuse photo, thème, e-mail anti-robots
assets/fonts/              polices hébergées localement (aucun appel à Google Fonts)
img/<projet>/              images déjà compressées
sitemap.xml, robots.txt, .htaccess, favicon.svg
```

- Les pages projet utilisent `<body class="deep">` (fond sombre, couche ingénierie).
- L'en-tête et le pied de page sont recopiés dans chaque page : une modification de menu se fait dans toutes les pages.
- Ajouter un projet : créer `nom-du-projet/index.html` en copiant une page projet existante, l'ajouter dans `CAT` et `URL` de `assets/site.js`, dans `sitemap.xml`, et éventuellement sur l'accueil.
- Chaque page a son `<title>`, sa `meta description`, son `canonical` et ses balises `og:`. Les tenir à jour.

## Images

- Toujours compresser avant d'ajouter : `convert source.jpg -resize 1600x1600\> -strip -interlace Plane -quality 78 img/projet/nom.jpg`
- Noms de fichiers en minuscules, sans accents ni espaces.
- Chaque image a un `alt` descriptif en français.
- Les photos brutes de Rudy sont dans `~/PortfolioWeb/Projets/<projet>/Photos/`, hors du dépôt. Ne jamais ajouter de photo brute au dépôt.

## Règles de rédaction (impératives)

- Français correct et naturel, sans tournures calquées de l'anglais, sans style familier.
- **Aucun tiret cadratin ni tiret long** (« — », « – »). Utiliser des points, des virgules ou les deux-points. Le tiret court ne sert que dans les mots composés.
- Première personne, sobre, des faits et des chiffres plutôt que des adjectifs. Bannir « innovant », « révolutionnaire », « passionné », « solution clé en main ».
- Pas de tics de texte généré : « Plus qu'un simple… », « Ce n'est pas X, c'est Y », questions rhétoriques en ouverture.
- Chaque page projet commence par un encart « Le produit » vendeur et sans jargon, puis les chiffres clés, puis Besoin / Réponse / Résultat, Mon rôle, l'histoire en chapitres, la presse.
- Articles de presse : logo ou monogramme du média. Vidéos : miniature.

## Confidentialité (impératif)

- Ne jamais publier de référence exacte de composant pour un produit en développement, ni de nom de fournisseur, prix d'achat, marge, budget ou condition commerciale.
- Ne nommer une personne que si Rudy l'a autorisé. Sinon, la désigner par son rôle.
- Chaque projet a un fichier `Sources/ne-pas-publier.md` dans `~/PortfolioWeb/Projets/<projet>/`. Le lire avant toute modification de ce projet. Rien de ce qu'il contient ne doit apparaître sur le site, même reformulé.
- Vérifier les photos : pas de référence de puce lisible, pas de nom, pas de document personnel en arrière-plan. Flouter ou recadrer si besoin.

## Situation professionnelle de Rudy (formulation à respecter)

- Rudy est en transition professionnelle. Formulation validée : « je prépare ma prochaine étape : rejoindre une équipe innovation ou R&D, ou accompagner des projets en conseil ».
- Ne jamais écrire qu'il est indépendant, freelance, en activité de conseil ou qu'il facture, et ne pas présenter 1kohm comme une entreprise en activité.
- Ne jamais publier les mots « prestation », « mission », « client » ou « tarif » à propos d'un projet mené depuis 2026.
- Le projet « L'Horloge du vent » est volontairement **absent** du site. Ne pas le remettre sans accord explicite de Rudy. Le texte existe dans la maquette, hors du dépôt.

## Contact

- LinkedIn : https://www.linkedin.com/in/rudyhouque/
- E-mail : hello@1kohm.fr, affiché par JavaScript (liens `a.mail` avec `data-u` et `data-d`) pour limiter le spam. Ne jamais l'écrire en clair dans le HTML.
- Aucun cookie, aucune mesure d'audience. Si Rudy en veut une un jour, prévoir le consentement et mettre à jour les mentions légales.

## Vérifier avant de pousser

1. `python3 -m http.server 8000` à la racine, puis ouvrir http://localhost:8000
2. Parcourir chaque page modifiée, en largeur ordinateur et téléphone.
3. Lancer `python3 verifier.py` : il signale les tirets longs, les liens internes et les images manquants. Il doit afficher « Tout est bon. ».
4. Vérifier qu'aucune image ni aucun lien interne n'est cassé.
5. Commit avec un message clair en français, puis `git push`.
