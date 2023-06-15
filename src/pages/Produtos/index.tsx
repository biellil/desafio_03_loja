import Card from '../../pages/components/fotsCard/Card';


export default function Destaque() {

  const images = [
    '/card01.jpg',
    '/card03.jpg',
    '/card02.png',
  ];

    return (
   <>
      <Card images={images} />
      </>

    );
  }
  
  