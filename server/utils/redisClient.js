import redis from 'redis';
const redisClient = redis.createClient({
    url: 'redis://localhost:6379' // Replace with your Redis server URL
  });
  
  // Set up event listener for error events
  redisClient.on('error', (err) => {
    console.error('Redis client error:', err);
  });
  
  // Set up event listener for successful connection events
  redisClient.on('connect', () => {
    console.log('Connected to Redis');
  });
  
  // Connect the Redis client
  redisClient.connect();
  
  export default redisClient;
  