import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import PageLoading from 'components/loader';
import PageLayout from 'components/layout';

export const Home = lazy(() => import('pages/Home'));
export const PageNotFound = lazy(() => import('pages/PageNotFound'));

interface Routes {
   path: string;
   element: React.ReactNode;
}

const getRouteElement = (Component: React.ElementType): React.ReactNode => (
   <Suspense fallback={<PageLoading />}>
      <PageLayout>
         <Component />
      </PageLayout>
   </Suspense>
);

const routes: Routes[] = [
   { path: '/', element: getRouteElement(Home) },
   { path: '*', element: getRouteElement(PageNotFound) },
];

export default function Paths() {
   return createBrowserRouter(routes);
}
