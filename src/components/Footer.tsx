const Footer = () => {
  return (
    <footer className='flex h-max justify-evenly bg-gradient-to-r p-5 from-sky-400 to-blue-900'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <h3 className='text-xl font-bold text-white border-b-sky-600 border-b-2'>
          Links Rápidos
        </h3>
        <a className='text-white ' href='/services'>
          Nossos pacotes
        </a>
        <a className='text-white ' href='/about'>
          Sobre Nós
        </a>
        <a className='text-white ' href='#'>
          Contato
        </a>
        <a className='text-white ' href='#'>
          Política de Privacidade
        </a>
        <a className='text-white ' href='#'>
          Termos de Serviço
        </a>
      </div>

      <div className='flex flex-col justify-center items-center gap-2'>
        <h3 className='text-xl font-bold text-white border-b-sky-300 border-b-2'>
          Destinos Populares
        </h3>
        <a className='text-white ' href='#'>
          Europa
        </a>
        <a className='text-white ' href='#'>
          Ásia
        </a>
        <a className='text-white ' href='#'>
          Américas
        </a>
      </div>

      <div className='flex flex-col justify-center items-center gap-2'>
        <h3 className='text-xl font-bold text-white border-b-sky-400 border-b-2'>
          Redes Sociais
        </h3>
        <a className='text-white ' href='#'>
          Facebook
        </a>
        <a className='text-white ' href='#'>
          Twitter
        </a>
        <a className='text-white ' href='#'>
          Instagram
        </a>
      </div>

      <div className='flex flex-col justify-center items-center gap-2'>
        <h3 className='text-xl font-bold text-white border-b-sky-500 border-b-2'>
          Newsletter
        </h3>
        <p className='text-white'>
          Assine nossa newsletter para ofertas especiais.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
