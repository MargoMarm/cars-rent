import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";
import { ContentWrapper, LoaderStyled } from "./SharedLayout.styled";
import Sidebar from "components/Sidebar/Sidebar";

const SharedLayout = () => {
  return (
    <>
      <Sidebar />
      <ContentWrapper>
        <Suspense
          fallback={
            <LoaderStyled>
              <Loader />
            </LoaderStyled>
          }
        >
          <Outlet />
        </Suspense>
      </ContentWrapper>
    </>
  );
};

export default SharedLayout;
