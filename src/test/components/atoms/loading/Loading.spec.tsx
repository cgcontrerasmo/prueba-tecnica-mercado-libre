import { render, screen } from "@testing-library/react";
import Loading from "components/atoms/loading/Loading";
import { ACTIONS, EventContext } from "context/EventContext";

const emitEvent = jest.fn();

const setup = () => {
  render(
    <EventContext.Provider value={{ events: { loading: true }, emitEvent }}>
      <Loading />
    </EventContext.Provider>
  );
};

describe("[Loading]", () => {
  beforeEach(async () => {
    await setup();
  });

  it("Should render without errors", async () => {
    emitEvent(ACTIONS.LOADING_EVENT, true);
    const data = await screen.findByText("Cargando...");
    expect(data).toBeInTheDocument();
  });
});
