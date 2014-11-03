jQuery(document).ready(function($) {
	$.ajax({
		type: 'GET',
		url: '/rest/hello'

	}).done(function (data, textStatus, jqXHR) {
		$('#helloweenMessage').html(data.message);

	}).fail(function (jqXHR, textStatus, errorThrown) {
		if (jqXHR.status === 401) { // HTTP Status 401: Unauthorized
			var preLoginInfo = JSON.stringify({method: 'GET', url: '/', csrf: jqXHR.getResponseHeader('X-CSRF-TOKEN')});
			$.cookie('restsecurity.pre.login.request', preLoginInfo);
			window.location = '/login.html';

		} else {
			alert('Houston, we have a problem...');
		}
	});
});
