import connectToDatabase from './database.js';
import {getQuery,insertQuery} from './query.js'
const colums ={"user_name":"string","mail":"string","passward":"string","user_code":"int","score":"int"};
const getusers = async () => {
    try {
        let users = await getQuery("users");
        console.log(users)
       return users;
    } catch (err) {
        console.error('Query failed! Error:', err);
        return [];
    } finally {
      
    }
};


const adduser = async (newUser) => {
    console.log("adduser")
    try {
let nameValues = "";
let values="";
for (const key in colums) {
    nameValues+=  key+',';
    if(colums[key] == "string")
    values+=  `'${newUser[key]}',`;
    else
    values+=  newUser[key]+',';
}
nameValues = nameValues.slice(0, -1);
values = values.slice(0, -1);
console.log(nameValues);
console.log(values);
        let users = await insertQuery("user",nameValues,values);
        console.log(users)
       return users;
    } catch (err) {
        console.error('Query ');
        return {"error":"err"};
    } finally {
      
    }
};

 export { getusers, adduser}
