// let btn=document.querySelector("#btn")
// let content=document.querySelector("#content")

// function speak(text){
//     let text_speak=new SpeechSynthesisUtterance(text)
//     text_speak.rate=1
//     text_speak.pitch=1
//     text_speak.volume=1
//     text_speak.lang="en-GB"

//     window.speechSynthesis.speak(text_speak)
    
// }
// function wishme(){
//     let day=new Date()
//     let hours=day.getHours()
//     if(hours>=0 && hours<12){
//         speak("Good morning Mmc")
//     }
//     else if(hours>=12 && hours<=16){
//         speak("good afternoon mmc")
//     }
//     else{
//         speak("Good evening mmc")
//     }
// }
// // window.addEventListener('load',()=>{
// //     wishme() 
// // })
// let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
// let recognition = new speechRecognition()
// recognition.onresult=(event)=>{
//     let currentIndex=event.resultIndex
//     let transcript=event.results[currentIndex][0].transcript
//     content.innerText=transcript
//     takeCommand(transcript)
// }
// btn.addEventListener("click",()=>{
//     recognition.start()
// })
// function takeCommand(message){
//     if(message.includes("hello")){
//         speak("hello mmc,how can i help you?")
//     }
// }
let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice=document.querySelector("#voice");

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "en-GB";
    window.speechSynthesis.speak(text_speak);
}

function wishme() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good morning MMC");
    } else if (hours >= 12 && hours <= 16) {
        speak("Good afternoon MMC");
    } else {
        speak("Good evening MMC");
    }
}

// Browser compatibility check
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();
recognition.interimResults = false;
recognition.continuous = false;

recognition.onresult = (event) => {
    let transcript = event.results[0][0].transcript;
    content.innerText = transcript;
    takeCommand(transcript.toLowerCase());
};

recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
    speak("Sorry, I couldn't hear you properly.");
};

btn.addEventListener("click", () => {
    content.innerText = "Listening...";
    recognition.start();
    btn.style.display="none"
    voice.style.display="block"
});

function takeCommand(message) {
    btn.style.display="flex"
    voice.style.display="none"
    if (message.includes("hello")||message.includes("hey") ) {
        speak("Hello MMC, how can I help you?");
    } else if (message.includes("how are you")) {
        speak("I'm doing great, thank you!");
    }
     else if(message.includes("who are you")){
        speak("I am a virual assistant, created by of Mister Muni chandra sir")
     }
     
    else if(message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook")
        window.open("https://www.facebook.com")
    }
    else if(message.includes("open google")){
        speak("opening google")
        window.open("https://www.google.com")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram")
        window.open("https://www.instagram.com")
    }
    else if(message.includes("open caluculator")){
        speak("opening caluculator")
        window.open("calculator://")
    }
    else {
        let query = message.replace("maha", "").trim();
        let finalText = "This is what I found on the internet regarding " + query;
        speak(finalText);
    
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
    }
    
}
