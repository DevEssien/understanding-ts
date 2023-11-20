import { connect } from 'mongoose';
import config from '../config';

export const createMongodbConnection = async () => {
  const db_uri = config.db.uri;
  try {
    await connect(db_uri.db_uri, {
      authSource: config.db.authSource,
      dbName: config.db.name,
      user: config.db.user,
      pass: config.db.password,
    }).then(() => {
      console.log('- Connected to MongoDB auth server');
    });   
  } catch (error) {
    await connect(db_uri.authless_db_uri).then(() =>{
      console.log('- Connected to MongoDB authless server');
    }); 
  }
};