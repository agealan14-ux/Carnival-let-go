Reveal.initialize({width:540,height:960,margin:0,minScale:0.1,maxScale:2,hash:true,transition:'slide',controls:false,progress:false,center:false});
const counter=document.querySelector('.slide-counter');
const bar=document.querySelector('.progress-bar');
function updateProgress(event){const current=event.indexh+1,total=Reveal.getTotalSlides();counter.value=`${current}/${total}`;counter.textContent=counter.value;bar.style.width=`${current/total*100}%`;}
Reveal.on('ready',updateProgress); Reveal.on('slidechanged',updateProgress);
document.querySelector('.nav-prev').addEventListener('click',()=>Reveal.prev());
document.querySelector('.nav-next').addEventListener('click',()=>Reveal.next());
document.addEventListener('click',e=>{if(!e.target.closest('button,[data-no-nav]')) Reveal.next()});
document.addEventListener('contextmenu',e=>{if(!e.target.closest('button,[data-no-nav]')){e.preventDefault();Reveal.prev()}});

// Single source of truth for slide audio: sorted file order maps to slides 2–12.
const slideAudio = (() => {
  const files = ['1a.mp3','1b.mp3','2a.mp3','2b.mp3','3a.mp3','4a.ogg','4b.ogg','5a.ogg','5b.ogg','6a.ogg','6b.ogg'];
  const players = files.map(file => { const audio = new Audio(`${file}`); audio.preload = 'auto'; audio.muted = true; return audio; });
  const played = new Set();
  let active = null;
  let pendingIndex = null;
  let retryInstalled = false;

  function stopActive() {
    if (!active) return;
    active.pause();
    active.currentTime = 0;
    active = null;
  }
  function retryOnInteraction() {
    if (retryInstalled) return;
    retryInstalled = true;
    const retry = () => {
      if (pendingIndex === null) return;
      const index = pendingIndex;
      pendingIndex = null;
      start(index);
    };
    ['pointerdown','keydown','touchstart'].forEach(type => document.addEventListener(type, retry, {once:true, capture:true}));
  }
  function start(index) {
    if (index < 0 || index >= players.length || played.has(index)) return;
    const audio = players[index];
    active = audio;
    audio.play().then(() => {
      if (active === audio) { played.add(index); pendingIndex = null; }
    }).catch(() => {
      if (active === audio) { active = null; pendingIndex = index; retryOnInteraction(); }
    });
  }
  function enterSlide(event) {
    stopActive();
    const index = event.indexh - 1; // first audio belongs to slide 2
    pendingIndex = null;
    if (index >= 0 && index < players.length && !played.has(index)) start(index);
  }
  return { enterSlide };
})();
Reveal.on('ready', slideAudio.enterSlide);
Reveal.on('slidechanged', slideAudio.enterSlide);


// Tap content images to open a larger view; cover art and hero videos are excluded.
document.querySelectorAll('.topic-slide .media-slot img').forEach(image => {
  image.classList.add('zoomable-image');
  image.tabIndex = 0;
  image.setAttribute('role', 'button');
  image.setAttribute('aria-label', 'Ampliar imagen');
  const open = () => {
    const overlay = document.createElement('div');
    overlay.className = 'image-zoom-overlay';
    overlay.dataset.noNav = '';
    overlay.innerHTML = '<button type="button" class="image-zoom-close" aria-label="Cerrar">×</button><img alt="">';
    overlay.querySelector('img').src = image.src;
    overlay.querySelector('img').alt = image.alt;
    const close = () => overlay.remove();
    overlay.addEventListener('click', close);
    overlay.querySelector('img').addEventListener('click', event => event.stopPropagation());
    overlay.querySelector('button').addEventListener('click', close);
    document.body.append(overlay);
  };
  image.addEventListener('click', open);
  image.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); } });
});
