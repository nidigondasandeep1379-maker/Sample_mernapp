let express=require('express');
let router=express.Router();
//router() used to connect api with comman routes
router.post("/register", (req, res) => {
    res.send("register route called");
});

router.get("/viewemployee", (req, res) => {
    res.send("viewemployee route called");
});
router.post("/assigntask", (req, res) => {
    res.send("assigntask route called");
});
router.delete("/deleteemployee", (req, res) => {
    res.send("deleteemployee route called");
});
module.exports=router;