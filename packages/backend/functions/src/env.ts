import * as functions from "firebase-functions";

export interface EnvorinmentVariables {
  sampleA: {
    token: string;
  };
  sampleB: {
    consumerKey: string;
    consumerSecret: string;
    accessToken: string;
    accessTokenSecret: string;
  };
  sampleC: {
    apikey: string;
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let config: any;
if (!process.env.NODE_ENV || process.env.NODE_ENV === "test") {
  // FIXME: とりあえずdev環境をロード
  config = require("../env/dev.json");
} else {
  config = functions.config();
}

export const env = config as EnvorinmentVariables;
