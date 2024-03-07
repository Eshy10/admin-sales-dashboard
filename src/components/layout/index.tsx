import { Outlet } from "react-router-dom";
import { Sidebar } from '..';
import pageStyles from 'components/layout/layout.module.scss';

interface PageLayoutProps {
   children: React.ReactNode | React.ReactNode[];
}

const PageLayout = ({ children }: PageLayoutProps) => {
   return (
      <section className={pageStyles["page-wrapperr"]}>
         <Sidebar />
         {children}
         <div className={pageStyles["content-wrapper"]}>
        <Outlet />
      </div>
      </section>
   );
};

export default PageLayout;
