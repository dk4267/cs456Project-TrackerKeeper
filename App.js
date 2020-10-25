import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import MainHabitsScreen from './src/screens/habits/MainHabitsScreen';
import EditHabitsScreen from './src/screens/habits/EditHabitsScreen';
import HabitsStatsScreen from './src/screens/habits/HabitsStatsScreen';

import MainStatsScreen from './src/screens/summary/MainStatsScreen';
import CalendarScreen from './src/screens/summary/CalendarScreen';
import DayDetailScreen from './src/screens/summary/DayDetailScreen';

import MainMoodScreen from './src/screens/mood/MainMoodScreen';
import EmotionDetailScreen from './src/screens/mood/EmotionDetailScreen';
import JournalScreen from './src/screens/mood/JournalScreen';
import MoodStatsScreen from './src/screens/mood/MoodStatsScreen';

import MainTasksScreen from './src/screens/tasks/MainTasksScreen';
import EditTasksScreen from './src/screens/tasks/EditTasksScreen';
import TasksStatsScreen from './src/screens/tasks/TasksStatsScreen';

const navigator = createStackNavigator({
  Home: HomeScreen,

  MainHabits: MainHabitsScreen,
  EditHabits: EditHabitsScreen,
  HabitsStats: HabitsStatsScreen,

  MainStats: MainStatsScreen,
  Calendar: CalendarScreen,
  DayDetail: DayDetailScreen,

  MainMood: MainMoodScreen,
  EmotionDetail: EmotionDetailScreen,
  Journal: JournalScreen,
  MoodStats: MoodStatsScreen,

  MainTasks: MainTasksScreen,
  EditTasks: EditTasksScreen,
  TasksStats: TasksStatsScreen
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Tracker Keeper'  
    
  }
})

export default createAppContainer(navigator);