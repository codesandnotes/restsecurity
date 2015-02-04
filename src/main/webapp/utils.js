
// Extract some information from the cookies
function showMeYourCookies(title) {
	var jsessionid = $.cookie('JSESSIONID');
	if (jsessionid) {
		console.log('>>>>> ' + title + ' JSESSIONID cookie = ' + jsessionid);
	} else {
		console.warn('>>>>> ' + title + ' no JSESSIONID cookie was found');
	}

	var restsecurity = $.cookie('helloween');
	if (restsecurity) {
		restsecurity = JSON.parse(restsecurity);
		console.log('>>>>> ' + title + ' CSRF token in cookie = ' + restsecurity.csrf);
	} else {
		console.warn('>>>>> ' + title + ' no restsecurity cookie was found');
	}
}

// Extract some info from the returned jqXHR
function showMeYourJqXHR(title, jqXHR) {
	if (jqXHR) {
		console.log('>>>>> ' + title + ' jqXHR X-CSRF-TOKEN = ' + jqXHR.getResponseHeader('X-CSRF-TOKEN'));
	} else {
		console.error('>>>>> ' + title + ' no jqXHR is defined... That\'s not normal at all...');
	}
}