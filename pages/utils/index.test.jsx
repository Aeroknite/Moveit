import { shallow } from "enzyme";
import { useStore } from ".";

const props = { Component: jest.fn(), pageProps: {} };

describe("app", () => {
  let wrapper;
  let app;
  const { Component, pageProps } = props;
  const { useApp } = useStore();

  const App = () => useApp({ Component, pageProps });

  beforeEach(() => {
    wrapper = shallow(<App />);
    app = wrapper.find("#app");
  });

  test("should render", () => {
    expect(app).toHaveLength(1);
  });
});
