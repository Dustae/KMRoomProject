const serviceAccount = require('../kmuttlib-376a8-firebase-adminsdk-3lsrn-4a528579ba.json');
const admin = require('firebase-admin');

admin.initializeApp( { 
    credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore();



exports.createroom = async (req , res) => { 
    try{ 
        const id = req.body.room;
        const userJSON = { 
            room : req.body.room,
            status : req.body.status,
            name : req.body.name,
        };
        const respone =  await db.collection('room').doc(id).set(userJSON);
        console.log(respone)
        res.status(200).send(respone);
    } catch(error) { 
        console.log(error)
        res.status(500).send({ error: 'Internal Server Error' });
    }
}