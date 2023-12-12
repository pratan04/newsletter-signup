const express=require("express");
const bodyParser=require("body-parser");
const request =require("request");
const https=require("https");

const port = process.env.port || 3000;

const app=express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req,res){
    const fname=req.body.fname;
    const lname=req.body.lname;
    const email=req.body.email;
    // const data ={
    //     members: [
    //         {
    //             email_address: email,
    //             status:"subscribed";
    //             merge_fields:{
    //                 FNAME:firstName,
    //                 LNAME:lastName
    //             }
    //         }

    //     ]

    // };

    const jsonData =JSON.stringify(data);

    // const url="https://us18.api.mailchimp.com/3.0/lists/7de70750bc";
    // const options={
    //     method:"POST",
        
    }

    https.request(url,options,function(response){

    })
);

// {"name":"Freddie'\''s Favorite Hats","contact":{"company":"Mailchimp","address1":"675 Ponce De Leon Ave NE","address2":"Suite 5000","city":"Atlanta","state":"GA","zip":"30308","country":"US","phone":""},"permission_reminder":"You'\''re receiving this email because you signed up for updates about Freddie'\''s newest hats.","campaign_defaults":{"from_name":"Freddie","from_email":"freddie@freddiehats.com","subject":"","language":"en"},"email_type_option":true};
app.listen(port, () =>{
    console.log("server running on port ${port}");
});


// api key
// b1c8148e39b15ad19b8dd658a68fcfa2-us18

// list id
// 7de70750bc

