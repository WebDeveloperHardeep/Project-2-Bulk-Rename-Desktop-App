const fs = require('fs');
const path = require('path')
const replaceThis = "harry"
const replaceWith = "deep"
const preview = false
const folder = __dirname
try {
  fs.readdir(folder, (err, data)=>{
    for(index = 0; index < data.length; index++){
        const item = data[index];
        let oldFile = path.join(folder, item)
        let newFile = path.join(folder, item.replaceAll(replaceThis, replaceWith))
        if(!preview){
        fs.rename(oldFile, newFile, ()=>{
            console.log("Rename Success", item, newFile
            )
        })
    }
    else{
    console.log("data/" + item + "Will be renamed to" + newFile)
    }
    }
  })
} catch (err) {
  console.error(err);
}