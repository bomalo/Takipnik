
//https://medium.com/@micklynch_6905/angular-6-a-simple-web-application-with-node-and-postgresql-ee2a562887d6

import { dbconfig } from '../../config.ts'
import {Sequelize} from 'sequelize-typescript';

const { Client } = require('pg')
const client = new Client({
    user: dbconfig.user,
    password: dbconfig.password,
    port: dbconfig.port,
    database: dbconfig.database
})
sequelize.authenticate().then(() => {
 console.log("Connected to DB");
})
.catch((err) => {
 console.log(err);
})
// client.connect()
// .then(() => console.log("connected successuly"))
// .then(() => client.query(('SELECT * FROM public."tShirts"')))
// .then((results) => console.table(results.rows))
// .catch(e => console.log(e))
// .finally(() => client.end())
