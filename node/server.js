const express = require('express');
const bodyPaser = require('body-parser');
const app = express();
require('./db');
const FeedbackModel = require('./model/feedback_model');


app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Method', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type,x-access-token');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();

});

app.get('/', (req, res) => {
    res.end('welcome to rootpath');
});

app.get('/home', (req, res) => {
    res.end('welcome to home');
});


app.post('/api', (req, res) => {
    const feedback = req.body.feedback;
    const username = req.body.username;
    FeedbackModel.create(req.body, (err, doc) => {
        if (err) {
            res.json({ result: "failed", username: username, feedback: feedback });
        } else
            res.json({ result: "success", username: username, feedback: feedback });

    });
    // res.end("Receive Feedback : "+feedback+"/n"+"username:"+username);
});
app.get('/api/dataList',(req,res)=>{
    FeedbackModel.find((err,doc)=>{
        if(err) res.json({result:"failed"})
        res.json({result:"success",data:doc});
    });
});

app.listen(3000, () => {
    console.log("server is running")
})