import React, { useState } from 'react';

function Sauce(props) {
    //everything about one sauce
    
    //create a state to track the likes
    const [likes, setLikes]=useState(props.sauce.likes)

    //create event handler to update likes
    const clickLikes = () => {
        const newLikes = likes +1
        setLikes(newLikes)
        // putLikes(newLikes)
    }

    //put likes to db
    // async function putLikes(newLikes) {
    //     await fetch(`http://localhost:3000/sauces/${props.sauce.id}`, {
    //         method: 'PUT',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         likes: newLikes
    //     })
    // })}

    //render the sauce details
    return (
        <div className='Sauce'>
        <h2 id="item-name">{props.sauce.name}</h2>
        <img className="item-img" src={props.sauce.image} alt={props.sauce.name} />
        <h3>Likes: <span id="like-counter">{likes}</span></h3>
        <button id="like-btn" onClick={clickLikes}>Like</button>
        <button id="delete-btn">Delete</button>
        <a href={'/edit-sauce/'+props.sauce.id} className="edit-sauce-btn">Edit this sauce</a>
        </div>
    );
}

export default Sauce;