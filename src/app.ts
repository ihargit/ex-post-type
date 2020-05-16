import * as express from "express";
import * as helmet from "helmet";
import { useSessionStorage } from "./middlewares/sessionStore";

const app = express();
const { PORT } = process.env || 3000;
useSessionStorage(app);
app.use(helmet());

app.get("/", (request, response) => response.send("Hello World!"));
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
