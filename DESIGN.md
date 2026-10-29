# DESIGN.md · direction artistique de 1kohm.fr

Style retenu par Rudy le 10 octobre 2026 : **variante C, « couche technique cyber »**. Le 13 octobre 2026, Rudy a confirmé qu'on garde cette ligne : seulement de légères modifications, pas de refonte, pas de métaphore ni de décor. C'est un mélange dosé de trois influences :

- **Swiss design** pour la structure : grille de 12 colonnes, alignements stricts, hiérarchie typographique nette, beaucoup d'air.
- **Cyber / technique** pour l'ambiance : fond sombre façon plan d'ingénieur, quadrillage discret, libellés en police mono, codes de référence (PRJ-01, [01]), une seule couleur d'accent.
- **Wabi-sabi** pour l'humain : vraies photos d'atelier et de terrain non retouchées à l'excès, textes sobres, aucune surenchère d'effets. L'imperfection des photos réelles équilibre la rigueur de la grille.

Maquettes de référence (à lire avant tout travail de style) :
`_atelier/maquettes/` (dossier ignoré par git, jamais publié)
- `Technique.dc.html` : l'accueil en style C (référence principale).
- `Eclate.dc.html` : la vue éclatée animée en 2D.
- `Eclate3D.dc.html` : la vue éclatée en 3D isométrique, rotation à la souris. **C'est celle à intégrer.**

Ces fichiers sont au format « canvas » de Claude : du HTML avec des valeurs `{{...}}` calculées par la classe `Component` en bas de fichier. Les traduire en HTML, CSS et JavaScript ordinaires, sans dépendance.

## Couleurs (thème sombre, disponible par le bouton)

| Rôle | Valeur |
|---|---|
| Fond | `#0B100F` |
| Quadrillage du fond | `rgba(143,168,158,.07)`, lignes de 1px tous les 32px |
| Texte principal | `#E3ECE7` |
| Texte secondaire | `#A9BDB4` |
| Libellés, légendes | `#8FA89E` |
| Filets, bordures | `#22322D` (discret), `#3B5249` (marqué) |
| Accent unique | `#F2A541` (ambre) |
| Texte sur accent | `#0B100F` |
| Carte électronique (illustrations seulement) | `#173A30`, `#3F8A6A` |

Règles :
- Un seul accent. L'ambre sert aux liens actifs, au bouton principal, aux codes de référence, aux équerres du portrait. Jamais en grande surface de fond.
- Pas de dégradé décoratif, pas de néon, pas de lueur (glow), pas de glassmorphism.
- Le quadrillage reste à peine visible. S'il attire l'œil, il est trop fort.

## Thème clair (« tirage papier », thème par défaut)

Depuis le 13 octobre 2026, le thème clair est le thème par défaut. Le bouton de thème reste disponible pour passer en sombre (le choix de la personne est mémorisé). Le thème clair est la version papier du même plan :
- fond `#F3F1EA`, quadrillage `rgba(14,21,18,.06)` ;
- texte `#0E1512`, secondaire `#3D4A45`, libellés `#55655E` ;
- filets `#D5D2C8` et `#9AA59F` ;
- accent `#B86E12` (l'ambre `#F2A541` n'est pas assez contrasté sur fond clair).

Contraste minimum WCAG AA (4,5:1) pour tout texte, dans les deux thèmes.

## Typographie

Polices déjà hébergées dans `assets/fonts/`, aucun appel à Google Fonts.

| Usage | Police | Réglages |
|---|---|---|
| Titres | Archivo | graisse 600, `font-stretch: 92%`, interlettrage `-0.02em` sur les grands titres |
| Libellés, navigation, codes, boutons, chiffres techniques | IBM Plex Mono | 400 ou 500, 11 à 13px, majuscules pour les libellés de type `OBJETS_DÉPLOYÉS` |
| Texte courant | IBM Plex Sans | 400, 16 à 18px, interligne 1,6 |

Échelle indicative en bureau : h1 58px, h2 34 à 44px, h3 24px, texte 16 à 18px, libellés 11 à 13px. Sur téléphone, h1 vers 36px.

## Éléments de signature

