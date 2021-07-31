import { Sequelize } from "sequelize";

const db = new Sequelize ('usernodedb', 'root', 'Beherit-189', {
  host:'localhost', 
  dialect: 'mysql',
  //logging: false
})

export default db;