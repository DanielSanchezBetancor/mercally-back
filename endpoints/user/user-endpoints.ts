import { Express } from "express";
import { savePreferencesController } from "../../controllers/user/savePreferencesController";
import { loginController} from "../../controllers/user/loginController";
import { protectedController } from "../../helpers/security";

const userEndpoints = (app: Express) => {
  app.post("/savePreferences", protectedController, savePreferencesController);
  app.post("/login", loginController)
};

export { userEndpoints };