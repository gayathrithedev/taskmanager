import React, {useContext, useState} from 'react';
import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import {fontSize, fonts} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import {TaskContext} from '../../store/StoreProvider';

const Create = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  const [errorMsg, setErrorMsg] = useState(null);

  const {addNewTask} = useContext(TaskContext);

  const navigateToBack = () => {
    navigation.goBack();
  };

  const handleAddNewTask = () => {
    const task = {
      title,
      desc,
      isCompleted: selectedState === 'completed' ? true : false,
    };
    addNewTask(task);
    navigateToBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigateToBack()}>
          <Text>Go Back</Text>
        </TouchableOpacity>
        <Text style={[fontSize[16], fonts.semiBold, styles.title]}>
          Create New Task
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput
          placeholder="Title"
          style={[styles.input, fontSize[14], fonts.regular]}
          onChangeText={e => setTitle(e)}
        />
        <TextInput
          placeholder="Description"
          style={[styles.input, fontSize[14], fonts.regular, styles.descInput]}
          onChangeText={e => setDesc(e)}
          multiline
        />
        <View style={styles.radioCtaContainer}>
          <TouchableOpacity
            style={[styles.radioCta]}
            onPress={() => setSelectedState('new')}>
            <View style={styles.circle}>
              <View style={[selectedState === 'new' ? styles.selected : {}]} />
            </View>
            <Text style={[fontSize[12], fonts.medium, styles.title]}>New</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.radioCta]}
            onPress={() => setSelectedState('completed')}>
            <View style={styles.circle}>
              <View
                style={[selectedState === 'completed' ? styles.selected : {}]}
              />
            </View>
            <Text style={[fontSize[12], fonts.medium, styles.title]}>
              Completed
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.saveCta}
          disabled={errorMsg !== null}
          onPress={handleAddNewTask}>
          <Text style={[fontSize[14], fonts.medium, styles.saveText]}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  selected: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#0094ff',
  },
  saveText: {
    color: '#fefffe',
  },
  saveCta: {
    width: 100,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#0094ff',
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 100,
  },
  radioCta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioCtaContainer: {
    paddingTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
    borderRadius: 24,
    borderColor: '#60bafb',
    borderWidth: 1,
    marginRight: 8,
  },
  form: {
    padding: 24,
  },
  container: {
    flex: 1,
    backgroundColor: '',
  },
  headerRow: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#60bafb',
    paddingHorizontal: 16,
    color: '#000000',
    marginBottom: 16,
  },
  descInput: {
    height: 120,
  },
  title: {
    color: '#000000',
  },
});

export default Create;
