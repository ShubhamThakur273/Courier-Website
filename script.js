(function(){
    emailjs.init("JvC6HMd-zwoNlFQF2"); //Public key
  })();
document.addEventListener('DOMContentLoaded', function() {
        const showBookingFormBtn = document.getElementById("show-booking-form");
        const bookingFormContainer = document.getElementById("booking-form-container");
        const bookingIntroText = document.querySelector(".booking-intro p");

        if (showBookingFormBtn && bookingFormContainer && bookingIntroText) {
            showBookingFormBtn.addEventListener("click", function() {
                bookingFormContainer.style.display = "block";
                this.style.display = "none";
                bookingIntroText.style.display = "none";
                // Smooth scroll to the form
                bookingFormContainer.scrollIntoView({ behavior: 'smooth' });
            });
        }
        // FAQ functionality
        const faqItems = document.querySelectorAll('.faq-item');
        if (faqItems) {
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                question.addEventListener('click', () => {
                    // Close all open answers
                    faqItems.forEach(i => {
                        if (i !== item) i.classList.remove('active');
                    });
                    // Toggle this one
                    item.classList.toggle('active');
                });
            });
        }

        // Contact form submission
        const contactForm = document.getElementById("contact-form");
        if (contactForm) {
            contactForm.addEventListener("submit", function(e) {
                e.preventDefault();
                emailjs.sendForm('service_8i4g6fs', 'template_2jx529o', this)
                    .then(function(response) {
                        alert("Message sent successfully! ✅");
                        contactForm.reset();
                    }, function(error) {
                        alert("Failed to send message ❌\n" + error.text);
                    });
            });
        }
        // Booking form submission
        const bookingForm = document.getElementById("booking-form");
        if (bookingForm) {
            bookingForm.addEventListener("submit", function(e) {
                e.preventDefault();
                emailjs.sendForm("service_8i4g6fs", "template_bqteb1j", this)
                    .then(() => {
                        alert("Booking request sent!");
                        bookingForm.reset();
                    })
                    .catch(error => {
                        alert("Failed to send booking. " + error);
                    });
            });
        }
    });
