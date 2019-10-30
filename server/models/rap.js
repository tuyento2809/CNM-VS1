const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const rapSchema= new Schema({
    tenRap : {type: String, required: true},
    diaChi: {type: String, required:true},   

    ghes: [{type: Schema.Types.ObjectId, ref: 'Ghe'}]

})

module.exports= mongoose.model('Rap',rapSchema)

