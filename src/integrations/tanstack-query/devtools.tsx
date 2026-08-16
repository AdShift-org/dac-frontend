import { getIntlayer } from "intlayer";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";

const content = getIntlayer("devtools");

export default {
  name: content.tanstackQuery,
  render: <ReactQueryDevtoolsPanel />,
};
