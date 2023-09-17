import mongoose from "mongoose";


const Schema = mongoose.Schema;

const imageSchema = new Schema({
    name: String,
    cover: String,
    desc: String,
    images: Array<String>
});

const Image = mongoose.models.Image || mongoose.model('Image', imageSchema);

export default Image