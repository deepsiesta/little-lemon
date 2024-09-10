import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { initializeTimes } from '../utils/times.js';

import Book from "./Book.js"

describe("Booking form", () => {
    const mockDispatch = jest.fn();
    const mockSubmit = jest.fn();
    const mockTimes = initializeTimes();

    it("Blocks dates in the past", async () => {
        render(
            <Book
                availableTimes={mockTimes}
                dispatch={mockDispatch}
                submitForm={mockSubmit}
            />
        );
        const dateInput = screen.getByLabelText('Choose date');
        let pastDate = "1453-05-29";
        fireEvent.change(dateInput, { target: { value: pastDate } });
        const submitButton = screen.getByText(/Make Your Reservation/);
        fireEvent.click(submitButton);
        const dateMessage = await screen.findByText(/Date must be today or a future date/);
        expect(dateMessage).toBeInTheDocument();
    });

    it("Sends a form with the default values correctly", async () => {
        render(
            <Book
                availableTimes={mockTimes}
                dispatch={mockDispatch}
                submitForm={mockSubmit}
            />
        );
        const dateInput = screen.getByLabelText('Choose date');
        const timeInput = screen.getByLabelText(/Choose time/);
        const guestsInput = screen.getByLabelText(/guests/);
        const occasionInput = screen.getByLabelText(/Occasion/);

        const testDate = new Date();
        testDate.setDate(testDate.getDate() + 2);
        const dateString = testDate.toISOString().split('T')[0];
        fireEvent.change(dateInput, { target: { value: dateString } });
        fireEvent.change(timeInput, { target: { value: mockTimes[1] } });
        fireEvent.change(guestsInput, { target: { value: 3 } });
        fireEvent.change(occasionInput, { target: { value: "Birthday" } });
        const submitButton = screen.getByText(/Make Your Reservation/);
        fireEvent.click(submitButton);
        await waitFor(() => {
            expect(mockSubmit).toHaveBeenCalledWith(
                {
                    "date": dateString,
                    "time": mockTimes[1],
                    "guests": 3,
                    "occasion": "Birthday",
                },
                expect.anything() // we don't care about the second argument
            )
        });

    });
});
