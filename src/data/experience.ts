export interface Experience {
 organization: string;
 role: string;
 location: string;
 dates?: string;
 description?: string;
 tags: string[];
}
// Personal responsibilities are sourced from the owner's local resume files.
// Robotics start dates conflict between resume versions, so are omitted pending confirmation.
export const experience: Experience[] = [
 {organization:'University of Guelph',role:'Robotics Research Assistant',location:'Guelph, Ontario',description:'Programmed robotic arms on QNX for real-time motion control. Used MATLAB to simulate algorithms and analyze test results, and worked on sensor and vision integration for autonomous operation.',tags:['QNX','Robotics','MATLAB','Sensors']},
 {organization:'U of G IEEE Student Branch',role:'Technical Projects Lead',location:'Guelph, Ontario',dates:'September 2025 — present',description:'Designed PCBs for club workshops and helped attendees with KiCad, soldering, and troubleshooting. Developed and maintained the club website with React and JavaScript for event information and resources.',tags:['KiCad','PCB design','React','JavaScript','Workshops']},
 {organization:'Stealth Startup',role:'Engineering',location:'',tags:[]},
];
export const education = {
 institution: 'University of Guelph',
 degree: 'Bachelor of Engineering, Computer Engineering (Co-op)',
 location: 'Guelph, Ontario',
 dates: 'September 2025 — April 2030 (expected)',
 coursework: ['Object-oriented programming', 'Linear algebra', 'Calculus'],
};
