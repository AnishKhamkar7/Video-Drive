import ErrorHandler from ".";

class ErrorFactory {
  static BadRequest(message = "Bad Request") {
    return new ErrorHandler(400, message);
  }

  static Unauthorized(message = "Unauthorized Access") {
    return new ErrorHandler(401, message);
  }

  static Forbidden(message = "Forbidden Access") {
    return new ErrorHandler(403, message);
  }

  static NotFound(message = "Resource Not Found") {
    return new ErrorHandler(404, message);
  }

  static Conflict(message = "Conflict Occurred") {
    return new ErrorHandler(409, message);
  }

  static InternalServerError(message = "Internal Server Error") {
    return new ErrorHandler(500, message);
  }
}

export default ErrorFactory;
