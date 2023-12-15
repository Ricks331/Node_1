module.exports=function Validation(req, res, next) {
    if (req.token) {
      console.log("Token approved..");
      next();
      return;
    }
    console.log("No Token");
    res.send("<h1>no auth</h1>")
  }