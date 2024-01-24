import { render, screen } from "@testing-library/react";
import { EventContext } from "context/EventContext";
import Detail from "pages/detail/Detail";
import { bestCategoryDetails, filtersDetails } from "./mocksDetails";

const mockGetItemsInFormat = jest
  .fn()
  .mockResolvedValue(() => Promise.resolve({ data: { filters: [] } }));

const emitEvent = jest.fn();
const mockNavigate = jest.fn();

jest.mock("utilities/servicesItem", () => ({
  getInfoItemInFormat: async () => await mockGetItemsInFormat,
}));

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
  useLocation: () => {
    return {
      search: "?search=Celular",
    };
  },
  useParams: () => {
    return {
      id: "MLA1628173390",
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

const setup = (events: any) => {
  render(
    <EventContext.Provider value={{ events, emitEvent }}>
      <Detail />
    </EventContext.Provider>
  );
};

describe("[Detail bestCategory]", () => {
  beforeEach(async () => {
    await setup({ loading: false });
  });

  it("Should render without errors", async () => {
    const data = await screen.findByTestId("container-detail");
    expect(data).toBeInTheDocument();
  });
});

describe("[Detail filters]", () => {
  beforeEach(async () => {
    await setup(filtersDetails);
  });

  it("Should render without errors", async () => {
    const data = await screen.findByText("ejemplo 1");
    expect(data).toBeInTheDocument();
  });
});

describe("[Detail bestCategory and category id]", () => {
  beforeEach(async () => {
    await setup(bestCategoryDetails);
  });

  it("Should render without errors", async () => {
    const data = await screen.findByTestId("container-detail");
    expect(data).toBeInTheDocument();
  });
});