- **Barre d'état** tout en haut, en mono 11px : `SYS / 1KOHM.FR / v1.0` · `50.63 N · 3.06 E · LILLE` · `● conseil et expertise` (le point en ambre). Sur téléphone, ne garder que le premier et le dernier élément.
- **Logo** : `1kΩhm.fr` en Plex Mono 500, le Ω en ambre.
- **Navigation** : `[01] projets  [02] technologies  [03] salons  [04] parcours  [05] contact` (technologies ajouté le 29/10/2026).
- **Boutons** : texte façon commande, `./voir-les-projets` (fond ambre) et `./me-contacter` (bordure `#3B5249`). Coins droits, pas d'arrondi.
- **Photos** : elles doivent être mises en valeur. Privilégier celles des appareils SONY, puis FUJIFILM, NIKON ou CANON, et lire les commentaires Finder que Rudy laisse sur ses photos.
- **Portrait** : légèrement désaturé (`grayscale(.85) contrast(1.1) brightness(.9)`), fines lignes de balayage par-dessus, quatre équerres ambre aux coins, légende mono `Rudy Houque · directeur technique · Lille` (« IMG_001 · opérateur » retiré le 15/10/2026 à la demande de Rudy).
- **Panneau de chiffres** : cases bordées, libellé mono en majuscules avec tiret bas (`COMPTES_ACTIFS`), valeur en Archivo 40px, sous-titre court, petite icône filaire animée. Règle de l'accueil : un bloc = un sujet. Chaque ligne a un en-tête (logo en une couleur, filet, petit titre ambre, titre) puis trois cases. Une seule ligne en haut de l'accueil : BLUEGRioT (70+ projets dirigés, 270+ propositions techniques, 10 ans de direction technique). Le CES a été déplacé le 15 octobre 2026 dans « Salons & veille » : bandeau « Juge des CES Innovation Awards 2027 » avec paillettes animées (seul effet « festif » du site), puis photo et trois tuiles (8 éditions, Média accrédité, Sur scène). LocaCup n'est pas dans les chiffres : il vit dans sa carte projet et le parcours.
- **Icônes filaires animées** : traits fins, une seule couleur, animation discrète. Pour un projet ou un salon, partir du vrai logo s'il existe dans `~/PortfolioWeb/Ressources/` (LocaCup, CES) et le reproduire fidèlement. Sinon, dessiner l'objet (cintre, chaussure pour #Choose) dans le même style.
- **Cartes projet** : bordure `#22322D`, code `PRJ-01 · RETAIL · 2019` en ambre, titre Archivo, étiquettes techniques en mono (`THREAD · RFID · BASSE CONSO`), icône filaire du projet. Au survol : léger soulèvement, et la photo du projet laisse place à une photo de Rudy en situation sur ce projet.
- **Reconnaissances** : mises en avant, avec leurs visuels (plateau BFM Lille, HDF100, plaque Stratégies 2019, vidéo Thread Group), éventuellement en carrousel simple. Elles doivent apparaître tôt sur l'accueil.
- **Pied de page** : `EOF · 1kohm.fr · Rudy Houque` et `1 kΩ : la résistance de base de tout montage`.

Les termes à l'allure de code restent lisibles par un recruteur : un libellé technique est toujours accompagné d'un sous-titre en français normal.

## Vue éclatée (pages projet)

Une vue éclatée animée par projet, en 3D isométrique, sur le modèle de `Eclate3D.dc.html`. Première à intégrer : le cintre connecté.

- CSS 3D (`perspective`, `transform-style: preserve-3d`, `rotateX` puis `rotateZ` sur la scène, `translateZ` par couche). Pas de WebGL, pas de bibliothèque.
- Les couches s'écartent en 900ms, courbe `cubic-bezier(.22,1,.36,1)`, décalage de 70ms entre couches. Les étiquettes apparaissent ensuite et restent toujours face à l'écran.
- Rotation lente automatique, arrêtée dès que la personne fait glisser. Glisser pour pivoter (souris et doigt), flèches du clavier, Entrée pour éclater ou rassembler.
- L'animation démarre quand la vue entre dans l'écran (IntersectionObserver), pas au chargement.
- `prefers-reduced-motion` : pas de rotation automatique, pas de transition, vue éclatée affichée directement.
- Sur téléphone : scène réduite (`scale`), étiquettes sous la scène plutôt qu'à côté si la place manque.
- Accessibilité : la scène a un `aria-label` et la liste des couches existe aussi en texte HTML à côté.
- Confidentialité : schéma de principe uniquement, aucune référence de composant, aucun détail de fabrication. Mention `schéma de principe · échelle libre`.
- L'ordre des couches du cintre reste à confirmer par Rudy.

Idées pour la suite, à ne faire qu'avec l'accord de Rudy : #Choose (semelle, carte, batterie, bobine de recharge, fibre optique) et Locacup (schéma d'architecture du service).

## Mouvement

- Durées : 150 à 250ms pour les survols, 400 à 900ms pour les entrées de section. Jamais plus d'une seconde.
- Courbes : `cubic-bezier(.22,1,.36,1)` pour les entrées, `ease-out` pour les fondus.
- Seulement `transform` et `opacity`.
- Effets voulus : sobres et originaux. Survol des cartes, léger flottement, carrousel simple qui défile doucement (pause au survol, arrêt avec `prefers-reduced-motion`).
- Pas d'effet de texte qui se tape lettre par lettre, pas de glitch, pas de parallaxe.

## À éviter

Les clichés des sites générés : dégradés violets, cartes en verre dépoli, emojis dans les titres, icônes décoratives partout, ombres portées molles, coins très arrondis, sections « héros » centrées sans grille, trois cartes identiques avec icône, titre et paragraphe.
