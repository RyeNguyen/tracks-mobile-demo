import React, {useContext} from 'react';
import {Text, StyleSheet} from 'react-native';
import MapView, {Polyline} from "react-native-maps";

import {Context as TrackContext} from "../context/TrackContext";

const TrackDetailScreen = ({navigation}) => {
    const {state} = useContext(TrackContext);
    const trackId = navigation.getParam('trackId');

    const track = state.find(track => track._id === trackId);

    if (!track) return null;

    const initialCoords = track.locations[0].coords;

    return <>
        <Text>{track.name}</Text>
        <MapView
            style={styles.map}
            initialRegion={{
                longitudeDelta: 0.01,
                latitudeDelta: 0.01,
                ...initialCoords
            }}
        >
            <Polyline coordinates={track.locations.map(loc => loc.coords)}/>
        </MapView>
    </>
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: 300
    }
});

export default TrackDetailScreen;