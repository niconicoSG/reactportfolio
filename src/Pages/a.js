export function Test() {
  const asleep = false;

  const stillStudying = true;

  function newPromise() {
    return new Promise((resolve, reject) => {
      if (asleep) {
        reject({
          message: "zzz",
        });
      } else if (stillStudying) {
        resolve("Good boy");
      }
    });
  }

  newPromise()
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error.message);
    });
}
