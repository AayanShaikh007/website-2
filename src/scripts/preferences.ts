const root=document.documentElement;
const theme=document.querySelector<HTMLButtonElement>('#theme-toggle');
const motion=document.querySelector<HTMLButtonElement>('#motion-toggle');
const save=(key:string,value:string)=>{try{localStorage.setItem(key,value);}catch{/* Preferences still work for this visit. */}};
const updateTheme=()=>{
 const light=root.dataset.theme==='light';
 const label=light?'Use dark theme':'Use light theme';
 theme?.setAttribute('aria-label',label);theme?.setAttribute('title',label);
 document.querySelector('meta[name="theme-color"]')?.setAttribute('content',light?'#f7f6f2':'#050505');
};
const updateMotion=()=>{
 const low=root.dataset.motion==='low';
 motion?.setAttribute('aria-pressed',String(low));
 motion?.setAttribute('aria-label','Reduce motion');
 motion?.setAttribute('title',low?'Reduced motion on':'Reduced motion off');
 document.querySelectorAll<HTMLSourceElement>('picture source[media]').forEach(source=>{
  if(source.media.includes('prefers-reduced-motion'))source.media=low?'all':'not all';
 });
};
updateTheme();updateMotion();
theme?.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='light'?'dark':'light';save('portfolio-theme',root.dataset.theme);updateTheme();});
motion?.addEventListener('click',()=>{root.dataset.motion=root.dataset.motion==='low'?'full':'low';save('portfolio-motion',root.dataset.motion);updateMotion();window.location.reload();});
for(const [query,key] of [['(prefers-color-scheme: light)','portfolio-theme'],['(prefers-reduced-motion: reduce)','portfolio-motion']]){
 window.matchMedia(query).addEventListener('change',()=>{try{if(!localStorage.getItem(key))window.location.reload();}catch{window.location.reload();}});
}
export {};
