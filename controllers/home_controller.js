module.exports.home=function(req,res){
   
   return res.render('home',{
    title:"Home"
   })
};

module.exports.game=function(req,res){
    return res.end('<h1>which one mobile or pc?</h1>')
}
