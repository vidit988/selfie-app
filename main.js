var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
    
} 
recognition.onresult=function(event){
    content=event.results[0][0].transcript.toLowerCase()
    console.log(content)
    if(content=='selfie'){
        speak()
    }
}

camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
setTimeout(function(){
    image_id='selfie1'
    take_snapshot()
    speak_data='taking your selfie in 10 sec'
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
},5000)
setTimeout(function(){
    image_id='selfie2'
    take_snapshot()
    speak_data='taking your selfie in 15 sec'
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
},10000)
setTimeout(function(){
    image_id='selfie3'
    take_snapshot()
   
},15000)
}
function take_snapshot(){
console.log(image_id)
Webcam.snap(function (data_uri){
    if (image_id=="selfie1") {
        document.getElementById('')
    }
})
}