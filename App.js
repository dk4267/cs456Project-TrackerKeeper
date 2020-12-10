import React from 'react';
import { StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {Colors} from './src/components/DarkTheme';

import { Provider as HabitsProvider } from './src/context/HabitsContext'; 
import { Provider as GoalsProvider } from './src/context/GoalsContext';
import { Provider as TasksProvider } from './src/context/TasksContext';

import HomeScreen from './src/screens/main/HomeScreen';
import EditGoalsScreen from './src/screens/main/EditGoalsScreen';

import MainHabitsScreen from './src/screens/habits/MainHabitsScreen';
import HabitsStatsScreen from './src/screens/habits/HabitsStatsScreen';

import MainStatsScreen from './src/screens/summary/MainStatsScreen';
import CalendarScreen from './src/screens/summary/CalendarScreen';
import DayDetailScreen from './src/screens/summary/DayDetailScreen';

import MainMoodScreen from './src/screens/mood/MainMoodScreen';
import EmotionDetailScreen from './src/screens/mood/EmotionDetailScreen';
import JournalScreen from './src/screens/mood/JournalScreen';
import MoodStatsScreen from './src/screens/mood/MoodStatsScreen';

import MainTasksScreen from './src/screens/tasks/MainTasksScreen';
import TasksStatsScreen from './src/screens/tasks/TasksStatsScreen';

const navigator = createStackNavigator({
  Home: HomeScreen,
  EditGoals: EditGoalsScreen,

  MainHabits: MainHabitsScreen,
  HabitsStats: HabitsStatsScreen,

  MainStats: MainStatsScreen,
  Calendar: CalendarScreen,
  DayDetail: DayDetailScreen,

  MainMood: MainMoodScreen,
  EmotionDetail: EmotionDetailScreen,
  Journal: JournalScreen,
  MoodStats: MoodStatsScreen,

  MainTasks: MainTasksScreen,
  TasksStats: TasksStatsScreen
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Tracker Keeper',
    headerTitleStyle: {color:Colors.text.primary},
    headerStyle: {backgroundColor: Colors.surface},
    headerTintColor: Colors.text.primary
  }
})

const App = createAppContainer(navigator);

export default () => {
  return (
    <HabitsProvider>
      <GoalsProvider>
        <TasksProvider>
          <StatusBar barStyle="light-content"/>
          <App/>
        </TasksProvider>
      </GoalsProvider>
    </HabitsProvider>
  )
}