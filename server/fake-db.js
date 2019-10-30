
const Film= require('./models/film')
const TaiKhoan= require('./models/taikhoan')

class FakeDb{
    constructor(){
        this.films=[{
        tenPhim: "Hậu Duệ MT",
        mota: "b ajdjd â",
        gia: 1000,
        hinh: "assets/Hinh.PNG"
    
      },
      {
        tenPhim: "Hạu dua mt",
        mota: "b ajdjd â",
        gia: 2000,
        hinh: "../../../assets/h1.PNG"
    
      },
      {
        tenPhim: "Phim Sex 2021",
        mota: "b ajdjd â",
        gia: 1000,
        hinh: "../../../assets/H2.PNG"
    
      },
      {
        tenPhim: "Kkkkạu lll mt",
        mota: "b ajdjd â",
        gia: 1000,
        hinh: "../../../assets/H3.PNG"
    
      },
      {
        tenPhim: "ten thuong",
        mota: "b ajdjdd d ",
        gia: 4000,
        hinh: "../../../assets/H4.PNG"
    
      }];

      this.taikhoans= [{
        tenTaiKhoan: 'Phamkien123',
        email: 'phamkien123@gmail.com',
        password: '12345'
      },
      {
        tenTaiKhoan: 'Phamkien',
        email: 'phamkien@gmail.com',
        password: '12345'
      }
    ];

    }

    async cleanDb(){
       // await TaiKhoan.deleteOne({});
        await Film.deleteMany({});
    }

    pushaDataToDb(){
      //  const taikhoan= new TaiKhoan(this.taikhoans[0]);
       // const taikhoan2= new TaiKhoan(this.taikhoans[1]);

        this.films.forEach((film)=>{
            const newFilm= new Film(film);
      //      newFilm.taikhoan=taikhoan;

     //       taikhoan.films.push(newFilm);
            newFilm.save();
        });

      //  taikhoan.save();
       // taikhoan2.save();
    }

    async seeDb(){
        await this.cleanDb();
        this.pushaDataToDb();
    }
}
module.exports= FakeDb;