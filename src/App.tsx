import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Test from "./Test";
import Result from "./Result";
import styled from "styled-components";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Home />,
    },
    {
      path: "/test",
      element: <Test />,
    },
    {
      path: "/result",
      element: <Result />,
    },
  ]);
  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  `;
  return (
    <Wrapper>
      <RouterProvider router={router}></RouterProvider>
    </Wrapper>
  );
}
