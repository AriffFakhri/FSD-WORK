const redis = require('redis')
const client = redis.createClient({
    host: 'localhost',
    port: 6379
});

(
    async () =>{
        try{
            await client.connect();
            console.log('Connected to the Redis server')

            //SET Operation
            await client.set('name', 'Sam');
            console.log('SET name = Sam')

            //GET Operation
            const value =await client.get('name');
            console.log('GET name' , value);

            //incr operation
            await client.incr('counter');
            console.log('INCR counter')

            //DECR operation
            await client.decr('counter');
            console.log('DECR counter')

            //incr operation
            await client.del('counter');
            console.log('DEL counter');

        }catch (error){
            console.log(error);
        }finally{
            await client.quit();
        }
    }
)();