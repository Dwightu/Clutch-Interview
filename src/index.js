// Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
//   });

import app from "./app.js";
import { sequelize } from "./database/database.js";

const main=async()=>{
    try{
        // User.sync({ force: true })  
        // This creates the table, dropping it first if it already existed
        await sequelize.sync({force:true});
        app.listen(5000);
        console.log('successfully connected!!')
    }catch(err){
        console.log(err,"Something went wrong!!")
    }
}

main();