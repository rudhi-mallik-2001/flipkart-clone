import mongoose from 'mongoose';
export const Connection =  async (username,password) => {
  const URL=`mongodb+srv://${username}:${password}@flipkart.zvmsshe.mongodb.net/flipkart-default-data?retryWrites=true&w=majority`;
  try {
    //mongoose.set('strictQuery', true);
    await mongoose.connect(URL,
      {useNewUrlParser: true,
      useUnifiedTopology: true,
      
    });
    console.log('conected successfully with mongodb...')
  } catch (error) {
    console.log("Errr while connecting ..",error);
  }
}

export default Connection;