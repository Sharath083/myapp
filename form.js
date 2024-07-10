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
        const response = await fetch('http://localhost:8080/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(userData),
            credentials: 'include'
        });

        if (response.ok) {
            document.getElementById("response").innerHTML = 'Registered successfully!';
            alert('User registered successfully!');
        } else {
            const errorData = await response.json();
            console.error('Error data:', errorData);
            alert('Failed to register user: ' + errorData.message);
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById("response").innerHTML = 'An error occurred while registering the user.';
        alert('An error occurred while registering the user. ' + error.message);
    }
}
