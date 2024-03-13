import { Outlet } from "react-router-dom";
import { Sidebar } from '..';
import pageStyles from './layout.module.scss';

interface PageLayoutProps {
   children: React.ReactNode | React.ReactNode[];
}

const PageLayout = ({ children }: PageLayoutProps) => {
   return (
      <section className={pageStyles["page-wrapper"]}>
         <Sidebar />
         <div className={pageStyles["content-wrapper"]}>
         {children}
      </div>
      </section>
   );
};

export default PageLayout;
