/* eslint-disable consistent-return */
function authMiddleware(request, response, next) {
  if (!request.headers.authorization) {
    return response.status(401).json({
      status: "error",
      message: "You must authenticate!",
    });
  }

  next();
}

module.exports = authMiddleware;
