import { defineCliConfig } from "sanity/cli";

import { projectId, dataset } from "./src/sanity/environment";

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
});
