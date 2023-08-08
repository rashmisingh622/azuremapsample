import React from 'react';
import {AzureMap, AzureMapsProvider, IAzureMapOptions} from 'react-azure-maps';
import { AuthenticationType } from 'azure-maps-control';

const option: IAzureMapOptions = {
    authOptions: {
        authType: AuthenticationType.subscriptionKey,
        subscriptionKey: ""
    },
}

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