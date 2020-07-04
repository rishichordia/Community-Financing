import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x0622c244c1D5C18d9231Be46911B543cEBf3FE1E'
);

export default instance;
