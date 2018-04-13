import { Output } from "./output";

export interface Source {
  title: String;
  content: String;
  createFromOutput(output: Output): Source;
}
