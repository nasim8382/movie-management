import { TMovie } from "./movie.interface";
import { Movie } from "./movie.model";

const createMovieIntoDB = async (payLoad: TMovie) => {
  const result = await Movie.create(payLoad);
  return result;
};

const getAllMoviesFromDB = async () => {
  const result = await Movie.find();
  return result;
};

const getSingleMovieFromDB = async (id: string) => {
  const result = await Movie.findById(id);
  return result;
};

const deleteMovieFromDB = async (id: string) => {
  const result = await Movie.findByIdAndDelete(id);
  return result;
};

const updateMovieIntoDB = async (id: string, payload: Partial<TMovie>) => {
  const result = await Movie.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const MovieServices = {
  createMovieIntoDB,
  getAllMoviesFromDB,
  getSingleMovieFromDB,
  deleteMovieFromDB,
  updateMovieIntoDB,
};
