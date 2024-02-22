import React, {useContext, useEffect} from 'react';
import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
} from 'react-native-reanimated';
import {fontSize, fonts} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import {TaskContext} from '../../store/StoreProvider';
import CardList from '../../components/CardList';

const Home = () => {
  const {navigate} = useNavigation();

  const {taskLength, completedLength, newLength} = useContext(TaskContext);

  const offset = useSharedValue(10);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateY: offset.value}],
  }));

  React.useEffect(() => {
    offset.value = withRepeat(
      withTiming(-offset.value, {duration: 2000}),
      -1,
      true,
    );
  }, []);

  const navigateToCreate = () => {
    navigate('Create');
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>
          {taskLength}
          {completedLength}
          {newLength}
        </Text>
        <CardList />
      </ScrollView>
      <View style={[styles.floatingCta]}>
        <Animated.View style={animatedStyles}>
          <View style={[styles.msgCard]}>
            <Text style={[fontSize[12], fonts.medium, styles.msg]}>
              Click here to create{'\n'}your first task.
            </Text>
          </View>
          <View style={styles.triangle} />
        </Animated.View>
      </View>

      <TouchableOpacity
        style={styles.createCta}
        onPress={() => navigateToCreate()}>
        <Text style={[fontSize[20], fonts.bold, styles.plusIcon]}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  msg: {
    color: '#f5fdff',
  },
  triangle: {
    width: 10,
    height: 10,
    position: 'absolute',
    bottom: -8,
    right: 16,
    borderLeftWidth: 10,
    borderLeftColor: 'transparent',
    borderRightWidth: 10,
    borderRightColor: 'transparent',
    borderTopWidth: 10,
    borderTopColor: '#60bafb',
  },
  msgCard: {
    backgroundColor: '#60bafb',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 8,
  },
  container: {
    flex: 1,
    backgroundColor: '#f0f4f6',
    position: 'relative',
  },
  floatingCta: {
    position: 'absolute',
    right: 24,
    bottom: 100,
  },
  createCta: {
    right: 24,
    bottom: 24,
    position: 'absolute',
    backgroundColor: '#0094ff',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusIcon: {
    color: '#fefffe',
  },
});

export default Home;
