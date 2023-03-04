const mongoose = require('mongoose');



const connect = async () => {
    try{
        await mongoose.connect('mongodb://localhost:27017/node_dev');
        console.log("hen qua minh k ngu")
    }
    catch(err){
        console.log(err)
        console.log("err nay tk ngu : ",err)
    }


}
module.exports = { connect }