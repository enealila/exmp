// import { CONNREFUSED } from 'dns';

const mongoose = require('mongoose');
const fs = require('fs');
const path  = require('path');
const Images = require('../models/Images');
const ObjectId    = mongoose.Types.ObjectId();
const Table       = require('../models/Table');
const bodyParser = require('body-parser');

let listTable = (req,res)=>{
    Promise.all([
        Table.find({ }).exec()
    ])
    .then(result => {
        const table = result[0];
        res.render('home/list-table', {
            table,
        });
    })
    .catch(err => {
        console.log(err);
        res.redirect('/');
    })
}
let postTable = (req,res)=>{

    var name = req.body.name;
    var sell = req.body.sell;
    var buy  = req.body.buy;
    var newTable = new Table({
        name :name,
        sell :sell,
        buy :buy,
   })
   newTable.save(newTable, function(err,table){
    if(err) throw err;
    console.log(table);
});
res.redirect('/home/list-table')    
}

let update = (req,res)=>{

    var id = req.params._id;
    var name = req.body.name;
    var sell = req.body.sell;
    var buy = req.body.buy;

    const objTab = {
        id: id,
        name: name,
        sell: sell,
        buy: buy
    }
    console.log(objTab);
     Table.updateOne({_id:id}, objTab ,(err) => {
         if(err){
            console.log(err);
         }
         res.redirect('/home/list-table');
    })  
}

module.exports = {
    listTable,
    postTable,
    update   ,
}
