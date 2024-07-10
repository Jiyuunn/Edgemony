// App.jsx
import React from 'react';
import Layout from './Layout';
import VerticalCard from './VerticalCard';
import Card from './Card';

import locandina from './assets/locandina.jpg';
import kuzco1 from './assets/kuzco1.jpg';
import kuzco2 from './assets/kuzco2.jpg';
import kronk1 from './assets/kronk1.jpg';
import kronk2 from './assets/kronk2.jpg';
import izma1 from './assets/izma1.jpg';
import izma2 from './assets/izma2.jpg';

const App = () => {
    return (
        <Layout>
            <VerticalCard image={locandina} />
            <Card image1={kuzco1} image2={kuzco2} title1="vincente" title2="perdente" />
            <Card image1={kronk1} image2={kronk2} title1="" title2="vuoi broccoli?" />
            <Card image1={izma1} image2={izma2} title1="kronk, non ne avverti il nero potere?" title2="oh, caspita, è nero forte" />
        </Layout>
    );
};

export default App;
