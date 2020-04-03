import * as express  from 'express';
import { tshirts } from './routes/TShirtRoutes';
import { sequelize, initializeDatabase, populateData } from './connection';
import { app } from './app'
import { createServer } from 'http';

const port = process.env.PORT || 3000;

(async () => {
  await sequelize.sync({force: true});
initializeDatabase();
populateData();
  createServer(app)
    .listen(
      port,
      () => console.info(`Server running on port ${port}`)
    );
})();
