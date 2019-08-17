function JsUpperCase()
{
    let result =[];
    if(arguments.length == 0) 
    {
        console.log('Argument is missing'); 
    }
    else if(arguments.length == 1) 
    {
        result.push(arguments[0].toLocaleUpperCase());
    }
    else
    {
        let arg = Array.prototype.slice.call(arguments);
        arg.forEach(element => {
            if(typeof element =="string")
            {
                result.push(element.toLocaleUpperCase());
            }
            else
            {
                result.push(element);  
            }
        });
    }
    console.log(result);
    return result;
}
