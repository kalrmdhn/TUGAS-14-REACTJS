import React, { useState, useEffect } from 'react';

function UserApp() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users') 
        .then(response => response.json()) 
        .then(data => {
            setUsers(data);
            setLoading(false);
    })
    .catch(error => {
        console.error('Error fetching data:', error); 
        setLoading(false);
    });
}, []);
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
        setUsers([...users, data]);
        setName('');
        setEmail('');
    })
    .catch(error => {
        console.error('Error adding user:', error);
    });
};
    
    if (loading) {
    return <p>Loading...</p>;
    }
    return ( 
    <div>
        <h1>Daftar Pengguna</h1> 
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li> ))}
        </ul>
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

export default UserApp;