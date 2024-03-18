
import './App.css';
import Body from './components/body/Body';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/mainContainer/MainContainer';
import WatchPage from './components/watchPage/WatchPage';

const appRouter= createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"watch",
      element:<WatchPage/>
    }

  ]
}])

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <RouterProvider router={appRouter}>
      <Body/>
      </RouterProvider>
    </div>
    </Provider>
  );
}

export default App;
