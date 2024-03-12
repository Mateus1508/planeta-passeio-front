const Nav = () => {
  return (
    <div className='flex justify-between px-24 h-[7vh] items-center'>
      <div className='flex justify-center items-center'>
        <h1 className='text-2xl font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-900'>
          Planeta passeio
        </h1>
      </div>
      <ul className='flex gap-9'>
        <li>
          <a
            className='text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-900 font-bold uppercase'
            href='/'
          >
            Início
          </a>
        </li>
        <li>
          <a
            className='text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-900 font-bold uppercase'
            href='/services'
          >
            Nossos pacotes
          </a>
        </li>
        <li>
          <a
            className='text-transparent bg-clip-text bg-gradient-to-r font-semibold from-sky-400 to-blue-900 uppercase'
            href='/about'
          >
            Sobre nós
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
