# Community Funding -using Blockchain 

## About
 A decentralised web application for financing a community or a social cause by group of people using blockchain and ethereum technology involving no third parties.
It involves no third parties and anyone can raise funds as well as donate to a particular Fund through a secure peer to per network on the ethereum blockchain.
The application uses concepts of ethereum blockchain using solidity contracts and a react based frontend.
A request can be made by the owner of an campaign to transfer funds which has to be approved by majority of Donors .This allows the correct use of their funds. 


## Why use Blockchain?
Community funding has become an extremely useful alternative to venture capital, and has also allowed non-traditional projects, such as those started by in-need families or hopeful creatives, a new audience to pitch their cause.
However, a greater concern is the fraud commited by the dealers and traders  who can access the funds of the donors without any check.
Blockchain technology, among all its benefits, can be best put to use by providing provable milestones as contingencies for giving, with smart contracts releasing funds only once when milestones establish that the money is being used the way that it is said to be.
## Screen-shots
### Home Page
<img src = "https://drive.google.com/uc?id=1TNFGFAvswNsgJzGgQ7WabUI0e2W-yKin">
  
### Campaigns Dashboard
<img src = "https://drive.google.com/uc?id=1h73uURgZ9SHW531L5pwmrNNWwqn4NWnk">

### Campaigns Request
<img src = "https://drive.google.com/uc?id=1zPpmb-BRfR7wgqghMfleMs05AEp7zsQN">

###  `Requirements`

 1. Install **Metamask** as Firefox Extension(Google Chrome at your own risk) and create an account.
 2.  Request Ether by sharing your ethereum address in social media <br>(`https://faucet.rinkeby.io/)`
 3. Create an account in [https://infura.io](https://infura.io/)
 4. Create .env file in Ethereum directory and add these lines.
	 

	> mnemonic = 'her goes your mnemonic code from metamask also called seed' <br>
	link = 'Your infura end point link after you create a project on infura'
	
 5. After deploying Contract by going into Ethereum Directory and running
	> node deploy.js

	Copy the contract deploy address from the terminal and replace it in factory.js file.

 6. Replace your "infura end point link" in web3.js file.

### `Steps To be Followed `
1. **Install the required dependencies**
 > sudo npm install
 2. **Compile the Contract**
 > node compile.js
 3. **Test the Contract**
 > npm run test
 4. **Deploy the Contract**
 > node deploy.js
 4. **Run the application**
 > npm run dev
### `Dependencies Used`

| Name | Version | Description |
|--|--|--|
| solc | 0.4.26 | Programming language to write smart contracts |
| ganache-cli  | 6.5.1 | Local Ethereum Test Network |
| mocha | 6.2.0 | JavaScript test framework |
|truffle-hdwallet-provider | 1.0.16 | The **Truffle HDWallet provider** is a convenient and easy to configure network connection to ethereum through infura.io |
| web3 | 1.0.0-beta.55 | Ethereum JavaScript API which connects to the Generic JSON RPC spec. |
| dotenv| 8.0.0 | Loads environment variables from a `.env` file into `process.env`|
| fs-extra| 8.1.0 | file system methods that aren't included in the native fs |
| next | 9.0.3 | JavaScript framework to build server-side rendering and static web application using React |
| react | 16.9.0 | JavaScript library for creating user interfaces |
| react-dom | 16.9.0 | DOM specific methods that can be used on React application |
| semantic-ui-react | 0.87.3 | react component kit provides pre define react component |
| semantic-ui-css | 2.4.1 | react component kit provides theme to react component as CSS |
| next-routes | 1.4.2 | Dynamic Routes for Next.js |

=======
