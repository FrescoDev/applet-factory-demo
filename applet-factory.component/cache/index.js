const redis = (process.env.NODE_ENV === 'production') ? require('redis') : require('redis-mock');
const cachingClient = redis.createClient();

cachingClient.on('error', (err) => {
    console.log('   Error connecting to Redis cache :(' + err)
});

cachingClient.on('connect', () => {
    console.log('    Redis connected!\n')
});

export default cachingClient;