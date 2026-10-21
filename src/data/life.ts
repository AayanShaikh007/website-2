import firstYear from './life-entries/first-year.json';
import guelph from './life-entries/guelph-engineering-competition.json';
import htn2025 from './life-entries/hack-the-north-2025.json';
import htnVolunteer from './life-entries/hack-the-north-volunteering.json';
import ingenious from './life-entries/ingenious-plus.json';
import oec from './life-entries/ontario-engineering-competition.json';
import summer from './life-entries/summer-building.json';
import undercity from './life-entries/undercity.json';
import uottahack from './life-entries/uottahack.json';
import yearTwo from './life-entries/year-two.json';

export interface LifePhoto {src: string; alt: string; caption?: string; width?: number; height?: number}
export interface LifeEntry {
 slug: string;
 date: string;
 // Internal ordering key; visible dateLabel preserves month/season precision.
 sortDate: string;
 dateLabel: string;
 location: string;
 title: string;
 subtitle: string;
 paragraphs: string[];
 image?: {src: string; alt: string; caption?: string};
 images?: LifePhoto[];
}
const entries: LifeEntry[] = [firstYear,guelph,htn2025,htnVolunteer,ingenious,oec,summer,undercity,uottahack,yearTwo];
export const lifeYears = [...new Set(entries.map(entry=>Number(entry.sortDate.slice(0,4))))]
 .sort((a,b)=>b-a)
 .map(year=>({year,entries:entries.filter(entry=>entry.sortDate.startsWith(String(year))).sort((a,b)=>b.sortDate.localeCompare(a.sortDate))}));
