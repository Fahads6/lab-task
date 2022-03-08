sandWich =(bread, cheese)=>{
    if (bread <2){
        return "sandwich";
    }
    let total_bread=parseInt(bread/2);
    if (total_bread==cheese){
        return "Total SandWiches  "+total_bread+" from "+bread+" bread"; 
    }
    else if(total_bread>cheese)
    {
        return "Available Cheese "+cheese+" We Have "+cheese+" SandWiches";
    }
    else
    {
        return "Available Bread "+total_bread+" we have "+total_bread+" SandWiches";
    }
    // return "total sandWiches  "+total_bread+" from 10 bread";
}

Result=sandWich(10,5);
console.log(Result);