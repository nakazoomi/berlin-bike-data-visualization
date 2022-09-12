import ShowMap from '../components/showMap';
import Head from 'next/head';
import { FaFileVideo } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <Head>
        <title>Berlin Bike Data Visualization</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <div className="main__container">
        <div className="red__wrapper">
          <p>Bikes in Berlin 2020</p>
          <h1>Data Visualization</h1>

          <div className="video-information">
            <h2>Information:</h2>

            <p>
              Ich habe ein Video aufgenommen um meine Herangehensweise
              aufzuzeichnen. Da ich mit verschiedenen Projekten gearbeitet habe,
              gibt es kein Github Tracking. Ich habe vor allem die
              Dokumentationen von Mapbox, React-Map.gl, Deck.gl und Loaders.gl
              gelesen sowie mit den Beispielen der Dokumentationen gearbeitet
              und Tutorials zu den Libraries angeschaut. Später habe ich das
              ganze dann in mein eigenes Next.js Projekt integriert.
            </p>
            <p>
              Es hat viel Spaß gemacht mehr über diese Libraries zu lernen und
              ich bin total beeindruckt welche faszinierenden
              Darstellungsmöglichkeiten die Libraries bieten. Ich habe ein
              besseres Verständnis für die Zusammenhänge bekommen und mir ist
              aufgefallen das sich die Herangehensweise nicht allzu sehr von
              Three.js unterscheidet.
            </p>

            <p>
              Leider hat es nicht mehr gereicht die ganze Aufgabe fertig zu
              stellen, da ich bis zum Schluss noch Schwierigkeiten ahtte den
              Webpack bundler richtig zu konfigurieren. Ich weiß allerdings wie
              ich weiter machen muss umd die Aufgabe zu lösen. Ich habe vieles
              gelernt und werde die Libraries in Zukunft auf jeden Fall
              weiterhin verwendet.
            </p>

            <div className="video-link">
              <h2>Link zum Video: </h2>
              <a href="http://gofile.me/4Vmee/TERuqNKm9">
                http://gofile.me/4Vmee/TERuqNKm9
              </a>
              <p>PW: DataVisualization</p>
              <p>Länge: 30:20 min</p>
            </div>
          </div>
        </div>
        <div className="map__wrapper">
          <ShowMap />
        </div>
      </div>
    </>
  );
}
