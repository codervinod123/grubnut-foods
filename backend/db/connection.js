const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/grubnutdata")
.then(()=>{
    console.log("succefully connected to the backend");
})
.catch((err)=>{
    console.log(`here is some preoblem in connection ofdatabase ${err}`);
});
