$(function(){
/* выбор города */
$('.first').click(function(){
$(".first_list").slideToggle('fast');
});
$('ul.first_list li').click(function(){
var tx = $(this).html();
var tv = $(this).attr('alt');
$(".first_list").slideUp('fast');
$(".first span").html(tx);
$(".first_text").html(tv);
});
})

$(function(){
$(".second_list").slideUp('fast');
$('.second').click(function(){
$(".second_list").slideToggle('fast');
});
$('ul.second_list li').click(function(){
var tx = $(this).html();
var tv = $(this).attr('alt');
$(".second_list").slideUp('fast');
$(".second span").html(tx);
$(".second_text").html(tv);
});
})

$(function(){
$(".third_list").slideUp('fast');
$('.third').click(function(){
$(".third_list").slideToggle('fast');
});
$('ul.third_list li').click(function(){
var tx = $(this).html();
var tv = $(this).attr('alt');
$(".third_list").slideUp('fast');
$(".third span").html(tx);
$(".third_text").html(tv);
});
})

$(function(){
$(".four_list").slideUp('fast');
$('.four').click(function(){
$(".four_list").slideToggle('fast');
});
$('ul.four_list li').click(function(){
var tx = $(this).html();
var tv = $(this).attr('alt');
$(".four_list").slideUp('fast');
$(".four span").html(tx);
$(".four_text").html(tv);
});
})

$(function(){
$(".five_list").slideUp('fast');
$('.five').click(function(){
$(".five_list").slideToggle('fast');
});
$('ul.five_list li').click(function(){
var tx = $(this).html();
var tv = $(this).attr('alt');
$(".five_list").slideUp('fast');
$(".five span").html(tx);
$(".five_text").html(tv);
});
})

function checkCurr(d){
if(window.event){
if(event.keyCode == 37 || event.keyCode == 39) return;
}d.value = d.value.replace(/\D/g,'');
}

function one(){
	// first column
	var a = parseInt(document.getElementById("kal1").innerHTML);
	var b = document.getElementById("massa1").value;
	if(b==""){
	    b="0";
	}
    var d = parseInt(b);
	var c = a/1000*d;
	var cc = c.toFixed(1); 
    document.getElementById("cal1").innerHTML = cc;	
	
	// second
	var a2 = parseInt(document.getElementById("kal2").innerHTML);
	var b2 = document.getElementById("massa2").value;
	if(b2==""){
	    b2="0";
	}
    var d2 = parseInt(b2);
	var c2 = a2/1000*d2;
	var cc2 = c2.toFixed(1); 
	document.getElementById("cal2").innerHTML = cc2;
	
	// third
	var a3 = parseInt(document.getElementById("kal3").innerHTML);
	var b3 = document.getElementById("massa3").value;
	if(b3==""){
	    b3="0";
	}
    var d3 = parseInt(b3);
	var c3 = a3/1000*d3;
	var cc3 = c3.toFixed(1); 
	document.getElementById("cal3").innerHTML = cc3;
	
	// four
	var a4 = parseInt(document.getElementById("kal4").innerHTML);
	var b4 = document.getElementById("massa4").value;
	if(b4==""){
	    b4="0";
	}
    var d4 = parseInt(b4);
	var c4 = a4/1000*d4;
	var cc4 = c4.toFixed(1); 
	document.getElementById("cal4").innerHTML = cc4;
	
	// five
	var a5 = parseInt(document.getElementById("kal5").innerHTML);
	var b5 = document.getElementById("massa5").value;
	if(b5==""){
	    b5="0";
	}
    var d5 = parseInt(b5);
	var c5 = a5/1000*d5;
	var cc5 = c5.toFixed(1); 
	document.getElementById("cal5").innerHTML = cc5;
	
	// razem
	var maskonc = d+d2+d3+d4+d5;
	var k = c + c2 + c3 + c4 + c5;
	var kalkonc = k.toFixed(1); 
    document.getElementById("massakonc").innerHTML = "Razem: "+ maskonc + " [gr]";
	document.getElementById("kalkonc").innerHTML = "Razem: "+ kalkonc + " [kkal]";
	
}


function anuluj() {
    document.getElementById("massa1").value = "0"
    document.getElementById("massa2").value = "0"
    document.getElementById("massa3").value = "0"
    document.getElementById("massa4").value = "0"
    document.getElementById("massa5").value = "0"
	
	document.getElementById("cal1").innerHTML = "0.0";
	document.getElementById("cal2").innerHTML = "0.0";
	document.getElementById("cal3").innerHTML = "0.0";
	document.getElementById("cal4").innerHTML = "0.0";
	document.getElementById("cal5").innerHTML = "0.0";
	
   document.getElementById("massakonc").innerHTML = "Razem: 0 [gr]";
	document.getElementById("kalkonc").innerHTML = "Razem: 0.0 [kkal]";
}


function download(){
var prod1 = document.getElementById("prod1").innerHTML;
var prod2 = document.getElementById("prod2").innerHTML;
var prod3 = document.getElementById("prod3").innerHTML;
var prod4 = document.getElementById("prod4").innerHTML;
var prod5 = document.getElementById("prod5").innerHTML;

var massa1 =  document.getElementById("massa1").value;
var massa2 =  document.getElementById("massa2").value;
var massa3 =  document.getElementById("massa3").value;
var massa4 =  document.getElementById("massa4").value;
var massa5 =  document.getElementById("massa5").value;

var cal1 = document.getElementById("cal1").innerHTML;
var cal2 = document.getElementById("cal2").innerHTML;
var cal3 = document.getElementById("cal3").innerHTML;
var cal4 = document.getElementById("cal4").innerHTML;
var cal5 = document.getElementById("cal5").innerHTML;

var massakonc = document.getElementById("massakonc").innerHTML;
var kalkonc = document.getElementById("kalkonc").innerHTML;

var d = new Date();
var day = d.getDate();
var month = d.getMonth()+1; 
var year = d.getFullYear();
var days = ["Niedziela", "Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota"];

if(day<10){
	day = "0"+day;
} if(month<10){
	month = "0"+month;
}

var text = days[d.getDay()]+", "+day+"."+month+"."+year+", dziś zjedzone:   1) "+prod1+": "+massa1+" [gr], "+cal1+" [kcal];  "+"2) "+prod2+": "+massa2+" [gr], "+cal2+" [kcal];  "+"3) "+prod3+": "+massa3+" [gr], "+cal3+" [kcal];  "+"4) "+prod4+": "+massa4+" [gr], "+cal4+" [kcal];  "+"5) "+prod5+": "+massa5+" [gr], "+cal5+" [kcal];  "+"Massa "+massakonc+";  Kalorii "+kalkonc;
document.write(
    '<div id="load"><a id="load" href="data:text/plain;charset=utf-8,%EF%BB%BF' + encodeURIComponent(text) + '" download="Kalorii_wynik.txt"><img src="http://icecrypt.com/wp-content/uploads/Download.jpg" width="20">   Jeśli chcesz pobrać wyniki, kliknij tutaj</a></div>')
}
