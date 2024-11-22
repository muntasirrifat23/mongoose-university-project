import app from './app';
import config from './app/config';
import mongoose from 'mongoose';

async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    // await mongoose.connect(
    //   'mongodb+srv://mongoose-practice:YTg6IkOBSk4SnmMk@cluster0.20dr11o.mongodb.net/?mongoose-practice=true&w=majority&appName=Cluster0',
    // );

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
