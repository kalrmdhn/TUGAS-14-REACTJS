import React, { useState, useEffect } from 'react';


function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

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
    
    if (loading) {
        return <p>Loading...</p>;
    }

    return
    (
        <div>
            <h1>Daftar Pengguna</h1>
            <ul>
                {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))} 
            </ul>
        </div>
    );
}

export default UserList;