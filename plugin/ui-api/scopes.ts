export type Scopes = {
  getScopes: () => Scope[];
  createScope: (options: CreateScopeOptions) => Promise<Scope | undefined>;
  updateScope: (
    id: string,
    options: UpdateScopeOptions,
  ) => Promise<Scope | undefined>;
  deleteScope: (id: string) => Promise<boolean>;
};

type Scope = {
  id: string;
  name: string;
  allowlist: string[];
  denylist: string[];
};

type CreateScopeOptions = {
  name: string;
  allowlist: string[];
  denylist: string[];
};

type UpdateScopeOptions = {
  name?: string;
  allowlist?: string[];
  denylist?: string[];
};
