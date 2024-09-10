import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event';

import Book from './components/Book.js';
import App from './App.js';
import { initializeTimes } from "./utils/times.js"


describe("Banner", () => {
    it("Renders the banner button", async () => {
        render(
            <BrowserRouter>
                <Book availableTimes={[]} />
            </BrowserRouter>
        );
        const headingElement = screen.getByText("Book Now");
        expect(headingElement).toBeInTheDocument();
    })
})

describe("Booking times API", () => {
    const initialTimes = initializeTimes();
    it("Returns proper times when InitializeTimes is called", async () => {
        render(
            <BrowserRouter>
                <Book availableTimes={initialTimes} />
            </BrowserRouter>
        );

        const timeSelect = screen.getByLabelText('Choose time');
        const timeOptions = Array.from(timeSelect.querySelectorAll('option')).map(option => option.textContent);
        expect(timeOptions).toEqual(["Choose a time", ...initializeTimes()]);
    })
    it("Returns different available times after date change", async () => {

        render(<App />);

        const reserveTableLink = screen.getByText('Reserve a table');
        userEvent.click(reserveTableLink);

        const dateInput = screen.getByLabelText('Choose date');
        let otherDate = new Date();
        otherDate.setDate(otherDate.getDate() + 2);
        act(() => fireEvent.change(dateInput, { target: { value: otherDate } }));
        const timeSelect = screen.getByLabelText('Choose time');
        const timeOptions = Array.from(timeSelect.querySelectorAll('option')).map(option => option.textContent);
        expect(timeOptions).not.toEqual(initialTimes);
    });
});

