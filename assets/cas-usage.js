// cas d'usage : sujets traités en avant-vente (clients jamais nommés, aucun statut) et projets détaillés
const CASES=[
  {code:"CAS-01",rng:["0 à 250 kg","à 1 kg près","a",250],img:"/img/cas-usage/cas01-joug-jauge-pres-des-coussins.jpg",alt:"Schéma du joug : la jauge de contrainte placée entre la structure et les coussins",fit:"contain",year:2023,title:"Joug de rugby interactif",sec:["Sport et événementiel"],tech:["Pesée et mesure de force","Écran et interface"],
   need:"Un joug de rugby itinérant, installé lors d'événements dans plusieurs villes : chaque participant pousse, l'écran affiche sa force et le classement du jour.",
   how:"La jauge de contrainte se place au plus près des coussins, pour mesurer l'effort sans porter tout leur poids, qu'une tare retranche avant chaque essai. Seule compte la poussée tenue au moins une seconde. Une carte de pesée, un mini-ordinateur et un écran tactile suffisent, et trois essais mènent d'une planche fixée au mur à la structure réelle."},
  {code:"CAS-02",rng:["0 à 1 000 kg","à ±1 kg près","",1000],img:"/img/cas-usage/cas02-palettes-ecran-et-plateforme.jpg",alt:"Prototype : plateforme de pesée sous une palette et écran indiquant le nombre de sacs",vid:"/img/cas-usage/cas02-palettes-ecran-et-plateforme.mp4",year:2023,title:"Contrôle de la préparation de commandes par pesée des palettes",sec:["Industrie et logistique"],tech:["Pesée et mesure de force","Wi-Fi","Écran et interface","Données et tableau de bord"],
   need:"Dans une zone de préparation de 34 palettes, rien n'alertait le préparateur lorsqu'il prenait un sac de trop ou de moins.",
   how:"Chaque palette Europe repose sur une plateforme à quatre capteurs, jusqu'à 1 000 kg à ±1 kg près. Le poids devient un nombre de sacs : l'écran indique combien en prendre, valide ou signale l'écart, et le stock se met à jour dans le logiciel de gestion."},
  {code:"CAS-03",rng:["0 à 300 kg","à 100 g près","a",300],img:"/img/cas-usage/cas03-huiles-hauteur-et-poids.jpg",alt:"Schéma de principe : hauteur d'huile et d'eau dans le conteneur posé sur une balance",fit:"contain",year:2023,title:"Détecter l'eau cachée dans les conteneurs d'huiles usagées",sec:["Déchets et restauration"],tech:["Pesée et mesure de force","Mesure de niveau","Bluetooth basse consommation","Application mobile"],
   need:"À l'ouverture d'un conteneur d'huiles usagées, la surface ne dit rien de l'eau qui peut se cacher dessous. Au vidage, les mauvaises surprises sont fréquentes.",
   how:"Deux mesures se croisent : la hauteur de liquide, lue par une cellule piézoélectrique plaquée contre la paroi, et le poids du conteneur posé sur une plateforme à jauges. L'eau étant plus lourde que l'huile, l'écart entre les deux révèle sa part, envoyée en Bluetooth au téléphone de l'opérateur."},
  {code:"CAS-04",rng:["0 à 40 kg","à 20 g près","p",40],img:"/img/cas-usage/cas04-dechets-cellule-de-pesee.jpg",alt:"Cellule de pesée fixée dans le châssis en aluminium du meuble",year:2024,title:"Pesée des déchets en restauration collective",sec:["Déchets et restauration"],tech:["Pesée et mesure de force","Données et tableau de bord"],
   need:"Un meuble de débarrassage pèse déjà les déchets des plateaux en restauration collective. Sa nouvelle version devait être plus simple à fabriquer et mieux connectée.",
   how:"La cellule de pesée reste sous un plateau basculant, rejointe par un capteur de proximité qui confirme que la poubelle est en place. Électronique repensée pour l'assemblage et la tenue aux perturbations, échanges conservés avec les serveurs existants, et une maquette sur table pour tester plusieurs poubelles dès le départ."},
  {code:"CAS-05",rng:["0 à 40 kg","à ±40 g près, par pas de 10 g","",40],img:"/img/cas-usage/cas05-collecteur-schema-modules.jpg",alt:"Schéma du collecteur : écran, lecteur, trappes motorisées et bacs de récupération",fit:"contain",year:2024,title:"Table de tri et collecteur de contenants en restauration",sec:["Déchets et restauration"],tech:["Pesée et mesure de force","Bluetooth basse consommation","Wi-Fi","Vision et caméra"],
   need:"En cuisine, connaître le poids de chaque catégorie de déchets triés. Au retour des contenants réutilisables, s'assurer qu'ils reviennent vides.",
   how:"La table de tri intègre la pesée : 40 kg au maximum, par pas de 10 g, avec tare et cumul affichés en direct. Côté contenants, quand la reconnaissance d'image atteint ses limites, la balance prend le relais : l'écart avec le poids à vide trahit les restes."},
  {code:"CAS-06",rng:["0 à 20 kg","deux seuils suffisent : 50 % et 25 %","",20],img:"/img/cas-usage/cas06-poulailler-niveaux-eau-et-grain.jpg",alt:"Rendus 3D des réservoirs d'eau et de grain et du poulailler",fit:"contain",year:2024,title:"Poulailler connecté : savoir quand ne pas peser",sec:["Agriculture"],tech:["Pesée et mesure de force","Mesure de niveau","Moteurs et actionneurs","Récupération d'énergie"],
   need:"Un poulailler autonome, alimenté par panneau solaire, doit prévenir quand l'eau et le grain passent sous 50 %, puis sous 25 %.",
   how:"Le premier prototype pesait les réservoirs en inox sur un peson de 20 kg, au prix d'une mécanique fine et d'un réglage délicat. Pour deux seuils, une mesure de hauteur suffit : c'est ce que j'ai recommandé, avec des pièces en inox simplifiées."},
  {code:"CAS-07",img:"/img/cas-usage/cas07-arbre-coupe-et-tube.jpg",alt:"Vue en coupe de l'arbre, des jauges de contrainte et de l'électronique dans le tube",fit:"contain",year:2024,title:"Le couple d'un arbre en rotation, suivi pendant dix ans",sec:["Industrie et logistique"],tech:["Pesée et mesure de force","Maintenance préventive","Récupération d'énergie","Bluetooth basse consommation"],
   need:"Sur une machine industrielle, un arbre tourne de 100 à 1 800 tours par minute. Il s'agit d'y lire en continu le couple, les vibrations, la vitesse et la température, pendant dix ans.",
   how:"Des jauges de contrainte posées sur l'arbre mesurent le couple. L'électronique tient dans un tube métallique étanche et vit de récupération d'énergie, sous 1 W, avec une batterie pour les longs arrêts. Reste à faire sortir les données d'une cage métallique qui tourne : une antenne déportée s'en charge."},
  {code:"CAS-08",rng:["0 à 20 kg · 200 N","à ±100 g près · ±1 N","",20],img:"/img/cas-usage/cas08-stylo-capteur-de-force.jpg",alt:"Pièce imprimée en 3D au-dessus d'un capteur de force miniature",year:2025,title:"L'effort de clipsage d'un capuchon de stylo injecteur",sec:["Santé"],tech:["Pesée et mesure de force","Bluetooth basse consommation","Application mobile"],
   need:"Pendant des tests utilisateurs, quantifier l'effort pour clipser puis retirer un capuchon électronique sur un stylo injecteur : jusqu'à 200 N, à ±1 N près.",
   how:"Le stylo est factice, aux dimensions exactes du vrai, et cache deux mesures : un capteur de force en butée pour l'enclenchement, un second dispositif pour l'arrachement. Le téléphone affiche l'effort en direct et alerte l'animateur au-delà des seuils qu'il a fixés."},
  {code:"CAS-09",rng:["0 à 300 kg · 3 000 N","à 3 kg près · 1 % de l'échelle","",300],img:"/img/cas-usage/cas09-traction-illustration.jpg",alt:"Illustration : exercice de traction suivi en direct sur un téléphone",year:2025,title:"Capteur de traction connecté pour le sport et la rééducation",sec:["Santé","Sport et événementiel"],tech:["Pesée et mesure de force","Bluetooth basse consommation","Application mobile","Banc de test","Marquage CE"],
   need:"Coachs, thérapeutes et sportifs veulent suivre la force de traction d'un exercice en temps réel, de 0 à 3 000 N, à moins de 1 % près.",
   how:"Une jauge de contrainte dans un boîtier robuste sur batterie, qui s'étalonne depuis l'application et garde ses mesures si la connexion tombe. La précision se démontre sur un banc qui tire sur le capteur selon des cycles programmés, à côté d'un capteur étalon."},
  {code:"CAS-10",rng:["jusqu'à 5 tonnes","à 5 kg près","p",5000],img:"/img/cas-usage/cas10-pesons-banc-de-calibration.jpg",alt:"Rendu 3D d'un banc de calibration de pesons",year:2025,title:"Banc de calibration de pesons jusqu'à 5 tonnes",sec:["Industrie et logistique","Sport et événementiel"],tech:["Pesée et mesure de force","Banc de test","Écran et interface","Données et tableau de bord","Marquage CE"],
   need:"Un fabricant de pesons professionnels vend dans le monde entier par des distributeurs. Chaque peson doit être recalibré tous les ans, et ce sont eux qui doivent pouvoir le faire.",
   how:"Un banc compact applique des charges contrôlées jusqu'à 5 tonnes, compare chaque peson à un capteur étalon, corrige ses coefficients et édite le rapport de calibration. L'étalon vieillit lui aussi : sa propre recalibration fait partie de l'architecture dès le départ."},
  {code:"CAS-11",rng:["jusqu'à 2 tonnes par ligne","à moins de 10 kg près","",2000],img:"/img/cas-usage/cas11-amarrage-fixation-ligne.jpg",alt:"Fixation d'une ligne d'amarrage sur un flotteur",year:2021,title:"Surveiller la tension des lignes d'amarrage d'une centrale solaire flottante",sec:["Énergie"],tech:["Pesée et mesure de force","Maintenance préventive","Données et tableau de bord"],
   need:"Une centrale solaire flottante tient par ses câbles d'amarrage, jusqu'à 2 tonnes chacun. Une perte de tension ou une rupture doit être repérée et localisée au plus tôt.",
   how:"Un capteur de force immergé sur chaque ligne, conçu pour durer dans l'eau, et des données remontées en continu. L'exploitant suit l'équilibre des charges au quotidien et garde un œil sur l'installation pendant les coups de vent et les rafales."},
  {code:"CAS-12",img:"/img/cas-usage/cas12-pansement-peau-deformee.jpg",alt:"Schéma : pansement sur une peau au repos puis déformée",fit:"contain",year:2024,title:"Pansement connecté qui détecte les microdéformations",sec:["Santé"],tech:["Pesée et mesure de force","Électronique souple"],
   need:"Un pansement capable de sentir les très faibles déformations de la peau qu'il recouvre.",
   how:"Des pistes électroniques dessinées pour se comporter comme des jauges de contrainte, validées d'abord sur maquette. La difficulté tient surtout au protocole : la position du patient suffit à fausser la mesure, il faut donc des conditions répétables."},
  // projets racontés en détail : mêmes mots-clés, avec un lien vers leur page
  {code:"PRJ-06",img:"/img/horloge/horloge-bleu-marine.jpg",year:2026,title:"L'Horloge du vent",url:"/horloge-du-vent/",sec:[],tech:["Moteurs et actionneurs","Banc de test"],
   need:"Une horloge murale qui affiche le vent de vos spots sur trois jours. Électronique repensée pour la série, testée avec des agents d'IA."},
  {code:"PRJ-05",img:"/img/alphapen/stylo-apen-carre.jpg",year:2025,title:"AlphaPen, le stylo qui lit ce qu'il écrit",url:"/alphapen/",sec:[],tech:["Bluetooth basse consommation","Vision et caméra","Batterie et basse consommation"],
   need:"Une caméra dans un stylo : trois images par seconde en Bluetooth basse consommation, compressées sur le microcontrôleur."},
  {code:"PRJ-04",img:"/img/enchanted/film-runes.jpg",year:2022,title:"Les runes de Mirokaï",url:"/enchanted-tools/",sec:["Robotique"],tech:["Localisation","RFID / NFC","Bluetooth basse consommation","Batterie et basse consommation"],
   need:"Des galets connectés qui guident le robot d'Enchanted Tools jusqu'à l'objet à saisir, à 5° près, même derrière un mur."},
  {code:"PRJ-01",img:"/img/cintre/portants.jpg",year:2019,title:"Le cintre connecté",url:"/cintre-connecte/",sec:["Retail"],tech:["Thread","RFID / NFC","Batterie et basse consommation"],
   need:"Plus de 3 000 cintres connectés pour les Galeries Lafayette Champs-Élysées, conçus et livrés en 15 mois."},
  {code:"PRJ-02",img:"/img/choose/produit.jpg",year:2016,title:"#Choose, la chaussure caméléon",url:"/choose/",sec:["Retail"],tech:["Bluetooth basse consommation","Textile connecté"],
   need:"Une chaussure qui change de couleur depuis le smartphone. Du prototype au CES 2016, puis 150 paires fabriquées en France par Éram."},
  {code:"PRJ-03",img:"/img/locacup/locacup-3.jpg",year:2014,title:"Locacup",url:"/locacup/",sec:[],tech:["Application mobile"],
   need:"Une application gratuite de pronostics de football entre amis et collègues. 100 000 comptes actifs, vue au 19/20 de France 3."}
];

