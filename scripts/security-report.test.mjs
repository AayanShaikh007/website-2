import test from 'node:test';
import assert from 'node:assert/strict';
import {summarize,csvCell} from './security-report.mjs';
test('strips sensitive query data, merges paths, and flags probes without treating all traffic as malicious',()=>{
 const result=summarize({source:'Synthetic test',window:'test only',totalRequests:6,paths:[{path:'/.env?token=secret',count:2},{path:'/.env#fragment',count:1},{path:'/projects/kb01/',count:3}]});
 assert.equal(result.flaggedRequests,3);
 assert.equal(result.listedRequests,6);
 assert.equal(result.paths.length,2);
 assert.ok(!JSON.stringify(result).includes('secret'));
});
test('rejects inconsistent or invalid counts',()=>{
 for(const count of [-1,1.5,'4']) assert.throws(()=>summarize({source:'test',window:'test',paths:[{path:'/',count}]}));
 assert.throws(()=>summarize({source:'test',window:'test',totalRequests:1,paths:[{path:'/',count:2}]}));
});
test('quotes CSV cells and neutralizes spreadsheet formulas',()=>{
 assert.equal(csvCell('=1+1'),'"\'=1+1"');
 assert.equal(csvCell('/a,"b'),'"/a,""b"');
});
