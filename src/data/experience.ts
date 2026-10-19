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
 {organization:'Stealth Startup',role:'Engineering',location:'Waterloo, Ontario · On-site',dates:'May 2026 — present',tags:['Electrical engineering']},
 {organization:'Google Developer Groups on Campus | UoG',role:'Financial Director',location:'Guelph, Ontario',dates:'September 2026 — present',tags:[]},
 {organization:'University of Guelph',role:'Robotics Research Assistant',location:'Guelph, Ontario',description:'Working on strawberry-picking robots at the University of Guelph. My research work includes robotic-arm motion control on QNX, MATLAB simulation and test analysis, and integrating sensor and vision inputs for autonomous operation.',tags:['QNX','Robotics','MATLAB','Sensors']},
 {organization:'U of G IEEE Student Branch',role:'Technical Projects Lead',location:'Guelph, Ontario',dates:'September 2025 — present',description:'Leading technical projects across PCB design, computer vision, and MATLAB at the University of Guelph IEEE Student Branch. I design boards for workshops, help attendees with KiCad, soldering, and troubleshooting, and maintain the club website with React and JavaScript.',tags:['Project leadership','PCB design','Computer vision','MATLAB','KiCad','React']},
];
export const education = {
 institution: 'University of Guelph',
 degree: 'Bachelor of Engineering, Computer Engineering (Co-op)',
 location: 'Guelph, Ontario',
 dates: 'September 2025 — April 2030 (expected)',
 coursework: ['Object-oriented programming', 'Linear algebra', 'Calculus'],
};
