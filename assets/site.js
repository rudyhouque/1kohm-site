const CAT=[
  {id:"horloge",logo:"/img/logos/horloge-du-vent.svg",logoAlt:"L\'Horloge du vent",code:"PRJ-06",title:"L'Horloge du vent",cadre:"Projet personnel",year:2026,dom:"Objet connecté",tech:["ESP32","Moteurs pas à pas","Capteur optique","Développement assisté par IA"],img:"/img/horloge/horloge-bleu-marine.jpg",txt:"Une horloge murale qui affiche le vent de vos spots sur trois jours. Électronique repensée pour la série, testée avec des agents d'IA."},
  {id:"alphapen",logo:"/img/logos/alphapen.png",logoAlt:"AlphaPen",code:"PRJ-05",title:"AlphaPen, le stylo qui lit ce qu'il écrit",cadre:"BLUEGRioT",year:2025,dom:"Objet connecté",tech:["BLE","Capteur d'image","Compression embarquée","Basse consommation"],img:"/img/alphapen/stylo-apen-carre.jpg",txt:"Une caméra dans un stylo : trois images par seconde en Bluetooth basse consommation, compressées sur le microcontrôleur."},
  {id:"enchanted",logo:"/img/logos/enchanted-tools.png",logoAlt:"Enchanted Tools",code:"PRJ-04",title:"Les runes de Mirokaï",cadre:"BLUEGRioT",year:2022,dom:"Robotique",tech:["Bluetooth AoA","Localisation intérieure","RFID UHF","Basse consommation"],img:"/img/enchanted/film-runes.jpg",txt:"Des galets connectés qui guident le robot d'Enchanted Tools jusqu'à l'objet à saisir, à 5° près, même derrière un mur."},
  {id:"cintre",logo:"/img/logos/galeries-lafayette.png",logoAlt:"Galeries Lafayette Champs-Élysées",code:"PRJ-01",title:"Le cintre connecté",cadre:"BLUEGRioT",year:2019,dom:"Retail",tech:["Thread","RFID / NFC","Basse consommation"],img:"/img/cintre/portants.jpg",txt:"Plus de 3 000 cintres connectés pour les Galeries Lafayette Champs-Élysées, conçus et livrés en 15 mois."},
  {id:"choose",logo:"/img/logos/eram.png",logoAlt:"Éram",code:"PRJ-02",title:"#Choose, la chaussure caméléon",cadre:"Phoceis",year:2016,dom:"Mode connectée",tech:["BLE","Textile lumineux","Recharge par induction"],img:"/img/choose/produit.jpg",txt:"Une chaussure qui change de couleur depuis le smartphone. Du prototype au CES 2016, puis 150 paires fabriquées en France par Éram."},
  {id:"locacup",logo:"/img/logos/locacup.png",logoAlt:"Locacup",code:"PRJ-03",title:"Locacup",cadre:"Phoceis",year:2014,dom:"Application mobile",tech:["Application mobile","iOS","Android","Apple Watch"],img:"/img/locacup/locacup-3.jpg",txt:"Une application gratuite de pronostics de football entre amis et collègues. 100 000 comptes actifs, vue au 19/20 de France 3."}
];
// projets à détailler plus tard : petite vignette, pas de page
const LATER=[
  {title:"Be-One",cadre:"BLUEGRioT",dom:"Santé et sport",tech:["BLE","Industrialisation"],img:"/img/autres-projets/be-one.jpg",txt:"Un brassard qui analyse la sueur des athlètes pour ajuster leur hydratation. Miniaturisation et industrialisation pour BeLab."},
  {title:"Somno-Art",cadre:"BLUEGRioT",dom:"Santé",tech:["BLE","Dispositif médical"],img:"/img/autres-projets/somno-art.jpg",txt:"Un brassard médical qui suit les stades du sommeil à partir du rythme cardiaque, pour la recherche clinique."},
  {title:"Sleepee by Tim",cadre:"BLUEGRioT",dom:"Santé",tech:["Textile connecté","Dispositif médical"],img:"/img/autres-projets/sleepee.jpg",txt:"Un sous-vêtement connecté et son boîtier d'alerte pour aider les enfants à vaincre l'énurésie nocturne."},
  {title:"Compagnon 2.0",cadre:"BLUEGRioT",dom:"Mobilité",tech:["Géolocalisation"],img:"/img/autres-projets/compagnon.jpg",txt:"Une canne connectée qui se géolocalise et envoie une alerte en cas de chute."},
  {title:"Lesaffre, niveau des cuves",cadre:"BLUEGRioT",dom:"Industrie",tech:["Sigfox","Capteurs industriels"],img:"/img/autres-projets/lesaffre.jpg",txt:"Un capteur sans contact qui mesure le niveau des cuves de levure en chambre froide. Brevet déposé, dont je suis l'un des inventeurs."},
  {title:"Enersys, suivi des batteries",cadre:"BLUEGRioT",dom:"Industrie",tech:["Thread","Capteurs industriels"],img:"/img/autres-projets/enersys.jpg",txt:"Des boîtiers qui surveillent tension, courant et température de chaque batterie en recharge, sur un réseau sans fil d'usine."},
  {title:"Leman Industrie, banc de test",cadre:"BLUEGRioT",dom:"Industrie",tech:["Banc de test"],img:"/img/autres-projets/leman.jpg",txt:"Un banc qui contrôle les capteurs de vitesse des vélos électriques Decathlon avant leur montage."},
  {title:"Wavely Predict",cadre:"BLUEGRioT",dom:"Industrie",tech:["Capteurs industriels"],img:"/img/autres-projets/wavely.jpg",txt:"Des capteurs de vibrations et de sons qui détectent les signes avant-coureurs d'une panne de machine."},
  {title:"Norauto, kit d'audit",cadre:"BLUEGRioT",dom:"Industrie",tech:["Capteurs industriels"],img:"/img/autres-projets/norauto.jpg",txt:"Des capteurs modulaires pour suivre le niveau des cuves d'huile et le remplissage des bennes à pneus."},
  {title:"Reyouz",cadre:"BLUEGRioT",dom:"Retail",tech:["Écoconception"],img:"/img/autres-projets/reyouz.jpg",txt:"Une borne pour authentifier et retracer les appareils électroniques revendus d'occasion."},
  {title:"Kidscan",cadre:"BLUEGRioT",dom:"Enfance",tech:["Application mobile"],img:"/img/autres-projets/kidscan.jpg",txt:"Un objet qui apprend aux enfants la valeur de l'argent en scannant les produits en magasin."},
  {title:"Ozmoz",cadre:"BLUEGRioT",dom:"Enfance",tech:["BLE","Industrialisation"],img:"/img/autres-projets/ozmoz.jpg",txt:"Une veilleuse qui diffuse des sons apaisants et surveille la chambre, pilotée depuis le téléphone des parents."},
  {title:"Mon Tapis de Quartier",cadre:"BLUEGRioT",dom:"Retail",tech:["Borne interactive"],img:"/img/autres-projets/tapis.jpg",txt:"Une borne en magasin pour dessiner un tapis de jeu à l'image de son quartier."},
  {title:"Le Spot",cadre:"",dom:"Jeu interactif",tech:[],img:"/img/autres-projets/le-spot.jpg",txt:"Un jeu au sol, sur tapis connecté."}
];
document.querySelectorAll('.js-count').forEach(e=>e.textContent=CAT.length+LATER.length);
const URL={horloge:"/horloge-du-vent/",alphapen:"/alphapen/",enchanted:"/enchanted-tools/",cintre:"/cintre-connecte/",choose:"/choose/",locacup:"/locacup/"};

