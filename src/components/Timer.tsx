import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fonts} from '../theme';

const Timer = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // setInterval(() => setDate(new Date()), 1000);
  }, []);

  const timerL = date?.toLocaleTimeString('en-IT', {hour12: false});
  const hour = date?.getHours();
  const minutes = date?.getMinutes();
  const seconds = date?.getSeconds();
  const dateN = date?.getDate();
  const month = date?.getMonth() + 1;
  const year = date?.getFullYear();

  const timer = [
    {
      label: 'hours',
      value: hour,
    },
    {
      label: 'min',
      value: minutes,
    },
    {
      label: 'sec',
      value: seconds,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.timerContainer}>
        {timer?.map(item => (
          <View style={styles.timeCard}>
            <Text style={[styles.timeValue, fonts.semiBold]}>
              {item?.value}
            </Text>
            {/* <Text style={[styles.timeLabel, fonts.light]}>{item?.label}</Text> */}
          </View>
        ))}
      </View>
      <Text
        style={[
          styles.timeValue,
          fonts.semiBold,
        ]}>{`${dateN} ${month} ${year}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timeCard: {
    backgroundColor: '#ddbff7',
    width: 30,
    height: 30,
    borderRadius: 4,
    marginRight: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#ecebf2',
    paddingVertical: 16,
  },
  verticalLine: {
    height: 20,
    width: 1,
    backgroundColor: '#a1a1a1',
    marginHorizontal: 8,
  },
  dateText: {
    fontSize: 30,
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeView: {
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  timeValue: {
    color: '#151a26',
    fontSize: 20,
  },
  timeLabel: {
    fontSize: 10,
  },
});

export default Timer;
