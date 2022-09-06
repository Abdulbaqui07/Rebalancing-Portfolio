# Rebalancing-Portfolio

1. Create an empty page
The first step is to create an empty page we call index.html and main.js in the same directory and import the moralis script alongside our main.js file. We include two buttons on the page - one for logging in and one for logging out.

2. Initialize the SDK
Initialize your server using Moralis.start() function

```
main.js
/* Moralis init code */
const serverUrl = "https://xxxxx/server";
const appId = "YOUR_APP_ID";
Moralis.start({ serverUrl, appId });
```

In order to initialize the SDK, you need to fetch Server (Dapp) URL and APP ID from your Moralis Dashboard. Go to your Moralis Server Details:

<p align="center">
    <img src="https://user-images.githubusercontent.com/87430736/188580317-16c21553-3e73-4819-a821-04e9738059ac.png" alt="Moralis Dashboard">
</p>
<p align="center">
    Click on Settings below the server name of your server.
</p>
<p align="center">
    <img src="https://user-images.githubusercontent.com/87430736/188580534-f9e49344-4d59-4b5d-8456-975aeb69377b.png" alt="Moralis Dashboard">
</p>
<p align="center">
    Pick the server url and app id from the details page.
</p>

3. Add Authentication
Now that the SDK is successfully connected we can use the power of Moralis. Let's login a user and instantly get all their tokens, transactions and NFTs from all chains in your Moralis Database.
Refer code from main.js

4. View the page from localhost
Run index.html on localhost as a web page. The easiest way is by using the live server extension Visual Studio Code. Just right click on index.html and select Open with Live Server.

<p align="center">
    <img src="https://user-images.githubusercontent.com/87430736/188593180-63dd2470-c076-4366-8257-245e9ebd4341.png" alt="Open Live Server">
</p>
<p align="center">
    Click on Open with Live Server.
</p>

5. Login with Metamask and switch accounts to merge
Visit the webpage and click Login. Your Metamask will popup and ask you to sign in.

6. See all User Assets in the Moralis Database
As soon as the user logs in Moralis fetches all the on-chain data about that user from all chains and puts it into the Moralis Database.

<p align="center">
    <img src="https://user-images.githubusercontent.com/87430736/188581465-3338ed80-4c0e-40c7-91f6-c43c91345d03.png" alt="Open Live Server">
</p>
<p align="center">
    To see the Moralis Database go to your server and click on Dashboard.
</p>
<p align="center">
    <img src="https://user-images.githubusercontent.com/87430736/188584463-ae5d1068-4867-4a6f-8c3b-d99330305e21.png" alt="Open Live Server">
</p>
<p align="center">
    Click on Access Database.
</p>
<p align="center">
    <img src="https://user-images.githubusercontent.com/87430736/188595220-6e2a9f5c-9efc-4c98-8f10-cd0394e06dda.png" alt="Open Live Server">
</p>
<p align="center">
    Moralis Database.
</p>

7. Final view:

<p align="center">
    <img src="https://user-images.githubusercontent.com/87430736/188595848-9c55b47b-97e3-4643-a3c3-ebb358b3eeeb.png" alt="Open Live Server">
</p>
<p align="center">
    View of Dashboard.
</p>
<p align="center">
    <img src="https://user-images.githubusercontent.com/87430736/188596404-e3143348-f33b-4fbc-a01c-f6fd2233de96.png" alt="Open Live Server">
</p>
<p align="center">
    All the merged addresses will be displayed on the dashboard.
</p>
