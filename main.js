//https://teachablemachine.withgoogle.com/models/sGBJIBhKx/

function StartClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/oTCM1xP6R/model.json", ModelReady);
}

function ModelReady() {
    classifier.classify(GotResults);
}

function GotResults(error, results) {
if (error) {
console.error(error);
}
else {
    console.log(results);

    document.getElementById("SoundHeading").innerHTML = "I Can Hear - " + results[0].label;
    document.getElementById("AccuracyHeading").innerHTML = "Accuracy - " + (results[0].confidence*100).toFixed(2);

    EarIMG = document.getElementById("EarIMG");


    if (results[0].label == "Background Noise") {
        EarIMG.src = "RadioWaves.jfif";
    }
    if (results[0].label == "Barking") {
        EarIMG.src = "dogIMG.jpg";
    }
    if (results[0].label == "Meow") {
        EarIMG.src = "CatIMG.jfif";
    }
    if (results[0].label == "Roar") {
        EarIMG.src = "dinasour.jfif";

    }
}



}