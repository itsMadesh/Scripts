function getResponse(userText){
        let text=userText.toLowerCase();
        if(text=="hello"){
            return "Hello";
        }
        else if(text=="hii"){
            return "Hii";
        }
        else if(text=="good night"){
            return "Good Night";
        }
        else if(text=="how are you?"){
            return "I am fine"+"\n"+"What about you?";
        }
        else{
            return "I have no answer for this.";
        }
}