const MongoClient = require('mongodb').MongoClient;

async function getModels () {
  const url = (process.env.DB === 'ece_live')
    ? 'mongodb://localhost/ece_live'
    : 'mongodb://localhost/ece_database';

  const dbName = (process.env.DB === 'ece_live')
    ? 'ece_live'
    : 'ece_database';

  // creating instance of client
  const client = new MongoClient(url);

  // connecting to mongo database
  try{
    await client.connect();
    const db = client.db(dbName);
    let compModels = await db.collection('componentModels').find();
    // client.close();
    return compModels;
    // return db;
  }catch(e){
    console.log(e);
  }
}

(async function (){
  let models = await getModels();
  while(await models.hasNext()){
    console.log(models.next());
  }
  process.exit(0);
})();

// console.log(models);
// module.exports(models);
