import { Sequelize } from "sequelize";

const db = new Sequelize('mern_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"    
});

//db.sync({}); //auto singkronasi ke database

export default db;