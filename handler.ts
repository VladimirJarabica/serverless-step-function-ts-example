import { Context } from "aws-lambda";
import "source-map-support/register";

export const firstState = async (event: any, context: Context) => {
  console.log("firstState", event, context);
  const foo = event.foo || 0;
  console.log("FOO", foo);
  if (foo === 0) {
    return { from: "firstState, first iteration", foo: 1 };
  }
  return { from: "firstState, second iteration", foo: 2 };
};

export const lastState = (event: any, context: Context) => {
  console.log("lastState", event, context);
  return { from: "lastState" };
};
