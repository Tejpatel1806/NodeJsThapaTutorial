const mongoose = require("mongoose");
//connection creation and create new database
mongoose.connect("mongodb://localhost:27017/TejData", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("Connection successfull"))
    .catch((err) => console.log(err));



//upar ni line che te TejData name no database hase to tema j kam karse ane jo te database nai hoy to
//te database create karse ane tema kam karse
//bydefault port number 27017 j hoy che
//ane e line promise return karse


//Schema
//A Mongoose schema defines the structure of the document,
//default values,validators,etc.
const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videoes: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

//collection creation 
const Playlist = new mongoose.model("Playlist", playlistSchema);
//create document or insert

const createDocument = async () => {
    try {
        const mongoPlaylist = new Playlist({
            name: "MongoDB",
            ctype: "Database",
            videoes: 20,
            author: "Tej patel",
            active: true
        })
        const jsPlaylist = new Playlist({
            name: "javascript",
            ctype: "FrontEnd",
            videoes: 120,
            author: "Tej patel",
            active: true
        })
        const mongoosePlaylist = new Playlist({
            name: "Node Js Mongoose",
            ctype: "Database",
            videoes: 121,
            author: "Tej patel",
            active: true
        })
        const expressJsPlaylist = new Playlist({
            name: "Express Js",
            ctype: "Backend",
            videoes: 15,
            author: "Tej patel",
            active: true
        })
        //const result = await reactPlaylist.save()//aa pan promise return karse then and catch valu
        const result = await Playlist.insertMany([mongoPlaylist, jsPlaylist, mongoosePlaylist, expressJsPlaylist]);
        console.log(result);
    }
    catch (err) {
        console.log(err);
    }
}
// createDocument();
const getDocument = async () => {
    try {
        const result = await Playlist
            .find({ videoes: { $gt: 15 } })//eva videoes nu list aavse jema videoes greater than 15 hoy
            //.find({ctype:{$in:["Front End","Back End"]}})eva playlost aavse je frontend ane backend ma belog karta hase
            //.find({})
            .select({ name: 1 });
        // .limit(1);
        console.log(result);
    }
    catch (err) {
        console.log(err);
    }
}

//aam niche batavyu em karva thi jenu ctype Front end hase evo data j display thase means read thase
//ane te array na form ma aavse result ma
// const getDocument = async () => {
//     const result = await Playlist.find({ ctype: "Front end" });
//     console.log(result);
// }

getDocument();