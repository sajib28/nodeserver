const mongoose = require("mongoose");
const Student = require('./Student');
const SubjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});
const Subject = mongoose.model("Subject", SubjectSchema);
module.exports = Subject;
