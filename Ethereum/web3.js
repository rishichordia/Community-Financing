import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // PLease ensure that in your browser  meta mask is installed 
    //Also ensure that the metamask account is connected to the host site.
    web3 = new Web3(window.web3.currentProvider);
} else {
    // we are on the server *OR* meta mask is not running
    // creating our own provider
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/808d25d3e9a249568b9045baf0aaa2e9'
    );

    web3 = new Web3(provider);
}

export default web3;