import { MongoClient } from 'mongodb'

const handler = async (req, res) => {

    if (req.method === 'POST') {
        const { email, name, message } = req.body;

        if (
            !email ||
            !email.includes('@') || 
            !name || 
            name.trim() === '' ||
            !message ||
            message.trim() === ''
        ) {
            res.status(422).json({
                message: 'Invalid input!'
            })
            return
        }

        const newMeassage = {
            email, name, message
        }

        let client;

       const connectionString = process.env.MONGODB_PATH

       try {
        client = await MongoClient.connect(connectionString)
       } 
       catch (error) {
        res.status(500)({message: 'Failed connection to database'})
        return
       }

      const db = client.db();

      try {
        const result = await db.collection('messages').insertOne(newMeassage);
        newMeassage.id = result.insertedId;
      }
      catch (error) {
        res.status(500)({message: 'Storing message failed.. ;('})
        return
       }

       client.close();

        res.status(201).json({
            message: 'Successfully stored message!',
            data: newMeassage
        })
    }
    
}

export default handler