const callApiOK = () => new Promise(resolve => setTimeout(
  () => resolve({
    status: 200,
    data: 'Called with ok status',
  }), 1000,
));

const callApiKO = () => new Promise((resolve, reject) => setTimeout(
  () => reject(new Error({
    status: 500,
    data: 'Called with ko status',
  })), 1000,
));

export {
  callApiOK,
  callApiKO,
};
