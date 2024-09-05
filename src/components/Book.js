import React, { useState } from "react";

import "./Book.css"
import { useNavigate } from "react-router-dom";

const Book = ({ availableTimes, dispatch, ...props }) => {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
        navigate("/success");
    }

    const handleDateChange = (val) => {
        dispatch(val);
        setDate(val);

    }
    return (
        <>
            <h2>Book Now</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={e => handleDateChange(e.target.value)} required />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={time} onChange={e => setTime(e.target.value)} required>
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
        </>
    )
}

export default Book;
