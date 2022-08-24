import { theme as defaultTheme } from "@chakra-ui/theme";
import { createTheme } from "@chakra-ui/theme-tools";
import * as components from "./components";
import * as foundations from "./foundations";

export const theme = createTheme({
  ...defaultTheme,
  ...foundations,
  components: {
    ...defaultTheme.components,
    ...components,
  },
});

export { fontFaces } from "./font-faces";
