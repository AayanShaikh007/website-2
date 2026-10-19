import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const journal=document.querySelector<HTMLElement>('.life-journal');
if(journal){
 const motion=gsap.matchMedia();
 motion.add('(prefers-reduced-motion: no-preference)',()=>{
  gsap.utils.toArray<HTMLElement>('.life-entries').forEach(group=>{
   const progress=group.querySelector<HTMLElement>('.journal-progress');
   if(progress)gsap.fromTo(progress,{scaleY:0},{scaleY:1,ease:'none',scrollTrigger:{trigger:group,start:'top 65%',end:'bottom 65%',scrub:.35,invalidateOnRefresh:true}});
  });
  gsap.utils.toArray<HTMLElement>('[data-journal-entry]').forEach(entry=>{
   gsap.from(entry,{y:22,opacity:0,duration:.75,ease:'power2.out',clearProps:'transform,opacity',scrollTrigger:{trigger:entry,start:'top 90%',once:true}});
   gsap.fromTo(entry,{'--marker-fill':'#050505','--marker-border':'#555'},{'--marker-fill':'#e5e5e5','--marker-border':'#e5e5e5',duration:.3,scrollTrigger:{trigger:entry,start:'top 65%',toggleActions:'play none none reverse'}});
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
