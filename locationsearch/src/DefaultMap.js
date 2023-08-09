import React from 'react';
import {AzureMap, AzureMapsProvider, IAzureMapOptions} from 'react-azure-maps';
import { AuthenticationType } from 'azure-maps-control';
const MapsSearch = require("@azure-rest/maps-search").default,
{ isUnexpected } = require("@azure-rest/maps-search");
const { AzureKeyCredential } = require("@azure/core-auth");

const subscriptionKey = "FaQ8Das_uLbff9_kZOQCz_UXGRxbMVjlgMdhJlVQkS8";
const credential = new AzureKeyCredential(subscriptionKey);
const client = MapsSearch(credential);

const option: IAzureMapOptions = {
    authOptions: {
        authType: AuthenticationType.subscriptionKey,
        subscriptionKey: "FaQ8Das_uLbff9_kZOQCz_UXGRxbMVjlgMdhJlVQkS8"
    },
}

const response = await client.path("/search/fuzzy/{format}", "json").get({
    queryParameters: {
      query: "Starbucks",
      lat: 47.61559,
      lon: -122.33817,
      countrySet: ["US"],
    },
  });

  // Handle the error response
  if (isUnexpected(response)) {
    throw response.body.error;
  }
  // Log the result
  console.log(`Starbucks search result nearby Seattle:`);
  response.body.results.forEach((result) => {
    console.log(`\
      * ${result.address.streetNumber} ${result.address.streetName}
        ${result.address.municipality} ${result.address.countryCode} ${
      result.address.postalCode
    }
        Coordinate: (${result.position.lat.toFixed(4)}, ${result.position.lon.toFixed(4)})\
    `);
  });

const DefaultMap: React.FC = () => (
    <div style={{height: '800px'}}>
        <AzureMapsProvider>
            <AzureMap id="myMap" options={option} center={[112.454, 254.99]}
  zoom={10} >
            </AzureMap>
        </AzureMapsProvider>
    </div>
)
export default DefaultMap