const express= require('express');
var multer= require('multer')
const router= express.Router();
const Film= require('../models/film')
const TheLoai= require('../models/theloai')

const TaiKhoanCtrl= require('../controllers/taikhoan')

var upload= multer({dest: '../public/uploads'})

router.get('/secret', TaiKhoanCtrl.authMiddleware, function(req,res){

    res.json({"secret": true});
});

//////// ///// cách 1: thông thường
//manage TaiKhoanCtrl.authMiddleware,
router.get('/manage',(req,res)=>{
    Film.find({}).populate('theloai') 
    .exec((err,foundFilms)=>{

        
        res.json(foundFilms);
    })
});
// cách 2: cải tiến hơn
// router.get('',(req,res)=>{
//     Film.find({}).
//     select('-theloai').
//     exec((err,foundFilms)=>{

        
//         res.json(foundFilms);
//     })
// });

    

router.get('/:id', (req,res)=>{
    const filmId=req.params.id;

    Film.findById(filmId)
        // .populate('xuatchieus')
         .populate('theloai')
        .exec(function(err,foundFilm){
            if(err){
                return res.status(422).send({errors:[{title: 'Film error!', detail: 'Khong tim thay Film'}]})
            }
            res.json(foundFilm);
        })

})

// them phim
//upload.single('hinh'),
router.post('',function(req,res){
    let {tenPhim,mota,gia,hinh,theloai}= req.body;

    const film= new Film({tenPhim,mota,gia,hinh,theloai});
    //film.theloai=theloai;

    film.save(film,function(err,newFilm){
        if(err){
            return res.status(422).send({errors:'loi ....'})
        }        
        return res.json(newFilm);
    })


})

router.get('',  function(req,res){
    let tenPhim= req.query.tenPhim;
    //console.log("tem phm",tenPhim);
    const query = tenPhim ? {tenPhim:{'$regex' : `^${tenPhim}$`, '$options' : 'i'}}:{};  
    //console.log("que:",query);

        Film.find(query)
            .exec(function(err,foundFilms){
                if(err){
                    return res.status(422).send({errors: "loi ...."})
                }
                if(tenPhim && foundFilms.length === 0){ 
                    return res.status(422).send({errors: [{found: foundFilms ,detail:`khong tim thay film theo ten ${tenPhim}`}]});
                }
                return res.json(foundFilms)
            });


            
    });

    //delete film theo id
    router.delete('/:id',function(req,res){
        Film.findById(req.params.id)
        .populate('theloai')
        .exec(function(err,foundFilm){
            if(err){
                return res.status(422).send({errors: 'Loi .......'});
            }
            foundFilm.remove(function(err){
                if(err){
                    return res.status(422).send({errors:'Loi khong delete duoc film'});
                }
               return res.json({'status':'deleted'})
            })
        })

    })

    router.patch('/:id',function(req,res){
        const filmData= req.body;
        
        Film.findById(req.params.id)
            .populate('theloai')
            .exec(function(err,foundFilm){
                if(err){
                    return res.status(422).send({errors:'Loi khong sua duoc film'});
                }
                foundFilm.set(filmData);
                foundFilm.save(function(err){
                    if(err){
                        return res.status(422).send({errors:'Loi khong sua duoc film'});
                    }
                   return res.status(200).send(foundFilm)
                })
            })

    })

    //Them lich chieu

    router.post('',function(req,res){
        let {tenPhim,mota,gia,hinh,theloai}= req.body;
    
        const film= new Film({tenPhim,mota,gia,hinh,theloai});
        //film.theloai=theloai;
    
        film.save(film,function(err,newFilm){
            if(err){
                return res.status(422).send({errors:'loi ....'})
            }        
            return res.json(newFilm);
        })
    
    
    })
    
    


module.exports= router;