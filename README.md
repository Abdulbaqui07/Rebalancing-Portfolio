# Rebalancing-Portfolio

1. Create an empty page
The first step is to create an empty page we call index.html and main.js in the same directory and import the moralis script alongside our main.js file. We include two buttons on the page - one for logging in and one for logging out.

2. Initialize the SDK
Initialize your server using Moralis.start() function
/* Moralis init code */
const serverUrl = "https://xxxxx/server";
const appId = "YOUR_APP_ID";
Moralis.start({ serverUrl, appId });

In order to initialize the SDK, you need to fetch Server (Dapp) URL and APP ID from your Moralis Dashboard. Go to your Moralis Server Details:
![image](https://user-images.githubusercontent.com/87430736/188580317-16c21553-3e73-4819-a821-04e9738059ac.png)
![image](https://user-images.githubusercontent.com/87430736/188580534-f9e49344-4d59-4b5d-8456-975aeb69377b.png)

3. Add Authentication
Now that the SDK is successfully connected we can use the power of Moralis. Let's login a user and instantly get all their tokens, transactions and NFTs from all chains in your Moralis Database.
Copy code from main.js

4. View the page from localhost
Run index.html on localhost as a web page. The easiest way is by using the live server extension Visual Studio Code. Just right click on index.html and select Open with Live Server.
![image](https://user-images.githubusercontent.com/87430736/188581166-6b301075-5e92-44a4-940e-50522562382b.png)

5. Login with Metamask and switch accounts to merge
Visit the webpage and click Login. Your Metamask will popup and ask you to sign in.

6. See all User Assets in the Moralis Database
As soon as the user logs in Moralis fetches all the on-chain data about that user from all chains and puts it into the Moralis Database. To see the Moralis Database go to your server and click on Dashboard.
![image](https://user-images.githubusercontent.com/87430736/188581465-3338ed80-4c0e-40c7-91f6-c43c91345d03.png)
![image](https://user-images.githubusercontent.com/87430736/188581730-fd2caafb-1cfb-4c0e-806d-725801cdc073.png)
