import mardanTwei from './mardanTwei';
import Sword from './Sword';

export default new Sword(
  'Mardan Eins',
  {
    alt: 'An ornate sword with a blue hilt and a light blue blade with an ornate eye.',
    pathFragment: 'mardanEins',
  },
  {
    buildsUpInto: new Set([mardanTwei]),
  }
);
