import { PackageType } from '../types/PackageType';

const Packages = () => {
  const packagesArray: PackageType[] = [
    {
      title: 'Cruzeiro pela Europa',
      image: '/package-images/navio-image.jpg',
      countries: 'França - Portugal - Itália',
      description:
        'Explore o encanto europeu em nosso pacote de viagem de navio exclusivo. Navegue pelos icônicos destinos da França, Itália e Portugal, vivenciando a elegância parisiense, a rica história romana e as paisagens deslumbrantes de Portugal. Desfrute de experiências culturais únicas, gastronomia refinada e aventuras inesquecíveis enquanto cruzamos os mares em uma jornada que combina luxo e descobertas. Uma viagem imperdível para os amantes de destinos sofisticados e autênticos.',
      price: 'R$ 10.000,00',
    },
    {
      title: 'Cruzeiro pelas ilhas do Caribe',
      image: '/package-images/navio-image.jpg',
      countries: 'Ilhas do Caribe',
      description:
        'Explore o Caribe, um paraíso de praias de areia branca e águas cristalinas. De Havana a Trinidad, mergulhe na cultura vibrante de Cuba, sinta a energia do reggae na Jamaica, relaxe nas praias de Punta Cana na República Dominicana, descubra a história em Porto Rico, desfrute da beleza de Barbados e termine com o carnaval em Trinidad e Tobago. Uma viagem única pelas ilhas caribenhas, onde a natureza deslumbrante encontra a rica herança cultural.',
      price: 'R$ 15.000,00',
    },
    {
      title: 'Ônibus pela América latina',
      image: '/package-images/onibus-image.jpg',
      countries: 'Argentina - Peru - Uruguai',
      description:
        'Embarque em uma emocionante jornada de ônibus pelos encantos da América Latina. Este pacote de viagem levará você por três países fascinantes, explorando suas culturas vibrantes e paisagens deslumbrantes. Deixe-se envolver pela energia cosmopolita de Buenos Aires, na Argentina, mergulhe na rica herança histórica de Lima, no Peru, e maravilhe-se com as praias paradisíacas de Punta del Este, no Uruguai. Uma aventura terrestre que proporcionará uma experiência autêntica e diversificada, conectando-se com a essência cativante da América Latina.',
      price: 'R$ 6.000,00',
    },
  ];

  return (
    <div className='flex gap-6'>
      {packagesArray.map((item: PackageType, index) => {
        return (
          <div
            key={index}
            className='flex flex-col h-[42rem] w-96 shadow-md shadow-grey bg-white hover:scale-105 ease-in duration-200'
          >
            <img src={item.image} alt='' className='w-96 h-64' />
            <h1 className='text-5xl text-orange-500 font-bold p-2 absolute '>
              {item.price}
            </h1>
            <h1 className='text-2xl font-bold py-2 px-4'>{item.title}</h1>
            <p className='px-4 text-justify'>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Packages;
