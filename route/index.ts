import express from "express";
import { webhookRoute } from "./Webhook";
import { testRouter } from "./Test";

const Router = express.Router();

Router.use(testRouter);
Router.use(webhookRoute);

export { Router as appRouter };
