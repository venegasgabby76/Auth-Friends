import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';



const FriendForm = props => {

    const [addFriend, setAddFriend] = useState({
        id: "",
        name: "",
        age: "",
        email: "",
    })

    const handleChange = e => {
        e.persist();
        setAddFriend({
            ...addFriend,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("friends", addFriend)
            .then(res => {
                console.log('addFriend res', res);
                
            })
            .catch(err => {
                console.log(err);
            });
        setAddFriend({
            id: "",
            name: "",
            age: "",
            email: "",
        })
        console.log("form is submitting", addFriend)
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input
                type="text"
                name="name"
                id="name"
                value={addFriend.name}
                onChange={handleChange}
            />
            <br />

            <label>Age: </label>
            <input
                type="text"
                name="age"
                id="age"
                value={addFriend.age}
                onChange={handleChange}
            />
            <br />

            <label>Email: </label>
            <input
                type="text"
                name="email"
                id="email"
                value={addFriend.email}
                onChange={handleChange}
            />
            <br />
            <button>Add New Friend</button>
        </form>
    )
}

export default FriendForm;