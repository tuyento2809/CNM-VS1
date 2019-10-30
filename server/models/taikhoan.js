//const bcrypt= require('bcrypt');
const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const taiKhoanSchema= new Schema({
   tenTaiKhoan: {
       type: String,
       min: [4, 'Ít nhất 4 kí tự'],
       max: [32, 'Dài nhất 32 kí tự']
   },
   email: {
    type: String,
    min: [4, 'Ít nhất 4 kí tự'],
    max: [32, 'Dài nhất 32 kí tự'],
    unique: true,
    lowercase: true,
    required: 'Email bắt buộc nhập',
   },
   password: {
    type: String,
    min: [4, 'Ít nhấts 4 kí tự'],
    max: [32, 'Dài nhất 32 kí tự'],
    required: 'Password bắt buộc nhập',
   },
   ves: [{ type: Schema.Types.ObjectId, ref: 'Ve'}]
    
})

taiKhoanSchema.methods.hasSamePassword = function(requestedPassword){

    return this.password===requestedPassword;
}

// taiKhoanSchema.pre('save', function(next){
//     const taikhoan= this;
    
//     bcrypt.getSalt(12, function(err,salt){
//         bcrypt.hash(taikhoan.password,salt,function(err,hash){
//             taikhoan.password=hash;
//             next();
//         })
//     })
// })

module.exports= mongoose.model('TaiKhoan',taiKhoanSchema)

