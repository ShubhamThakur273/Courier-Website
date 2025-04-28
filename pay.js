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
// Validate form
if (!name || !email || !phone) {
    alert('Please fill in all billing information');
    return;
}

// Validate email format
if (!validateEmail(email)) {
    alert('Please enter a valid email address');
    return;
}

// Show loading state
const payBtn = document.getElementById('pay-now');
payBtn.disabled = true;
payBtn.textContent = 'Processing...';

// Send email
emailjs.send('service_gqs4mve', 'template_kmr778w', {
    to_name: name,
    to_email: email,
    plan_name: planName,
    plan_price: planPrice,
    payment_date: new Date().toLocaleDateString(),
    customer_phone: phone
})
.then(function(response) {
    console.log('Email sent successfully', response);
    showSuccess();
}, function(error) {
    console.error('Failed to send email:', error);
    // Fallback - show success even if email fails
    showSuccess();
    alert('Payment was successful but we encountered an issue sending the confirmation email.');
})
.finally(() => {
    payBtn.disabled = false;
    payBtn.textContent = 'Pay Now';
});

// Helper functions
function showSuccess() {
    document.querySelector('.payment-container').style.display = 'none';
    document.getElementById('success-message').style.display = 'block';
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
 document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('discard-modal').style.display = 'flex';
});

// Discard modal buttons
document.getElementById('confirm-discard').addEventListener('click', function() {
    window.location.href = 'index.html';
});

document.getElementById('cancel-discard').addEventListener('click', function() {
    document.getElementById('discard-modal').style.display = 'none';
});                                                           
