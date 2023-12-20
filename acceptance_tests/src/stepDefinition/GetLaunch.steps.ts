const { Given, When, Then } = require('@cucumber/cucumber')

const axios = require('axios')

const chai = require('chai')
const chaiSubset = require('chai-subset')
const { expect } = chai

chai.use(chaiSubset);

Given('I have a request to get a launch', function () {
    this.launchId = '5eb87d46ffd86e000604b32a'
})

When('I make a request to get a launch', async function () {
    try {
        this.response = await axios.post('http://localhost:4000/graphql', {
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
                        country
                    }
                }
            }
        }
        `,
            variables: {
                id: '5eb87cd9ffd86e000604b32a',
            },
        }, {
            headers: { 'Content-Type': 'application/json' },
        })
    } catch (error) {
        console.log(error.response.data.errors)
    }
})

Then('I should receive a launch', function () {
    expect(this.response.status).to.equal(200)
    expect(this.response.data.data.launch).to.containSubset({
        id: '5eb87cd9ffd86e000604b32a',
        name: 'FalconSat',
        rocket: {
            id: '5e9d0d95eda69955f709d1eb',
            name: 'Falcon 1',
            description:
                'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
        },
        launchpad: {
            id: '5e9e4502f5090995de566f86',
            name: 'Kwajalein Atoll',
            city: {
                city: 'Loi',
                country: 'MH',
            },
        },
    })
})