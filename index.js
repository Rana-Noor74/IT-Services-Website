const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname + "/public/"));
app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    res.render("techzonelive/pages/index");
})
app.get("/about-us", (req, res)=>{
    res.render("techzonelive/pages/about-us");
})
app.get("/blogs", (req, res)=>{
    res.render("techzonelive/pages/blogs");
})
app.get("/blogs/aws-development", (req,res)=>{
    res.render("techzonelive/pages/aws-blog");
})
app.get("/blogs/devops-development", (req,res)=>{
    res.render("techzonelive/pages/devops-blog");
})

app.get("/cookie-policies", (req, res)=>{
    res.render("techzonelive/pages/cookie-policies");
})

app.get("/services", (req, res)=>{
    res.render("techzonelive/pages/services");
})

app.get("/faqs", (req, res)=>{
    res.render("techzonelive/pages/faq");
})

app.get("/privacy-policies", (req, res)=>{
    res.render("techzonelive/pages/privacy-policies");
})

app.get("/contact-us", (req, res)=>{
    res.render("techzonelive/pages/contact-us");
})

app.get("/sign-up", (req, res)=>{
    res.render("techzonelive/pages/sign-up");
})

app.get("/sign-in", (req, res)=>{
    res.render("techzonelive/pages/sign-in");
})


app.listen(3000, ()=>{
    console.log(`Our server is running on port 3000`);
});