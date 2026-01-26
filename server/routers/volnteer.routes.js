import { Router } from "express";
import { RegisterVolunteer } from "../controller/volnteer.controller.js";

const VolnteerRoute = Router();

VolnteerRoute.post("/volnteer-registration", RegisterVolunteer);

export default VolnteerRoute;
