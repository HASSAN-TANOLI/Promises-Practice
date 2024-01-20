//Task 1
const promiseFirst = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task is completed now");
    resolve();
  }, 2000);
}).then(function () {
  console.log("Promise is returned Now");
});

//Task 2

const promiseSecond = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Now here we go!!!!!");
    reject("Error: Something went wrong");
  }, 3000);
});

promiseSecond
  .then(function () {
    console.log("success");
  })
  .catch(function (error) {
    console.log("Error:", error);
  });

//Task 3
/*
Chaining Promises
Task: Create two promises.The first one resolves
 after 2 seconds with the string "First Promise",
 and the second one resolves after 1 second
with the string "Second Promise".Chain these promises and log both
results in the final.then() block. */

/* const promisev1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("First Promise is complete Now");
    resolve("First Promise");
  }, 2000);
});

const promisev2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("First Promise is complete Now");
    resolve("Second Promise");
  }, 1000);
});

promisev1
  .then(function (resultFromFirst) {
    console.log(resultFromFirst);
    return promisev2;
  })
  .then(function (resultFromSecond) {
    console.log(resultFromSecond);
  })
  .catch(function (error) {
    console.log("Error Occured here:", error);
  })
  .finally(function () {
    console.log("All Promises are either resolved or rejected");
  }); */

//Task 5
/*
Promise.all
Task: Create three promises that resolve after 1, 2, and 3 seconds,
      respectively.Use Promise.all to wait for all promises to resolve,
      then log the combined result.
    */

const promisev3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("third Promise is complete Now");
    resolve("Third Promise");
  }, 1000);
});

const promisev4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Fourth Promise is complete Now");
    resolve("Fourth Promise");
  }, 2000);
});

const promisev5 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Fifth Promise is complete Now");
    resolve("Fifth Promise");
  }, 3000);
});

const promiseArray = [promisev3, promisev4, promisev5];

Promise.all(promiseArray).then(function (resultArray) {
  console.log("combined result", resultArray);
});
