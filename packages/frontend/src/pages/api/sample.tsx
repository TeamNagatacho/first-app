import { NextApiResponse, NextApiRequest } from "next";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async (_: NextApiRequest, res: NextApiResponse) => {
  return res.status(200);
};
