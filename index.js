let express=require('express');
let app=express();
let empRoute=require('./Routes/emp_route');
app.use("/api/emp",empRoute); // Connect the emp_route.js with the main index.js file
app.use("/api/hr",hrRoute); // Connect the hr_route.js with the main index.js file
// localhost:3000/api/emp/register => post
// localhost:3000/api/emp/login     => post
// localhost:3000/api/emp/viewtask  => get
// localhost:3000/api/emp/updateprofile => patch
// localhost:3000/api/hr/viewemployee => get
// localhost:3000/api/hr/assigntask => post
// localhost:3000/api/hr/deleteemployee => delete


// run the server
app.listen(3000,()=>{
    console.log("server lisening on port 3000");
    
})
