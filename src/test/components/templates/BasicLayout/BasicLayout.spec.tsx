import { render, screen } from "@testing-library/react";
import BasicLayout from "components/templates/BasicLayout/BasicLayout";

const setup = () => {
  render(
    <BasicLayout>
      <p>Ejemplo</p>
    </BasicLayout>
  );
};

describe("[BasicLayout]", () => {
  beforeEach(async () => {
    await setup();
  });

  it("Should render without errors", async () => {
    const data = await screen.findByText("Ejemplo");
    expect(data).toBeInTheDocument();
  });
});
