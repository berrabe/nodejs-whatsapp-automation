exports.dashboard = (req,res)=>{
    let sql = "SELECT * FROM chat limit 10";
 
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.render('dashboard', {
        layout : 'index',
        results:results
      });
    });
}