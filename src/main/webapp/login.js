jQuery(document).ready(function ($) {
	$('#loginform').submit(function (event) {
		event.preventDefault();

		showMeYourCookies('At loginform submission');

		var cookie = JSON.parse($.cookie('helloween'));
		var data = 'username=' + $('#username').val() + '&password=' + $('#password').val();
		$.ajax({
			data: data,
			headers: {'X-CSRF-TOKEN': cookie.csrf},
			timeout: 1000,
			type: 'POST',
			url: '/login'

		}).done(function(data, textStatus, jqXHR) {
			showMeYourJqXHR('When loginform is done', jqXHR);
			showMeYourCookies('When loginform is done');

			window.location = cookie.url;

		}).fail(function(jqXHR, textStatus, errorThrown) {
			showMeYourJqXHR('When loginform fails', jqXHR);
			showMeYourCookies('When loginform fails');

			console.error('Booh! Wrong credentials, try again!');
		});
	});
});
