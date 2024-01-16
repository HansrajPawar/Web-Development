function fibseries(num)
{
    op = [];
    if(num === 1)
    {
         op = [0];
    }
    else if (num===2){
         op = [0,1];
    }else{
        op = [0,1];
        for(var i = 2 ; i <num ; i++)
        op.push(op[op.length-2]+op[op.length - 1]);
    }
    
    console.log(op)
}
fibseries(10);