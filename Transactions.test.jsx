import { render, screen } from "@testing-library/react";
import Transactions from "./Transactions";

test("renders transaction title", () => {

  render(
    <Transactions
      transactions={[
        {
          id: 1,
          title: "Salary",
          amount: 85000,
          category: "Income"
        }
      ]}
    />
  );

  expect(
    screen.getByText(/Salary/i)
  ).toBeInTheDocument();

});