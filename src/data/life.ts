export interface LifeEntry {
  // Use YYYY-MM-DD so entries can be sorted automatically, newest first.
  date: string;
  title: string;
  paragraphs: string[];
  image?: { src: string; alt: string; caption?: string };
}

// Add personal updates here. Empty years remain clearly labelled on the page.
// Example structure: { date: '2026-10-18', title: 'Your title', paragraphs: ['Your update.'] }
export const lifeYears: { year: number; entries: LifeEntry[] }[] = [
  { year: 2026, entries: [] },
  { year: 2025, entries: [] },
];
