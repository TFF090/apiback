require("dotenv").config(); //env format uchn
// const usersRouter = require('./routes/users'); //users routerni import qldk ismi unique yani boshqacha bolshi kere
const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
const Todo = require("./routes/todos");

const app = express(); //express (b.n) qoyilishi kere chunk toza bolshga
app.use(cors());

app.use(express.json()); //app.use bu middLeware ishlatsh uchn serverga dopolnenya qoysh uchun json() format uchn;
app.use('/userla', Todo);

const PORT = process.env.PORT || 8000; // env portga

// app.listen(PORT, () => console.log("SERVER:", `https://localhost:${PORT}`));


function start() {
    try {
        mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true});
        app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`));
    } catch (err) {
        console.log(err);
    }
}
// const start = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URL).then(() => console.log("dp OK")).catch(() => console.log('db BAD'))
//     } catch (error) {
//         console.log(error);
//     }
// }
start()