const cluster = require('cluster')
const os = require('os')

const cpus = os.cpus().length;

if(cluster.isMaster)
    {
     console.log(`Master process id ${process.pid}`);
      for(let i =0; i < cpus; i++)
        {
            cluster.fork();
            console.log(`Forked ${i+1} thread with id ${cluster.pid}`)
        }
    }
else
    {
        require('./www')
    }