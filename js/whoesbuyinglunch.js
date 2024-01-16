function name()
{
    names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
    
    var len = names.length;
    
    var ranno = Math.floor(Math.random()*len);
    var ranpername = names[ranno];
  
  
    
    console.log=(ranpername+"is going to buy lunch today!" );
}

name()