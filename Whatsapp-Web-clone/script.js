// profile or message or newchat searching event handling

var search_box = document.querySelector(".left-container  .search-container .search");
var search_ico = document.querySelector(".left-container  .search-container .search-ico");
var back_ico = document.querySelector(".left-container  .search-container .back-ico");
var search_container = document.querySelector(".left-container  .search-container");

function toggleSearchBtn() {
    search_ico.classList.toggle("hide");
    back_ico.classList.toggle("hide");
    search_container.classList.toggle("focused");
}

search_box.addEventListener("focusin", toggleSearchBtn);
search_box.addEventListener("focusout", () => {
    if (search_box.value == "")
        toggleSearchBtn();
});

back_ico.addEventListener("click", function () {
    search_box.value = "";
    toggleSearchBtn();
});

// message sent event handling

function getTime(){
    let date=new Date();
    hours=date.getHours();
    minutes=date.getMinutes();
    let time=hours+":"+minutes;
    return time
}

function sendMessage(){
    let userText=document.getElementsByClassName("input-text")[0].value;
    let textBox="<div class=\"chat-message-container\"><div class=\"message-box\"><div class=\"message-content\">"+userText+"</div><div class=\"message-time-container\"><span class=\"message-time\">"+getTime()+"</span></div></div></div>";
    document.getElementsByClassName("input-text")[0].value=" ";
    document.getElementsByClassName("chat-box-container")[0].innerHTML+=textBox;
    let responseBox="<div class=\"response-message-container\"><div class=\"response-message-box\"><div class=\"response-message-content\">"+getResponse(userText)+"</div><div class=\"response-message-time-container\"><span class=\"response-message-time\">"+getTime()+"</span></div></div></div>"
    document.getElementsByClassName("chat-box-container")[0].innerHTML+=responseBox;
    let chat_box_scroll=document.querySelector(".right-container .chat-box-container");
    chat_box_scroll.scrollTop=chat_box_scroll.scrollHeight;


}

let input_box=document.querySelector(".right-container .sent-bar .input-text")
console.log(input_box)
input_box.addEventListener("keypress",function(e){
    if(e.keyCode==13 && !e.shiftKey)
        sendMessage();

});

var voiceIco=document.querySelector(".microphone");
var sendIco=document.querySelector(".send-ico");
function toggleTextBox() {
    voiceIco.classList.toggle("hide");
    sendIco.classList.toggle("hide");
}

input_box.addEventListener("focusin", toggleTextBox);
input_box.addEventListener("focusout", () => {
    if (input_box.value == "")
        toggleTextBox();
});




// let person_container=document.querySelector(".left-container  .chat-peoples-container .person-container")

// person_container.addEventListener("click",() =>{
//     if(window.innerWidth<550)
//     {
//         let chat_box=document.getElementsByClassName("right-container")[0];
//         let chat_list_box=document.getElementsByClassName("left-container")[0];
//         chat_list_box.classList.toggle("chat-left-box-appear");
//         chat_box.classList.toggle("chat-box-appear");
//     }

// });
