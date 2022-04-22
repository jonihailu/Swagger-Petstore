var request = context.getVariable("request.content");
if (request)
{
    
    var elements = request.match(/(:\s*"(\\"|[^"])*)"/g);
    
    if(elements)
          elements.forEach(getFields);
        
    print('Request' + request);
    var logMessage2 = request.replace(/\n|\r/g, "");
    context.setVariable("request.content",logMessage2);
    context.setVariable("request.org.message",request);
}
 function getFields(item, index){
     var temp = ":" + item.substring(item.indexOf('"'));
     var field= temp.replace(/\r\n|\n|\r/g, "\n");
     request = request.replace(item, field);
 }   
 