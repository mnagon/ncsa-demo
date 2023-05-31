export * from "./router";

export type NavigationType = {
  title: string;
  path: string;
  isActive: (path: string) => boolean;
};
