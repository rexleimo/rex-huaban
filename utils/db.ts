import mongoose from "mongoose";

function GetDB(){
    mongoose.connect('mongodb://localhost/rex');
    const db = mongoose.connection;
    return ()=>{
        return db
    }
}

const mongodb = GetDB();
export default mongodb;