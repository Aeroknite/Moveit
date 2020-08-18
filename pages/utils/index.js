export * from "../index.page";
export * from "../_app.page";
export * from "./menu/utils";
export * from "./footer/utils";

function get({ prop }) {
  return prop;
}

export const useStore = () => {
  return {
    get: get({}),
  };
};
