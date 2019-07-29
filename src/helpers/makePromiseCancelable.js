const makePromiseCancelable = (promise) => {
  let active = false;

  const wrappedPromise = new Promise((resolve, reject) =>{
    promise.then((val) =>
      active ? resolve(val) : reject({isCanceled: true})
    );
    promise.catch((error) =>
      active ? reject(error) : reject({isCanceled: true})
    );
  });

  return {
    promise: wrappedPromise,
    cancel() {
      active = false;
    }
  };
};

export default makePromiseCancelable;