import React, { useState } from "react";

import "./Book.css"
import { useNavigate } from "react-router-dom";

const Book = (props) => {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
        navigate("/success")
    }

    const availableTimes = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",

    ]
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={e => setDate(e.target.value)} required />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " value={time} placeholder={availableTimes[0]} onChange={e => setTime(e.target.value)} required>
                {availableTimes.map(t => (<option>{t}</option>))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e => setGuests(e.target.value)} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} placeholder="Birthday" onChange={e => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    )
}

export default Book;
