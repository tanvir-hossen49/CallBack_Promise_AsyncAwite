const paymentSuccessful = true;
const marks = 80;

/*
// using call back function

const enroll = (callback) => {
  console.log("Course enrollment is in progress");

  setTimeout(() => {
    if (paymentSuccessful) {
      callback();
    } else {
      console.log("Payment failed");
    }
  }, 1000);
};

const progress = (callback) => {
  console.log("Course on progress");

  setTimeout(() => {
    if (marks >= 80) {
      callback();
    } else {
      console.log("You could not get enough marks to get the certificate");
    }
  }, 1000);
};

const getCertificate = () => {
  console.log("Preparing your certificate");

  setTimeout(() => {
    console.log("Congrats! You got the certificate");
  }, 1000);
};

enroll(() => {
  progress(() => {
    getCertificate();
  });
});
*/

/*
// using promise

const enroll = () => {
  console.log("Course enrollment is in progress");

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (paymentSuccessful) {
        resolve();
      } else {
        reject("Payment failed");
      }
    }, 1000);
  });

  return promise;
};

const progress = () => {
  console.log("Course on progress");

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (marks >= 80) {
        resolve();
      } else {
        reject("You could not get enough marks to get the certificate");
      }
    }, 1000);
  });

  return promise;
};

const getCertificate = () => {
  console.log("Preparing your certificate");

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      console.log("Congrats! You got the certificate");
    }, 1000);
  });

  return promise;
};

enroll()
  .then(progress)
  .then(getCertificate)
  .then((value) => console.log(value))
  .catch((e) => console.log(e));
*/

// using async await

const enroll = () => {
  console.log("Course enrollment is in progress");

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (paymentSuccessful) {
        resolve();
      } else {
        reject("Payment failed");
      }
    }, 2000);
  });

  return promise;
};

const progress = () => {
  console.log("Course on progress");

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (marks >= 80) {
        resolve();
      } else {
        reject("You could not get enough marks to get the certificate");
      }
    }, 1000);
  });

  return promise;
};

const getCertificate = () => {
  console.log("Preparing your certificate");

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      console.log("Congrats! You got the certificate");
    }, 1000);
  });

  return promise;
};

(async function () {
  try {
    await enroll();
    await progress();
    await getCertificate();
  } catch (e) {
    console.log(e);
  }
})();
