import { render, screen } from "@testing-library/react";
import Dashboard from "./Dashboard";

test("shows Recent Transactions heading", () => {

  render(
    <Dashboard
      transactions={[]}
      addTransaction={() => {}}
      deleteTransaction={() => {}}
    />
  );

  expect(
    screen.getByText(/Recent Transactions/i)
  ).toBeInTheDocument();

});