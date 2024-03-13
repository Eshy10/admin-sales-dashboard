import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import PageLoading from './components/loader';
import PageLayout from './components/layout';
import ErrorBoundary from './components/ErrorBoundary';
import { SidebarProvider } from './context/sidebarContext';
import { ThemeProvider } from './context/themeContext';

export const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));
export const PageNotFound = lazy(() => import('./pages/PageNotFound'));

interface Routes {
   path: string;
   element: React.ReactNode;
}

const getRouteElement = (Component: React.ElementType): React.ReactNode => (
   <Suspense fallback={<PageLoading />}>
      <ErrorBoundary>
      <ThemeProvider>
    <SidebarProvider>
      <PageLayout>
         <Component />
      </PageLayout>
      </SidebarProvider>
  </ThemeProvider>
      </ErrorBoundary>
   </Suspense>
);

const routes: Routes[] = [
   { path: '/', element: getRouteElement(Dashboard) },
   { path: '*', element: getRouteElement(PageNotFound) },
];

export default function Paths() {
   return createBrowserRouter(routes);
}
