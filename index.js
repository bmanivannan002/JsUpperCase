function JsUpperCase()
{
    console.log ('Operation initiated');
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
            result.push(element.toLocaleUpperCase());
        });
        
    }
    return result;
}
console.log('Conversion completed successfully');
