import mongoose from "mongoose";

const conn = () => {
  mongoose
    .connect(process.env.DB_URI, {
      dbName: "lenslight_tr",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Data base bağlantısı başarılı...");
    })
    .catch((err) => {
      console.log(`Bağlantı başarısız hata: ${err}`);
    });
};

export default conn;
