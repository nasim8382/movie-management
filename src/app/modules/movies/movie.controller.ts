import { Request, Response } from "express";
import { MovieServices } from "./movie.service";

const createMovie = async (req: Request, res: Response) => {
  const result = await MovieServices.createMovieIntoDB(req.body);

  res.json({
    success: true,
    message: "Movie is created successfully !",
    data: result,
  });
};

const getAllMovies = async (req: Request, res: Response) => {
  const result = await MovieServices.getAllMoviesFromDB();

  res.json({
    success: true,
    message: "Movies are retrieved successfully !",
    data: result,
  });
};

const getSingleMovie = async (req: Request, res: Response) => {
  const { movieId } = req.params;
  const result = await MovieServices.getSingleMovieFromDB(movieId);

  res.json({
    success: true,
    message: "Movie is retrieved successfully !",
    data: result,
  });
};

const deleteMovie = async (req: Request, res: Response) => {
  const { movieId } = req.params;
  const result = await MovieServices.deleteMovieFromDB(movieId);

  res.json({
    success: true,
    message: "Movie is deleted successfully !",
    data: result,
  });
};

const updateMovie = async (req: Request, res: Response) => {
  const { movieId } = req.params;
  const result = await MovieServices.updateMovieIntoDB(movieId, req.body);

  res.json({
    success: true,
    message: "Movie is updated successfully !",
    data: result,
  });
};

export const MovieControllers = {
  createMovie,
  getAllMovies,
  getSingleMovie,
  deleteMovie,
  updateMovie,
};
