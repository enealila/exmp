const Image = require('../models/images');
const path =require('path');
const multer =  require('multer');

const storage = multer.diskStorage({
    destination:'./public/uploads',
    filename: function(req,file,callback){
    callback(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname));
    }
});

const upload = multer({storage:storage}).array('myphoto');
 
let uploadImages = (req,res)=>{
        var array = req.files;
        var radio = req.body.upload;
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
            Image.saveImage(newImage, function(err,image){
             if(err) throw err;
             console.log(image);
		});
        }
        
    }
    res.redirect('home');
}
