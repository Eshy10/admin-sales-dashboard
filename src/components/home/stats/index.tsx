import { Link } from 'react-router-dom';
import { StatsImage, SmallYellowBackground, BlackArrow } from 'images';
import ScrollAnimation from 'components/scrollAnimation';
import styles from './stats.module.scss';

const ArtistStats = () => {
   const artistContent = [
      'Figma files can also be downloaded from our store. These files include the latest Figma features and are synced with the Webflow template.',
      'Figma files can also be downloaded from our store. These files include the latest Figma features and are synced',
      'Figma files can also be downloaded from our store. These files include the latest Figma features and are synced with the Webflow template.',
   ];
   return (
      <ScrollAnimation>
         <section className="flex flex-col min-[990px]:flex-row w-full">
            <div className={styles['stats_background']}>
               <h1 className="text-[#1A1D1F] min-[990px]:text-[38px] text-[20px]  font-bold font-[Durk-Wide-Bold] mb-6">
                  USE YOUR STATS TO MAKE MOVES
               </h1>
               {artistContent.map((artist) => (
                  <p className="text-[#1A1D1F] leading-8 font-[19px] mb-6">{artist}</p>
               ))}
               <Link to={'/'}>
                  <div className="flex items-center">
                     <p className="text-[#1A1D1F] font-[17px]">Try it now</p>
                     <img src={BlackArrow} alt="arrow-icon" className="ml-[0.3rem]" />
                  </div>
               </Link>
            </div>
            <div className="w-full p-20 flex justify-between">
               <div className="relative w-full">
                  <img src={StatsImage} alt="stats-img" className="z-10 w-full relative" />
                  <img
                     src={SmallYellowBackground}
                     alt="yellow-background"
                     className="absolute w-full left-[-4px] top-[12px] m-0"
                  />
               </div>
            </div>
         </section>
      </ScrollAnimation>
   );
};

export default ArtistStats;
