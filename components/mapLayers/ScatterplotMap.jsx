import React from 'react';
import { render } from 'react-dom';
import StaticMap from 'react-map-gl';
import DeckGL from '@deck.gl/react';
import { ScatterplotLayer } from '@deck.gl/layers';

/************************************************************************* MAP BOX TOKEN */

const MAP_BOX_TOKEN = process.env.NEXT_PUBLIC_MAP_BOX_TOKEN;

/************************************************************************* DATA SOURCE */

// Source data CSV
const DATA_URL =
  'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/scatterplot/manhattan.json';

/************************************************************************* VIEW STATE */

const INITIAL_VIEW_STATE = {
  longitude: -74,
  latitude: 40.7,
  zoom: 11,
  maxZoom: 16,
  pitch: 0,
  bearing: 0,
};

/************************************************************************* MAP STYLE */

const MAP_STYLE =
  'https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json';

/************************************************************************* SCATTER PLOT LAYER */

const MALE_COLOR = [0, 128, 255];
const FEMALE_COLOR = [255, 0, 128];

export default function Test({
  data = DATA_URL,
  radius = 30,
  maleColor = MALE_COLOR,
  femaleColor = FEMALE_COLOR,
  mapStyle = MAP_STYLE,
}) {
  const layers = [
    new ScatterplotLayer({
      id: 'scatter-plot',
      data,
      radiusScale: radius,
      radiusMinPixels: 0.5,
      getPosition: (d) => [d[0], d[1], 0],
      getFillColor: (d) => (d[2] === 1 ? maleColor : femaleColor),
      getRadius: 1,
      updateTriggers: {
        getFillColor: [maleColor, femaleColor],
      },
    }),
  ];

  return (
    <DeckGL
      layers={layers}
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
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
