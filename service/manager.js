import connectToDatabase from './database.js';
import {getQuery,insertQuery} from './query.js'
const colums ={"manager_name":"string","mail":"string","password":"string"};

//פונקציה שמביאה את כל המנהלים
const getManagers = async () => {
    try {
        let managers = await getQuery("managers");
        console.log(managers);
        return managers;
    } catch (err) {
        console.error('Query failed! Error:', err);
        return [];
    } finally {
      
    }
};

//פונקציה שמוסיפה מנהל
const addManager = async (newManager) => {
    console.log("add");
    try {
let nameValues = "";
let values="";
for (const key in colums) {
    nameValues+=  key+',';
    if(colums[key] == "string")
    values+=  `'${newManager[key]}',`;
    else
    values+=  newManager[key]+',';
}
nameValues = nameValues.slice(0, -1);
values = values.slice(0, -1);
console.log(nameValues);
console.log(values);
        let managers = await insertQuery("manager",nameValues,values);
        console.log(managers)
       return managers;
    } catch (err) {
        console.error('Query ');
        return {"error":"err"};
    } finally {
      
    }
};

//פונקציה שמעדכנת מנהל
const updateManager = async (managerPassword, updateManager) => {
    console.log("updateManager");
    try {
        let updateM = "";
        for (const key in updateManager) {
            if (typeof updateManager[key] === "string") {
                updateM += `${key} = '${updateManager[key]}', `;
            } else {
                updateM += `${key} = ${updateManager[key]}, `;
            }
        }
        updateM = updateM.slice(0, -2);
        console.log(updateM);
        let manager = await updateQuery("manager", updateM, "managerPassword", managerPassword);
        console.log(manager);
        return manager;
    } catch (err) {
        console.error('Query Error:', err);
        return { "error": "err" };
    }
};

//פונקציה שמוחקת מנהל
const deleteManager = async (managerPassword) => {
    console.log("deleteManager");
    try {
        let manager = await deleteQuery("manager", "managerPassword", managerPassword);
        console.log(manager);
        return manager;
    } catch (err) {
        console.error('Query Error:', err);
        return { "error": "err" };
    }
};

//יצוא הפונקציות
 export { getManagers, addManager,updateManager,deleteManager};
