const track=document.querySelector<HTMLElement>('.reading-track');
if(track){
 const fill=track.querySelector<HTMLElement>('.reading-fill');
 const markers=Array.from(track.querySelectorAll<HTMLAnchorElement>('[data-progress-section]'));
 const sections=markers.map(marker=>({marker,section:document.getElementById(marker.dataset.progressSection??'')}));
 const header=document.querySelector<HTMLElement>('.home-nav');
 const menuLinks=Array.from(document.querySelectorAll<HTMLAnchorElement>('.home-nav > nav:not(.reading-track) a'));
 let queued=false;
 const update=()=>{
  queued=false;
  const maxScroll=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
  const progress=Math.min(1,Math.max(0,window.scrollY/maxScroll));
  if(fill)fill.style.transform=`scaleX(${progress})`;
  const readingPosition=window.scrollY+Math.max((header?.offsetHeight??75)+35,window.innerHeight*.3);
  let active='';
  for(const {marker,section} of sections){
   if(!section)continue;
   const top=section.getBoundingClientRect().top+window.scrollY;
   marker.style.left=`${Math.min(99,Math.max(1,top/maxScroll*100))}%`;
   marker.classList.toggle('is-passed',readingPosition>=top);
   if(readingPosition>=top)active=section.id;
  }
  if(progress>=.995)active='contact';
  for(const {marker} of sections){
   if(marker.dataset.progressSection===active)marker.setAttribute('aria-current','location');
   else marker.removeAttribute('aria-current');
  }
  menuLinks.forEach(link=>{
   if(active&&link.hash===`#${active}`)link.setAttribute('aria-current','location');
   else link.removeAttribute('aria-current');
  });
 };
 const schedule=()=>{if(!queued){queued=true;requestAnimationFrame(update);}};
 window.addEventListener('scroll',schedule,{passive:true});
 window.addEventListener('resize',schedule,{passive:true});
 // Show more, image loading and responsive layout changes all affect the scroll range.
 new ResizeObserver(schedule).observe(document.body);
 window.addEventListener('pageshow',schedule);
 update();
}
export {};
