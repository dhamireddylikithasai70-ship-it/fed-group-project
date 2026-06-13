import { render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";

test("renders Finance Tracker title", () => {

  render(
    <Sidebar setPage={() => {}} />
  );

  expect(
    screen.getByText(/Finance Tracker/i)
  ).toBeInTheDocument();

});