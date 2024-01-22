import { render, screen } from "@testing-library/react";
import { EventContext } from "context/EventContext";
import Detail from "pages/detail/Detail";

const emitEvent = jest.fn();
const mockParams = jest.fn();
const mockAxios = jest.fn(() => {
  return { get: () => jest.fn() };
});

const setup = () => {
  render(
    <EventContext.Provider value={{ events: { loading: false }, emitEvent }}>
      <Detail />
    </EventContext.Provider>
  );
};

jest.mock("axios", () => ({
  axios: () => mockAxios,
}));

jest.mock("react-router-dom", () => ({
  useParams: () => mockParams,
}));

describe("[Detail]", () => {
  beforeEach(async () => {
    await setup();
  });

  it("Should render without errors", async () => {
    const input = await screen.findByTestId("container-details");
    expect(input).toBeInTheDocument();
  });
});
