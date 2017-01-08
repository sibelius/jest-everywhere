const getUserName = (userID) =>
  new Promise((res, rej) =>
    setTimeout(() => res('Paul'), 100)
  );
export default getUserName;
