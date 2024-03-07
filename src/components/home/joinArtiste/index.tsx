import { ArtistWiz, ArtistBurna, ArtistTiwa, ArtistRema, Artist2 } from 'images';
import ScrollAnimation from 'components/scrollAnimation';

const allArtist = [
   {
      image: ArtistWiz,
      classNames: 'absolute w-[15%] min-[990px]:w-[14%] left-[5%] top-0',
   },
   {
      image: ArtistTiwa,
      classNames: 'absolute top-0 left-[45%]  w-[15%] min-[990px]:w-[14%]',
   },
   {
      image: ArtistBurna,
      classNames:
         'absolute top-[50px] min-[990px]:top-[200px] left-[80px] min-[990px]:left-[300px]   w-[15%] min-[990px]:w-[14%]',
   },
   {
      image: ArtistRema,
      classNames:
         'absolute top-[50px]  min-[990px]:top-[200px] right-[80px] min-[990px]:right-[300px] w-[15%] min-[990px]:w-[14%]',
   },
   {
      image: Artist2,
      classNames: 'absolute top-0 right-[5%] w-[15%] min-[990px]:w-[14%]',
   },
];

const JoinArtist = () => {
   return (
      <ScrollAnimation>
         <section className="w-full  p-10 pt-20 pb-[10rem] min-[990px]:pb-[40rem]">
            <h1 className="text-white text-[20px] min-[990px]:text-[38px] text-center font-bold font-[Durk-Wide-Bold] mb-6">
               JOIN TOP ARTISTS,
               <br /> BUILD YOUR <span className="text-[#E1F16B]">FANBASE</span>
            </h1>
            <p className="text-[#6F767E] text-center leading-8 text-[16px] min-[990px]:text-[19px]  mb-6">
               Figma files can also be downloaded from our store. These <br /> files include the
               latest Figma features and are synced
            </p>
            <div className="relative w-full mt-20">
               {allArtist.map((artist) => (
                  <img src={artist.image} className={artist.classNames} alt="artist" />
               ))}
            </div>
         </section>
      </ScrollAnimation>
   );
};

export default JoinArtist;