const fState={cadre:"Tous",tech:"Toutes"};
function chips(el,vals,key){
  el.innerHTML=vals.map(v=>'<button type="button" class="chip-f'+(fState[key]===v?' on':'')+'" aria-pressed="'+(fState[key]===v)+'" data-k="'+key+'" data-v="'+v+'">'+v+'</button>').join('');
}
function drawList(){
  const ALL=CAT.concat(LATER);
  const cadres=["Tous",...new Set(ALL.map(p=>p.cadre).filter(Boolean))];
  const techs=["Toutes",...new Set(ALL.flatMap(p=>p.tech))];
  chips(document.getElementById('fCadre'),cadres,'cadre');
  chips(document.getElementById('fTech'),techs,'tech');
  const list=CAT.filter(p=>(fState.cadre==="Tous"||p.cadre===fState.cadre)&&(fState.tech==="Toutes"||p.tech.includes(fState.tech)))
    .sort((a,b)=>(b.year||0)-(a.year||0));
  const todo=t=>'<span class="todo">'+t+'</span>';
  document.getElementById('plist').innerHTML=list.map(p=>{
    const img=p.img?'<div class="pic"><img loading="lazy" src="'+p.img+'" alt="'+p.title+'"'+(p.pos?' style="object-position:'+p.pos+'"':'')+'>'+(p.logo?'<span class="plogo"><img src="'+p.logo+'" alt="'+p.logoAlt+'"></span>':'')+'</div>':'<div class="ph"><span>Photo à venir</span></div>';
    const inner=img+'<div class="pi"><div class="pmeta">'+(p.code?'<b>'+p.code+'</b>':'')+'<time>'+(p.year||todo('année'))+'</time><span class="cadre">'+(p.cadre||todo('cadre'))+'</span><span>'+p.dom+'</span>'+(p.recent?'<i class="badge">Récent</i>':'')+'</div><h2 class="ph2">'+p.title+'</h2><p>'+(p.txt||todo('accroche à venir'))+'</p><div class="tags">'+(p.tech.length?p.tech.map(t=>'<span>'+t+'</span>').join(''):todo('technologies'))+'</div>'+(p.nopage?'<span class="soon">Page à venir</span>':'<span class="more">./entrer-dans-le-projet →</span>')+'</div>';
    return p.nopage?'<div class="prow">'+inner+'</div>':'<a class="prow" href="'+URL[p.id]+'">'+inner+'</a>';
  }).join('');
  const keep=p=>(fState.cadre==="Tous"||p.cadre===fState.cadre)&&(fState.tech==="Toutes"||p.tech.includes(fState.tech));
  const lt=LATER.filter(keep), lw=document.getElementById('later');
  if(lw){
    lw.hidden=lt.length===0;
    document.getElementById('laterCount').textContent=lt.length;
    document.getElementById('llist').innerHTML=lt.map(p=>'<li class="lcard">'+(p.img?'<div class="lpic"><img loading="lazy" src="'+p.img+'" alt=""></div>':'<div class="lpic none" aria-hidden="true"><span>'+p.title.charAt(0)+'</span></div>')+'<div class="lt"><span class="lmeta">'+[p.cadre,p.dom].filter(Boolean).join(' · ')+'</span><h3>'+p.title+'</h3><p>'+p.txt+'</p></div></li>').join('');
  }
  document.getElementById('pempty').hidden=list.length+lt.length>0;
}
document.addEventListener('click',e=>{const c=e.target.closest('.chip-f');if(!c)return;fState[c.dataset.k]=c.dataset.v;drawList();const b=document.querySelector('.chip-f[data-k="'+c.dataset.k+'"][data-v="'+c.dataset.v+'"]');if(b)b.focus()});
const ac=document.getElementById('allCount');if(ac)ac.textContent=CAT.length+LATER.length;
if(document.getElementById('plist'))drawList();

