const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const xuatChieuSchema= new Schema({
    gioChieu : {type: Date, required: true},

})

module.exports= mongoose.model('XuatChieu',xuatChieuSchema)

