import React, { useState } from 'react';

function AddUser() {
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => { 
        event.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name, 
                email: email
            })
        })
            .then(response => response.json()) 
            .then(data => {
                console.log('User added:', data); 
                // Reset form
                setName(); 
                setEmail('');
            })
            .catch(error => {
                console.error('Error adding user:', error);
            });
        };
return (
        <div>
            <h1>Tambahkan Pengguna</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nama"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /> 
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Tambahkan</button> 
            </form>
        </div>
        );
    }
export default AddUser;