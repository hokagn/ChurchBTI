import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Test from "./Test";
import Result from "./Result";
import styled, { createGlobalStyle } from "styled-components";

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
    height: 100vh;
    display: flex;
    justify-content: center;
  `;
  const GlobalStyle = createGlobalStyle`
  *
  {
    background-color: #d8ff9c;
  }

  `;
  return (
    <Wrapper>
      <GlobalStyle></GlobalStyle>
      <RouterProvider router={router}></RouterProvider>
    </Wrapper>
  );
}
