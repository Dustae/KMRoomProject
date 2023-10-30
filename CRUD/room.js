const { use } = require('../Routes/room');
const serviceAccount = require('../key.json');
const admin = require('firebase-admin');

admin.initializeApp( { 
    credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore();

const extractKeys = (obj, keys) => {
    return keys.reduce((acc, key) => {
      if (obj.hasOwnProperty(key)) {
        acc[key] = obj[key];
      }
      return acc;
    }, {});
  };


exports.CreateBooking = async (req , res) => { 
    try{ 
        

        const userJSON = { 
            Booking_Description : req.body.Booking_Description,
            Booking_date : req.body.Booking_date,
            Booking_Status : req.body.Booking_Status,
            Booking_period : req.body.Booking_period,
            Room_ID : req.body.Room_ID,
            User_Email : req.body.User_Email,
            Booking_for : req.body.Booking_for,
            User_1 : req.body.User_1,
            User_2 : req.body.User_2,
            User_3 : req.body.User_3,
            User_4 : req.body.User_4,
            User_5 : req.body.User_5,
            User_6 : req.body.User_6
        };
  

        const respone =  await db.collection('Bookings').add(userJSON);
        console.log(respone , "Create Booking success")
        res.status(200).json( { message: 'Reservation success', status: 'success'});
    } catch(error) { 
        console.error(error)
        res.status(500).json( { message: 'Can not reservation', status: 'error', err_note: error.message});
    }
}

exports.GetStatusRoom = async (req, res ) => { 
    try{
        const date = req.body.Booking_date;

        const respone = await db.collection('Bookings').where('Booking_date', '==', date).get();
        
        const userPromises = [];

        respone.forEach(doc =>   {
            const User_Email = doc.data().User_Email
            if (User_Email) {
                const userPromise = db.collection('Users').doc(User_Email).get();
                userPromises.push(userPromise);
              }
          });

        const Username = await Promise.all(userPromises);
        console.log(Username[0].data())

        // const RoomStatus = respone.docs.map(doc => ({
        //     id: doc.id,
        //     data: doc.data(),
        //     user: userResponses[index] ? { id: userResponses[index].id, data: userResponses[index].data() } : null,
        //   }));
        
        const desiredKeys = ['User_FName', 'User_LName', 'University_ID'];
        const jsonData = {
            bookings: respone.docs.map((doc, index) => ({
              id: doc.id,
              data: doc.data(),
              user:  extractKeys(Username[index].data(), desiredKeys) ,
            })),
          };

        res.status(200).send(jsonData);
    } catch (error){ 
        console.error(error)
        res.status(500).json( { message: 'Can not get room status', status: 'error', err_note: error.message});
    }
}

exports.Login = async (req , res) => { 
    try{ 
        const { email , password }= req.body

        const userCredential = await db.collection('Users').where('User_Email', '==', email).where('User_Password', '==', password).get()
        const userData = userCredential.docs[0].data()
        delete userData.User_Password
        if (userCredential.empty) {
            // No user found
            return res.status(401).json({ massage: 'Authentication failed' , status: 'error'});
          }

          console.log('Log in success')
          res.status(200).json( { message: 'Log in success', status: 'success', data: userData});
    } catch  (error){ 
        console.error(error)
        res.status(500).json( { message: 'Can not login', status: 'error', err_note: error.message});
    }
}

exports.CheckReservation = async (req, res) => { 
    try{
        const email = req.body.email
        const userData = await db.collection('Bookings').where('User_Email', '==', email).get()
        const jsonData = { 
            booking: userData.docs.map( (doc, index) => ({ 
                id: doc.id,
                data: doc.data()
            }))
        }
        
        if( !userData.empty) { 
            res.status(200).json({ message: "Here's bookings data", status: "success", data: jsonData})
        }
        else {
            res.status(404).json({ message: 'Not found reservation' , status: 'error'})

        }
    } catch (error){ 
        console.error(error)
        res.status(500).json( { message: 'Can not check reservation', status: 'error', err_note: error.message});
    }
}

exports.DeleteReservation = async (req,res) => { 
    try{ 
        const id = req.body.id
        const rtvalue = await db.collection('Bookings').doc(id).delete();
        if ( !rtvalue.empty) { 
            res.status(200).json({message: 'delete success', status: 'success', data: rtvalue})
        }

    } catch (error) { 
        console.error(error)
        res.status(500).json( { message: 'Can not delete', status: 'error', err_note: error.message});
    }
}