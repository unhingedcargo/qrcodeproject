function all_hidden() {
	document.getElementById('website').setAttribute("hidden",true);
	document.getElementById('location').setAttribute("hidden",true);
	document.getElementById('contact').setAttribute("hidden",true);
	// document.getElementById('email').setAttribute("hidden",true)
	document.getElementById('mail').setAttribute("hidden",true);

}


const check_btn = document.querySelectorAll(".btn-check");
check_btn.forEach(check_btn => {
	check_btn.addEventListener('click', function(e){
	
	console.log(this.id, typeof(this.id));

	switch(this.id) {
		case 'website-check':
			all_hidden();
			document.getElementById('website').removeAttribute("hidden");
			    document.getElementById("website-url").value = "";
    			document.getElementById("website-qr").innerHTML = "";
			break;

		case 'location-check':
			all_hidden();
			document.getElementById('location').removeAttribute("hidden");
			document.getElementById("location-url").value = "";
			document.getElementById("location-qr").innerHTML = "";

			break;

		case 'contact-check':
			all_hidden();
			document.getElementById('contact').removeAttribute("hidden");
			document.getElementById("contact-qr").innerHTML = "";
			const loadInput = document.querySelectorAll(".contact-input");
			loadInput.forEach(input => {
				input.value = "";
			});
			break;

		case 'mail-check':
			all_hidden();
			document.getElementById('mail').removeAttribute("hidden");
			
			break;
	}

	});
});
		
