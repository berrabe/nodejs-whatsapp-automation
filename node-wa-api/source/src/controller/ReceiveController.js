exports.list = (req, res) => {
  let sql = "SELECT * FROM pesan  order by id desc limit 0,25";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.render('pesan/list', {
      layout: 'index',
      results: results,
  
    });
  });
}
exports.hapus = (req, res) => {
  let id_pesan = req.params.id;
  let sql = "delete from pesan where id ='" + id_pesan + "'";
  let query = conn.query(sql, (err) => {
    if (err) throw err;
    res.redirect('/receive');
  })
}