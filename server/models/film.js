const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const filmSchema= new Schema({
    tenPhim : {type: String, required: true},
    mota: {type: String,  required:true},
    gia: {type: Number, required: true},
    hinh: {type: String, required: true},
    //taikhoan: { type: Schema.Types.ObjectId, ref: 'TaiKhoan'},
    //ves: [{ type: Schema.Types.ObjectId, ref: 'Ve'}],
    xuatchieus: [{
        gio: Date,
        raps:[{
            id: String,
            tenRap: String,
            ghes: [Number]
        }]
    }],
    theloai: { type: Schema.Types.ObjectId, ref: 'TheLoai'}
})

module.exports= mongoose.model('Film',filmSchema)

