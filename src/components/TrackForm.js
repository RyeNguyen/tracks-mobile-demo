import React, {useContext} from 'react';
import {Button, Input} from "react-native-elements";

import {Context as LocationContext} from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

import Spacer from "./Spacer";

const TrackForm = () => {
    const {
        state: {name, recording, locations},
        changeName,
        startRecording,
        stopRecording
    } = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();

    return <>
        <Spacer>
            <Input
                placeholder="Enter track's name"
                value={name}
                onChangeText={changeName}
            />
        </Spacer>
        <Spacer>
            <Button
                title={!recording ? 'Start Recording' : 'Stop'}
                onPress={!recording ? startRecording : stopRecording}
            />
        </Spacer>
        <Spacer>
            {
                !recording && locations.length
                    ? <Button title='Save Recording' onPress={saveTrack}/>
                    : null
            }
        </Spacer>
    </>
}

export default TrackForm;