import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Article from "../components/Article";

test("displays the text 'please pass this test'", () => {
  render(<Article />);
  // screen.debug(); // Uncomment this line to see the rendered output in the console
  
  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});
