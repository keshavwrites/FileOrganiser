
let fs = require('fs');

let path = require('path');
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    pictures: ['png', 'jpg', 'jpeg']
}

//this function helps to check file which type of file it is
function checkType(file) {
    for (let type in types) {
        for (let ext of types[type]) {
            if (path.extname(file).split(".")[1] == ext) {
                return type;
            }
        }
    }
    return 'others';
}



function organizeFn(srcpath) {
    if(fs.readdirSync(srcpath).length==0){
        return;
    }


    let entities = fs.readdirSync(srcpath);//reads all the entitites of srcpath
    //console.log(content);

    let organisedFolder = path.join(srcpath, `organisedFolder${path.basename(srcpathcd)}`);       //this makes an exclusive organised folder
    if (!fs.existsSync(organisedFolder)) {
        fs.mkdirSync(organisedFolder);
    }

    //ab saari entities pe loop maarke check karenge
    
    for(let i=0;i<entities.length;i++){
        let file=entities[i];
        let filepath=path.join(srcpath,file);
        if(fs.lstatSync(filepath).isFile()){
           // console.log(filepath);
           let type=checkType(filepath);
          // console.log(type);
          let typefolder=path.join(organisedFolder,type);
          if(!fs.existsSync(typefolder)){
              fs.mkdirSync(typefolder);
          }
          let dest=path.join(typefolder,file);
          //console.log(dest);
          fs.copyFileSync(filepath,dest);
        }else if(fs.lstatSync(filepath).isDirectory()){
           organizeFn(filepath);
        }
    }


}



module.exports = {
    organizeFn: organizeFn
}