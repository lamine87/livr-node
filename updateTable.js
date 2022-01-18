var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'livre_exo'
});

con.connect( (err) => {
    if (err) throw err;
        console.log('Connected');
        var sql = "UPDATE From book (id, auteur, nbrePages, titre) VALUES ('', '', '', '' )"  
    con.query(sql, (err, result) => {
        if(err) throw err;
        return 'record updated'+ result.id;
    })
})
