
const TaiKhoan = require('../models/taikhoan')
const jwt= require('jsonwebtoken')
const config= require('../config/dev')

exports.auth = function (req, res) {
    const { email, password } = req.body;

    // kiểm tra xem nếu gửi lên khác password và khác email
    if (!password || !email) {
        return res.status(422).send({ errors: [{ title: 'Data missing', detail: 'Provide email and password' }] })
    }

    TaiKhoan.findOne({email}, function(err,tk){
        if(err){
            return res.status(422).send({errors: 'loi ...' })

        }
        if(!tk){
            return res.status(422).send({ errors: [{ title: 'Tài khoản sai', detail: 'Tài khoản không tồn tại' }] })

        }

        if(tk.hasSamePassword(password)){
            const token=jwt.sign({
                tkId: tk.id,
                tenTaiKhoan: tk.tenTaiKhoan
            }, config.SECRET, { expiresIn: '1h'});
            return res.json(token);
            
        }else{
            return res.status(422).send({ errors: [{ title: 'Dữ liệu sai', detail: 'Sai Email hoạc Password' }] });
        }

        // if(!TaiKhoan.password){
        //     return res.status(422).send({ errors: [{ title: 'Dữ liệu sai', detail: 'Sai Password' }] });
        // }
        // if(tk){
        //     return res.send({'tb':'thanh cong'})
        // }
        
    })

}

exports.register = function (req, res) {
    const { tenTaiKhoan, email, password, passwordConfim,ves } = req.body;

    // kiểm tra xem nếu gửi lên khác password và khác email
    if (!password || !email) {
        return res.status(422).send({ errors: [{ title: 'Data missing', detail: 'Provide email and password' }] })
    }

    if (password !== passwordConfim) {
        return res.status(422).send({ errors: [{ title: 'Invalid password', detail: 'Provide email and password' }] })
    }

    TaiKhoan.findOne({ email }, function (err, existtingTK) {
        if (err) {
            return res.status(422).send({errors: normaLizeErrors(err.errors) })
        }
        if (existtingTK) {
            return res.status(422).send({ errors: [{ title: 'Invalid email', detail: 'User with this email already exist' }] })
        }
        const taikhoan = new TaiKhoan({
            tenTaiKhoan,
            email,
            password,
            ves
        });
        // tao tk
        taikhoan.save(function (err) {
            if (err) {
                return res.status(422).send({ 'mongoose': 'handle mongoose errors in next lecture' })
            }
            return res.json({ 'registered': true });
        })

    })

    //res.json({tenTaiKhoan, email});
}

exports.authMiddleware= function(req,res,next){
    const token= req.headers.authorization;

    if(token){
        const tk= parseToken(token) || "nhanvien";
        
        TaiKhoan.findById(tk.tkId, function(err,tk){
            if(err){
                return res.status(422).send({errors: 'loi ....'});
            }
            if(tk){
                res.locals.tk = tk;
                next();
            }else{
                return notAuthorized(res);

    
            }
        })

    } else{
        return notAuthorized(res);
    }

}
function parseToken(token){
    return jwt.verify(token.split(' ')[1], config.SECRET);
}

function notAuthorized(res){
    return res.status(401).send({ errors: [{ title: 'Không được ủy quyền', detail: 'Bạn cần đăng nhập' }] });

}

exports.getAuth= async (req,res)=>{
    const taikhoan =await TaiKhoan.find().populate('ves')
    res.json({taikhoan})
}









