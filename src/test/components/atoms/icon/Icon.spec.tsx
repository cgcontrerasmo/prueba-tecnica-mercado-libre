import { render, screen } from "@testing-library/react";
import Icon from "components/atoms/icon/Icon";

const setup = () => {
  render(<Icon name="Search" />);
};

describe("[Icon]", () => {
  beforeEach(async () => {
    await setup();
  });

  it("Should render without errors", async () => {
    const data = await screen.findByTestId("icon");
    expect(data).toBeInTheDocument();
  });
});
