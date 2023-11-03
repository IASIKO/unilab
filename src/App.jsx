import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import Registration from "./pages/Registration";
import Root from "./pages/Root";
import Form from "./pages/Form";
import Api from "./pages/Api";

function App() {
  const userImage = localStorage.getItem("userImage");
  const userName = localStorage.getItem("userName");
  const localStorageFull = userImage && userName;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/registration",
      element: <Registration />,
    },
    {
      path: "/form",
      element: localStorageFull ? <Root /> : <Landing />,
      children: [
        {
          path: "/form",
          element: <Form />,
        },
        {
          path: "/form/api",
          element: <Api />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
