import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from './Friends';
import FriendForm from './FriendForm';


const FriendsList = () => {
    const [friends, setFriends] = useState([]);


    const getFriends = () => {
        axiosWithAuth()
            .get("friends")
            .then(res => {
                console.log('res', res);
                setFriends(res.data);
            })
            .catch(err => {
                console.log('err', err);
            })
    }

    useEffect(() => {
        getFriends();
    }, []);





    return (
        <>
            <FriendForm getFriends={getFriends} />
            <p>Friends List</p>
            {friends.map(friend => {
                return (
                    <Friend
                        key={friend.id}
                        name={friend.name}
                        age={friend.age}
                        email={friend.email}
                    />
                )
            })}
        </>
    )
}

export default FriendsList;