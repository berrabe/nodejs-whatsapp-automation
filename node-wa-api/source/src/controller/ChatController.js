
const axios = require("axios")

exports.list = (req, res) => {
  let sql = "SELECT * FROM chat order by id_chat desc limit 0, 25 ";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.render('chat/list', {
      layout: 'index',
      results:results
    });
  });
}

exports.add = (req, res) => {  
  // console.log(sql)  
  
    res.render('chat/add', {
      layout: 'index'
    });

}
exports.simpan = (req, res) => {
  let tujuan = req.body.tujuan;
  let pesan = req.body.pesan;
  var waktu = new Date();
  var valid = true;
  if(tujuan === ""){
    valid = false;
  }
  if(pesan === ""){
      valid = false;
  }
  if(valid){
    axios.post('http://localhost:8000/waapi/sendText', {
        to:req.body.tujuan,
        pesan:pesan
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      res.redirect('/chat');
  }else{
      res.send('gagal menyimpan chat');
  }
  
}


exports.hapus = (req, res) => {
  let id_chat = req.params.id;
  let sql = "delete from chat where id_chat ='" + id_chat + "'";
  let query = conn.query(sql, (err) => {
    if (err) throw err;
    res.redirect('/chat');
  })
}