// illustrations filaires (viewBox 320×180) quand un cas n'a pas encore de photo ; .s = capteur, .fx = effort (animé au survol)
const ILL={
"CAS-01":'<path d="M20 150H300"/><path d="M60 150V70h18v80M78 92h46"/><rect x="124" y="70" width="30" height="50" rx="6"/><rect class="s" x="98" y="86" width="16" height="12"/><path class="s" d="M101 92h10"/><path class="fx" d="M200 95h-38m8-7-8 7 8 7"/><circle cx="222" cy="72" r="9"/><path d="M222 81v34l-12 35m12-35 14 35M222 92l-20 4m20-4 18-10"/><rect x="250" y="40" width="50" height="34"/><path d="M258 66v-8m10 8v-14m10 14v-20m10 20v-10"/>',
"CAS-02":'<path d="M20 150H300"/><path d="M50 132l40-24h120l-40 24z"/><path d="M50 132v8h120v-8m40-24v8l-40 24"/><path d="M62 124l40-24h100M76 116l40-24h96"/><path d="M84 112h40v-36h-40zm40-36 16-10h-40l-16 10m40 36 16-10V66"/><rect class="s" x="56" y="140" width="10" height="6"/><rect class="s" x="154" y="140" width="10" height="6"/><rect class="s" x="196" y="118" width="10" height="6"/><path d="M206 120h40v-40"/><rect x="232" y="44" width="56" height="36"/><path class="fx" d="M246 62h8m6 0h8m-4-5v10"/>',
"CAS-03":'<path d="M20 150H300"/><rect class="s" x="60" y="138" width="120" height="8"/><rect x="80" y="40" width="80" height="98" rx="4"/><path d="M80 74h80"/><path d="M80 104h80"/><path d="M86 112h12m10 0h12m10 0h12m10 0h8M86 122h8m10 0h12m10 0h12m10 0h12M86 130h12m10 0h12m10 0h12"/><rect class="s" x="160" y="84" width="6" height="40"/><path class="fx" d="M200 86a10 10 0 0 1 0 14m8-20a20 20 0 0 1 0 26"/><rect x="230" y="62" width="40" height="70" rx="6"/><path d="M240 112v-14m8 14v-24m8 24v-8"/>',
"CAS-04":'<path d="M20 150H300"/><path d="M60 150V70h160v80"/><path d="M60 70h160"/><path class="fx" d="M90 64l100-10"/><rect class="s" x="128" y="76" width="24" height="8"/><path d="M110 150V96h60v54"/><path d="M104 96h72"/><rect x="230" y="40" width="44" height="30"/><path d="M240 58h24"/><path d="M262 30a14 14 0 0 1 20 0m-25-6a22 22 0 0 1 30 0"/>',
"CAS-05":'<path d="M20 150H300"/><path d="M40 82h220v8H40z"/><path d="M50 90v60m200-60v60"/><ellipse cx="90" cy="82" rx="18" ry="4"/><ellipse cx="150" cy="82" rx="18" ry="4"/><ellipse cx="210" cy="82" rx="18" ry="4"/><path d="M76 96h28v42H76zm60 0h28v42h-28zm60 0h28v42h-28z"/><rect class="s" x="76" y="140" width="28" height="5"/><rect class="s" x="136" y="140" width="28" height="5"/><rect class="s" x="196" y="140" width="28" height="5"/><rect x="232" y="36" width="58" height="34"/><path class="fx" d="M244 62v-6m10 6v-12m10 12v-16m10 16v-8"/>',
"CAS-06":'<path d="M20 150H300"/><path d="M50 150V80l50-34 50 34v70"/><path d="M88 150v-30h24v30"/><path d="M40 86l60-42 60 42"/><circle cx="262" cy="42" r="12"/><path d="M262 22v-6m0 58v-6m20-26h6m-58 0h6m36-14 4-4m-44 44 4-4m0-36-4-4m40 40 4 4"/><rect x="186" y="74" width="40" height="64" rx="3"/><path class="s" d="M178 106h8m-8 16h8"/><path class="fx" d="M190 96h32"/><path d="M190 118h32M190 126h32M190 134h32" opacity=".5"/><path d="M206 138v12"/>',
"CAS-07":'<path d="M20 150H300"/><rect x="40" y="70" width="240" height="40" rx="6"/><path d="M20 90h20m240 0h20"/><path d="M60 82h200m-200 16h200" opacity=".5"/><rect class="s" x="120" y="80" width="18" height="20"/><path class="s" d="M123 84l12 0-12 6h12l-12 6h12"/><rect class="s" x="174" y="80" width="18" height="20"/><path class="s" d="M177 84l12 0-12 6h12l-12 6h12"/><path class="fx" d="M240 54a40 22 0 0 1 0 72m0 0-8-2m8 2-2-8"/><path d="M150 70V40m-8 0h16m-12-8a10 10 0 0 1 8 0"/>',
"CAS-08":'<path d="M20 150H300"/><path d="M40 96l150-28 10 26-150 28z"/><path d="M190 68l50-10 10 26-50 10z"/><rect class="s" x="186" y="66" width="8" height="30" transform="rotate(-11 190 81)"/><path class="fx" d="M270 70l-18 4m6-8-6 8 8 5"/><rect x="240" y="104" width="34" height="56" rx="5"/><path d="M248 146v-12m8 12v-20m8 20v-8"/><path d="M60 122l-20 18m40-22-16 22" opacity=".5"/>',
"CAS-09":'<path d="M20 150H300"/><path d="M30 30v120"/><rect x="30" y="80" width="10" height="20"/><path d="M40 90h50"/><rect class="s" x="90" y="80" width="30" height="20" rx="3"/><path class="s" d="M98 90h14"/><path d="M120 90h70"/><path d="M190 76v28"/><path class="fx" d="M214 90h28m-8-8 8 8-8 8"/><circle cx="262" cy="58" r="9"/><path d="M262 67v40l-14 43m14-43 14 43m-14-74-60 12"/>',
"CAS-10":'<path d="M20 150H300"/><path d="M90 150V40h140v110"/><path d="M110 150V60h100v90"/><path d="M80 150h160"/><circle cx="160" cy="70" r="12"/><path d="M160 82v10"/><rect class="s" x="148" y="92" width="24" height="30" rx="3"/><path class="s" d="M154 102h12m-12 8h12"/><path d="M160 122v10"/><path class="fx" d="M160 132v8m-6-6 6 6 6-6"/><circle cx="222" cy="112" r="16"/><path d="M222 96v32m-16-16h32"/><rect x="128" y="142" width="64" height="6"/>',
"CAS-11":'<path d="M20 70c20-6 40 6 60 0s40 6 60 0 40 6 60 0 40 6 60 0 40 6 40 0"/><path d="M90 66l12-14h70l-12 14zm80 0 12-14h50l-12 14z"/><path d="M100 70l-50 76m130-76 70 76M140 70v76"/><rect class="s" x="66" y="104" width="8" height="12" transform="rotate(33 70 110)"/><rect class="s" x="216" y="104" width="8" height="12" transform="rotate(-45 220 110)"/><path d="M40 150h30m60 0h30m80 0h30"/><path class="fx" d="M240 28h40m-30 10h36m-46 10h30"/>',
"CAS-12":'<path d="M20 120c40-14 80-14 140 0s100 14 140 0"/><path d="M80 112c26-8 54-8 80-2l0-28c-26-6-54-6-80 2z"/><path class="s" d="M92 100v-12h8v12h8v-12h8v12h8v-12h8v12h8v-12"/><path class="fx" d="M200 60l-20 20m0-12v12h12"/><path d="M60 150c40-8 80-8 120 0" opacity=".5"/>'
};

