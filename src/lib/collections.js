import clientPromise from "./mongodb";

export async function getCollection(name){
    const client=await clientPromise;
    const db=client.db('hi-study-next-js-db');
    return db.collection(name);
}