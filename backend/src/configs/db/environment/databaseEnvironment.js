
export default {
  host: process.env.DBSERVER || "localhost",  
  database: process.env.DBNAME || "",      
  user: process.env.DBUSER || "",         
  password: process.env.DBPASSWORD || "",     
  port: parseInt(process.env.DBPORT, 10) || 5432,  
  max: parseInt(process.env.DBPOOLMAX, 10) || 50,  // Aumenta el número máximo de conexiones
  idleTimeoutMillis: parseInt(process.env.DBIDLE_TIMEOUT, 10) || 10000,  // Reduce el tiempo de espera inactivo
  connectionTimeoutMillis: parseInt(process.env.DBCONNECTION_TIMEOUT, 10) || 5000,  // Aumenta el tiempo de espera de conexión
};
