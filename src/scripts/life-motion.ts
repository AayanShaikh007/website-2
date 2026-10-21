import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const journal=document.querySelector<HTMLElement>('.life-journal');
if(journal){
 const motion=gsap.matchMedia();
 if(document.documentElement.dataset.motion!=='low') motion.add('(min-width: 0px)',()=>{
  gsap.utils.toArray<HTMLElement>('.life-entries').forEach(group=>{
   const progress=group.querySelector<HTMLElement>('.journal-progress');
   if(progress)gsap.fromTo(progress,{scaleY:0},{scaleY:1,ease:'none',scrollTrigger:{trigger:group,start:'top 65%',end:'bottom 65%',scrub:.35,invalidateOnRefresh:true}});
  });
  gsap.utils.toArray<HTMLElement>('[data-journal-entry]').forEach(entry=>{
   gsap.from(entry,{y:22,opacity:0,duration:.75,ease:'power2.out',clearProps:'transform,opacity',scrollTrigger:{trigger:entry,start:'top 90%',once:true}});
   gsap.fromTo(entry,{'--marker-fill':'#050505','--marker-border':'#555'},{'--marker-fill':'#e5e5e5','--marker-border':'#e5e5e5',duration:.3,scrollTrigger:{trigger:entry,start:'top 65%',toggleActions:'play none none reverse'}});
  });
  gsap.utils.toArray<HTMLElement>('[data-journal-photo]').forEach((photo,index)=>{
   gsap.from(photo,{x:()=>window.innerWidth-photo.getBoundingClientRect().left+30,rotation:14+(index%3)*5,opacity:0,duration:1.15,delay:(index%2)*.09,ease:'power3.out',clearProps:'transform,opacity',scrollTrigger:{trigger:photo,start:'top 94%',once:true,invalidateOnRefresh:true}});
  });
  // Refresh positions when an entry expands, including later entries and year tracks.
  const refresh=()=>ScrollTrigger.refresh();
  journal.addEventListener('toggle',refresh,true);
  return ()=>journal.removeEventListener('toggle',refresh,true);
 });
 // Refresh after images load, without needing a resize or another scroll.
 journal.querySelectorAll('img').forEach(image=>{
  if(!image.complete)image.addEventListener('load',()=>ScrollTrigger.refresh(),{once:true});
 });
}

const lightbox=document.querySelector<HTMLDialogElement>('.life-lightbox');
if(lightbox && typeof lightbox.showModal==='function'){
 const image=lightbox.querySelector<HTMLImageElement>('img');
 const caption=lightbox.querySelector('figcaption');
 journal?.querySelectorAll<HTMLAnchorElement>('[data-life-photo]').forEach(link=>{
  link.addEventListener('click',event=>{
   // Preserve normal open-in-new-tab shortcuts and the no-JavaScript link fallback.
   if(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
   if(!image||!caption)return;
   event.preventDefault();
   image.src=link.href;
   image.alt=link.querySelector('img')?.alt??'';
   caption.textContent=link.dataset.caption??'';
   lightbox.showModal();
  });
 });
 lightbox.querySelector('button')?.addEventListener('click',()=>lightbox.close());
 lightbox.addEventListener('click',event=>{if(event.target===lightbox)lightbox.close();});
}
