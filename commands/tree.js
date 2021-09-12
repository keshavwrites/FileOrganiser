
const fs=require('fs');
const path=require('path');


// "├──"

// "└──"

function treeFn(srcPath){
    

    let baseName=path.basename(srcPath);
    console.log(baseName);
    console.log("\t"+"└──");
    let content=fs.readdirSync(srcPath);

    let allEntities="";
    for(let i=0;i<content.length;i++){
        let  entitypath=path.join(srcPath,content[i]);
        if(fs.lstatSync(entitypath).isFile()){
            allEntities+='\n\t'+"├──"+content[i];
        // console.log(content[i]);
        } else{
                treeFn(entitypath);

        }


        }

        
        
    
    console.log(allEntities);
}



module.exports={
    treeFn:treeFn
}