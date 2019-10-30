var cors = require('cors')
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const config = require('./config/dev')
const Film = require('./models/film')
const FakeDb = require('./fake-db')


const filmRoutes = require('./routes/films'),
    taikhoanRoutes = require('./routes/taikhoans'),
    veRoutes = require('./routes/ves'),
    theLoaiRoutes = require('./routes/theloais'),
    gheRoutes = require('./routes/ghes'),
    xuatChieuRoutes = require('./routes/xuatchieus'),
    rapRoutes = require('./routes/rap'),
    imageUploadRoutes = require('./routes/image-upload')

mongoose.set('useCreateIndex', true);
mongoose.connect(config.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}
).then(() => {
    const fakeDb = new FakeDb();
    // fakeDb.seeDb();
})

const app = express();
app.use(bodyParser.json());

app.use(cors());
app.options('*', cors());

app.use('/api/v1/films', filmRoutes);
app.use('/api/v1/taikhoans', taikhoanRoutes);
app.use('/api/v1/ves', veRoutes);
app.use('/api/v1/theloais', theLoaiRoutes);
app.use('/api/v1/ghes', gheRoutes);
app.use('/api/v1/xuatchieus', xuatChieuRoutes);
app.use('/api/v1/raps', rapRoutes);
app.use('/api/v1', imageUploadRoutes);


/////////////

const path = require('path');

app.use(express.static(__dirname + '/dist/QuanLyBanVeXemPhim/'));

//PathLocationStradegy
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/QuanLyBanVeXemPhim/index.html'));
});

////////////////


const PORT = process.env.PORT || 3000;



///////////////////////////////////
app.listen(PORT, () => {
    console.log(" app running port " + PORT);

})
