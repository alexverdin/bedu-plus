exports.getArticles = function (req, res) {
	res.json([]);
};

exports.createArticle = function(req, res){
    console.log(req.body);
    res.send("Article Created");
};