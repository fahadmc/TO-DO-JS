try{
    const a=10;
    let b;
    // const result=a+b;
    // console.log(result);
    if(!b){
        throw new Error ("there is no value in b")
    }
}
catch(error){
    console.log(error.message);
    

}finally{
    console.log("next");
    
}