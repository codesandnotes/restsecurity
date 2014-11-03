jQuery(document).ready(function ($) {
	$('#loginform').submit(function (event) {
		event.preventDefault();
		var preLoginInfo = JSON.parse($.cookie('restsecurity.pre.login.request'));
		var data = 'username=' + $('#username').val() + '&password=' + $('#password').val();
		$.ajax({
			data: data,
			headers: {'X-CSRF-TOKEN': preLoginInfo.csrf},
			timeout: 1000,
			type: 'POST',
			url: '/login'

		}).done(function(data, textStatus, jqXHR) {
			window.location = preLoginInfo.url;

		}).fail(function(jqXHR, textStatus, errorThrown) {
			alert('Booh! Wrong credentials, try again!');
		});
	});
});
