const { Given, When, Then } = require('@cucumber/cucumber')

const chai = require('chai')
const chaiHttp = require('chai-http')
const chaiSubset = require('chai-subset')

chai.use(chaiHttp)
chai.use(chaiSubset)

const { expect, request } = chai

Given('I have a request with ID', function (dataTable: any) {
    const stepData = dataTable.rowsHash()
    this.id = stepData.id
})

When('I send a request to get Launch', async function () {
    this.response = await request('http://localhost:4000').post('/graphql').send({
        query: `query GetLaunchpad($id: ID!) {
            launch(id: $id) {
                id
                name
                rocket {
                    id
                    name
                    description
                }
                launchpad {
                    id
                    name
                    city {
                        city
                        region
                    }
                }
            }
        }`,
        variables: {
            id: this.id
        }
    })
})

Then('I should receive a response', function (dataTable: any) {
    const stepData = dataTable.rowsHash()
    expect(this.response).to.have.status(stepData.status)
    if (stepData.launchId) {
        expect(this.response.body.data.launch.id).to.equal(stepData.launchId)
    }
    if (stepData.errorMessage) {
        expect(this.response.body.errors[0].message).to.equal(stepData.errorMessage)
    }
})