(()=>{
  const fT=document.getElementById('cuTech'),fS=document.getElementById('cuSec'),out=document.getElementById('cuList');
  if(!out)return;
  const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
  const by=k=>{const n={};CASES.forEach(c=>c[k].forEach(v=>n[v]=(n[v]||0)+1));return Object.keys(n).sort((a,b)=>n[b]-n[a]||a.localeCompare(b,'fr'))};
  const TECH=by('tech'),SEC=by('sec');
  const still=matchMedia('(prefers-reduced-motion: reduce)').matches;
  // état lisible dans l'adresse, pour partager une sélection (?tech=…&secteur=…)
  const qs=new URLSearchParams(location.search);
  const pick=(k,all)=>new Set(qs.getAll(k).filter(v=>all.includes(v)));
  const st={tech:pick('tech',TECH),sec:pick('secteur',SEC)};
  // technologies : toutes celles cochées ; secteurs : l'un de ceux cochés
  const okTech=(c,set)=>[...set].every(t=>c.tech.includes(t));
  const okSec=(c,set)=>!set.size||c.sec.some(s=>set.has(s));
  const match=c=>okTech(c,st.tech)&&okSec(c,st.sec);

  function chips(el,vals,key){
    el.innerHTML=vals.map(v=>{
      const on=st[key].has(v);
      const n=CASES.filter(c=>key==='tech'?okSec(c,st.sec)&&okTech(c,new Set([...st.tech,v])):okTech(c,st.tech)&&c.sec.includes(v)).length;
      // une case qui ne donnerait aucun résultat n'est pas proposée
      if(!on&&!n)return '';
      return '<button type="button" class="chip-f'+(on?' on':'')+'" aria-pressed="'+on+'" data-k="'+key+'" data-v="'+esc(v)+'">'+esc(v)+' <span class="cnt">'+n+'</span></button>';
    }).join('');
  }
  // petit cadran : échelle logarithmique de 100 g à 10 t ; l'aiguille monte jusqu'à la charge maximale du cas,
  // et plus la charge est lourde, plus elle se déplace lentement
  function dial(kg){
    const a=Math.round(-90+180*(Math.log10(kg)+1)/5), d=(1.2+0.45*Math.log10(kg)).toFixed(2);
    let t='';for(let i=0;i<=5;i++){const r=(-90+36*i)*Math.PI/180,x=Math.sin(r),y=-Math.cos(r);t+='M'+(24+x*15).toFixed(1)+' '+(25+y*15).toFixed(1)+'L'+(24+x*(i%5?18:19)).toFixed(1)+' '+(25+y*(i%5?18:19)).toFixed(1)}
    return '<svg class="cu-dial" viewBox="0 0 48 30" aria-hidden="true" style="--a:'+a+'deg;--d:'+d+'s"><path d="M5 25a19 19 0 0 1 38 0"/><path d="'+t+'"/><path d="M3 28h42"/><text x="4" y="29.5">g</text><text x="41" y="29.5">t</text><g class="nd"><path d="M24 25V10"/></g><circle cx="24" cy="25" r="2"/></svg>';
  }
  function card(c){
    const meta='<div class="pmeta"><b>'+c.code+'</b><time>'+c.year+'</time>'+(c.sec.length?'<span class="cadre">'+c.sec.join(' · ')+'</span>':'')+(c.url?'<span>Projet détaillé</span>':'')+'</div>';
    const tags='<div class="tags">'+c.tech.map(t=>'<span'+(st.tech.has(t)?' class="hit"':'')+'>'+esc(t)+'</span>').join('')+'</div>';
    const body=c.url
      ?'<p>'+c.need+'</p>'
      :'<dl><dt>Besoin</dt><dd>'+c.need+'</dd><dt>Ma proposition</dt><dd>'+c.how+'</dd></dl>';
    // photo ou illustration facultative : img (chemin dans /img/cas-usage/) et alt
    // vidéo courte (sans son, en boucle) si elle existe : l'image sert d'affiche et de repli
    const media=c.vid&&!still?'<video src="'+c.vid+'" poster="'+c.img+'" autoplay muted loop playsinline preload="none" aria-label="'+esc(c.alt||'')+'"></video>'
      :'<img loading="lazy" src="'+c.img+'" alt="'+esc(c.alt||'')+'"'+(c.pos?' style="object-position:'+c.pos+'"':'')+'>';
    const pic=c.img?'<div class="cu-pic'+(c.fit==='contain'?' fit':'')+'">'+media+'</div>'
      :ILL[c.code]?'<div class="cu-pic cu-ill" aria-hidden="true"><svg viewBox="0 0 320 180">'+ILL[c.code]+'</svg></div>':'';
    // plage de mesure : ordre de grandeur, du gramme à la tonne
    const est=c.rng&&c.rng[2]?'<i>'+(c.rng[2]==='a'?'ordre de grandeur estimé':'précision estimée')+'</i>':'';
    const rng=c.rng?'<div class="cu-rng">'+dial(c.rng[3])+'<span class="k">PLAGE_DE_MESURE</span><b>'+c.rng[0]+'</b><span>'+c.rng[1]+'</span>'+est+'</div>':'';
    const inner=pic+meta+'<h2 class="ph2">'+c.title+'</h2>'+rng+body+tags+(c.url?'<span class="more">./entrer-dans-le-projet →</span>':'');
    return c.url?'<li><a class="cu cu-prj" href="'+c.url+'">'+inner+'</a></li>':'<li><article class="cu">'+inner+'</article></li>';
  }
  function draw(){
    chips(fT,TECH,'tech');chips(fS,SEC,'sec');
    const list=CASES.filter(match).sort((a,b)=>(!!a.url-!!b.url)||b.year-a.year);
    out.innerHTML=list.map(card).join('');
    const n=list.length,any=st.tech.size+st.sec.size;
    document.getElementById('cuCount').textContent=n+(n>1?' résultats':' résultat')+(any?' pour cette sélection':'');
    document.getElementById('cuReset').hidden=!any;
    document.getElementById('cuEmpty').hidden=n>0;
    const p=new URLSearchParams();st.tech.forEach(v=>p.append('tech',v));st.sec.forEach(v=>p.append('secteur',v));
    history.replaceState(null,'',location.pathname+(p.toString()?'?'+p:''));
  }
  document.addEventListener('click',e=>{
    const b=e.target.closest('#cuTech .chip-f,#cuSec .chip-f');
    // le filtre de /projets/ (site.js) écoute aussi .chip-f : on l'arrête ici
    if(b){e.stopImmediatePropagation();const s=st[b.dataset.k],v=b.dataset.v;s.has(v)?s.delete(v):s.add(v);draw();
      const nb=document.querySelector('.chip-f[data-k="'+b.dataset.k+'"][data-v="'+CSS.escape(v)+'"]');if(nb)nb.focus();return}
    if(e.target.closest('#cuReset')){st.tech.clear();st.sec.clear();draw();fT.querySelector('.chip-f').focus()}
  });
  draw();
})();

// accueil : les technologies qui comptent le plus de cas, chacune ouvre la page déjà filtrée
(()=>{
  const ul=document.getElementById('techHome');if(!ul)return;
  const n={};CASES.forEach(c=>c.tech.forEach(t=>n[t]=(n[t]||0)+1));
  const top=Object.keys(n).sort((a,b)=>n[b]-n[a]||a.localeCompare(b,'fr')).slice(0,6);
  ul.innerHTML=top.map((t,i)=>'<li><a class="th'+(i===0?' th-1':'')+'" href="/technologies/?tech='+encodeURIComponent(t)+'"><span class="th-n">'+String(i+1).padStart(2,'0')+'</span><span class="th-t">'+t+'</span><span class="th-c">'+n[t]+' cas</span><span class="th-a" aria-hidden="true">→</span></a></li>').join('');
  const c=document.getElementById('techCount');if(c)c.textContent=CASES.length;
})();
