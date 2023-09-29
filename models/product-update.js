const fs = require('fs');
const path = require('path');

module.exports = class updateProduct{
    constructor(p,d){
        this.price = p;
        this.description = d;
    }
    saveUpdates(){
        const p = path.join(path.dirname(process.mainModule.filename),'data','products.json');
fs.readFile(p,(err, data)=>{
    if(err){
        console.log(`Error Occured : ${err.message}`);
    }
    else{
        const updateData = JSON.parse(data);

      updateData[0].price = this.price;
      updateData[0].description = this.description;
        
        console.log(updateData);

        fs.writeFile(p, JSON.stringify(updateData),(err)=>{
            if(err){
                console.log(`Error: ${err.message}`);
            }
        })
    }

})
    }
}


