const getError = (err) =>
  err.response && err.response.data && err.response.message
    ? err.response.data.message
    : err.response;

export { getError };
