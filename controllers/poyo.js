exports.getPoyo = function(req, res){
    console.log(process.env.KIRBY_ASCII);
    res.send("Poyo!");
};