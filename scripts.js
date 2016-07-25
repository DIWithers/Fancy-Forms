$(document).ready(function() {
	//Add a listener for the form submission(when we want the validation to happen)
	$(".sign-up-form").submit(function() {
		event.preventDefault();
		// console.log("Submitted!");
		// 1. Password must be 6 characters
		var password = $(".password").val();
		var password2 = $(".password2").val();
			if (password.length < 6) {
				$(".password").focus();
				$(".pass-error").html("Your password must be atleast six characters");
			}
			
			

		// 2. Fields must be non-empty
		// var allFields = $(".input").val();
		// console.log(allFields)
		// var fieldsToCheck = $(".field");
		// console.log(fieldsToCheck);
		
		// if (fieldsToCheck.length === 0) {
		// 	$(".field").focus();
		// 	$(".field-error").html("You cannot leave a field empty");
		// }

		// Alternate :
		$('input').each(function(){
            if($(this).val() === ''){

                console.log("You can't leave a field empty!!!!")
                var currentElemClass = ($(this).attr('class'));
                var errorClass = '.'+currentElemClass + '-error';
                $(errorClass).html("Field must not be empty")
            }
        })

		// 3. Agree to terms checkbox must be checked
		if ($(".privacy").prop("checked") === false) {
			$(".privacy").focus();
			$(".check-error").html("You must check the Terms And Conditions Box to Submit");
		}


		// 4. Valid email address

		var email = $(".email").val();
		if (email.length < 5) {
			$(".email").focus();
			$(".email-error").html("Please enter a valid email address!");
		
		if (email.indexOf(" ") !== -1) {
			$(".email-error").html("Please enter a valid email address!");
		}
		if (email.indexOf("@") < 1 || email.indexOf("@") > (email.length - 5)) {
			$(".email-error").html("Please enter a valid email address!");
		}
		
		if (email.indexOf(".") < 2 || email.indexOf(".") > (email.length - 3 )) {
			$(".email-error").html("Please enter a valid email address!");
		}
			// email.removeClass("field-error");
		}


		// 5. Make sure number is a number, or follows a format
		var numField = $(".years");
		console.log(numField);
		var isNumber = $.isNumeric(numField);
		console.log(isNumber);
		if (isNumber === false) {
			$(".years-error").html("Please enter a number!");
		}
		// var phoneField = $(".phone");
		// var isPhoneNumber = $.isNumeric(phoneField);
		// if (isPhoneNumber === false) {
		// 	$(".phone-error").html("Please enter a valid phone number");
		// }


		// 6. Passwords must be the same
		if (password !== password2) {
				$(".pass2-error").html("Your passwords do not match");
				}
	})




});