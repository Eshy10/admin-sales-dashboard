import { HomeHeader, FindArtiste, JoinArtiste, ArtistCareer, ArtisteStats } from 'components/home';

const Home = () => {
   return (
      <>
         <HomeHeader />
         <ArtistCareer />
         <ArtisteStats />
         <FindArtiste />
         <JoinArtiste />
      </>
   );
};

export default Home;
