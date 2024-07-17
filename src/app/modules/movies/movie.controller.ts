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
  try {
    const result = await MovieServices.getAllMoviesFromDB();

    res.status(200).json({
      success: true,
      message: "Movies are fetched successfully !",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Could not fetch movies!",
      error: error,
    });
  }
};

const getSingleMovie = async (req: Request, res: Response) => {
  try {
    const { movieId } = req.params;
    const result = await MovieServices.getSingleMovieFromDB(movieId);

    res.json({
      success: true,
      message: "Movie is retrieved successfully !",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Could not fetch movie!",
      error: error,
    });
  }
};

const deleteMovie = async (req: Request, res: Response) => {
  try {
    const { movieId } = req.params;
    const result = await MovieServices.deleteMovieFromDB(movieId);

    res.json({
      success: true,
      message: "Movie is deleted successfully !",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Could not delete movie!",
      error: error,
    });
  }
};

const updateMovie = async (req: Request, res: Response) => {
  try {
    const { movieId } = req.params;
    const result = await MovieServices.updateMovieIntoDB(movieId, req.body);

    res.json({
      success: true,
      message: "Movie is updated successfully !",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Could not update movie!",
      error: error,
    });
  }
};

export const MovieControllers = {
  createMovie,
  getAllMovies,
  getSingleMovie,
  deleteMovie,
  updateMovie,
};
