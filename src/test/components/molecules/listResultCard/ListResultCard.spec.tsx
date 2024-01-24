import { render, screen } from "@testing-library/react";
import ListResultCard from "components/molecules/listResultCard/ListResultCard";
import { listResultCardProps } from "types/listResultCard";
import { mocksListResultCard } from "./mocksListResultCards";
import { EventContext } from "context/EventContext";

const emitEvent = jest.fn();
let mockNavigate = jest.fn();

const setup = (mocksListResultCard: listResultCardProps["items"]) => {
  render(
    <EventContext.Provider value={{ events: { loading: true }, emitEvent }}>
      <ListResultCard items={mocksListResultCard} />
    </EventContext.Provider>
  );
};

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

describe("[ListResultCard]", () => {
  beforeEach(async () => {
    await setup(mocksListResultCard);
  });

  it("Should render without errors", async () => {
    const data = await screen.findByText(mocksListResultCard[0].title);
    expect(data).toBeInTheDocument();
  });
});
