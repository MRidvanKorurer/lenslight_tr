import express from "express";

import { createPhoto, getAllPhoto, getAPhoto } from "../controllers/photoController.js";

const router = express.Router();

router.route("/").post(createPhoto).get(getAllPhoto);
router.route("/:id").get(getAPhoto);

export default router;
