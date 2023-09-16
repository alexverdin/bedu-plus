exports.getArticles = function (req, res) {
	res.json([]);
};

exports.createArticle = function(req, res){
    console.log(process.env.KIRBY_ASCII);
    res.send(req.body);
};