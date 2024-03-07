import { Navbar } from 'components/navbar';
import Footer from 'components/footer';
import pageStyles from 'components/layout/layout.module.scss';

interface PageLayoutProps {
   children: React.ReactNode | React.ReactNode[];
}

const PageLayout = ({ children }: PageLayoutProps) => {
   return (
      <section className={pageStyles.layout}>
         <Navbar />
         {children}
         <Footer />
      </section>
   );
};

export default PageLayout;
