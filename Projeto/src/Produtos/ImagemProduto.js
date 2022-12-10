import luke from '../img/luke.png'
import mandalorian from '../img/mandalorian.png'
import darthvader from '../img/darthvader.png'
import leia from '../img/leia.png'
import obiwan from '../img/obiwan.png'
import chewbacca from '../img/chewbacca.png'
import r2d2 from '../img/r2d2.png'
import c3po from '../img/c3po.png'
import babyyoda from '../img/babyyoda.png'
import bobafett from '../img/bobafett.png'
import darktrooper from '../img/darktrooper.png'
import stormtrooper from '../img/stormtrooper.png'
import kyloren from '../img/kyloren.png'
import rey from '../img/rey.png'
import palpatine from '../img/palpatine.png'

const ImagemProduto = (imagem) => {
  switch(imagem) {
    case "luke":
      return luke;
    case "mandalorian":
      return mandalorian;
    case "darthvader":
      return darthvader;
    case "leia":
      return leia;
    case "obiwan":
      return obiwan;
    case "chewbacca":
      return chewbacca;
    case "r2d2":
      return r2d2;
    case "c3po":
      return c3po;
    case "babyyoda":
      return babyyoda;
    case "darktrooper":
      return darktrooper;
    case "stormtrooper":
      return stormtrooper;
    case "bobafett":
      return bobafett;
    case "kyloren":
      return kyloren;
    case "rey":
      return rey;
    case "palpatine":
      return palpatine;
    default:
      return ;
  }
}

export default ImagemProduto
