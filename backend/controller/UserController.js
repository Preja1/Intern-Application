const {User} =require("../model/UserModel");
exports.login =async(req,res)=>{
    const {username,password}=req.body;
    if (auth.username === "admin" && auth.password === "admin123"){
        return res.status(401).json({success:true});
    }
    return res.status(401).json({success:false});

}