const Moralis = require("moralis");

const serverURL = "https://ap06sdpjledg.usemoralis.com:2053/server";
const appID = "EcsrLrdek81792k3316OA5CXL9zEi7eNbA9mDdhw";

Moralis.start({ serverURL, appID });
console.log("started");
async function login() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.authenticate({
      signingMessage: "Log in using Moralis",
    })
      .then(function (user) {
        console.log("logged in user:", user);
        console.log(user.get("ethAddress"));
      })
      .catch(function (error) {
        console(error);
      });
  }
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;
