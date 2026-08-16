import { type Dictionary, t } from "intlayer";

const devtoolsContent = {
  key: "devtools",
  fill: true,
  importMode: "static",
  content: {
    tanstackQuery: t({
      ar: "Tanstack Query",
    }),
  },
} satisfies Dictionary;

export default devtoolsContent;
