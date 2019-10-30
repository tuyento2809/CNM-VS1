
const XuatChieu = require('../models/xuatchieu')

exports.themXuatChieu = function (req, res) {
    const { gioChieu } = req.body;
    
   // gioChieu= new Date(gioChieu);

    let xuatchieu= new XuatChieu({gioChieu});
    

    xuatchieu.save();

    res.json({xuatchieu});
}

exports.getXuatChieu = function (req, res) {
    XuatChieu.find({},(err,foundXC)=>{
        res.json(foundXC)
    })

}

exports.getXuatChieuById = async (req, res) =>{
    const xuatChieuId= req.params.id;
    await XuatChieu.findById(xuatChieuId,(err,foundXuatChieu)=>{
        if(err){
            res.send('Lỗi ở lấy xuat chieu theo id....')
        }
        res.json(foundXuatChieu)
    });
}
    









