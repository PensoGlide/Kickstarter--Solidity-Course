import React, { Component } from 'react';
import { Card, Grid, Button, GridColumn } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3'
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class CampaignShow extends Component {
    static async getInitialProps(props) {
        props.query.address; // Estamos a ir buscar o "address" a partir da wildcard que definimos no routes.js, não do próprio contrato
        const campaign = Campaign(props.query.address);

        const summary = await campaign.methods.getSummary().call();

        return {
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4],
            address: props.query.address
        };
    }

    renderCards() {
        const {
            balance,
            manager,
            minimumContribution,
            approversCount,
            requestsCount
        } = this.props;

        const items = [
            // Manager address card
            {
                header: manager,
                meta: 'Address of Manager',
                description: 'The manager created this campaign and can create requests to withdraw money.',
                style: {overflowWrap: 'break-word'}
            },
            // Minimum contribution card
            {
                header: minimumContribution,
                meta: 'Minimum Contribution (Wei)',
                description: 'The minimum amount of Wei to become an approver.',
                style: {overflowWrap: 'break-word'}
            },
            // Number of requests card
            {
                header: requestsCount,
                meta: 'Number of Requests',
                description: 'A request tries to withdraw money from the contract. Requests must be approved by approvers.',
                style: {overflowWrap: 'break-word'}
            },
            // Number of approvers card
            {
                header: approversCount,
                meta: 'Number of approvers',
                description: 'Number of people who have already donated to this Campaign.',
                style: {overflowWrap: 'break-word'}
            },
            // Balance card
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign balance (Ether)',
                description: 'The balance is how much money this campaign has left to spend.',
                style: {overflowWrap: 'break-word'}
            }
        ];

        return <Card.Group items={items}/>
    }

    render() {
        return (
        <Layout>
            <h3>Campaign Show</h3>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={12}>
                        {this.renderCards()}
                    </Grid.Column>

                    <Grid.Column width={4}>
                        <ContributeForm address={this.props.address}/>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <GridColumn>
                        <Link route={`/campaigns/${this.props.address}/requests`}>
                            <a>
                                <Button primary>View Requests</Button>
                            </a>
                        </Link>
                    </GridColumn>
                </Grid.Row>
            </Grid>
            
            
        </Layout>
        );  
    }
}

export default CampaignShow;