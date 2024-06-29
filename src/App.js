import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import { Suspense, lazy } from "react";


const SearchResults = lazy(() => import("./components/SearchResults") ) 


export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/Watch",
        element: <WatchPage />,
      },
      {
        path: "/results",
        element: (
          <Suspense>
            <SearchResults />
          </Suspense>
        ),
      },
    ],
  },
]);
function App() {
  
  return (
    <Provider store={store}>
      <div className="App bg-[#0F0F0F] text-[#FFFFFF] h-[100%]">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
    
  );
}

export default App;
