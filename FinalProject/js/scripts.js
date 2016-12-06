$(document).ready(function(){

	$('#hongclicker').click(function(){
		$('#jinbio').hide();
		$('#alfonsobio').hide();
		$('#hongbio').show();
	});

	$('#jinclicker').click(function(){
		$('#alfonsobio').hide();
		$('#hongbio').hide();
		$('#jinbio').show();
	});

	$('#alfonsoclicker').click(function(){
		$('#hongbio').hide();
		$('#jinbio').hide();
		$('#alfonsobio').show();
	});


	$('#childclicker').click(function(){
		$('#childbody').show();
		$('#familybody').hide();
		$('#teenbody').hide();
		$('#adultbody').hide();
	});

	$('#familyclicker').click(function(){
		$('#familybody').show();
		$('#childbody').hide();
		$('#teenbody').hide();
		$('#adultbody').hide();
	});

	$('#teenclicker').click(function(){
		$('#teenbody').show();
		$('#familybody').hide();
		$('#childbody').hide();
		$('#adultbody').hide();
	});

	$('#adultclicker').click(function(){
		$('#adultbody').show();
		$('#familybody').hide();
		$('#teenbody').hide();
		$('#childbody').hide();
	});


	$('#apparentlylink').on('mouseover', function(){
		$('#apparentlyplay').attr('src', '../images/play.jpeg');
	});

	$('#apparentlylink').on('mouseout', function(){
		$('#apparentlyplay').attr('src', '../images/noplay.png');
	});

	$('#beatlink').on('mouseover', function(){
		$('#beatplay').attr('src', '../images/play.jpeg');
	});

	$('#beatlink').on('mouseout', function(){
		$('#beatplay').attr('src', '../images/noplay.png');
	});

	$('#haveaccountbtn').click(function(){
		$('#signinform').show();
		$('#create-account').hide();
	});

	$('#createaccountbtn').click(function(){
		$('#signinform').hide();
		$('#create-account').show();
	});

	$('#signinform').submit(function(e){
		e.preventDefault();
		user = new User($('#signinname').val(), $('#signinemail').val());
		signin(user);
		$('#inforow').show();
	});

	$('#create-account').submit(function(e){
		e.preventDefault();
		$('#reeneter-password-group').removeClass('has-error');
		$('#create-password-group').removeClass('has-error');
		if ($('#create-password').val().length > 10 || $('#create-password').val().length < 4){
			$('#create-password-group').addClass('has-error');
		} else if ($('#create-password').val() !== $('#reenter-password').val()) {
			$('#reeneter-password-group').addClass('has-error');
		} else {
			$('#reeneter-password-group').removeClass('has-error');
			$('#create-password-group').removeClass('has-error');
			user = new User($('#create-firstname').val(), $('#create-email').val());
			signin(user);
			welcome(user);		
		}

	});

});

var User = function(firstName, emailAddress) {
	this.firstName = firstName;
	this.emailAddress = emailAddress;
};

var signin = function(user){
	$('#mypageheader').html('<h1>Welcome, '+user.firstName+'!</h1>');
	$('#signinform').hide();
	$('#buttonrow').hide();
}

var welcome = function(user){
	$('#mypageheader').html('<h1>Thanks for creating an account, '+user.firstName+'!</h1>');
	$('#mypageheader').append('<h3>You can learn more about our offerings on our <a href="programs.html">Programs</a> page</h3>');
}
