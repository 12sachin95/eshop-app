export class AppError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean;
  public readonly details?: any;

  constructor(
    message: string,
    statusCode: number = 500,
    isOperational: boolean = true,
    details?: any
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.details = details;
    Error.captureStackTrace(this);
  }
}

//Not found error
export class NotFoundError extends AppError {
  constructor(message: string = "Resources not found", details?: any) {
    super(message, 404);
  }
}

// validation error (use for joi/zod/react-hook form)
export class ValidationError extends AppError {
  constructor(message: string = "Invalid request data", details?: any) {
    super(message, 400, true, details);
  }
}

//Authentication error
export class AuthError extends AppError {
  constructor(message: string = "Unauthorized", details?: any) {
    super(message, 401, true, details);
  }
}

// Forbidden error
export class ForbiddenError extends AppError {
  constructor(message: string = "Forbidden", details?: any) {
    super(message, 403, true, details);
  }
}

// database error
export class DatabaseError extends AppError {
  constructor(message: string = "Database error", details?: any) {
    super(message, 500, true, details);
  }
}

// rate limiting error
export class RateLimitError extends AppError {
  constructor(
    message: string = "Too many requests, Try again letter",
    details?: any
  ) {
    super(message, 429, true, details);
  }
}
