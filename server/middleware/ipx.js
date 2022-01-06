import { createIPX, createIPXMiddleware } from "ipx";

export default createIPXMiddleware(createIPX({
    domains: ["https://picsum.photos"]
}));
