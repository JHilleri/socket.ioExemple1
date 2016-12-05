

function start()
{
    var socket = io();

    $("#messageForm").submit(function(){
        socket.emit("message", {pseudo:$("#userPseudo").val(),text:$("#messageInput").val()});
        $("#messageInput").val("");
        return false;
    });

    socket.on("message", function(message){
        $("#messageOutput").val($("#messageOutput").val() + message.pseudo + " : " + message.text + "\n");
    });
}