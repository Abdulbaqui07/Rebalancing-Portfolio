/* Moralis init code */
const serverUrl = "https://1kdbjhqao6ba.usemoralis.com:2053/server";
const appId = "8TtwKmJYpEBBfV2P6KLteqzGWgvPC0aLdmPFnFc1";
Moralis.start({ serverUrl, appId });

/* Authentication code */
async function login() {
    let user = Moralis.User.current();
    if (!user) {
        user = await Moralis.authenticate({
            signingMessage: "Log in using Moralis",
        })
            .then(function (user) {
                console.log("logged in user:", user);
                let address = user.get("ethAddress");
                document.getElementById("btn-login").innerHTML = (address);
                getBalance(address)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

/* Transfer ETH from current active address to specified receiver address*/
async function transferEthFromAtoB() {
    const options = {
        type: "native",
        amount: Moralis.Units.ETH("0.5"),
        receiver: "0xF36d78037987A1244D0aafc85C1cB4d7B135d4C1",
    };
    let result = await Moralis.transfer(options);
    console.log(result);
}

async function transferEthFromBtoC() {
    const options = {
        type: "native",
        amount: Moralis.Units.ETH("0.5"),
        receiver: "0xF36d78037987A1244D0aafc85C1cB4d7B135d4C1",
    };
    let result = await Moralis.transfer(options);
    console.log(result);
}

/* Fetching balance */
async function getBalance(add) {
    let user = Moralis.User.current();
    const Monster = Moralis.Object.extend("balances");
    const monster = new Monster();

    const options = {
        chain: "ropsten",
    };
    const balanceof = await Moralis.Web3API.account.getNativeBalance(options);
    console.log(balanceof);
    monster.set("balances", balanceof.balance);
    monster.set("address", add);
    monster.set("userId", user.id);
    monster.save();
}

/* Logout */
async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
}

/* Calling functions */
document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;
document.getElementById("transferAtoB").onclick = transferEthFromAtoB;
document.getElementById("transferBtoC").onclick = transferEthFromBtoC;

/* Merging Address in a single user mode */
Moralis.onAccountChanged(async (account) => {
    const confirmed = confirm("Link this address to your account?");

    if (confirmed) {
        await Moralis.link(account);
        let user = Moralis.User.current();
        let address = user.get("ethAddress");
        getBalance(address);
        document.getElementById("btn-login").innerHTML = address;
        document.getElementById("wallets").innerHTML = user.get("accounts").map(e => {
            return (
                `<li>${e}</li>`
            );
        });
    }
})