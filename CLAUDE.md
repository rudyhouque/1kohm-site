# Site 1kohm.fr · instructions pour Claude Code

Site portfolio de Rudy Houque, directeur technique spécialisé en objets connectés, ancien cofondateur et directeur technique de BLUEGRioT, aujourd'hui en conseil et expertise. Il s'adresse à des recruteurs et à des dirigeants qui veulent lui confier une mission. En arrivant, ils doivent voir un profil senior, solide, sérieux, expérimenté et facile à rencontrer.

Cadrage complet (cible, chiffres, reconnaissances, sources) : `_atelier/PRODUCT.md`.

Suivi des demandes de Rudy : `_atelier/DEMANDES.md`. Le relire au début de chaque session et avant chaque compte rendu ; y noter toute nouvelle demande dès qu'elle arrive, et ne la marquer « faite » qu'après vérification sur le site.

Vue d'ensemble des pages, des ressources, des savoir-faire et des liens internes à poser : `_atelier/CARTE-DU-SITE.md`. La lire avant de rédiger une page, la mettre à jour après. Les questions d'entretien et leurs réponses sont rangées dans `_atelier/entretiens/`.

L'ancien site BLUEGRioT (fermé) est archivé sur la Wayback Machine : environ 250 pages, dont une page par projet et les articles du blog. Liste des adresses : `https://web.archive.org/cdx/search/cdx?url=bluegriot.fr/*&fl=timestamp,original&collapse=urlkey&filter=statuscode:200`. C'est de la matière à adapter, jamais à recopier.

## Direction artistique (impératif)

- Style retenu : « couche technique cyber » (mélange Swiss, cyber, wabi-sabi). Tout est décrit dans `DESIGN.md` : couleurs, polices, éléments de signature, mouvement, vue éclatée. Le lire avant toute modification visuelle.
- `DESIGN.md` et les choix de Rudy priment sur les recommandations de n'importe quel skill.
- On garde la ligne actuelle du site : uniquement de légères modifications, pas de refonte. La typographie actuelle plaît à Rudy.
- Pas de métaphore ni de décor (gare, carnet, fiche technique, etc.) : Rudy n'est pas à l'aise avec ça. Des effets sobres et originaux (survol, léger flottement, carrousel simple) et des photos mises en valeur.
- Maquettes de référence et briefs : dossier `_atelier/` (ignoré par git, jamais publié). La tâche en cours est décrite dans `_atelier/CHANTIER-accueil.md`.

## Skills disponibles

- `portfolio-copywriter` : pour tout texte du site (nouveau projet, réécriture, accroche). L'utiliser systématiquement avant de modifier un texte. Il impose l'entretien avec Rudy quand une information manque : ne jamais inventer un fait ou un chiffre.
- `emil-design-eng`, `animate` : animations et transitions (vue éclatée notamment).
- `find-animation-opportunities` : proposer, ne pas appliquer sans accord.
- `industrial-brutalist-ui` : inspiration pour les libellés et panneaux techniques, jamais appliqué en bloc.
- `break-ui` : cas limites, petit écran, clavier, zoom.
- `impeccable` : `/impeccable critique` et `/impeccable audit` après chaque gros changement visuel. Ne pas écraser `DESIGN.md`.
- `apple-design`, `mobile-native` : seulement si utile pour la version téléphone.

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
- `site.css` et `site.js` sont appelés avec un numéro de version (`?v=AAAAMMJJ`) dans toutes les pages. À chaque modification de l'un des deux, changer ce numéro partout, sinon les navigateurs gardent l'ancienne version en cache et la page s'affiche cassée.
- Chaque page a son `<title>`, sa `meta description`, son `canonical` et ses balises `og:`. Les tenir à jour.

## Sources de Rudy (hors du dépôt)

Les entrées de Rudy sont dans `~/PortfolioWeb/Ressources/`. Il les complète régulièrement. Toujours y chercher avant de construire ou de modifier une page, sans les réorganiser ni rien y écrire.

- `Ressources/Accueil/` : notes, portraits, logos clients, reconnaissances (visuels HDF100, BFM, Stratégies, Thread Group), photos d'illustration.
- `Ressources/Parcours/` : notes et photos du parcours professionnel.
- `Ressources/Projets/<projet>/` : `Photos/`, `Videos/`, `Projet/`, `Sources/` (dont `ne-pas-publier.md`), parfois `Logo/`.
- `Ressources/Salons/` : `CES/<année>/`, `VivaTech/<année>/`, `Aperçu/`, `Questions-salons.md`, logo CES dans `CES/général/logo/`. La page salons se construit comme des projets, année par année.

Logos et icônes : avant de dessiner l'icône d'un projet ou d'un salon, chercher un logo dans `Ressources/` (ex. `Projets/Locacup/Logo/`, `Salons/CES/général/logo/`) et le reproduire le plus fidèlement possible, en filaire, animé et sobre. S'il n'existe pas, en créer un dans la même direction artistique.

## Images

