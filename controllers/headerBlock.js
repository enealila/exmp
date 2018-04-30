const mongoose = require('mongoose');
const fs = require('fs');
const path  = require('path');
const Images = require('../models/Images');
const ObjectId    = mongoose.Types.ObjectId();
let listHeaders = (req,res)=>{
    Promise.all([
        Images.find({ }).exec()
    ])
    .then(result => {
        const images = result[0];
        res.render('home/list-headers', {
            images,
        });
    })
    .catch(err => {
        console.log(err);
        res.redirect('/');
    })
}

let remove = (req,res)=>{
    const id = req.params;
    console.log(id);
    if(id) {
     Images.findOneAndRemove({_id: id}, (err) => {
        res.redirect('/home/list-headers');
            
        });
    }
}

module.exports = {
    listHeaders,
    remove,
}


// </head>
// <body>
//   <header><%- include ../partials/header %></header>  
  
//   <h1>File Upload</h1>
//   <form
//     action='/uploadHeader' 
//     method='post' 
//     encType="multipart/form-data">
//     <input type="file" name="myphoto" multiple/>
//     <input type='submit' value='Ngarkoni Foto!' />
// </form>  
// <% for(var i=0;i<images.length;i++){%>
//     <% if(images[i].destination === './public/uploads/header/'){%>
//       <a href="/home/list-headers/remove/<%=images[i]._id%>">X</a> 
//       <img src="/uploads/header/<%=images[i].filename%>" width="100" height="100">
//       <%}}%>
// <footer><%- include ../partials/footer %></footer>
// </body>
// </html>