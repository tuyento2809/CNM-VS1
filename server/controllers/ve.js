const Ve = require('../models/ve');
const Film = require('../models/film');
const Ghe = require('../models/ghe');

exports.createVe = async function (req, res) {
    let check = true;
    let { giaVe, gioChieu, phimId, soGhe, rapId } = req.body;
    let film = await Film.findById(phimId)
    gioChieu = new Date(gioChieu);
    for (let i = 0; i < film.xuatchieus.length; ++i) {
        let xc = film.xuatchieus[i]
        if (xc.gio.getTime() === gioChieu.getTime()) {
            for (let j = 0; j < xc.raps.length; ++j) {
                let rap = xc.raps[j];
                if (rap.id === rapId) {
                    if (rap.ghes.includes(i)) {
                        check = false;
                    }
                    if (check === true) {
                        rap.ghes.push(soGhe);
                    }
                    else {
                        return res.status(422).send({ errors: 'Lỗi rồi . không thêm được ghế đã đặt vào xuất chiếu' })
                    }
                }
            }
        }
    }
    await film.save()
    let ve = new Ve({ giaVe, gioChieu, phimId, soGhe });
    await ve.save();
    return res.json({ ve });

}

exports.thongKeVeTheoNgay = (req, res) => {
    Ve.aggregate([
        {
            "$group": {
                _id: { "$dateToString": { date: "$gioChieu", format: '%Y-%m-%d' } },
                total: { "$sum": 1 }
            }
        }
    ], (err, result) => {
        if (err)
            console.log(err);
        else{
       // console.log(result);
        return res.status(200).send(result)
        }

    });


}

exports.getVe = async (req, res) => {
    const ve = await Ve.find().populate('film').populate('ghe');
    res.json({ ve })
}

// exports.getUserVes= function(req,res){
//     const taikhoan= req.locals.takkhoan;

//     Ve.where({phimId})

//     .exec(function(err,foudVes){
//         if(err){
//             return res.status(422).send({errors: 'Loi ....'})
//         }
//         return res.json(foudVes)
//     })
// }




exports.getVeById = async (req, res) => {
    const veId = req.params.id;
    // await Ve.findById(veId,(err,foundVe)=>{
    //     if(err){
    //         res.send('Lỗi ở lấy vé theo id....')
    //     }
    //     res.json(foundVe)
    // }).populate('film')
    await Ve.findById(veId)
        .populate('phimId')
        .exec(function (err, foundVe) {
            if (err) {
                return res.status(422).send({ errors: [{ title: 'Ve error!', detail: 'Khong tim thay Ve' }] })
            }
            res.json(foundVe);
        })
}








