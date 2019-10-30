const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const gheSchema= new Schema({
    tinhTrang: {type: Boolean, required:true},
    loaiGhe: {type: String, required: true},
    soGhe: {type: Number, required: true},

})

module.exports= mongoose.model('Ghe',gheSchema)

