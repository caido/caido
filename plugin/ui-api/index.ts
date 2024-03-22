import type { Commands } from "./commands";
import type { Menu } from "./menu";
import type { Scopes } from "./scopes";
import type { UI } from "./ui";

export type { CommandContext } from "./commands";

export type API = {
  ui: UI;
  scopes: Scopes;
  commands: Commands;
  menu: Menu;

  navigation: {
    goTo: (path: string) => void;
    addPage: (path: string, options: PageOptions) => void;
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
