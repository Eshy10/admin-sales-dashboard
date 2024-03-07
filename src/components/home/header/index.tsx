import { Link } from 'react-router-dom';
import { Artist1, ArtistDavid, ArrowIcon } from 'images';

const Header = () => {
   return (
      <section className="flex w-full pt-36 p-20 min-[990px]:pb-[15rem]">
         <div className="w-full min-[990px]:w-[716px]">
            <p className="text-white min-[990px]:text-[50px] text-[20px] font-bold font-[Durk-Wide-Bold]">
               AN INNOVATIVE PLATFORM THAT
            </p>
            <p className="text-[#E1F16B] max-[990px]:text-[20px] text-[50px] font-bold font-[Durk-Wide-Bold] mt-4">
               SUPPORTS ARTISTS.
            </p>
            <p className="text-white max-[990px]:text-[16px] text-[19px] leading-8 mt-5 w-full min-[990px]:w-[400px]">
               Figma files can also be downloaded from our store. These files include the latest
               Figma features and are{' '}
            </p>
            <Link to={'/'}>
               <div className="flex items-center mt-6">
                  <p className="text-[#E1F16B] text-[17px]">Try it now</p>
                  <img src={ArrowIcon} alt="arrow-icon" className="ml-[0.3rem]" />
               </div>
            </Link>
         </div>
         <div className="max-[990px]:hidden w-1/2">
            <div className="relative w-full">
               <img
                  src={Artist1}
                  alt="female-artiste"
                  className="absolute top-[200px] left-[-150px] w-1/2"
               />
               <img
                  src={ArtistDavid}
                  alt="davido-artiste"
                  className="absolute top-0 right-0 w-1/2"
               />
            </div>
         </div>
      </section>
   );
};

export default Header;
