export type Commands = {
  register: (id: string, options: CommandOptions) => void;
};

type CommandOptions = {
  name: string;
  run: (context: CommandContext) => void;
  group?: string;
  when?: (context: CommandContext) => boolean;
};

type CommandContextBase = {
  type: "BaseContext";
};

type CommandContextRequestRow = {
  type: "RequestRowContext";
  request: {
    id: string;
    host: string;
    port: number;
    path: string;
    query: string;
    isTls: boolean;
  };
};

export type CommandContext = CommandContextBase | CommandContextRequestRow;
