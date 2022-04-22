 var messageContent = context.getVariable("message.content");
 messageContent = messageContent.replace( /[\r\n]+/gm, " " );
 context.setVariable("message.content", messageContent );
