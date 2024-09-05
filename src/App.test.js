import { render, screen } from "@testing-library/react";
import Book from './components/Book.js';
import { BrowserRouter } from "react-router-dom";

test('Renders the heading', () => {
  render(
    <BrowserRouter>
      <Book availableTimes={[]} />
    </BrowserRouter>
  );
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
})
