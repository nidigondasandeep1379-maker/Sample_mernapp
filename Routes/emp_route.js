let express=require('express');
let router=express.Router();
//router() used to connect api with comman routes
router.post("/register", (req, res) => {
    res.send("register route called");
});

router.post("/login", (req, res) => {
    res.send("login route called");
});
router.get("/viewtask", (req, res) => {
    res.send("viewtask route called");
});
router.patch("/updateprofile", (req, res) => {
    res.send("updateprofile route called");
});
module.exports=router;



// Create two more routes
// /viewtask (get) & /updateprofile (patch)