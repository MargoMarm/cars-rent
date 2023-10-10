import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { ContentWrapper } from './SharedLayout.styled';
import Sidebar from 'components/Sidebar/Sidebar';

const SharedLayout = () => {
  return (
    <>
		  <Sidebar />
      <ContentWrapper>
        <Suspense fallback={<Loader color={'#0fc1dd'} size={'50'} />}>
          <Outlet />
        </Suspense>
		  </ContentWrapper>
		  
    </>
  );
};

export default SharedLayout;
