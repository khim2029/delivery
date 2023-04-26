import { Operations } from "./operations";

export type prismaOperations = { [K in Operations]: unknown };

export type DelegateArgs<T> = {
  [K in keyof T]: T[K] extends (args: infer A) => Promise<unknown> ? A : never;
};

export type DelegateReturnTypes<T> = {
  [K in keyof T]: T[K] extends (args: infer A) => Promise<infer R> ? R : never;
};
