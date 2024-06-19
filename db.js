import { MongoClient } from "mongodb";
import env from "dotenv"
let dbConnection;
env.config()
export async function connectToDb(cb) {
    try {
        const client = await MongoClient.connect(process.env.MONGO_ATLAS_URL);
        dbConnection = client.db();
        console.log("Connected to the database");
        return cb();
    } catch (err) {
        console.error("Error connecting to the database:", err);
        return cb(err);
    }
}
export function getDb(){
    return dbConnection;
}