import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0x7e13faAb9982dD107928F59f2aD9878591E41774"
);

export default instance;