// visionneuse avec navigation
const lb=document.getElementById('lb'),lbImg=document.getElementById('lbImg'),lbCap=document.getElementById('lbCap'),lbCount=document.getElementById('lbCount');
let set=[],cur=0,opener=null;
function lbShow(i){cur=(i+set.length)%set.length;const im=set[cur];lbImg.src=im.currentSrc||im.src;lbImg.alt=im.alt;lbCap.textContent=im.alt;lbCount.textContent=(cur+1)+' / '+set.length}
function lbOpen(f){const scope=f.closest('main')||document;set=[...scope.querySelectorAll('.pic.zoom img')];opener=f;lbShow(set.indexOf(f.querySelector('img')));lb.hidden=false;document.getElementById('lbClose').focus()}
function lbHide(){lb.hidden=true;if(opener)(opener.querySelector('.zbtn')||opener).focus()}
// les photos agrandissables deviennent accessibles au clavier
document.querySelectorAll('.pic.zoom').forEach(f=>{if(f.tagName!=='A'){const im=f.querySelector('img'),b=document.createElement('button');b.type='button';b.className='zbtn';b.setAttribute('aria-label','Agrandir : '+(im?im.alt:'photo'));f.appendChild(b)}});
document.addEventListener('click',e=>{
  if(e.target.closest('#lbPrev')){lbShow(cur-1);return}
  if(e.target.closest('#lbNext')){lbShow(cur+1);return}
  const f=e.target.closest('.pic.zoom');
  if(f&&lb.hidden&&f.tagName!=='A'){lbOpen(f);return}
  if(!lb.hidden&&e.target.closest('#lb'))lbHide();
});
document.addEventListener('keydown',e=>{
  if(lb.hidden)return;
  if(e.key==="Escape")lbHide();
  else if(e.key==="ArrowRight")lbShow(cur+1);
  else if(e.key==="ArrowLeft")lbShow(cur-1);
  else if(e.key==="Tab"){const b=[...lb.querySelectorAll('button')],i=b.indexOf(document.activeElement);e.preventDefault();b[(i+(e.shiftKey?-1:1)+b.length)%b.length].focus()}
});

