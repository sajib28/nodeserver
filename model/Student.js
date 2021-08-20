const mongoose = require("mongoose");
const Subject = require('./Subject');
const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    subject:{
        type: String,
        required: true
    }
});

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
