
const mongoose =  require("mongoose")

const todoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,  // 2tasi 1xl bosa err berad
            trim: true,
        },
        image: {
            type: String,
            required: true,
            unique: true
        },
        count: {
            type: Number,
            required: false,
            default: 1
        },
        desc: {
            type: String,
            required: true,
            trim: true,
        }
    },
    { timestamps: true } // qachon sazdat qlnganini korstad
); 

module.exports = mongoose.model("Todo", todoSchema);
