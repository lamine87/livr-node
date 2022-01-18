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
        var sql = "INSERT INTO book (id, auteur, nbrePages, titre) VALUES ('1', 'Patrick', '10', 'Eternel' )"  
    con.query(sql, (err, result) => {
        if(err) throw err;
        return 'record inserted';
    })
})
