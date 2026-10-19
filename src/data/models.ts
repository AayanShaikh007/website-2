export interface ProjectModel {label: string; src: string}
export interface ModelCollection {title: string; note: string; models: ProjectModel[]}
const designNote='Converted from the project CAD. Colours are simplified; this is design geometry rather than a scan of the finished build.';
export const projectModels: Record<string,ModelCollection> = {
 'kb01':{title:'KB-01 assembly',note:designNote+' The source includes switches but not illustrated keycaps.',models:[{label:'Keyboard assembly',src:'/models/kb01.glb'}]},
 'x70-hotas':{title:'X-70 HOTAS',note:designNote,models:[{label:'Joystick mechanism',src:'/models/x70-stick.glb'},{label:'Throttle assembly',src:'/models/x70-throttle.glb'},{label:'Joystick grip',src:'/models/x70-grip.glb'}]},
 'splitboard':{title:'Splitboard',note:designNote,models:[{label:'Left half',src:'/models/split-left.glb'},{label:'Right half',src:'/models/split-right.glb'}]},
 'sweatpad':{title:'Sweatpad assembly',note:designNote,models:[{label:'Assembly',src:'/models/sweatpad.glb'}]},
 'voronoi-mouse':{title:'Mouse design',note:designNote,models:[{label:'Mouse CAD',src:'/models/voronoi-mouse.glb'}]},
 'h2-at-home':{title:'H₂@Home components',note:'Individual parts from the repository’s print files; these are not a complete hydrogen system assembly. Colours are simplified.',models:[{label:'Dispenser parts',src:'/models/h2-dispenser.glb'},{label:'Motor holder parts',src:'/models/h2-motor-holder.glb'}]},
 'mini-waymo':{title:'Mini Waymo print parts',note:'Parts from the repository’s print file, shown in their saved arrangement. This is not a complete vehicle assembly.',models:[{label:'Print parts',src:'/models/mini-waymo.glb'}]},
};
