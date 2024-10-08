import { NextFunction, Request, Response } from "express";
import ResponseHandler from "../http/responseHandler";
import ErrorFactory from "../Error/ErrorFactory";
import { getMovieDetails, getPopularMovies } from "../axios/movies/getMovies";

export default class movieController {
  getPopularMoviesController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const movies = await getPopularMovies();
      return ResponseHandler.success(res, movies, "Popular Movies Retrieved");
    } catch (error) {
      return next(ErrorFactory.InternalServerError("Something went Wrong"));
    }
  };

  getMovieDetailsController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const movieId = parseInt(id, 10);

    if (isNaN(movieId)) {
      return next(ErrorFactory.NotFound("Invalid Movie ID"));
    }

    try {
      const movie = await getMovieDetails(movieId);

      if (!movie) {
        return next(ErrorFactory.NotFound("Movie not found"));
      }

      return ResponseHandler.success(res, movie, "Movie Retrieved");
    } catch (error) {
      return next(ErrorFactory.InternalServerError("Something went wrong"));
    }
  };
}
