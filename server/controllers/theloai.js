
const TheLoai = require('../models/theloai')
const config= require('../config/dev')

exports.themTheLoai = function (req, res) {
    const { tenLoai } = req.body;
    
    let theloai= new TheLoai({tenLoai});

    theloai.save();

    res.json({"secret": true});
}

exports.getTheLoai = function (req, res) {
    TheLoai.find({},(err,foundTheLoai)=>{
        res.json(foundTheLoai)
    })

}
exports.getTheLoaiById = async (req, res) =>{
    const theLoaiId= req.params.id;
    await TheLoai.findById(theLoaiId,(err,foundTheLoai)=>{
        if(err){
            res.send('Lỗi ở lấy the loai theo id....')
        }
        res.json(foundTheLoai)
    });
}
    









