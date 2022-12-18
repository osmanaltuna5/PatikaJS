let firstName = prompt("Adınız Nedir? :","");
let body = document.querySelector("body");

let h2_name = document.createElement("h2");
h2_name.id = "giris-name";
firstName = firstName[0].toUpperCase()+firstName.substring(1);
h2_name.innerHTML = `Merhaba  ${firstName}! Hoş Geldin!`;



body.append(h2_name);

let now = new Date().toLocaleString('tr-TR');

let zaman = document.createElement("div");
zaman.id = "zaman";
body.append(zaman);

setInterval(tarihSaat,0);
setInterval(tarihSaat,1000);

let lastSentence = document.createElement("div");
lastSentence.id = "lastSentence";
lastSentence.innerHTML = "tarihinde Kodluyoruz Frontend Web Development Patikası'nın Javascript bölümü 1. Ödevindesiniz. "
body.append(lastSentence);



function getDayName(){
    let days = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];
    let date = new Date().getDay();
    return days[date-1];
}

function tarihSaat() {
    var date = new Date().toLocaleString('tr-TR');

    document.getElementById("zaman").innerHTML = date.slice(10) + " "+  getDayName();
}