// thème : « tirage papier » par défaut (data-theme="light" sur <html>), sombre en option
const btn=document.getElementById('themeBtn'),root=document.documentElement;
function isDark(){return root.getAttribute('data-theme')!=="light"}
function label(){btn.textContent=isDark()?"mode clair":"mode sombre";btn.setAttribute('aria-pressed',String(!isDark()))}
label();
btn.addEventListener('click',()=>{const t=isDark()?"light":"dark";root.setAttribute('data-theme',t);try{localStorage.setItem('theme',t)}catch(e){};label()});

document.querySelectorAll('a.mail').forEach(a=>{const m=a.dataset.u+'@'+a.dataset.d;a.href='mailto:'+m;const t=a.querySelector('.mail-txt');(t||a).textContent=m});

// vue éclatée 3D : seulement si la page contient la scène
const ex=document.querySelector('.ex');
if(ex)explode(ex);
function explode(box){
  const stage=box.querySelector('.ex-stage'),scene=box.querySelector('.ex-scene');
  const layers=[...box.querySelectorAll('.ly')].sort((a,b)=>a.dataset.i-b.dataset.i);
  const bbs=[...box.querySelectorAll('.bb')];
  const q=k=>box.querySelector('[data-ex="'+k+'"]'),toggle=q('toggle'),outRz=q('rz'),outRx=q('rx'),outSt=q('st');
  const CLOSED=[46,38,32,26,18,0],OPEN=[405,325,250,175,95,0],RZ0=-30,RX0=58;
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  let rz=RZ0,rx=RX0,open=false,auto=!reduce,drag=null,raf=0,last=0,visible=false,started=false,easeT=0;

  function pose(){
    scene.style.transform='rotateX('+rx+'deg) rotateZ('+rz+'deg)';
    const bb='rotateZ('+(-rz)+'deg) rotateX('+(-rx)+'deg)';
    for(const b of bbs)b.style.transform=bb;
    outRz.textContent=String(((Math.round(rz)%360)+360)%360).padStart(3,'0');
    outRx.textContent=Math.round(rx);
  }
  function setOpen(v){
    open=v;box.classList.toggle('open',v);
    layers.forEach((l,i)=>{l.style.transitionDelay=(v?(5-i)*70:i*40)+'ms';l.style.transform='translateZ('+(v?OPEN:CLOSED)[i]+'px)'});
    outSt.textContent=v?'ÉCLATÉ':'ASSEMBLÉ';
    toggle.textContent=v?'Rassembler le boîtier':'Éclater la vue';
    toggle.setAttribute('aria-pressed',String(v));
  }
  // rotation douce pour les gestes discrets (clavier, recentrage), directe pendant un glisser
  function eased(fn){box.classList.add('easing');fn();pose();clearTimeout(easeT);easeT=setTimeout(()=>box.classList.remove('easing'),520)}
  function stopAuto(){auto=false;cancelAnimationFrame(raf);raf=0}
  function tick(now){
    const dt=Math.min(64,now-last);last=now;
    if(!drag){rz+=dt*0.006;pose()}
    raf=(auto&&visible)?requestAnimationFrame(tick):0;
  }
  function run(){if(auto&&visible&&!raf){last=performance.now();raf=requestAnimationFrame(tick)}}

  // échelle selon la place disponible (le cintre fait 600px, les étiquettes débordent à droite)
  function fit(){
    const w=stage.clientWidth,h=stage.clientHeight,tags=matchMedia('(min-width: 641px)').matches;
    stage.style.setProperty('--ex-scale',Math.min(1,w/(tags?820:640),h/720).toFixed(3));
  }
  fit();
  if('ResizeObserver' in window)new ResizeObserver(fit).observe(stage);else addEventListener('resize',fit);

  pose();
  if(reduce)setOpen(true);else setOpen(false);

  new IntersectionObserver(es=>{
    visible=es[0].isIntersecting;
    if(visible&&!started){started=true;if(!reduce)setTimeout(()=>setOpen(true),250)}
    if(visible)run();else{cancelAnimationFrame(raf);raf=0}
  },{threshold:.3}).observe(stage);

  toggle.addEventListener('click',()=>setOpen(!open));
  q('reset').addEventListener('click',()=>{stopAuto();eased(()=>{rz=RZ0;rx=RX0})});

  stage.addEventListener('pointerdown',e=>{
    if(e.button>0)return;
    stopAuto();box.classList.remove('easing');
    drag={x:e.clientX,y:e.clientY,rz,rx};
    stage.classList.add('drag');
    try{stage.setPointerCapture(e.pointerId)}catch(_){}
  });
  stage.addEventListener('pointermove',e=>{
    if(!drag)return;
    rz=drag.rz-(e.clientX-drag.x)*0.4;
    rx=Math.max(20,Math.min(80,drag.rx-(e.clientY-drag.y)*0.25));
    pose();
  });
  const end=()=>{drag=null;stage.classList.remove('drag')};
  stage.addEventListener('pointerup',end);
  stage.addEventListener('pointercancel',end);

  stage.addEventListener('keydown',e=>{
    const k=e.key;
    if(k==='ArrowLeft'){stopAuto();eased(()=>rz+=10)}
    else if(k==='ArrowRight'){stopAuto();eased(()=>rz-=10)}
    else if(k==='ArrowUp'){stopAuto();eased(()=>rx=Math.max(20,rx-5))}
    else if(k==='ArrowDown'){stopAuto();eased(()=>rx=Math.min(80,rx+5))}
    else if(k==='Enter'||k===' ')setOpen(!open);
    else return;
    e.preventDefault();
  });
}

