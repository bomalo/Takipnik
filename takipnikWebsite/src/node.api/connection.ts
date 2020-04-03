
//https://medium.com/@micklynch_6905/angular-6-a-simple-web-application-with-node-and-postgresql-ee2a562887d6

import { dbconfig } from './config';
import { Sequelize } from 'sequelize-typescript';
import { TShirt } from './models/tShirtModel';

export const sequelize = new Sequelize({
 database: dbconfig.database,
 dialect: 'postgres',
 username: dbconfig.username,
 password: dbconfig.password,
 host: dbconfig.host,
 port: dbconfig.port
});
sequelize.authenticate().then(() => {
 console.log("Connected to DB");
})
.catch((err) => {
 console.log(err);
})
sequelize.addModels([TShirt]);

// Force Initialization of the models and wipe all data ///
export function initializeDatabase() {
sequelize
 .sync({ force: false })
 .then(() => {
 console.log('Connection synced')
 return;
 })
 .catch(err => {
 console.log('err');
 });
}

// Adding new currencies to the DB ///
export function populateData(){
 const myTShirtSeed = new TShirt({ color: 'Black', size: 'M', gender: 'Male', quantity: 10 });

myTShirtSeed.save()
 .then(() => {
 console.log("Tshirt color " + myTShirtSeed.color + " added to DB");
 })
 .catch((err) => {
 console.log(err);
 })
}



