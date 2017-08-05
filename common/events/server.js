const EventEmitter = require('events');

class Server extends EventEmitter
{
   constructor(client){
       super();
       process.nextTick(()=>
        {
         this.emit('reponse', 'Type a command (help to list d commands) ');
        })

       client.on('command', (command, args)=>
       {
           console.log(`Command: ${command}`);
           switch(command){
            case 'help':
            case 'add':
            case 'delete':
            this[command](args);
            break;
            default:
            this.emit('response', 'unknown command');   
           }
       });
   }

help(args){
    this.emit('response', 'help....');
}

add(args){
    this.emit('response', args.join(' '));
}

delete(args){
    this.emit('response', 'delete....');
}
   
}

module.exports = (client) => new Server(client);