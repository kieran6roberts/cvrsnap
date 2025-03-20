import { HEXColor } from '~/shared/consts';

export const DEFAULT_GRADIENT_DIRECTION = 90;

export const GRADIENT_PRESETS: {
  id: string;
  name: string;
  value: {
    colors: HEXColor[];
    type: string;
  };
}[] = [
  {
    id: 'romance',
    name: 'Romance',
    value: {
      colors: ['#FA2047', '#4A1545'],
      type: 'linear-gradient'
    }
  },
  {
    id: 'sunset',
    name: 'Sunset',
    value: {
      colors: ['#E9E731', '#E88039'],
      type: 'linear-gradient'
    }
  },
  {
    id: 'darkness',
    name: 'Darkness',
    value: {
      colors: ['#050104', '#260328'],
      type: 'linear-gradient'
    }
  },
  {
    id: 'green-blue',
    name: 'Green blue',
    value: {
      colors: ['#78FFD6', '#3b3e39'],
      type: 'linear-gradient'
    }
  },
  {
    id: 'bunch-of-grapes',
    name: 'Bunch of grapes',
    value: {
      colors: ['#834d9b', '#d04ed6'],
      type: 'linear-gradient'
    }
  },
  {
    id: 'green-tea',
    name: 'Green tea',
    value: {
      colors: ['#FFD14D', '#46DB87'],
      type: 'linear-gradient'
    }
  },
  {
    id: 'feeling-peachy',
    name: 'Feeling peachy',
    value: {
      colors: ['#fd746c', '#ff9068'],
      type: 'linear-gradient'
    }
  },
  {
    id: 'midnight',
    name: 'Midnight',
    value: {
      colors: ['#6B11CD', '#1B1C23'],
      type: 'linear-gradient'
    }
  },
  {
    id: 'night-sky',
    name: 'Night sky',
    value: {
      colors: ['#387FB1', '#8A1BD2'],
      type: 'linear-gradient'
    }
  },
  {
    id: 'sweet-sweets',
    name: 'Sweet sweets',
    value: {
      colors: ['#EC36AB', '#E9FD49'],
      type: 'linear-gradient'
    }
  },
  {
    id: 'purple-haze',
    name: 'Purple haze',
    value: {
      colors: ['#E2D8DF', '#DBC1DE'],
      type: 'linear-gradient'
    }
  },
  {
    id: 'beachfront',
    name: 'Beachfront',
    value: {
      colors: ['#E1F5C4', '#EDE574'],
      type: 'linear-gradient'
    }
  },
  {
    id: 'just-cool',
    name: 'Just cool',
    value: {
      colors: ['#A5FECB', '#20BDFF', '#5433FF'],
      type: 'linear-gradient'
    }
  },
  {
    id: 'blue-lake',
    name: 'Blue lake',
    value: {
      colors: ['#6DD5ED', '#2193B0'],
      type: 'linear-gradient'
    }
  },
  {
    id: 'cotton-candy',
    name: 'Cotton candy',
    value: {
      colors: ['#FBC7D4', '#9796F0'],
      type: 'linear-gradient'
    }
  },
  {
    id: 'buzz',
    name: 'Buzz',
    value: {
      colors: ['#051937', '#004d7a', '#008793', '#00bf72', '#a8eb12'],
      type: 'linear-gradient'
    }
  },
  {
    id: 'blossom',
    name: 'Blossom',
    value: {
      colors: ['#C5C4B3', '#CE3468'],
      type: 'linear-gradient'
    }
  }
];
