import { render, screen } from "@testing-library/react";
import { ItemDetailProps } from "types/detail";
import { mockItemDetail, mockItemDetailUsed } from "./mocksItemDetail";
import ItemDetail from "components/molecules/itemDetail/ItemDetail";

const setup = (mockItemDetail: ItemDetailProps["item"]) => {
  render(<ItemDetail item={mockItemDetail} />);
};

describe("[ItemDetail new]", () => {
  beforeEach(async () => {
    await setup(mockItemDetail);
  });

  it("Should render without errors", async () => {
    const data = await screen.findByText("Comprar");
    expect(data).toBeInTheDocument();
  });
});

describe("[ItemDetail used]", () => {
  beforeEach(async () => {
    await setup(mockItemDetailUsed);
  });

  it("Should render without errors", async () => {
    const data = await screen.findByText("Comprar");
    expect(data).toBeInTheDocument();
  });
});
