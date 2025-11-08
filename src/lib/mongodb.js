import { MongoClient as mongoClient } from "mongodb";
let client;
let clientPromise;

 const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("Missing MONGODB_URI");

if(process.env.NODE_ENV === 'development') {
    if(!global._mongoClientPromise) {
        client = new mongoClient(uri)
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
}
else{
    client=new mongoClient(uri)
    clientPromise=client.connect();
}

export default clientPromise;