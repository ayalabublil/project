import express from "express";
import cors from 'cors';
import sql from 'mssql';
// הגדרות חיבור ל-SQL Server
const config = {
   user: 'ayala',
   password: '123',
   server: 'DESKTOP-MTT1R71/SSMSQLEXPRESS',
   database: 'languages',
//    port: 1433,
   options: {
      encrypt: true, 
      trustServerCertificate: true, // עבור חיבור מקומי
      enableArithAbort: true,
              trustServerCertificate: true,
   }
};
const connectToDatabase = async () => {
   try {
       // Create a connection pool
       let pool = await sql.connect(config);
       console.log('Connected to the database!');
       return pool;
   } catch (err) {
       console.error('Database connection failed! Error:', err);
       throw err;
   }
};
connectToDatabase();
export default connectToDatabase;
