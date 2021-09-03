var SpeechRecognition = window.webkitSpeechRecognition ;

var recognition = new SpeechRecognition() ;

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start()
}

recognition.onresult = function run(event){
    console.log(event);

var content= event.results[0][0].transcript;

document.getElementById("textbox").innerHTML=content;
console.log(content);

if (content=="take my selfie."){
    console.log("taking selfie");
    speak();

}

}

function speak(){
    var synth = window.speechSynthesis;
    speak_data= "taking selfie in five seconds";
    var utterthis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);



    setTimeout(function(){
        take_selfie();
save();
    },5000);
    Webcam.attach(camera);
}



Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    jpeg_quality: 90
});

camera = document.getElementById("camera");

function take_selfie(){
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
    })
}
 function save(){
     var link= document.getElementById("link");
     img = document.getElementById("selfie_image").src;
     link.href= img;
     link.click();

 }