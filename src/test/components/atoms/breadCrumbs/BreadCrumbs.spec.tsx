import { render, screen } from "@testing-library/react";
import BreadCrumbs from "components/atoms/breadCrumbs/BreadCrumbs";
import { PropsBreadCrumbs } from "types/breadCrumbs";
import { mocksBreadCrumbs } from "./mocksBreadCrumbs";

const setup = (mocksBreadCrumbs: PropsBreadCrumbs["filters"]) => {
  render(<BreadCrumbs filters={mocksBreadCrumbs} />);
};

describe("[BreadCrumbs]", () => {
  beforeEach(async () => {
    await setup(mocksBreadCrumbs);
  });

  it("Should render without errors", async () => {
    const data = await screen.findByText("ejemplo 1");
    expect(data).toBeInTheDocument();
  });
});
