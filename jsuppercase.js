/**
 * JsUppercase

 */
var JSUpperCase = {
    jsUpperCase: function () {
        let result = [];
        if (arguments.length == 0) {
            console.log('Argument is missing');
        }
        else if (arguments.length == 1) {
            result.push(arguments[0].toLocaleUpperCase());
        }
        else {
            let arg = Array.prototype.slice.call(arguments);
            arg.forEach(element => {
                if (typeof element == "string") {
                    result.push(element.toLocaleUpperCase());
                }
                else {
                    result.push(element);
                }
            });
        }
        consoloe.log('End');
        console.log(result);
        return result;
        
    }
}
module.exports = JSUpperCase;
