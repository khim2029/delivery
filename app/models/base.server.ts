import { prismaOperations } from "~/types/genericRepo.types";
import { Operations } from "~/types/operations";

export class GenericRepository<
  O extends { [K in Operations]: (filterOptions: unknown) => unknown },
  L extends prismaOperations,
  A extends prismaOperations
> {
  constructor(protected model: O) {}

  async findUnique(filterOptions: L["findUnique"]): Promise<A["findUnique"]> {
    return this.model.findUnique(filterOptions);
  }

  async findFirst(filterOptions: L["findFirst"]): Promise<A["findFirst"]> {
    return this.model.findFirst(filterOptions);
  }

  async findMany(filterOptions: L["findMany"]): Promise<A["findMany"]> {
    return this.model.findMany(filterOptions);
  }

  async create(filterOptions: L["create"]): Promise<A["create"]> {
    return this.model.create(filterOptions);
  }
}
export type DelegateArgs<T> = {
  [K in keyof T]: T[K] extends (args: infer A) => Promise<unknown> ? A : never;
};

export type DelegateReturnTypes<T> = {
  [K in keyof T]: T[K] extends (args: infer A) => Promise<infer R> ? R : never;
};
