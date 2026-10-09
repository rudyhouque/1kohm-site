const CAT=[
  {id:"cintre",title:"Le cintre connecté",cadre:"BLUEGRioT",year:2019,dom:"Retail",tech:["Thread","RFID / NFC","Basse consommation"],img:"/img/cintre/portants.jpg",txt:"Plus de 3 000 cintres connectés pour les Galeries Lafayette Champs-Élysées, conçus et livrés en 15 mois."},
  {id:"choose",title:"#Choose, la chaussure caméléon",cadre:"Phoceis",year:2016,dom:"Mode connectée",tech:["BLE","Textile lumineux","Recharge par induction"],img:"/img/choose/produit.jpg",txt:"Une chaussure qui change de couleur depuis le smartphone. Du prototype au CES 2016, puis 150 paires fabriquées en France par Éram."},
  {id:"locacup",title:"Locacup",cadre:"Phoceis",year:2014,dom:"Application mobile",tech:["Application mobile","iOS","Android","Apple Watch"],img:"/img/locacup/locacup-3.jpg",txt:"Une application gratuite de pronostics de football entre amis et collègues. 100 000 comptes actifs, vue au 19/20 de France 3."}
];
const URL={cintre:"/cintre-connecte/",choose:"/choose/",locacup:"/locacup/"};

const fState={cadre:"Tous",tech:"Toutes"};
function chips(el,vals,key){
  el.innerHTML=vals.map(v=>'<button type="button" class="chip-f'+(fState[key]===v?' on':'')+'" data-k="'+key+'" data-v="'+v+'">'+v+'</button>').join('');
}
function drawList(){
  const cadres=["Tous",...new Set(CAT.map(p=>p.cadre).filter(Boolean))];
  const techs=["Toutes",...new Set(CAT.flatMap(p=>p.tech))];
  chips(document.getElementById('fCadre'),cadres,'cadre');
  chips(document.getElementById('fTech'),techs,'tech');
  const list=CAT.filter(p=>(fState.cadre==="Tous"||p.cadre===fState.cadre)&&(fState.tech==="Toutes"||p.tech.includes(fState.tech)))
    .sort((a,b)=>(b.year||0)-(a.year||0));
  const todo=t=>'<span class="todo">'+t+'</span>';
  document.getElementById('plist').innerHTML=list.map(p=>{
    const img=p.img?'<div class="pic"><img loading="lazy" src="'+p.img+'" alt="'+p.title+'"'+(p.pos?' style="object-position:'+p.pos+'"':'')+'></div>':'<div class="ph"><span>Photo à venir</span></div>';
    const inner=img+'<div class="pi"><div class="pmeta"><time>'+(p.year||todo('année'))+'</time><span class="cadre">'+(p.cadre||todo('cadre'))+'</span><span>'+p.dom+'</span>'+(p.recent?'<i class="badge">Récent</i>':'')+'</div><h3>'+p.title+'</h3><p>'+(p.txt||todo('accroche à venir'))+'</p><div class="tags">'+(p.tech.length?p.tech.map(t=>'<span>'+t+'</span>').join(''):todo('technologies'))+'</div>'+(p.nopage?'<span class="soon">Page à venir</span>':'<span class="more">Entrer dans le projet →</span>')+'</div>';
    return p.nopage?'<div class="prow">'+inner+'</div>':'<a class="prow" href="'+URL[p.id]+'">'+inner+'</a>';
  }).join('');
  document.getElementById('pempty').hidden=list.length>0;
}
document.addEventListener('click',e=>{const c=e.target.closest('.chip-f');if(!c)return;fState[c.dataset.k]=c.dataset.v;drawList()});
const ac=document.getElementById('allCount');if(ac)ac.textContent=CAT.length;


if(document.getElementById('plist'))drawList();
// visionneuse avec navigation
const lb=document.getElementById('lb'),lbImg=document.getElementById('lbImg'),lbCap=document.getElementById('lbCap'),lbCount=document.getElementById('lbCount');
let set=[],cur=0;
function lbShow(i){cur=(i+set.length)%set.length;const im=set[cur];lbImg.src=im.src;lbImg.alt=im.alt;lbCap.textContent=im.alt;lbCount.textContent=(cur+1)+' / '+set.length}
document.addEventListener('click',e=>{
  if(e.target.closest('#lbPrev')){lbShow(cur-1);return}
  if(e.target.closest('#lbNext')){lbShow(cur+1);return}
  const f=e.target.closest('.pic.zoom');
  if(f&&lb.hidden){const scope=f.closest('main')||document;set=[...scope.querySelectorAll('.pic.zoom img')];lbShow(set.indexOf(f.querySelector('img')));lb.hidden=false;return}
  if(!lb.hidden&&e.target.closest('#lb'))lb.hidden=true;
});
document.addEventListener('keydown',e=>{if(lb.hidden)return;if(e.key==="Escape")lb.hidden=true;if(e.key==="ArrowRight")lbShow(cur+1);if(e.key==="ArrowLeft")lbShow(cur-1)});


// thème
const btn=document.getElementById('themeBtn'),root=document.documentElement;
function isDark(){const t=root.getAttribute('data-theme');return t?t==="dark":matchMedia('(prefers-color-scheme: dark)').matches}
function label(){btn.textContent=isDark()?"Mode clair":"Mode sombre"}
try{const s=localStorage.getItem('theme');if(s)root.setAttribute('data-theme',s)}catch(e){}
label();
btn.addEventListener('click',()=>{const t=isDark()?"light":"dark";root.setAttribute('data-theme',t);try{localStorage.setItem('theme',t)}catch(e){};label()});
try{matchMedia('(prefers-color-scheme: dark)').addEventListener('change',label)}catch(e){}

document.querySelectorAll('a.mail').forEach(a=>{const m=a.dataset.u+'@'+a.dataset.d;a.href='mailto:'+m;a.textContent=m});
