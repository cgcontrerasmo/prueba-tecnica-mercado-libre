import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "components/molecules/navbar/Navbar";
import { EventContext } from "context/EventContext";

const emitEvent = jest.fn();
const mockNavigate = jest.fn();

const setup = () => {
  render(
    <EventContext.Provider value={{ events: { loading: true }, emitEvent }}>
      <Navbar />
    </EventContext.Provider>
  );
};

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
  useLocation: () => {
    return {
      search: "?search=Celular",
    };
  },
}));

describe("[Navbar]", () => {
  beforeEach(async () => {
    await setup();
  });

  it("Should render without errors", async () => {
    const input = await screen.findByPlaceholderText(
      "Nunca dejes de buscar..."
    );
    expect(input).toBeInTheDocument();
  });

  it("Should go to home without errors", async () => {
    const image = await screen.findByRole("link");
    fireEvent.click(image);
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
