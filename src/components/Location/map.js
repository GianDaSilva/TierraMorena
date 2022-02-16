import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';

const Map = (props) => {
    return (
        <div>
            <GoogleMap defaultZoom={14}
            defaultCenter={{lat:-34.89582367065817, lng:-58.85122163225904}}/>, 
        </div>
    )
}

export default withScriptjs(
    withGoogleMap(
        Map
    )
);
