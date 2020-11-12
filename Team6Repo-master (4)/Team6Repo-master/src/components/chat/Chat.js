/*
import React, { useState, useEffect } from 'react'; 
import queryString from 'query-string'; // retrieves data from URL
import io from 'socket.io-client';


let socket;

const Chat = ({location}) => { 
    const [name, setName] = useState(''); 
    const [room, setRoom] = useState(''); 
    const ENDPOINT = 'localhost::3000'

    useEffect(() =>{
        const {name, room} = queryString.parse(location.search);
        
        socket = io(ENDPOINT); 
        setName(name); 
        setRoom(room);

        socket.emit(); 
    },[ENDPOINT, location.search]);




}

export default Chat; 
*/