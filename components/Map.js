import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const Map = withScriptjs(
  withGoogleMap(({ lat, lng, isMarkerShown }) => (
    <GoogleMap
      defaultZoom={18}
      defaultCenter={{ lat, lng }}
      center={{ lat, lng }}
    >
      {isMarkerShown && <Marker position={{ lat, lng }} />}
    </GoogleMap>
  ))
);

export default Map;
