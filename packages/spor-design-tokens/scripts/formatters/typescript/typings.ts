import JsonToTS from "json-to-ts";
import { Format } from "style-dictionary";
import { Named } from "style-dictionary/types/_helpers";

/** Creates much more correct typescript typings than regular TS formatter */
export const typescriptTypingsFormatter: Named<Format> = {
  name: "typescript/typings",
  formatter: ({ dictionary }) => {
    return (
      "declare const root: RootObject\n" +
      "export default root\n" +
      JsonToTS(dictionary.properties).join("\n")
    );
  },
};
