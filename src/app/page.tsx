import Cards from '@/components/Cards';
import Image from 'next/image';

const Home = () => {
  return (
    <div className='flex h-max pb-5 flex-col'>
      <div
        className='flex justify-center h-[100vh] bg-cover bg-fixed bg-center bg-no-repeat'
        style={{
          backgroundImage: `url('home-image.jpg')`,
        }}
      >
        <Image
          src='/logo-planeta-passeio.png'
          alt=''
          width={500}
          height={500}
          className='self-center'
        />
        <h1 className='text-6xl font-bold mt-12 w-2/5 text-white uppercase'>
          Descubra, Explore, Viva! Seu Passaporte para Aventuras{' '}
          <strong className='uppercase text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-900'>
            INESQUECÍVEIS
          </strong>
        </h1>
      </div>
      <h1 className='my-8 text-4xl w-max font-bold self-center text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-900 border-b-4 px-2 pb-2 border-blue-400'>
        Explore novos lugares
      </h1>
      <Cards />
    </div>
  );
};

export default Home;
