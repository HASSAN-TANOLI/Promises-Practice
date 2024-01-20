//First Promise
const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  //DB calss, Cryptography, network calls

  setTimeout(function () {
    console.log("async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise returned");
});

//Second Promise
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("2nd async operation is complete");
    resolve();
  }, 2000);
}).then(function () {
  console.log("Now promise is resolved");
});

//Third Promise

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    //whenever we pass data in resolve we can then use this data in .then
    resolve({ username: "Hassan", email: "hassan@example.com" });
  }, 1000);
});

promiseThree
  .then(function (user) {
    console.log(user);

    const newPromise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        const additionalData = { ...user, role: "admin" };
        resolve(additionalData);
      }, 2000);
    });
    return newPromise;
  })

  .then(function (result) {
    console.log("Chained Promise result:", result);
  })

  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("The promises are either resolved or rejected");
  });
//Fourth Promise

const promiseFourth = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Hassan", password: "123" });
    } else {
      reject("Error: something went wrong");
    }
  }, 1000);
});

promiseFourth
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("The promise is either resolved or rejected");
  });

//Promise Five

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "JavaScript", password: "123" });
    } else {
      reject("Error: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllUser() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(res);
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E:", error);
//   }
// }

//getAllUser();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })

  .catch((error) => console.log(error));
