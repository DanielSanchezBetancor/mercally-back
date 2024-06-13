import { Express } from "express";
import { savePreferencesController } from "../../controllers/user/savePreferencesController";

const userEndpoints = (app: Express) => {
  app.post("/savePreferences", savePreferencesController);
};

export { userEndpoints };