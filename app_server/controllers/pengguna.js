const mongoose = require("mongoose");
const Pengguna = mongoose.model("Pengguna");

//untuk menghandle request get all mahasiswa
const index = (req, res, next) => {
    Pengguna.find({}, { __v: 0 })
      .then((mhs) => {
        const responseMessage = {
            code: 200,
            success: true,
            message: "Successfull",
            data: mhs
        };
        res.status(200).json(responseMessage);
      })
      .catch((e) => {
        const responseMessage = {
            code: 400,
            success: false,
            message: "Bad request"
        };
        res.status(400).json(responseMessage);
      });
};

//untuk menghandle request insert mahasiswa
const insert = (req, res, next) => {
    const pengguna = new Pengguna({
      nama: req.body.nama,
      email: req.body.email,
      password: req.body.password,
      alamat: req.body.alamat,
      tanggal_daftar: req.body.tanggal_daftar,
    });
  
    pengguna
      .save()
      .then((result) => {
            const responseMessage = {
                code: 200,
                success: true,
                message: "Successfull",
                data: result
            };
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 400,
                success: true,
                message: "Bad request"
            };
            res.status(400).json(responseMessage);
        });
};


module.exports = {
    index, insert
}

