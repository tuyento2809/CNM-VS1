const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const veSchema= new Schema({
    giaVe : {type: Number, required: true},
    gioChieu:{type: Date},
    phimId: {type: Schema.Types.ObjectId, ref:'Film'}, 
    soGhe: {type: Number}

})

module.exports= mongoose.model('Ve',veSchema)

