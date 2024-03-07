import { TemsBackground } from 'images';
import ScrollAnimation from 'components/scrollAnimation';

// For this i couldn't get the actual background image from figma, so i couldn't apply the text and background gradient myself. Apologies

const FindArtiste = () => {
   return (
      <ScrollAnimation>
         <section className="w-full">
            <img src={TemsBackground} alt="tems-background-image" className="w-full" />
         </section>
      </ScrollAnimation>
   );
};

export default FindArtiste;
