async function submitForm() {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const mobile = document.getElementById('mobile').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    const userData = {
        name,
        password,
        email,
        age,
        mobileNumber: mobile,
        gender
    };

    try {
        const response = await fetch('https://orders-render.onrender.com/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(userData),
            credentials: 'include'
        });

        if (response.ok) {
            document.getElementById("response").innerHTML = 'Registered successfully!, welcome '+name;
            alert('registered successfully!, welcome '+name);
        } else {
            const errorData = await response.json();
            console.error('Error data:', errorData);
            document.getElementById("response").innerHTML = 'Unable to register.Try again';

            // alert('Failed to register user: ' + errorData.message);
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById("response").innerHTML = 'An error occurred while registering the user.';
        // alert('An error occurred while registering the user. ' + error.message);
    }
}

// Simulate sending OTP
async function sendOTP() {
    const email = document.getElementById('email').value;
    if (email) {
        let url='https://orders-render.onrender.com/mail/otp?mail='
        // Send OTP to the email (simulation)
        const response = await fetch(url+email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: 'include'
        });
        if(response.infoId==1){
            alert('OTP sent successfully to');
            document.getElementById('otpContainer').style.display = 'flex';
        }else{
            alert('Failed to send OTP to');
        }

    } else {
        alert('Please enter an email address');
    }
}

// Simulate verifying OTP
async function verifyOTP() {
    const otp = document.getElementById('otp').value;
    if (otp.length === 6) {
        // Verify OTP (simulation)
        const email = document.getElementById('email').value;
        let url='https://orders-render.onrender.com/mail/otp?mail='+email+'&otp='+otp;
        // Send OTP to the email (simulation)
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: 'include'
        });
        if(response.infoId==1){
            alert('Verified Mail');
            document.getElementById('submit').disabled = false;
        }else{
            alert('Invalid Otp');
        }
    } else {
        alert('Please enter a valid 6-digit OTP');
    }
}


