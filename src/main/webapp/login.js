jQuery(document).ready(function ($) {
	$('#loginform').submit(function (event) {
		event.preventDefault();
		var data = 'username=' + $('#username').val() + '&password=' + $('#password').val();
		$.ajax({
			data: data,
			timeout: 1000,
			type: 'POST',
			url: '/login'

		}).done(function(data, textStatus, jqXHR) {
			var preLoginInfo = JSON.parse($.cookie('restsecurity.pre.login.request'));
			window.location = preLoginInfo.url;

		}).fail(function(jqXHR, textStatus, errorThrown) {
			alert('Booh! Wrong credentials, try again!');
		});
	});
});
