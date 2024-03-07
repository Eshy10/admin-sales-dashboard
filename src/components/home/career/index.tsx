import { Link } from 'react-router-dom';
import { AllArtists, YellowBackground, BlackArrow } from 'images';
import ScrollAnimation from 'components/scrollAnimation';

const ArtistCareer = () => {
   const artistContent = [
      'Figma files can also be downloaded from our store. These files include the latest Figma features and are synced with the Webflow template.',
      'Figma files can also be downloaded from our store. These files include the latest Figma features and are synced',
      'Figma files can also be downloaded from our store. These files include the latest Figma features and are synced with the Webflow template.',
   ];
   return (
      <ScrollAnimation>
         <section className="flex bg-[#EFEFEF] p-10 pt-20 min-[990px]:pb-[15rem]">
            <div className="max-[990px]:hidden w-full relative">
               <img
                  src={AllArtists}
                  alt="all-artist"
                  className="absolute top-[10px] h-[590px] left-[-10px] z-10 m-0 rotate-[-0.5deg]"
               />
               <img
                  src={YellowBackground}
                  alt="yellow-background"
                  className="absolute  left-[-20px] m-0 "
               />
            </div>
            <div>
               <h1 className="text-[#1A1D1F] min-[990px]:text-[38px] text-[20px] font-bold font-[Durk-Wide-Bold] mb-6">
                  YOUR CAREER IS IN YOUR HANDS
               </h1>
               {artistContent.map((artist) => (
                  <p className="text-[#1A1D1F] leading-8 font-[19px] mb-6">{artist}</p>
               ))}
               <Link to={'/'}>
                  <div className="flex items-center mt-8">
                     <p className="text-[#1A1D1F] font-[17px]">Try it now</p>
                     <img src={BlackArrow} alt="arrow-icon" className="ml-[0.3rem]" />
                  </div>
               </Link>
            </div>
         </section>
      </ScrollAnimation>
   );
};

export default ArtistCareer;
