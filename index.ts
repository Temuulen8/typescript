console.log("hello typescript");

const num: number = 20;
const str: string = "hello";
const isBool: boolean = true;

console.log("num value", num);
console.log("str value", str);
console.log("boolean value", isBool);

function add(a: number, b: number): number {
  return a + b;
}

const y: number = add(100, 100);
console.log("add", y);

const add2 = (a: number, b: number): number => {
  return a + b;
};

const myPrint = (text: string): void => {
  console.log("hello", text);
};
