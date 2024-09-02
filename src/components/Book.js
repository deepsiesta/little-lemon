import React, { useState } from "react";

import "./Book.css"
import { useNavigate } from "react-router-dom";

const Book = () => {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [location, setLocation] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(date, time, guests, location);
        navigate("/")
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={e => setDate(e.target.value)} required />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " value={time} onChange={e => setTime(e.target.value)}>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e => setGuests(e.target.value)} />
            <label htmlFor="location">Location</label>
            <select id="location" value={location} onChange={e => setLocation(e.target.value)}>
                <option>Indoors</option>
                <option>Outdoors</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    )
}

export default Book;
