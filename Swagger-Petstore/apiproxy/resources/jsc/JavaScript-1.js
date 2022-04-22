var requestContent = context.getVariable("requestContent.content");
var loginId = context.getvariable("app.login_id");

if (request)
{
    
    var elements = requestContent.match(/(:\s*"(\\"|[^"])*)"/g);
    
    if(elements)
          elements.forEach(getFields);
        
    print('Request' + requestContent);
    var logMessage2 = requestContent.replace(/\n|\r/g, "");
    context.setVariable("request.content",logMessage2);
    context.setVariable("requestContent.org.message",requestContent);
}
 function getFields(item, index){
     var temp = ":" + item.substring(item.indexOf('"'));
     var field= temp.replace(/\r\n|\n|\r/g, "\\n");
     requestContent = requestContent.replace(item, field);
 }   
