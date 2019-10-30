
const Rap = require('../models/rap')

exports.themRap = function (req, res) {
    let { tenRap,diaChi,ghes} = req.body;
    
    let rap= new Rap({ tenRap,diaChi,ghes});

    rap.save();

    res.json({rap});
}

exports.getRap = function (req, res) {
    Rap.find({},(err,foundRap)=>{
        res.json(foundRap)
    }).populate('ghes')

}

exports.getRapById = async (req, res) =>{
    const rapId= req.params.id;
    await Rap.findById(rapId,(err,foundRap)=>{
        if(err){
            res.send('Lỗi ở rap ghe theo id....')
        }
        res.json(foundRap)
    });
}
    









