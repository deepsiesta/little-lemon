import { render, screen, fireEvent } from "@testing-library/react";
import Book from './components/Book.js';
import Main from './components/Main.js';
import { BrowserRouter } from "react-router-dom";
import { initializeTimes } from "./utils/times.js"
import userEvent from '@testing-library/user-event';

test('Renders the heading', () => {
  render(
    <BrowserRouter>
      <Book availableTimes={[]} />
    </BrowserRouter>
  );
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
})

test('InitializeTimes returns proper times', () => {
  render(
    <BrowserRouter>
      <Book availableTimes={initializeTimes()} />
    </BrowserRouter>
  );

  const timeSelect = screen.getByLabelText('Choose time');
  const timeOptions = Array.from(timeSelect.querySelectorAll('option')).map(option => option.textContent);
  expect(timeOptions).toEqual(initializeTimes());
})


test('available times change on date selection', () => {
  const newAvailableTimes = initializeTimes();

  render(<Main />);

  const reserveTableLink = screen.getByText('Reserve a table');
  userEvent.click(reserveTableLink);

  const dateInput = screen.getByLabelText('Choose date');
  fireEvent.change(dateInput, { target: { value: '2024-09-10' } });

  const timeSelect = screen.getByLabelText('Choose time');
  const timeOptions = Array.from(timeSelect.querySelectorAll('option')).map(option => option.textContent);
  expect(timeOptions).toEqual(newAvailableTimes);
});

