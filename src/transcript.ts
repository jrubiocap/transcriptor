import { Source } from "./source";
import { DocConfig } from "./doc-config";
import { Output } from "./output";

export interface Transcript {
  transform(source: Source, docConfig: DocConfig): Output;
}
