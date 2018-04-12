import { Source } from "./source";

export interface Merger {
  mergeSources(sources: Source[]): Source;
}