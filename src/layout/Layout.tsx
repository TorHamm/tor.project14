import { useState } from "react";
import Header from "../components/Header/Header";
import Main from "../components/MainContent/Main";
import React from "react";

type LayoutProps = {
  children: React.ReactNode[];
};

const Layout = ({ children }: LayoutProps) => {
  const headerContent = children[0];
  const MainContent = children[1];

  const [themeDark, setThemeDark] = useState(false);

  const getTheme = (theme: boolean | ((prevState: boolean) => boolean)) => {
    setThemeDark(theme);
  };

  if (themeDark == true) {
    import("/src/scss/theme/_darkTheme.scss");
  } else {
    import("/src/scss/theme/_lightTheme.scss");
  }

  return (
    <>
      <Header getTheme={getTheme}>
        {headerContent}
      </Header>
      <Main>
        {MainContent}
      </Main>
    </>
  );
};

export default Layout;