- Toujours compresser avant d'ajouter : `convert source.jpg -resize 1600x1600\> -strip -interlace Plane -quality 78 img/projet/nom.jpg`
- Noms de fichiers en minuscules, sans accents ni espaces.
- Chaque image a un `alt` descriptif en français.
- Les photos brutes de Rudy sont dans `~/PortfolioWeb/Ressources/`, hors du dépôt. Ne jamais ajouter de photo brute au dépôt.
- Entre plusieurs photos, privilégier celles de l'appareil SONY, puis FUJIFILM, NIKON ou CANON : elles sont généralement plus jolies que celles du téléphone. Lire l'appareil avec `mdls -raw -name kMDItemAcquisitionMake "<fichier>"`. Les placer aux emplacements les plus visibles (en-tête, encart « Le produit », grande photo d'une mosaïque), pas en vignette.
- Rudy laisse parfois des commentaires Finder sur ses photos (qui est sur la photo, où l'utiliser, ce qu'elle montre). Les lire avant tout choix : `mdls -raw -name kMDItemFinderComment "<fichier>"`. Ils priment sur les déductions faites en regardant l'image.
- **Ne jamais couper une tête ni un visage** dans un cadrage (en-tête 4/3, bandeau 16/7, vignettes en `object-fit:cover`). Pour une photo verticale dans un cadre horizontal, régler `object-position` (ex. `style="object-position:50% 12%"`) et vérifier sur capture d'écran, ordinateur et téléphone. Rudy l'a signalé deux fois.
- Encart « Le produit » : une image où l'objet est le sujet et occupe le cadre, ou une image forte de son univers. Jamais un petit objet perdu dans un grand fond, ni une diapositive avec son titre.

## Règles de rédaction (impératives)

- Français correct et naturel, sans tournures calquées de l'anglais, sans style familier.
- **Aucun tiret cadratin ni tiret long** (« — », « – »). Utiliser des points, des virgules ou les deux-points. Le tiret court ne sert que dans les mots composés.
- Première personne, sobre, des faits et des chiffres plutôt que des adjectifs. Bannir « innovant », « révolutionnaire », « passionné », « solution clé en main ».
- Pas de tics de texte généré : « Plus qu'un simple… », « Ce n'est pas X, c'est Y », questions rhétoriques en ouverture.
- Chaque page projet commence par un encart « Le produit » vendeur et sans jargon, puis les chiffres clés, puis Besoin / Réponse / Résultat, Mon rôle, l'histoire en chapitres, la presse.
- Articles de presse : logo ou monogramme du média. Vidéos : miniature.

## Confidentialité (impératif)

- Ce dépôt est public et entièrement déployé : ne jamais écrire dans CLAUDE.md, DESIGN.md ou README.md d'information personnelle ou confidentielle sur Rudy (situation professionnelle, démarches, contexte des projets). Ces notes vont dans `_atelier/` (ignoré par git).
- Ne jamais publier de référence exacte de composant pour un produit en développement, ni de nom de fournisseur, prix d'achat, marge, budget ou condition commerciale.
- Ne nommer une personne que si Rudy l'a autorisé. Sinon, la désigner par son rôle.
- Chaque projet a un fichier `Sources/ne-pas-publier.md` dans `~/PortfolioWeb/Ressources/Projets/<projet>/`. Le lire avant toute modification de ce projet. Rien de ce qu'il contient ne doit apparaître sur le site, même reformulé.
- Vérifier les photos : pas de référence de puce lisible, pas de nom, pas de document personnel en arrière-plan. Flouter ou recadrer si besoin.

## Positionnement de Rudy (décision du 13 octobre 2026)

- Position claire, sans hésitation : **conseil et expertise** en objets connectés, sur des missions, comme une structure qui propose ses services. Ne plus écrire « prochaine étape », ni hésiter entre poste en équipe et conseil.
- Dans le parcours, 2026 s'intitule « Conseil et expertise ».
- Appel à l'action final : « Parlons de votre prochain projet ».
- Ne jamais inventer de client, de mission, de tarif ni de référence depuis 2026. Forme juridique, SIRET, raison sociale de 1kohm : ne rien écrire sans confirmation de Rudy (mentions légales comprises).
- Pas de bandeau « Ils m'ont fait confiance » : il mélangeait clients et anciens employeurs.
- « L'Horloge du vent » : Rudy a donné son accord le 15 octobre 2026 pour la publier. Cadre « Projet personnel », bénévole. Respecter strictement `Projets/Horloge du vent/Sources/ne-pas-publier.md` : aucune idée de rémunération, de mission, de client ni de lien avec 1kohm ou une activité de conseil sur cette page ; ne pas nommer le designer produit. C'est la preuve du savoir-faire « travail avec l'IA, boucles d'agents et banc de test automatisé ».

## Contact

- LinkedIn : https://www.linkedin.com/in/rudyhouque/
- E-mail : hello@1kohm.fr, affiché par JavaScript (liens `a.mail` avec `data-u` et `data-d`) pour limiter le spam. Ne jamais l'écrire en clair dans le HTML.
- Mesure d'audience : Umami (cloud.umami.is), sans cookie ni donnée personnelle, script dans le `<head>` de chaque page (à recopier dans toute nouvelle page). Mentionné dans les mentions légales. Aucun autre cookie.

## Vérifier avant de pousser

1. `python3 -m http.server 8000` à la racine, puis ouvrir http://localhost:8000 (un double clic sur `index.html` ne fonctionne pas : les chemins commencent par `/`)
2. Parcourir chaque page modifiée, en largeur ordinateur et téléphone.
3. Lancer `python3 verifier.py` : il signale les tirets longs, les liens internes et les images manquants. Il doit afficher « Tout est bon. ».
4. Vérifier qu'aucune image ni aucun lien interne n'est cassé.
5. Commit avec un message clair en français, puis `git push`.
