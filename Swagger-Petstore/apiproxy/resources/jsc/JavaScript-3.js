var objpayload = JSON.parse(request.content);
print(JSON.stringify(objpayload.status));
objpayload.status.replace(/(\r\n|\n|\r)/gm,"");
context.setVariable('request.content',JSON.stringify(objpayload,null,2));
print(JSON.stringify(request.content));
var field= temp.replace(/\r\n|\n|\r/g, "\\n");


 