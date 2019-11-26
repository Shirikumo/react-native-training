import HomeScreen from './src/components/HomeScreen';
import BlockScreen from './src/components/BlockScreen';
import SampleView from './src/components/SampleView';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Blocks: {screen: BlockScreen},
  Sample: {screen: SampleView}
});

const App = createAppContainer(MainNavigator);

export default App;