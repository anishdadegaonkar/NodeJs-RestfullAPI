const mongoose = require('mongoose');
const EmployeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:false,
    },
    email:{
        type:String,
        required:false,
    },
    password:{
        type:String,
        required:false,
    },
    age:{
        type:Number,
        required:false,
    },
    address:{
        type:String,
        required:false,
    },
    salary:{
        type:Number,
        required:false,
    }
})
module.exports = mongoose.model('Employeedata', EmployeeSchema);