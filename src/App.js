import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Listitem from './components/Listitem';

const gamesListData = [
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends",
  },
  {
    url: "https://www.twitch.tv/directory/game/VALORANT",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Imagem do jogo Valorant",
  },
  {
    url: "https://www.twitch.tv/directory/game/Minecraft",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft",
  },
  {
    url: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt: "Imagem do jogo TFT",
  },
];

const channelListData = [
  {
    url: "https://www.twitch.tv/maykbrito",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt: "Imagem de Mayk Brito",
  },

  {
    url: "https://www.twitch.tv/alanzoka",
    imageUrl:"https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-150x150.png",
    alt: "Imagem de Alanzoka",
  },

  {
    url: "https://www.twitch.tv/cellbit",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/cb885149-f7f7-48f0-99ae-fe0a386ed3e2-profile_image-150x150.png",
    alt: "Imagemd de Cellbit",
  },
];

const socialListData = [
  {
    url: "https://instagram.com/react",
    imageUrl: "/assets/instagram.svg",
    alt: "instagram",
  },

  {
    url: "https://X.com/react",
    imageUrl: "/assets/X.svg",
    alt: "X",
  },

  {
    url: "https://youtube.com/react",
    imageUrl: "/assets/youtube.svg",
    alt: "youtube",
  },
  
  {
    url: "https://twitch.com/react",
    imageUrl: "/assets/twitch.svg",
    alt: "twitch",
  },
];

function App() {
  return (
    <div className="App">
    <Header/>
      <main>
        <Section
          title="Meus jogos"
          subtitle="Os games que mais curto jogar"
          className="games-list"
        >
          {gamesListData.map(function (index) {
            return (
              <Listitem
                url={index.url}
                imageUrl={index.imageUrl}
                alt={index.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Canais e Streamers"
          subtitle="Canais e streamers favoritos"
          className="channel-list"
          >
          {channelListData.map(function (index) {
            return (
              <Listitem
                url={index.url}
                imageUrl={index.imageUrl}
                alt={index.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Minhas redes"
          subtitle="Se conecte comigo!"
          className="social-list"
        >
          {
            socialListData.map(function(index)
            {
              return (
                <Listitem
                  url={index.url}
                  imageUrl={index.imageUrl}
                  alt={index.alt}
                />
              );
            })
          }
        </Section>
      </main>
    </div>
  );
}

export default App;
