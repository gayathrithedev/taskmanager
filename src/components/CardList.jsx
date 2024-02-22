import React, {useCallback, useContext, useRef} from 'react';
import {FlatList, Text, View} from 'react-native';
import {TaskContext} from '../store/StoreProvider';
import ListItem from './ListItem';

const CardList = () => {
  const {taskList, deleteTask} = useContext(TaskContext);

  const scrollRef = useRef(null);

  const onDismiss = useCallback(task => {
    deleteTask(task);
  }, []);

  const renderItem = ({item}) => {
    return (
      <ListItem
        task={item}
        simultaneousHandlers={scrollRef}
        onDismiss={onDismiss}
      />
    );
  };
  return (
    <FlatList
      data={taskList}
      renderItem={renderItem}
      keyExtractor={item => item?.title}
    />
  );
};

export default CardList;
