const express = require('express');
const morgan = require('morgan')
const { readdirSync } = require('fs')
const cors = require('cors');

// const admin = require('firebase-admin');
// const serviceAccount = require('./kmuttlib-376a8-firebase-adminsdk-3lsrn-4a528579ba.json');


// admin.initializeApp( { 
//     credential: admin.credential.cert(serviceAccount),
// });

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// const db = admin.firestore();

app.use(morgan('dev'))
app.use(cors())



readdirSync('./Routes').map((r) => app.use('/api', require('./Routes/' + r)))




const PORT = process.env.PORT || 8080;
app.listen( PORT, () => { 
    console.log(`Server is running on PORT ${PORT}.`);
})