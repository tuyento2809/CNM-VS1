
const Ghe = require('../models/ghe')

exports.themGhe = function (req, res) {
    const { tinhTrang,loaiGhe,soGhe} = req.body;
    
    let ghe= new Ghe({tinhTrang,loaiGhe,soGhe});

    ghe.save();

    res.json({"secret": true});
}

exports.getGhe = function (req, res) {
    Ghe.find({},(err,foundGhe)=>{
        res.json(foundGhe)
    })

}
    
exports.getGheById = async (req, res) =>{
    const gheId= req.params.id;
    await Ghe.findById(gheId,(err,foundGhe)=>{
        if(err){
            res.send('Lỗi ở lấy ghe theo id....')
        }
        res.json(foundGhe)
    });
}









