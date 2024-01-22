import { act, fireEvent, render, screen } from "@testing-library/react";
import ResultCard from "components/atoms/resultCard/ResultCard";
import { ResultCars } from "types/resultCard";
import { mocksResultCard } from "./mocksResultCard";
import { EventContext } from "context/EventContext";

const emitEvent = jest.fn();
let mockNavigate = jest.fn();

const setup = (mocksResultCard: ResultCars["info"]) => {
  render(
    <EventContext.Provider value={{ events: { loading: true }, emitEvent }}>
      <ResultCard info={mocksResultCard} />
    </EventContext.Provider>
  );
};

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

describe("[ResultCard]", () => {
  beforeEach(async () => {
    await setup(mocksResultCard);
  });

  it("Should render without errors", async () => {
    const data = await screen.findByText(mocksResultCard.description);
    expect(data).toBeInTheDocument();
  });

  it("Should go to item info without error", async () => {
    const linkGoPage = await screen.findAllByRole("link");
    fireEvent.click(linkGoPage[0]);
    expect(mockNavigate).toHaveBeenCalled();
  });
});
