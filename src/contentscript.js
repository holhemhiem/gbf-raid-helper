document.addEventListener('click', function() {
	var raid = document.getElementById('raidId'); //To replace
	if(raid && raid.value === '') {
		raid.focus();
		document.execCommand('paste');
	}
});	