import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export function summarize(input) {
 if (!input || !Array.isArray(input.paths) || typeof input.source !== 'string' || typeof input.window !== 'string') throw Error('Expected source, window, and paths: [{path,count}].');
 const rows = new Map();
 for (const row of input.paths) {
  if (typeof row.path !== 'string' || !row.path.startsWith('/') || !Number.isSafeInteger(row.count) || row.count < 0) throw Error('Invalid path or request count.');
  // Query strings/fragments can contain credentials or personal information.
  const pathname = row.path.split(/[?#]/)[0].replace(/[\u0000-\u001f\u007f]/g, '').slice(0,2048);
  rows.set(pathname,(rows.get(pathname) ?? 0)+row.count);
 }
 const patterns = [
  ['Secrets or repository probes',/(?:^|\/)(?:\.env(?:\.[^/]*)?|\.git|\.svn|\.aws)(?:\/|$)/i],
  ['WordPress or PHP probes',/(?:wp-admin|wp-login|xmlrpc\.php|phpmyadmin|\.php(?:\/|$))/i],
  ['Command or exploit-like probes',/(?:^|\/)(?:getcmd|cgi-bin|shell|cmd|actuator)(?:[./]|$)|\.\./i],
  ['Unusual paths observed on this portfolio',/^\/(?:aaa9|aab9)\/?$/i],
 ];
 const paths=[...rows].map(([pathname,count])=>({path:pathname,count,category:patterns.find(([,regex])=>regex.test(pathname))?.[0] ?? 'Unclassified'})).sort((a,b)=>b.count-a.count||a.path.localeCompare(b.path));
 const listedRequests=paths.reduce((sum,row)=>sum+row.count,0);
 if (input.totalRequests!==undefined && (!Number.isSafeInteger(input.totalRequests)||input.totalRequests<listedRequests)) throw Error('Total requests must be an integer at least as large as the listed counts.');
 return {source:input.source,window:input.window,coverage:input.coverage ?? 'Imported aggregate path counts; completeness is unknown.',generatedAt:new Date().toISOString(),totalRequests:input.totalRequests ?? null,listedRequests,flaggedRequests:paths.filter(row=>row.category!=='Unclassified').reduce((sum,row)=>sum+row.count,0),paths};
}
const md=value=>String(value).replace(/[\r\n]/g,' ').replace(/\|/g,'\\|').replace(/`/g,"'").replace(/</g,'&lt;').replace(/>/g,'&gt;');
export const csvCell=value=>'"'+String(value).replace(/^[=+@\-\t\r]/,"'$&").replace(/"/g,'""')+'"';
export async function writeReport(inputFile) {
 const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
 const output=path.join(root,'private-security','reports');
 const report=summarize(JSON.parse(await fs.readFile(inputFile,'utf8')));
 const stamp=report.generatedAt.replace(/[:.]/g,'-');
 await fs.mkdir(output,{recursive:true});
 const base=path.join(output,stamp);
 const body=['# Private portfolio security report','',`Generated: ${report.generatedAt}`,`Window: ${md(report.window)}`,`Source: ${md(report.source)}`,'',`Coverage: ${md(report.coverage)}`,'',`Total requests reported by source: ${report.totalRequests ?? 'unknown'}`,`Requests represented in path list: ${report.listedRequests}`,`Requests matching review patterns: ${report.flaggedRequests}`,'','These are heuristic review flags, not proof of malicious intent, successful access, or compromise. Unclassified paths are not necessarily safe. HTTP status codes are unavailable in this aggregate export. No IPs, user agents, query strings, or raw request records are included. Overlapping report windows must not be summed as independent traffic.','','| Path | Requests | Review category |','| --- | ---: | --- |',...report.paths.map(row=>`| ${md(row.path)} | ${row.count} | ${row.category} |`),''].join('\n');
 await fs.writeFile(base+'.md',body,{flag:'wx'});
 await fs.writeFile(base+'.json',JSON.stringify(report,null,2)+'\n',{flag:'wx'});
 await fs.writeFile(base+'.csv',[['Path','Requests','Review category'],...report.paths.map(row=>[row.path,row.count,row.category])].map(row=>row.map(csvCell).join(',')).join('\r\n')+'\r\n',{flag:'wx'});
 return base;
}
if (process.argv[1] && path.resolve(process.argv[1])===fileURLToPath(import.meta.url)) {
 try {
  if (!process.argv[2]) throw Error('Usage: npm run security:report -- private-security/traffic-snapshot.json');
  console.log('Saved private Markdown, CSV and JSON reports: '+await writeReport(process.argv[2]));
 } catch(error) { console.error(error.message); process.exitCode=1; }
}
