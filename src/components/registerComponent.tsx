import React from 'react';
import './registerComponentCss.css'; // Import the CSS file for styling

export default function RegisterComponent() {
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);

        fetch('http://localhost:8081/auth/register', {
            method: form.method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formJson),
        })
            .then(response => {
                if (response.ok) {
                    console.log("Registration successful");
                } else {
                    return response.text().then(text => {
                        throw new Error(text)
                    });
                }
            })
            .catch(error => {
                console.error("Registration failed:", error);
            });
    }

    return (
        <form method="post" onSubmit={handleSubmit} className="register-form">
            <div className="form-group">
                <label className="form-label">Email:</label>
                <input name="email" defaultValue="email" className="form-input"/>
            </div>
            <div className="form-group">
                <label className="form-label">First name:</label>
                <input name="firstname" defaultValue="first name" className="form-input"/>
            </div>
            <div className="form-group">
                <label className="form-label">Last name:</label>
                <input name="lastname" defaultValue="last name" className="form-input"/>
            </div>
            <div className="form-group">
                <label className="form-label">Password:</label>
                <input name="password" defaultValue="password" className="form-input"/>
            </div>
            <button type="submit" className="form-button">Submit form</button>
        </form>
    );
}
