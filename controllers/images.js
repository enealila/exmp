const Image = require('../models/Images');
const path =require('path');
const multer =  require('multer');


let uploadHeader = (req,res) => {
    var storage = multer.diskStorage({
        destination : './public/uploads/header/',
        filename: function(req,file,callback){
        callback(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname));
        }
    });
    var upload = multer({storage:storage}).array('myphoto');

    upload(req,res,function(err){
        var array = req.files;
        for(var i=0;i<array.length;i++){
        var fieldname = array[i].fieldname;
        var originalname = array[i].originalname;
        var encoding = array[i].encoding;
        var mimetype = array[i].mimetype;
        var destination = array[i].destination;
        var filename = array[i].filename;
        var path = array[i].path;
        var size = array[i].size;
		if(err){
			res.render('profile',{
				msg:err
			});
		}else{
            var newImage = new Image({
                 fieldname :fieldname,
                 originalname :originalname,
                 encoding :encoding,
                 mimetype :mimetype,
                 destination :destination,
                 filename :filename,
                 path :path,
                 size :size
            })
            newImage.save(newImage, function(err,image){
             if(err) throw err;
             console.log(image);
        });
        }
    }
    res.redirect('/home/list-headers');
    }) 
}

let uploadVideo = (req,res) => {
    var storage = multer.diskStorage({
        destination : './public/uploads/video/',
        filename: function(req,file,callback){
        callback(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname));
        }
    });
    var upload = multer({storage:storage}).array('myphoto');

    upload(req,res,function(err){
        var array = req.files;
        for(var i=0;i<array.length;i++){
        var fieldname = array[i].fieldname;
        var originalname = array[i].originalname;
        var encoding = array[i].encoding;
        var mimetype = array[i].mimetype;
        var destination = array[i].destination;
        var filename = array[i].filename;
        var path = array[i].path;
        var size = array[i].size;
		if(err){
			res.render('profile',{
				msg:err
			});
		}else{
            var newImage = new Image({
                 fieldname :fieldname,
                 originalname :originalname,
                 encoding :encoding,
                 mimetype :mimetype,
                 destination :destination,
                 filename :filename,
                 path :path,
                 size :size
            })
            newImage.save(newImage, function(err,image){
             if(err) throw err;
             console.log(image);
        });
        }     
    }
    res.redirect('/home/list-video-i');
    }) 
}

let uploadSlide = (req,res) => {
    var storage = multer.diskStorage({
        destination : './public/uploads/slide/',
        filename: function(req,file,callback){
        callback(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname));
        }
    });
    var upload = multer({storage:storage}).array('myphoto');
    upload(req,res,function(err){
        var array = req.files;
        for(var i=0;i<array.length;i++){
        var fieldname = array[i].fieldname;
        var originalname = array[i].originalname;
        var encoding = array[i].encoding;
        var mimetype = array[i].mimetype;
        var destination = array[i].destination;
        var filename = array[i].filename;
        var path = array[i].path;
        var size = array[i].size;
		if(err){
			res.render('profile',{
				msg:err
			});
		}else{
            var newImage = new Image({
                 fieldname :fieldname,
                 originalname :originalname,
                 encoding :encoding,
                 mimetype :mimetype,
                 destination :destination,
                 filename :filename,
                 path :path,
                 size :size
            })
            newImage.save(newImage, function(err,image){
             if(err) throw err;
             console.log(image);
        });
        }
    }
    res.redirect('/home/list-slide-i');
    })
}
let uploadFooter = (req,res) => {
    var storage = multer.diskStorage({
        destination : './public/uploads/footer/',
        filename: function(req,file,callback){
        callback(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname));
        }
    });
    var upload = multer({storage:storage}).array('myphoto');
    upload(req,res,function(err){
        var array = req.files;
        for(var i=0;i<array.length;i++){
        var fieldname = array[i].fieldname;
        var originalname = array[i].originalname;
        var encoding = array[i].encoding;
        var mimetype = array[i].mimetype;
        var destination = array[i].destination;
        var filename = array[i].filename;
        var path = array[i].path;
        var size = array[i].size;
		if(err){
			res.render('profile',{
				msg:err
			});
		}else{
            var newImage = new Image({
                 fieldname :fieldname,
                 originalname :originalname,
                 encoding :encoding,
                 mimetype :mimetype,
                 destination :destination,
                 filename :filename,
                 path :path,
                 size :size
            })
            newImage.save(newImage, function(err,image){
             if(err) throw err;
             console.log(image);
        });
        }
    }
    res.redirect('/home/list-footer');
    })
}
module.exports = {
    uploadFooter,
    uploadHeader,
    uploadSlide,
    uploadVideo,
}