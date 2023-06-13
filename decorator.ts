import { Reflect } from "https://deno.land/x/reflect_metadata/mod.ts";

type HTTPMethods = "get" | "put" | "patch" | "post" | "delete";
interface ActionMetadata {
  path: string;
  method: HTTPMethods;
  functionName: string;
}
const ACTION_KEY = Symbol("action");

function mappingMethod(method: HTTPMethods) {
  return (path = "") =>
    (target: any, functionName: string, _: PropertyDescriptor) => {
      const meta: ActionMetadata = { path, method, functionName };
      addMetadata(meta, target, ACTION_KEY);
    };
}

function addMetadata<T>(value: T, target: any, key: symbol) {
  const list = Reflect.getMetadata(key, target);
  if (list) {
    list.push(value);
    return;
  }
  Reflect.defineMetadata(key, [value], target);
}

export const Get = mappingMethod("get");
export const Post = mappingMethod("post");
export const Put = mappingMethod("put");
export const Patch = mappingMethod("patch");
export const Delete = mappingMethod("delete");
