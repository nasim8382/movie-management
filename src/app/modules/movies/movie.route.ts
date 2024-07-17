import express from "express";
import { MovieControllers } from "./movie.controller";

const router = express.Router();

router.post("/", MovieControllers.createMovie);

router.get("/", MovieControllers.getAllMovies);

router.get("/:movieId", MovieControllers.getSingleMovie);

router.delete("/:movieId", MovieControllers.deleteMovie);

router.patch("/:movieId", MovieControllers.updateMovie);

export const MovieRoutes = router;
