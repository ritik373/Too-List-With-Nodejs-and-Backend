
const conn=require('../config/database');
exports.showForm=(req,res)=>{

    const sql="select * from todolist ";
    conn.query(sql,(err,result)=>{

  
        res.render('C:/Users/RITIK/Documents/Sharpener  Node Js  projets or backend/TODO list App/views/form.hbs',{array:result})
    })
 
  
}

exports.submitdata=(req,res)=>{
    // console.log(req.body);
    const sql=`INSERT INTO todolist(sno, candyname, price, quantity) VALUES ('','${req.body.candyname}','${req.body.price}','${req.body.quantity}')`;
    conn.query(sql,(err,result)=>{
        if(err)throw err;

        console.log("data inserted");
    })




    res.redirect('/');

}

exports.DeleteItem=(req,res,next)=>{
    const sql=`DELETE FROM todolist WHERE sno=${req.params.id}`;
    conn.query(sql,(err,result)=>{
        if(err)throw err;
        console.log("your item deleted");
    })
    res.redirect('/');
}

exports.singleData=(req,res)=>{
    const sql=`select * from todolist WHERE sno=${req.params.singleId}`;
    conn.query(sql,(err,result)=>{

        result.forEach(element => {
            const sql=`INSERT INTO choosedata(sno, candyname, price, quantity) VALUES ('','${element.candyname}','${element.price}','${element.quantity}')`;
            conn.query(sql,(err,result)=>{
                if(err)throw err;


                // alert('data was inerted',element);
        
                console.log("single data inserted");
            })
            
        });

    })


    res.redirect('/');

}
