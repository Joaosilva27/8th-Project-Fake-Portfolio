// function for mobile dropdown menu

function mobileNavDrop() {
	document.getElementById('mobileNavDrop').classList.toggle('show');
}

window.onclick = function(event) {
	if (!event.target.matches('.mobile-nav-icon')) {
		var dropdowns = document.getElementsByClassName('mobile-nav-drop');
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
};