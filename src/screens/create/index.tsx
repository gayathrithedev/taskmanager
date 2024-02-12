import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Create = () => {
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [initialState, setInitialState] = useState('New');
  const [openModal, setOpenModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const states = [
    {state: 'New'},
    {state: 'In Progress'},
    {state: 'Completed'},
    {state: 'Deleted'},
  ];

  const handleSelectedState = item => {
    setInitialState(item?.state);
    setOpenModal(false);
  };

  const submitNewTask = () => {
    if (title && desc && initialState) {
    } else {
      setErrorMsg('Please enter the all required values');
    }
  };
  return (
    <View style={styles.container}>
        <View>
        </View>
      <Text>Create</Text>

      {errorMsg ? <Text>{errorMsg}</Text> : null}

      <TextInput onChangeText={e => setTitle(e)} value={title} />
      <TextInput onChangeText={e => setDesc(e)} value={desc} multiline />
      <TouchableOpacity onPress={() => setOpenModal(true)}>
        <Text>{initialState}</Text>
      </TouchableOpacity>

      {openModal ? (
        <View>
          {states?.map(item => (
            <TouchableOpacity onPress={() => handleSelectedState(item)}>
              <Text>{item?.state}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : null}

      <TouchableOpacity onPress={() => submitNewTask()}>
        <Text>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Create;
