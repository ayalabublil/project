import connectToDatabase from './database.js';
import sql from 'mssql';

const executeQuery = async (query) => {
    try {
        let pool = await connectToDatabase();
        let result = await pool.request()
            .query(query);
           
        console.log('Query result:', result);
        console.log('Query result:', result.recordset); // השתמש ב- result.recordset לקבלת ערכי תוצאה
        return result.recordsets
    } catch (err) {
        console.error('Query failed! Error:', err);
    } finally {
        sql.close();
    }
};

const  getQuery = async (table_name,limit,start,sort,whereIsActive = "") =>{
    console.log("in get query sort: "+ sort);
    const query = `SELECT * FROM ${table_name} `;
    const result =await executeQuery(query);
    return result;
}


const  insertQuery = async (table_name,valuesName,values) =>{
    const query = `INSERT INTO [dbo].${table_name}(${valuesName}) VALUES (${values})`
    console.log(query);
     const   result =await executeQuery(query)
    return result;
}
export{
    getQuery ,insertQuery,executeQuery
}
