function all_hidden() {
			document.getElementById('website').setAttribute("hidden","hidden")
			document.getElementById('location').setAttribute("hidden","hidden")
			document.getElementById('contact').setAttribute("hidden","hidden")
			document.getElementById('email').setAttribute("hidden","hidden")
			document.getElementById('text').setAttribute("hidden","hidden")

		}

		const check_btn = document.querySelectorAll(".btn-check");
		check_btn.forEach(check_btn => {
			check_btn.addEventListener('click', function(){
			console.log(this.id);

			switch(this.id) {
				case 'website-check':
					all_hidden();
					document.getElementById('website').removeAttribute("hidden");
					break;

				case 'location-check':
					all_hidden();
					document.getElementById('location').removeAttribute("hidden");
					break;

				case 'contact-check':
					all_hidden();
					document.getElementById('contact').removeAttribute("hidden");
					break;

				case 'email-check':
					all_hidden();
					document.getElementById('email').removeAttribute("hidden");
					break;

				case 'text-check':
					all_hidden();
					document.getElementById('text').removeAttribute("hidden");
					break;

			}

			});
		});
		
