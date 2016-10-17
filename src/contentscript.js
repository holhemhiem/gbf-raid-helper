document.addEventListener('click', function() {
	var raid = document.querySelector('.frm-battle-key');
	if(raid && raid.value === '') {
		raid.focus();
		document.execCommand('paste');
	}
});	