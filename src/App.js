import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layours/Main';
import Topics from './components/Topics/Topics.js';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Practice from './components/Topics/Practice';
import Home from './components/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Topics></Topics>
        },
        {
          path: '/topics',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Topics></Topics>
        },
        {
          path: '/topics/:TopicId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.TopicId}`)
          },
          element: <Practice></Practice>
        },
        {
          path: '/statistics',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },

      ]
    },
    {
      path: "*",
      element: <Home></Home>
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} ></RouterProvider>


    </div>
  );
}

export default App;
