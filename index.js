const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;


//middleware
app.use(cors());
app.use(express.json())


//sharminakhi333
//7SEvaAoKq07mzgBM



const uri = "mongodb+srv://sharminakhi333:7SEvaAoKq07mzgBM@cluster0.uekqjhq.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {

}
run().catch(console.dir);




app.get('/', (req, res) => {
    res.send('SIMPLE CURB IS RUNNING')
})

app.listen(port, () => {
    console.log(`SIMPLE CURB is running on port, ${port}`)
})








