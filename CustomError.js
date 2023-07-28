module.exports = ({ stateCod = 500, code, message }) => {
  const CustomError = new Error(message);
  (CustomError.code = code), (CustomError.status = stateCod);
  return CustomError;
};
