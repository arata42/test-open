const eye2 = document.getElementById('eye2');

let before = 0;

function moveEye() {
	if (before == 0) {
		eye2.style.transform = 'translate(5%, -50%)';
		before = 1;
	} else {
		eye2.style.transform = 'translate(-5%, -50%)';
		before = 0;
	}

	setTimeout(function() {
		eye2.style.transform = 'translate(0, -50%)';
	}, 1000);
}

setInterval(moveEye, 6000);