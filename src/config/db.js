const mongoose = require("mongoose")
const connect = ()=>mongoose.connect(
    // "mongodb+srv://web15:web15@cluster0.zieim.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    'mongodb+srv://Amir98375:Amir98375@clusteramir.eb07fhj.mongodb.net/?retryWrites=true&w=majority&appName=ClusterAmir'
    // 'mongodb+srv://youtube:youtube@cluster0.tsxnp3q.mongodb.net'
    )

    module.exports=connect;