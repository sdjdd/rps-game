import { Region } from "@leancloud/play";

export const REGION = Region.EastChina;

const appId = process.env.LEANCLOUD_APP_ID || "OgE8zDRpOXNwsl3i38vccFqy-9Nh9j0Va";
const appKey = process.env.LEANCLOUD_APP_KEY || "TMkbH8yfIO2APRioG2joeety";
if (appId === undefined) {
  throw new Error("LEANCLOUD_APP_ID not set");
}
if (appKey === undefined) {
  throw new Error("LEANCLOUD_APP_KEY not set");
}

const clientEngineServer =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "";

export const configs = {
  appId,
  appKey,
  clientEngineServer,
};
