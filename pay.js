(function() {
            emailjs.init("W-CFnIklDisZeCA1X"); 
        })();
        const urlParams = new URLSearchParams(window.location.search);
        const plan = urlParams.get('plan');
        if (plan) {
            switch(plan) {
                case 'standard':
                    document.getElementById('plan-name').textContent = 'Standard Plan';
                    document.getElementById('plan-description').textContent = '2-3 business days delivery with basic tracking';
                    document.getElementById('plan-price').textContent = '₹399';
                    break;
                case 'express':
                    document.getElementById('plan-name').textContent = 'Express Plan';
                    document.getElementById('plan-description').textContent = '24-hour delivery with advanced tracking';
                    document.getElementById('plan-price').textContent = '₹599';
                    break;
                case 'premium':
                    document.getElementById('plan-name').textContent = 'Premium Plan';
                    document.getElementById('plan-description').textContent = 'Same-day delivery with premium tracking';
                    document.getElementById('plan-price').textContent = '₹899';
                    break;
            }
        }
        document.getElementById('pay-now').addEventListener('click', function() {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const planName = document.getElementById('plan-name').textContent;
            const planPrice = document.getElementById('plan-price').textContent;

                                                            
