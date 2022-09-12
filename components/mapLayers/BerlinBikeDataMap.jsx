import React from 'react';
import StaticMap from 'react-map-gl';
import DeckGL from '@deck.gl/react';
import { MapView } from '@deck.gl/core';
import { ScatterplotLayer } from '@deck.gl/layers';
import { load } from '@loaders.gl/core';
import { CSVLoader } from '@loaders.gl/csv';

/************************************************************************* MAP BOX TOKEN */

const MAP_BOX_TOKEN = process.env.NEXT_PUBLIC_MAP_BOX_TOKEN;

/************************************************************************* DATA SOURCE */

// const DATA_URL = '../../../../data/berlin_bike_data_2020_original.csv';

const DATA_URL = await load(
  'https://raw.githubusercontent.com/nakazoomi/berlin-bike-data/main/berlin_bike_data_2020_original.csv',
  CSVLoader
);

/************************************************************************* VIEW STATE */

const MAP_VIEW = new MapView({ repeat: true });
const INITIAL_VIEW_STATE = {
  longitude: 13.377704,
  latitude: 52.516275,
  zoom: 11,
  maxZoom: 11,
  minZoom: 11,
  pitch: 0,
  bearing: 0,
};

/************************************************************************* MAP STYLE */

const MAP_STYLE =
  'https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json';

/************************************************************************* SCATTER PLOT LAYER */

const MAIN_COLOR = [255, 0, 0];

export default function ScatterplotMap({
  data = DATA_URL,
  radius = 30,
  mapStyle = MAP_STYLE,
}) {
  const layers = [
    new ScatterplotLayer({
      id: 'scatter-plot',
      data,
      radiusScale: radius,
      radiusMinPixels: 5,
      getPosition: (d) => [d.longitude, d.latitude],
      getFillColor: MAIN_COLOR,
      getRadius: 1,
      pickable: true,
      onHover: (info) => setHoverInfo(info),

      loaders: [CSVLoader],
      loadOptions: {
        csv: {
          delimiter: '\t',
          dynamicTyping: true,
          skipEmptyLines: true,
          header: true,
        },
      },
    }),
  ];

  const [hoverInfo, setHoverInfo] = React.useState(false);

  function getTooltip({ object }) {
    return (
      object &&
      `\
      Date and Time: ${object.DateTime}
      Station Name: ${object.station_name}
      Cyclists: ${object.cyclists}
      `
    );
  }

  return (
    <DeckGL
      layers={layers}
      views={MAP_VIEW}
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      getTooltip={getTooltip}
    >
      <StaticMap
        reuseMaps
        mapStyle={mapStyle}
        preventStyleDiffing={true}
        mapboxAccessToken={MAP_BOX_TOKEN}
        initialViewState={INITIAL_VIEW_STATE}
      />
    </DeckGL>
  );
}
