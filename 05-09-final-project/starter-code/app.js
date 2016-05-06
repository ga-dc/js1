var Item = new ParseObjectType("Items_initials_here")

Item.create({title:'My first Item'}, function(){
  Item.getAll(function(err, results){
    console.log(results)
  })
})