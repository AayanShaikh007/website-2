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
export const experience: Experience[] = [];
export const education = {
 institution: 'University of Guelph',
 degree: 'Bachelor of Engineering, Computer Engineering (Co-op)',
 location: 'Guelph, Ontario',
 dates: 'September 2025 — April 2030 (expected)',
 coursework: ['Object-oriented programming', 'Linear algebra', 'Calculus'],
};
