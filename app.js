function seasonsName() {

var seasons = prompt ('what is your favorite season ?');
if (seasons == "Autumn") {
    var seasonsName = prompt('what is name of season?')
    alert("welcome")
} else {
    alert(" Amazig !!"); }

return document.write('<h2>' + "Welocome to my website" +'</h2>');
seasonsName (); 
}

var order = prompt('what season do you love Autumn or summer?')
while(order !=='Autumn' && order!=='summer'){
    order =prompt('please write only Autumn or summer ')
}

var showImag = function() {
var picture = '';

if(weather === 'Autumn'){
    picture ='<img src="https://thumbs.dreamstime.com/z/autumn-background-colorful-leaves-word-autumn-pattern-59940159.jpg"/>';
}else {
    picture= '<img src="https://st2.depositphotos.com/1023102/7042/i/950/depositphotos_70427703-stock-photo-word-summer-over-flowers-in.jpg"/>';
}
} 
showImag ();

var result = '';
var numberOfPictures=prompt('How mnany picture do you want to show?');

for(var i = 0 ; i<numberOfPictures ; i++){
    console.log(i);
    result =result+ picture;
}


