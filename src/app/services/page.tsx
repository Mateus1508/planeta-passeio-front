import Packages from '@/components/Packages';

const Services = () => {
  return (
    <div className='h-[100vh] flex flex-col items-center'>
      <h1 className='my-8 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-900 border-b-4 px-2 pb-2 border-blue-400'>
        Nossos pacotes
      </h1>
      <Packages />
    </div>
  );
};

export default Services;
