type MenuId = "RequestRow";

export type Menu = {
  registerItem: (
    menuId: MenuId,
    commandId: string,
    options?: MenuOptions,
  ) => void;
};

type MenuOptions = {
  leadingIcon?: string;
};
