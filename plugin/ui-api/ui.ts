export type UI = {
  button: (options?: ButtonOptions) => HTMLElement;
  card: (options?: CardOptions) => HTMLElement;
  well: (options?: WellOptions) => HTMLElement;
};

type ButtonOptions = {
  variant?: "primary" | "secondary" | "tertiary";
  label?: string;
  leadingIcon?: string;
  trailingIcon?: string;
  size?: "small" | "medium" | "large";
};

type CardOptions = {
  header?: HTMLElement;
  body?: HTMLElement;
  footer?: HTMLElement;
};

type WellOptions = {
  header?: HTMLElement;
  body?: HTMLElement;
  footer?: HTMLElement;
};
