import React, {useState, createContext} from 'react';

export const TaskContext = createContext();

const StoreProvider = ({children}) => {
  const [taskList, setTaskLists] = useState([]);
  return (
    <TaskContext.Provider
      value={{
        taskList,
        addNewTask: newTask => setTaskLists([...taskList, newTask]),
        taskListLength: taskList?.length,
        completedLength: taskList?.filter(item => item?.isCompleted === true)
          .length,
        newLength: taskList?.filter(item => item?.isCompleted === false).length,
        deleteTask: task => {
          const filteredTaskList = taskList?.filter(
            item => item.title !== task.title,
          );
          setTaskLists(filteredTaskList);
        },
      }}>
      {children}
    </TaskContext.Provider>
  );
};

export default StoreProvider;
