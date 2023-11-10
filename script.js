const body = document.querySelector('body');
const watch = document.querySelector('.watch');
const sec = document.querySelector('.sec');
const min = document.querySelector('.min');
const hour = document.querySelector('.hour');
const dateRing = document.querySelector('.dateRing');
const sec2 = document.querySelector('.sec2');
const min2 = document.querySelector('.min2');
const hour2 = document.querySelector('.hour2');
const dateRing2 = document.querySelector('.dateRing2');
let milliseconds = 0;
let lastSeconds = -1;

//document.addEventListener("DOMContentLoaded", function() {
    body.style.zoom = '100%';
    window.scrollTo(0, 0);

    const isMobile = window.matchMedia("only screen and (max-width: 1000px)").matches;

    if (isMobile) {
        body.style.touchAction = 'none';
        body.style.zoom = '120%';
        watch.style.transform = 'translate(-50%, -69%)';
    } else {
        body.style.touchAction = 'pinch-zoom';
        body.style.zoom = '100%';
        watch.style.transform = 'translate(-50%, -61.5%)';
    }
//});

function moveWatch() {
	let value = document.getElementsByName("JST")[0].value.split(/[/\s:]+/).map(Number);
	
	let date = value[2];
	let hours = value[3];
	let minutes = value[4];
	let seconds = value[5];

	milliseconds += 100;

	if (seconds !== lastSeconds) {
		milliseconds = 0;
	}
	lastSeconds = seconds;

	console.log(value);
	console.log('value: ' + value + '\nvalue[0]: ' + value[0] + ' value[1]: ' + value[1] + ' value[2]: ' + value[2] + ' value[3]: ' + value[3] + ' value[4]: ' + value[4] + ' value[5]: ' + value[5] + '  milliseconds: ' + milliseconds);
	console.log(date + ' 日 ' + hours + ' 時 ' + minutes + ' 分 ' + seconds + ' 秒 ' + milliseconds + ' ミリ秒');
	
	let sec_deg = (seconds * 6) + (milliseconds * 0.006);
	let min_deg = (minutes * 6) + (seconds * 0.1) + (milliseconds * 0.0001);
	let hour_deg = (hours * 30) + (minutes * 0.5) + (seconds * 0.0083) + (milliseconds * 0.0000083);
	let date_deg = (date - 1) * 11.6129; //(seconds - 1) * 11.6129;
	
	sec.style.transform = `rotate(${sec_deg}deg)`;
    min.style.transform = `rotate(${min_deg}deg)`;
    hour.style.transform = `rotate(${hour_deg}deg)`;
    dateRing.style.transform = `rotate(${date_deg}deg)`;

    sec2.style.transform = `rotate(${sec_deg}deg)`;
    min2.style.transform = `rotate(${min_deg}deg)`;
    hour2.style.transform = `rotate(${hour_deg}deg)`;
    dateRing2.style.transform = `rotate(${date_deg}deg)`;
	
	//*
	if (seconds == 0 || seconds == 60) {
		sec_deg = 0;
	}
	if (minutes == 0 || minutes == 60) {
		min_deg = 0;
	}
	if (hours == 0 || hours == 12) {
		hour_deg = 0;
	}
	if (date == 1) {
		date_deg = 0;
	}
	//*/
	
	// デバッグ用
	/*
	document.getElementById('test').style.display = 'block';
	document.getElementById('test1').innerHTML = 'now: ' + now + '<br>date: ' + date + '<br>hours: ' + hours + '<br>minutes: ' + minutes + '<br>seconds: ' + seconds + '<br>milliseconds: ' + milliseconds;
	document.getElementById('test2').innerHTML = 'date_deg: ' + date_deg + '<br>hour_deg: ' + hour_deg + '<br>min_deg: ' + min_deg + '<br>sec_deg: ' + sec_deg;
	count++;
	document.getElementById('test3').textContent = count;
	if (sec_deg == 0) {
		count = 0;
	}
	*/
}

setInterval(moveWatch, 100);