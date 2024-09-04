function outerfun(){
    let outervar = "this is from outer variable";
    function innerfun(){
        let innervar="this is from inner variable";
        console.log(outervar);
        console.log(innervar);
    }
    return innerfun
}

const innerfunction = outerfun()
innerfunction()