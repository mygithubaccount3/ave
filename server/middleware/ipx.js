import { createIPX, createIPXMiddleware } from "ipx";
import config from "../../nuxt.config";

const {
  image: { ipx: ipxConfig }
} = config;

export default createIPXMiddleware(createIPX(ipxConfig));
