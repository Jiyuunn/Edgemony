import Card from '../components/Card';

interface CardData {
  title: string;
  description: string;
  imageUrl: string;
}

const Home = () => {
  const cardsData: CardData[] = [
    {
      title: 'Yae Miko',
      description: 'Elegante e misteriosa, Yae Miko è una sacerdotessa che incarna la grazia e il potere di una divinità kitsune. Con la sua aura incantevole e la connessione con l’elemento Electro, guida con saggezza e intrigo attraverso le trame del destino, mantenendo un equilibrio sottile tra il sacro e il profano.',
      imageUrl: 'https://i.pinimg.com/736x/e3/9b/a3/e39ba3e96205e9287123d938adb2b8fe.jpg' // Usa l'URL reale dell'immagine di Yae Miko
    },
    {
      title: 'Xianyun',
      description: 'Dalla presenza enigmaticamente serena, Xianyun è un eroe la cui storia è avvolta nel mistero. Con un fascino che riflette la sua saggezza interiore e una forza che si manifesta in ogni gesto, Xianyun si muove tra le ombre e la luce, rivelando la sua vera natura solo a chi sa osservare con attenzione.',
      imageUrl: 'https://i.pinimg.com/736x/97/2d/43/972d432d79ee36a6ea8987aee85dad0f.jpg' // Usa l'URL reale dell'immagine di Xianyun
    },
    {
      title: 'Tighnari',
      description: 'Custode delle foreste e maestro della natura, Tighnari è un esploratore che vive in armonia con l’ambiente che lo circonda. Con una profonda conoscenza delle piante e delle creature che popolano i boschi, guida i viandanti con la sua saggezza, offrendo loro un rifugio sicuro e una guida esperta nei sentieri selvaggi.',
      imageUrl: 'https://i.pinimg.com/564x/be/57/1d/be571d0c981a335f96fca72b307771ac.jpg' // Usa l'URL reale dell'immagine di Tighnari
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Genshin Impact Characters</h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
