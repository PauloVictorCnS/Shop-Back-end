import EventEmitter from 'events';
// other modules 

class Emitter extends EventEmitter { }

const emitter = new Emitter();
emitter.setMaxListeners(100);


import server from "./app.js"

const app = server
 app.listen(3000 ,()=>{console.log('✅ Servidor Online !')})
