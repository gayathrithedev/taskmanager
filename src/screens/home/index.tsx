import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const Home = () => {
  const [date, setDate] = useState(new Date());
  const {navigate} = useNavigation();

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  }, []);

  const goToCreateTask = () => navigate('Create');

  return (
    <View>
      <Text>Home</Text>
      <Text>{date?.toLocaleTimeString('en-IT', {hour12: false})}</Text>

      <TouchableOpacity onPress={goToCreateTask}>
        <Text>Create Task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
