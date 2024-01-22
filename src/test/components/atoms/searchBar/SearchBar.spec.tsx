import { fireEvent, render, screen } from "@testing-library/react";
import { EventContext } from "context/EventContext";
import SearchBar from "components/atoms/searchBar/SearchBar";

const emitEvent = jest.fn();
const mockNavigate = jest.fn();

const setup = () => {
  render(
    <EventContext.Provider value={{ events: { loading: false }, emitEvent }}>
      <SearchBar />
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

describe("[SearchBar]", () => {
  beforeEach(async () => {
    await setup();
  });

  it("Should render without errors", async () => {
    const input = await screen.findByPlaceholderText(
      "Nunca dejes de buscar..."
    );
    expect(input).toBeInTheDocument();
  });

  it("Should change input value without errors", async () => {
    const input = await screen.findByPlaceholderText(
      "Nunca dejes de buscar..."
    );
    fireEvent.change(input, { target: { value: "Celular" } });
    expect(input).toHaveValue("Celular");
  });

  it("Should search items without errors", async () => {
    const input = await screen.findByPlaceholderText(
      "Nunca dejes de buscar..."
    );
    fireEvent.change(input, { target: { value: "Celular" } });
    const buttonSearch = await screen.findByRole("button");
    fireEvent.click(buttonSearch);
    expect(mockNavigate).toHaveBeenCalledWith("/items?search=Celular");
  });

  it("Should go to home because input is empty without errors", async () => {
    const input = await screen.findByPlaceholderText(
      "Nunca dejes de buscar..."
    );
    fireEvent.change(input, { target: { value: "" } });
    const buttonSearch = await screen.findByRole("button");
    fireEvent.click(buttonSearch);
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
