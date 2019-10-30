const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const theLoaiSchema= new Schema({
    tenLoai : {type: String, required: true},

})

module.exports= mongoose.model('TheLoai',theLoaiSchema)