// salons : CES ou VivaTech, au même niveau (sans JS, les deux restent affichés)
(()=>{const tabs=[...document.querySelectorAll('.sal-tabs [role="tab"]')];if(!tabs.length)return;
const show=id=>{tabs.forEach(t=>{const on=t.getAttribute('aria-controls')===id;t.setAttribute('aria-selected',on);t.tabIndex=on?0:-1;document.getElementById(t.getAttribute('aria-controls')).hidden=!on})};
tabs.forEach((t,i)=>{t.addEventListener('click',()=>{show(t.getAttribute('aria-controls'));history.replaceState(null,'','#'+t.getAttribute('aria-controls'))});
t.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){const n=tabs[(i+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length];n.focus();n.click()}})});
show(location.hash==='#vivatech'?'vivatech':'ces')})();

// filtres repliés : quelques lignes de cases, puis « + N autres » (Projets, Technologies)
(()=>{
  const boxes=[...document.querySelectorAll('.filters .chips')];if(!boxes.length)return;
  const open=new Set();
  function update(el){
    let b=el.nextElementSibling;
    if(!b||!b.classList.contains('chips-more')){
      b=document.createElement('button');b.type='button';b.className='chips-more';b.setAttribute('aria-controls',el.id);
      b.addEventListener('click',()=>{open.has(el)?open.delete(el):open.add(el);update(el);if(!open.has(el))el.scrollIntoView({block:'nearest'})});
      el.after(b);
    }
    const chips=[...el.children];
    const top=c=>c.getBoundingClientRect().top-el.getBoundingClientRect().top;
    el.classList.remove('clamp');chips.forEach(c=>c.classList.remove('off'));
    const all=el.clientHeight;el.classList.add('clamp');const lim=el.clientHeight;
    const over=all>lim+2;
    // une case cochée cachée : on déplie plutôt que de la masquer
    if(over&&!open.has(el)&&chips.some(c=>c.classList.contains('on')&&top(c)>=lim))open.add(el);
    const isOpen=open.has(el);
    el.classList.toggle('clamp',over&&!isOpen);
    const hid=over&&!isOpen?chips.filter(c=>top(c)>=lim):[];
    hid.forEach(c=>c.classList.add('off'));
    b.hidden=!over;
    b.setAttribute('aria-expanded',String(isOpen));
    b.textContent=isOpen?'− réduire':'+ '+hid.length+(hid.length>1?' autres':' autre');
  }
  boxes.forEach(el=>{
    update(el);
    new MutationObserver(()=>update(el)).observe(el,{childList:true});
  });
  let t=0;addEventListener('resize',()=>{clearTimeout(t);t=setTimeout(()=>boxes.forEach(update),150)});
})();
