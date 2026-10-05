const http=require('http'); const p=8080; http.createServer((q,r)=>r.end((process.env.HELLO_MESSAGE||'Hello')+' '+(process.env.HELLO_AUDIENCE||'Team')+'\n')).listen(p,'0.0.0.0');
