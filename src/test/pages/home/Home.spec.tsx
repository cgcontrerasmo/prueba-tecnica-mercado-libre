import { render, screen } from "@testing-library/react";
import { EventContext } from "context/EventContext";
import Home from "pages/home/Home";

const mockGetItemsInFormat = jest
  .fn()
  .mockResolvedValue(() => Promise.resolve({ data: { filters: [] } }));

const emitEvent = jest.fn();
const mockNavigate = jest.fn();

jest.mock("utilities/servicesItems", () => ({
  getItemsInFormat: async () => await mockGetItemsInFormat,
}));

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
  useLocation: () => {
    return {
      search: "?search=Celular",
    };
  },
}));

//@ts-ignore
delete global.window.location;
global.window = Object.create(window);
global.window.location = {
  //@ts-ignore
  ancestorOrigins: null,
  //@ts-ignore
  hash: null,
  host: "dummy.com",
  port: "80",
  protocol: "http:",
  hostname: "dummy.com",
  href: "http://dummy.com?page=1&name=testing",
  origin: "http://dummy.com",
  //@ts-ignore
  pathname: null,
  search: "?search=Celular",
  //@ts-ignore
  assign: null,
  //@ts-ignore
  reload: null,
  //@ts-ignore
  replace: null,
};

const setup = () => {
  render(
    <EventContext.Provider value={{ events: { loading: true }, emitEvent }}>
      <Home />
    </EventContext.Provider>
  );
};

describe("[Home]", () => {
  beforeEach(async () => {
    await setup();
  });

  it("Should render without errors", async () => {
    const data = await screen.findByTestId("container-home");
    expect(data).toBeInTheDocument();
  });
});
