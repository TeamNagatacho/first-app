import next from "next";
import express, { Request, Response } from "express";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

// api
import expressApi from "./custom";

nextApp.prepare().then(() => {
  const server = express();

  // Express側の処理を設定できる
  server.use("/custom", expressApi);

  // Next側の処理
  server.get("*", (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`> Ready on ${process.env.CLIENT_URL || `http://localhost:${port}`}`);
  });
});
