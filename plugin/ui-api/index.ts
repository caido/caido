import type { Scopes } from "./scopes";
import type { UI } from "./ui";

export type API = {
  ui: UI;
  scopes: Scopes;

  navigation: {
    goTo: (path: string) => void;
    addPage: (path: string, options: PageOptions) => void;
  };

  commands: {
    register: (id: string, options: CommandOptions) => void;
  };

  shortcuts: {
    register: (commandId: string, keys: string[]) => void;
  };

  commandPalette: {
    register: (commandId: string) => void;
  };

  sidebar: {
    registerItem: (
      name: string,
      path: string,
      options?: SidebarItemOptions,
    ) => SidebarItem;
  };
};

type CommandOptions = {
  name: string;
  run: () => void;
  group?: string;
};

type PageOptions = {
  body: HTMLElement;
  topbar?: HTMLElement;
};

type SidebarItemOptions = {
  icon?: string;
  group?: string;
  isExternal?: boolean;
};

type SidebarItem = {
  setCount: (count: number) => void;
};
