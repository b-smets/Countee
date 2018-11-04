import { ComponentType } from 'react';

export const getDisplayName = (component: ComponentType<any>) =>
  component.displayName || component.name || 'Component';

export type Diff<T extends string | number | symbol, U extends string | number | symbol> =
  ({ [P in T]: P } & { [P in U]: never } & { [x: string]: never })[T];
export type Omit<T, K extends string | number | symbol> = Pick<T, Diff<Extract<keyof T, string>, K>>;
