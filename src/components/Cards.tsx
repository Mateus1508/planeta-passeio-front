import { CardType } from '../types/CardType';
import Image from 'next/image';

const cardsArray: CardType[] = [
  {
    image: '/cards-images/italia-image.jpg',
    title: 'Itália',
    text: 'Navegar pelos canais mágicos de Veneza é como entrar em um conto de fadas aquático, onde as gôndolas deslizam suavemente pelas águas serenas, revelando a beleza única da cidade das pontes. Em Veneza, cada esquina é uma pintura viva, e cada passeio é uma jornada romântica através de séculos de história e charme intemporal.',
  },
  {
    image: '/cards-images/franca-image.jpg',
    title: 'Brasil',
    text: 'Salvador, é um espetáculo cultural que dança ao ritmo do axé e do samba. Com suas praias vibrantes, o Pelourinho preserva a história em suas coloridas construções coloniais, enquanto as festas populares, como o Carnaval, transformam as ruas em uma celebração pulsante de alegria e diversidade. Em Salvador, cada esquina conta uma história, e cada sorriso reflete a calorosa alma baiana.',
  },
  {
    image: '/cards-images/brasil-image.jpg',
    title: 'França',
    text: 'Explorar Paris é imergir em um romance eterno, onde a Torre Eiffel se destaca majestosamente no horizonte, os cafés acolhedores sussurram segredos culturais e as avenidas parisienses são palcos de elegância artística. A Cidade Luz encanta com sua fusão única de arquitetura grandiosa e um estilo de vida cosmopolita.',
  },
  {
    image: '/cards-images/maldivas-image.jpg',
    title: 'Maldivas',
    text: 'Nas Maldivas, o paraíso se revela sob o brilho do sol e a transparência das águas azul-turquesa. Bangalôs sobre palafitas convidam para uma fuga romântica, enquanto os recifes de coral oferecem um espetáculo subaquático de biodiversidade. Cada ilha é um oásis de serenidade, onde o tempo se desacelera, e a beleza do Oceano Índico se torna um refúgio inesquecível.',
  },
];

const Cards = () => {
  return (
    <div className='flex justify-center w-full gap-6 flex-wrap mx-6'>
      {cardsArray.map((card: CardType, index) => {
        return (
          <div
            className='flex flex-col h-[34rem] w-96 shadow-md shadow-grey bg-white hover:scale-105 ease-in duration-200'
            key={index}
          >
            <Image src={card.image} width={400} height={300} alt='' />
            <h1 className='text-2xl font-bold p-2'>{card.title}</h1>
            <p className='px-4 text-justify'>{card.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
