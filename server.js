var express = require('express');
// var { graphqlHTTP } = require('express-graphql');
// var { buildSchema } = require('graphql');
const mongoose = require('mongoose');
const cors = require('cors');
var app = express();
const Student = require('./model/Student');
const Subject = require('./model/Subject');
app.use(express.json());
app.use(cors());
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb+srv://sajib:sajib12345@cluster0.e8ub5.mongodb.net/reactapione', { useNewUrlParser: true, useUnifiedTopology: true })
    // mongoose.connect('mongodb://127.0.0.1:27017/graphql', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then((res) => {
    })
    .catch((err) => {
        console.log(err)
    })


//  Add Subject Data   

app.post("/insetsubject", async (req, res) => {
    const subject = new Subject({
        name: req.body.name
    })
    try {
        await subject.save();
        res.send("Subject Inserted Successfully");
    } catch (error) {
        console.log(error)
    }

});

//  Show Subject Data   

app.get("/showsubject", async (req, res) => {
    Subject.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result);
    });
});

//Add Student Data
app.post("/insetstudent", async (req, res) => {
    const student = new Student({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        dob: req.body.dob,
        subject: req.body.subject,

    })
    try {
        await student.save();
        res.send("Datas Inserted Successfully");
    } catch (error) {
        console.log(error)
    }

});
// Display Student list
app.get("/showstudent", async (req, res) => {
    Student.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result);
    });
});

// Edit Student Data
app.get("/editStudent/:id", async (req, res) => {
    const id = req.params.id;
    try {
        Student.findById(id, (err, editedData) => {
            res.send(editedData);
        });
    } catch (err) {
        res.send(err);
    }

});

// Update Student Data 
app.put("/updateStudent", async (req, res) => {
    id = req.body.id;
    try {
        Student.findById(id, (err, updatedData) => {
            updatedData.name = req.body.name;
            updatedData.email = req.body.email;
            updatedData.phone = req.body.phone;
            updatedData.dob = req.body.dob;
            updatedData.subject = req.body.subject;
            updatedData.save();
            res.send("Update");
        });
    } catch (err) {
        res.send(err);
    }

});

// Update Student Data 
app.delete("/deletestudent/:id", async (req, res) => {
    const id = req.params.id;
    await Student.findByIdAndRemove(id).exec();
    res.send("Deleted");
});
// const port = process.env.PORT || 3001;
// app.listen(port, () => console.log(`Now browse to localhost:${port}`));
app.listen();