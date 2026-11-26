import type { ImageMetadata } from 'astro'
import type { AnimalId, BadgeVariant, CategoryId } from './categories'

import kongExtreme from '../assets/gifts/kong-extreme.webp'
import kongGoodieBone from '../assets/gifts/kong-goodie-bone.webp'
import kongSenior from '../assets/gifts/kong-senior.webp'
import lickimat from '../assets/gifts/lickimat.webp'

import cojinesImpermeables from '../assets/gifts/cojines-impermeables.webp'
import hamacaJaula from '../assets/gifts/hamaca-jaula.webp'
import camaPared1 from '../assets/gifts/cama-pared-1.webp'
import camaPared2 from '../assets/gifts/cama-pared-2.webp'

import piensoNaturalGreatness from '../assets/gifts/pienso-natural-greatness.webp'
import piensoDibaqSensitive from '../assets/gifts/pienso-dibaq-sensitive.webp'
import piensoOwnatSalmon from '../assets/gifts/pienso-ownat-salmon.webp'
import piensoInstintoPato from '../assets/gifts/pienso-instinto-pato.webp'
import piensosOwnat from '../assets/gifts/piensos-ownat.webp'
import piensosEdgarCooper from '../assets/gifts/piensos-edgar-cooper.webp'
import comidaNaturalFoodForJoe from '../assets/gifts/comida-natural-food-for-joe.webp'
import latasComidaHumedaPerros from '../assets/gifts/latas-comida-humeda-perros.webp'
import snacksNaturalesLobitos from '../assets/gifts/snacks-naturales-lobitos.webp'
import snacksNaturalesGuauful from '../assets/gifts/snacks-naturales-guauful.webp'
import snackCaravacaTernera from '../assets/gifts/snack-caravaca-ternera.webp'
import snackTraqueaTernera from '../assets/gifts/snack-traquea-ternera.webp'
import snackOrejaConejo from '../assets/gifts/snack-oreja-conejo.webp'
import snackTirasOrejaCerdo from '../assets/gifts/snack-tiras-oreja-cerdo.webp'
import churuSnackLiquido from '../assets/gifts/churu-snack-liquido.webp'
import churuBites from '../assets/gifts/churu-bites.webp'

import suplementoArticulacionesMiloLola from '../assets/gifts/suplemento-articulaciones-milo-lola.webp'
import suplementoArticulacionesWildBalance from '../assets/gifts/suplemento-articulaciones-wild-balance.webp'
import suplementoUrinarioWildBalance from '../assets/gifts/suplemento-urinario-wild-balance.webp'
import aceiteSardinasCondroprotectores from '../assets/gifts/aceite-sardinas-condroprotectores.webp'
import aceiteSalmonNath from '../assets/gifts/aceite-salmon-nath.webp'
import aceiteSalmonCriadores from '../assets/gifts/aceite-salmon-criadores.webp'
import limpiadorDentalAlga from '../assets/gifts/limpiador-dental-alga.webp'

import arnesAjustableNylonGuauful from '../assets/gifts/arnes-ajustable-nylon-guauful.webp'
import arnesAjustableNylonTiendanimal from '../assets/gifts/arnes-ajustable-nylon-tiendanimal.webp'
import bozalBaskerville from '../assets/gifts/bozal-baskerville.webp'
import rascadorCartonLeeby from '../assets/gifts/rascador-carton-leeby.webp'
import rascadorGoogle from '../assets/gifts/rascador-google.webp'
import alfombraRascadorSisal from '../assets/gifts/alfombra-rascador-sisal.webp'
import carroMangera from '../assets/gifts/carro-mangera-gardena.webp'

export interface Gift {
  id: string
  name: string
  description: string
  category: CategoryId
  animal: AnimalId
  highlight?: string
  badgeOverride?: { label: string; variant: BadgeVariant }
  image?: ImageMetadata
  imageAlt?: string
  storeUrl: string
}

export const GIFTS: Gift[] = [
  // Juguetes
  {
    id: 'kong-extreme',
    name: 'Kong Extreme',
    description:
      'Mordedor de goma ultraresistente para perros con mucha energía. Relleno de snacks o pasta se convierte en un reto divertido y duradero.',
    category: 'juguetes',
    animal: 'perros',
    badgeOverride: { label: 'Ultraresistente', variant: 'berry' },
    image: kongExtreme,
    imageAlt: 'Kong Extreme, mordedor de goma negro para perros',
    storeUrl:
      'https://www.zooplus.es/shop/tienda_perros/juguetes_deporte_perros/kong/extreme/139585',
  },
  {
    id: 'kong-goodie-bone',
    name: 'Kong Goodie Bone',
    description:
      'Hueso de goma resistente con huecos para rellenar de snacks. Mantiene a los perros entretenidos y ayuda a reducir el aburrimiento.',
    category: 'juguetes',
    animal: 'perros',
    image: kongGoodieBone,
    imageAlt: 'Kong Goodie Bone, hueso de goma negro para perros',
    storeUrl:
      'https://www.kiwoko.com/juguetes-perro/kong-goodie-bone-hueso-negro-para-perros/KONJU03039.html',
  },
  {
    id: 'kong-senior',
    name: 'Kong Senior',
    description:
      'Versión más suave de Kong pensada para perros mayores y dientes sensibles. Ideal para rellenar y mantener la mente activa.',
    category: 'juguetes',
    animal: 'perros',
    highlight: 'Para mayores',
    image: kongSenior,
    imageAlt: 'Kong Senior, mordedor rojo para perros mayores',
    storeUrl:
      'https://www.tiendanimal.es/kong-senior-mordedor-para-perros/KONKOKN3E.html',
  },
  {
    id: 'lickimat',
    name: 'Alfombrilla para lamer HOTUT (pack de 2)',
    description:
      'Pack de dos alfombrillas con ventosas para untar yogur, mantequilla de cacahuete o paté. Un juguete de enriquecimiento que calma la ansiedad en perros y gatos.',
    category: 'juguetes',
    animal: 'ambos',
    badgeOverride: { label: 'Anti-ansiedad', variant: 'berry' },
    image: lickimat,
    imageAlt: 'Dos alfombrillas azul y verde para lamer con ventosas',
    storeUrl: 'https://www.amazon.es/dp/B0F488N6DL',
  },

  // Camas y mantas
  {
    id: 'cojines-impermeables',
    name: 'Cojines de banco impermeables',
    description:
      'Cojines acolchados e impermeables para bancos y zonas de descanso. Aportan comodidad y son fáciles de limpiar.',
    category: 'camas-mantas',
    animal: 'ambos',
    image: cojinesImpermeables,
    imageAlt: 'Cojín impermeable para banco',
    storeUrl: 'https://www.amazon.es/dp/B0CGTCR696',
  },
  {
    id: 'hamaca-jaula',
    name: 'Hamaca para gato EDAGNY',
    description:
      'Hamaca transpirable y reversible para que los gatos descansen en alto. Se adapta a jaulas y ventanas y soporta hasta 18 kg.',
    category: 'camas-mantas',
    animal: 'gatos',
    highlight: 'Descanso en alto',
    image: hamacaJaula,
    imageAlt: 'Hamaca reversible para gato',
    storeUrl: 'https://www.amazon.es/dp/B0CRYT46R8',
  },
  {
    id: 'cama-pared-1',
    name: 'Estantes y perchas de pared para gatos',
    description:
      'Set de estantes flotantes para crear un circuito de escalada en la pared. Los gatos ganan altura, ejercicio y un lugar propio donde descansar.',
    category: 'camas-mantas',
    animal: 'gatos',
    highlight: 'Para trepar',
    image: camaPared1,
    imageAlt: 'Estantes y perchas de pared para gatos',
    storeUrl: 'https://www.amazon.es/dp/B0HNWNV28H',
  },
  {
    id: 'cama-pared-2',
    name: 'Puente de cuerda multinivel para gatos',
    description:
      'Puente de cuerda para conectar las perchas de pared y ampliar el circuito felino. Fomenta el juego, el equilibrio y el ejercicio diario.',
    category: 'camas-mantas',
    animal: 'gatos',
    highlight: 'Juego y equilibrio',
    image: camaPared2,
    imageAlt: 'Puente de cuerda multinivel para gatos',
    storeUrl: 'https://www.amazon.es/dp/B0HGFV6L79',
  },

  // Alimentación
  {
    id: 'pienso-natural-greatness',
    name: 'Pienso Natural Greatness pato',
    description:
      'Pienso natural con pato como fuente de proteína, sin cereales y con ingredientes de calidad. Pensado para perros de tamaño mediano y grande.',
    category: 'alimentacion',
    animal: 'perros',
    image: piensoNaturalGreatness,
    imageAlt: 'Saco de pienso Natural Greatness con pato',
    storeUrl:
      'https://lobitosco.com/products/naturalgreatness-dog-duck-recipe-med-large?variant=50523920400620',
  },
  {
    id: 'pienso-dibaq-sensitive',
    name: 'Pienso Dibaq Sense Sensitive conejo',
    description:
      'Pienso sin cereales con conejo como proteína principal, formulado para perros con estómagos sensibles o necesidades digestivas especiales.',
    category: 'alimentacion',
    animal: 'perros',
    badgeOverride: { label: 'Sin cereales', variant: 'forest' },
    image: piensoDibaqSensitive,
    imageAlt: 'Saco de pienso Dibaq Sense Sensitive de conejo',
    storeUrl:
      'https://lobitosco.com/products/dibaq-sense-sensitive-conejo-sin-cereales',
  },
  {
    id: 'pienso-ownat-salmon',
    name: 'Pienso Ownat Salmón y Marisco',
    description:
      'Pienso natural elaborado con salmón y marisco, rico en omega-3 y sin cereales. Ayuda a mantener la piel y el pelaje sanos.',
    category: 'alimentacion',
    animal: 'perros',
    highlight: 'Rico en omega-3',
    image: piensoOwnatSalmon,
    imageAlt: 'Saco de pienso Ownat Salmón y Marisco',
    storeUrl:
      'https://patitasco.com/pienso-natural-para-perros/ownat-salmon-marisco-pienso-natural-para-perro-3-kg.html',
  },
  {
    id: 'pienso-instinto-pato',
    name: 'Pienso Instinto pato de granja',
    description:
      'Pienso natural con pato de granja como ingrediente principal. Una receta sabrosa y equilibrada para perros adultos.',
    category: 'alimentacion',
    animal: 'perros',
    image: piensoInstintoPato,
    imageAlt: 'Saco de pienso Instinto de pato de granja',
    storeUrl:
      'https://patitasco.com/pienso-natural-para-perros/instinto-pienso-natural-pato-de-granja-perro.html',
  },
  {
    id: 'piensos-ownat',
    name: 'Pienso Ownat para perros',
    description:
      'Enlace a la gama de piensos Ownat para perros. Podéis elegir el que mejor se adapte a las necesidades del refugio.',
    category: 'alimentacion',
    animal: 'perros',
    image: piensosOwnat,
    imageAlt: 'Pienso Ownat para perros',
    storeUrl: 'https://www.tiendanimal.es/marcas/ownat/perro/pienso/',
  },
  {
    id: 'piensos-edgar-cooper',
    name: 'Pienso Edgard & Cooper',
    description:
      'Selección de piensos Edgard & Cooper para perros, elaborados con ingredientes naturales. Consulta las opciones disponibles en la tienda.',
    category: 'alimentacion',
    animal: 'perros',
    image: piensosEdgarCooper,
    imageAlt: 'Pienso Edgard & Cooper para perros',
    storeUrl: 'https://www.tiendanimal.es/marcas/edgard-cooper/perro/pienso/',
  },
  {
    id: 'comida-natural-food-for-joe',
    name: 'Comida cocinada natural Food for Joe',
    description:
      'Comida húmeda cocinada al vapor con ingredientes naturales. Una opción apetecible y fácil de digerir para complementar la alimentación de los perros del refugio.',
    category: 'alimentacion',
    animal: 'perros',
    image: comidaNaturalFoodForJoe,
    imageAlt: 'Comida cocinada natural Food for Joe',
    storeUrl: 'https://patitasco.com/marca/food-for-joe',
  },
  {
    id: 'latas-comida-humeda-perros',
    name: 'Latas de comida húmeda natural',
    description:
      'Selección de latas de comida húmeda natural para perros. Aportan hidratación y un extra de sabor a la alimentación diaria.',
    category: 'alimentacion',
    animal: 'perros',
    image: latasComidaHumedaPerros,
    imageAlt: 'Lata de comida húmeda Natural Greatness de pavo',
    storeUrl: 'https://patitasco.com/12-comida-humeda-perros',
  },
  {
    id: 'snacks-naturales-lobitos',
    name: 'Snacks naturales Lobitos',
    description:
      'Selección de mordedores deshidratados naturales para perros. Entretenimiento y proteína en un snack sin aditivos.',
    category: 'alimentacion',
    animal: 'perros',
    image: snacksNaturalesLobitos,
    imageAlt: 'Perro comiendo un snack natural deshidratado',
    storeUrl:
      'https://lobitosco.com/collections/mordedores-deshidratados-para-perros',
  },
  {
    id: 'snacks-naturales-guauful',
    name: 'Snacks y mordedores naturales Guauful',
    description:
      'Colección de snacks y mordedores naturales para perros. Opciones sabrosas y entretenidas para premiar y mantener la calma en el refugio.',
    category: 'alimentacion',
    animal: 'perros',
    image: snacksNaturalesGuauful,
    imageAlt: 'Perro disfrutando de un snack natural',
    storeUrl: 'https://guauful.com/collections/snacks-y-mordedores-naturales',
  },
  {
    id: 'snack-caravaca-ternera',
    name: 'Caracava de ternera Hobbitalf',
    description:
      'Snack natural deshidratado de ternera, duro y duradero. Ideal para que los perros se entretengan masticando.',
    category: 'alimentacion',
    animal: 'perros',
    image: snackCaravacaTernera,
    imageAlt: 'Caracava de ternera deshidratada',
    storeUrl:
      'https://www.tiendanimal.es/hobbitalf-caracava-de-ternera-para-perros/HBF606_M.html',
  },
  {
    id: 'snack-traquea-ternera',
    name: 'Tráquea de ternera Hobbitalf',
    description:
      'Snack natural de tráquea de ternera, rico en proteína y bajo en grasa. Un premio crujiente y entretenido.',
    category: 'alimentacion',
    animal: 'perros',
    image: snackTraqueaTernera,
    imageAlt: 'Tráquea de ternera deshidratada',
    storeUrl:
      'https://www.tiendanimal.es/hobbitalf-traquea-de-ternera-para-perros/HBF609_M.html',
  },
  {
    id: 'snack-oreja-conejo',
    name: 'Oreja de conejo con pelo Hobbitalf',
    description:
      'Snack natural de oreja de conejo con pelo, un mordedor sabroso y rico en fibra. Perfecto para premiar o calmar la ansiedad.',
    category: 'alimentacion',
    animal: 'perros',
    image: snackOrejaConejo,
    imageAlt: 'Oreja de conejo con pelo',
    storeUrl:
      'https://www.tiendanimal.es/hobbitalf-oreja-de-conejo-con-pelo-snack-para-perros/HBF612_M.html',
  },
  {
    id: 'snack-tiras-oreja-cerdo',
    name: 'Tiras de oreja de cerdo Hobbitalf',
    description:
      'Tiras naturales de oreja de cerdo, ideales como premio duradero. Aportan proteína y mantienen a los perros entretenidos.',
    category: 'alimentacion',
    animal: 'perros',
    image: snackTirasOrejaCerdo,
    imageAlt: 'Tiras de oreja de cerdo',
    storeUrl:
      'https://www.tiendanimal.es/hobbitalf-tiras-oreja-de-cerdo-snack-para-perros/HBF613_M.html',
  },
  {
    id: 'churu-snack-liquido',
    name: 'Churu snack líquido de pollo',
    description:
      'Pack de 60 sobres de snack líquido de pollo. Un premio irresistible para gatos que también ayuda a hidratarlos.',
    category: 'alimentacion',
    animal: 'gatos',
    badgeOverride: { label: 'Favorito felino', variant: 'flame' },
    image: churuSnackLiquido,
    imageAlt: 'Sobres de Churu snack líquido de pollo',
    storeUrl:
      'https://www.kiwoko.com/gatos/comida-para-gatos/snacks-para-gatos/liquidos/churu-snack-liquido-variedades-de-pollo-para-gatos/URUEU127_M.html',
  },
  {
    id: 'churu-bites',
    name: 'Churu Bites de pollo y atún',
    description:
      'Bocaditos blandos de pollo y atún con salmón. Perfectos para premiar a los gatos y ganarse su confianza.',
    category: 'alimentacion',
    animal: 'gatos',
    image: churuBites,
    imageAlt: 'Bocaditos Churu Bites de pollo y atún',
    storeUrl:
      'https://www.kiwoko.com/gatos/comida-para-gatos/snacks-para-gatos/churu-bites-bocaditos-de-pollo-y-atun-con-salmon-para-gatos-/URUN1723_M.html',
  },

  // Salud y cuidado
  {
    id: 'suplemento-articulaciones-milo-lola',
    name: 'Suplemento articular Milo y Lola',
    description:
      'Complemento natural para reforzar articulaciones y movilidad. Especialmente útil para perros mayores o con desgaste articular.',
    category: 'salud-cuidado',
    animal: 'perros',
    highlight: 'Para articulaciones',
    image: suplementoArticulacionesMiloLola,
    imageAlt: 'Suplemento articular Milo y Lola',
    storeUrl:
      'https://patitasco.com/suplementacion-natural-perros/milo-y-lola-suplemento-fuerza-articular.html',
  },
  {
    id: 'suplemento-articulaciones-wild-balance',
    name: 'Wild Balance Articulaciones de Acero',
    description:
      'Suplemento con colágeno, condroitina y glucosamina para apoyar las articulaciones de perros y gatos. Ayuda a mantener la movilidad en animales mayores.',
    category: 'salud-cuidado',
    animal: 'ambos',
    image: suplementoArticulacionesWildBalance,
    imageAlt: 'Suplemento Wild Balance Articulaciones de Acero',
    storeUrl:
      'https://www.kiwoko.com/gatos/higiene-para-gatos/salud-del-gato/articulaciones/wild-balance-articulaciones-de-acero-suplemento-para-mascotas/WBLWBSPGMA010_M.html',
  },
  {
    id: 'suplemento-urinario-wild-balance',
    name: 'Wild Balance Mix Arándanos y Escaramujo',
    description:
      'Suplemento natural con arándanos y escaramujo para acompañar el equilibrio del tracto urinario de perros y gatos. Sin conservantes ni aditivos.',
    category: 'salud-cuidado',
    animal: 'ambos',
    image: suplementoUrinarioWildBalance,
    imageAlt: 'Suplemento Wild Balance de arándanos y escaramujo',
    storeUrl:
      'https://patitasco.com/suplementacion-natural-perros/wild-balance-suplemento-bienestar-natural-urinario.html',
  },
  {
    id: 'aceite-sardinas-condroprotectores',
    name: 'Aceite de sardina Milo y Lola',
    description:
      'Aceite natural de sardina rico en omega-3, con propiedades condroprotectoras. Ayuda a cuidar articulaciones, piel y pelaje.',
    category: 'salud-cuidado',
    animal: 'perros',
    image: aceiteSardinasCondroprotectores,
    imageAlt: 'Botella de aceite de sardina Milo y Lola',
    storeUrl:
      'https://patitasco.com/suplementacion-natural-perros/milo-y-lola-aceite-de-sardina.html',
  },
  {
    id: 'aceite-salmon-nath',
    name: 'Aceite de salmón noruego Nath',
    description:
      'Aceite de salmón noruego rico en omega-3 para perros y gatos. Contribuye a una piel sana y un pelaje brillante.',
    category: 'salud-cuidado',
    animal: 'ambos',
    highlight: 'Omega-3',
    image: aceiteSalmonNath,
    imageAlt: 'Botella de aceite de salmón Nath',
    storeUrl:
      'https://www.tiendanimal.es/nath-aceite-de-salmon-noruego-para-perros-y-gatos/NTH40120_M.html',
  },
  {
    id: 'aceite-salmon-criadores',
    name: 'Aceite de salmón Criadores',
    description:
      'Aceite de salmón para perros y gatos, fuente natural de omega-3. Un complemento sencillo para cuidar piel, pelo y articulaciones.',
    category: 'salud-cuidado',
    animal: 'ambos',
    image: aceiteSalmonCriadores,
    imageAlt: 'Botella de aceite de salmón Criadores',
    storeUrl:
      'https://www.tiendanimal.es/criadores-aceite-de-salmon-para-perros-y-gatos/CRD00567_M.html',
  },
  {
    id: 'limpiador-dental-alga',
    name: 'Alga Ascophyllum para la boca',
    description:
      'Suplemento natural de alga Ascophyllum para perros y gatos. Ayuda a mantener el aliento fresco y la higiene dental.',
    category: 'salud-cuidado',
    animal: 'ambos',
    highlight: 'Higiene dental',
    image: limpiadorDentalAlga,
    imageAlt: 'Bote de alga Ascophyllum para la higiene dental',
    storeUrl:
      'https://patitasco.com/higiene-dental-gatos/milo-y-lola-alga-ascophyllum-nodosum-para-perros.html',
  },

  // Accesorios
  {
    id: 'arnes-ajustable-nylon-guauful',
    name: 'Arnés de nylon ajustable rojo',
    description:
      'Arnés acolchado de nylon con cierres ajustables y anillas para el paseo. Cómodo y seguro para perros de todos los tamaños.',
    category: 'accesorios',
    animal: 'perros',
    image: arnesAjustableNylonGuauful,
    imageAlt: 'Arnés de nylon rojo ajustable',
    storeUrl: 'https://guauful.com/products/arnes-de-nylon-rojo-ajustable',
  },
  {
    id: 'arnes-ajustable-nylon-tiendanimal',
    name: 'Arnés X-TRM Cronos Neon Flash',
    description:
      'Arnés fucsia con detalles reflectantes para pasear con seguridad cuando hay poca luz. Ajustable y resistente, pensado para perros activos.',
    category: 'accesorios',
    animal: 'perros',
    image: arnesAjustableNylonTiendanimal,
    imageAlt: 'Arnés fucsia reflectante para perros',
    storeUrl:
      'https://www.tiendanimal.es/x-trm-cronos-neon-flash-arnes-fucsia-para-perros/TRMPE69213_M.html',
  },
  {
    id: 'bozal-baskerville',
    name: 'Bozal Baskerville Ultra',
    description:
      'Bozal tipo canasta que permite al perro abrir la boca, beber y respirar con normalidad. Útil para paseos seguros y para perros que lo necesitan por indicación del refugio.',
    category: 'accesorios',
    animal: 'perros',
    highlight: 'Paseos seguros',
    image: bozalBaskerville,
    imageAlt: 'Bozal Baskerville Ultra tipo canasta',
    storeUrl:
      'https://www.tiendanimal.es/baskerville-ultra-muzzle-bozal-tipo-canasta-para-perros/COAMBU01_M.html',
  },
  {
    id: 'rascador-carton-leeby',
    name: 'Tabla rascador de cartón Leeby',
    description:
      'Rascador de cartón ondulado con forma de pez para gatos. Protege los muebles y satisface la necesidad natural de rascar.',
    category: 'accesorios',
    animal: 'gatos',
    image: rascadorCartonLeeby,
    imageAlt: 'Tabla rascador de cartón azul con forma de pez',
    storeUrl:
      'https://www.kiwoko.com/gatos/accesorios-para-gatos/rascadores/rascadores-de-carton/leeby-fitz-tabla-rascador-de-carton-azul-para-gatos/LBB43329_M.html',
  },
  {
    id: 'rascador-google',
    name: 'Poste rascador zooplus Basics',
    description:
      'Poste rascador compacto con base estable y cuerda de sisal. Un básico para que los gatos estiren el cuerpo y cuiden sus uñas.',
    category: 'accesorios',
    animal: 'gatos',
    image: rascadorGoogle,
    imageAlt: 'Poste rascador pequeño con base',
    storeUrl:
      'https://www.zooplus.es/shop/tienda_gatos/rascadores_muebles/rascadores_pequenos/rascadores_pequenos_100cm/2202574',
  },
  {
    id: 'alfombra-rascador-sisal',
    name: 'Alfombra rascador de sisal Nobleza',
    description:
      'Alfombra de sisal natural para que los gatos rascacen sin dañar el suelo ni el sofá. Se puede colocar en el suelo o en la pared.',
    category: 'accesorios',
    animal: 'gatos',
    image: alfombraRascadorSisal,
    imageAlt: 'Alfombra rascador de sisal marrón',
    storeUrl:
      'https://www.tiendanimal.es/nobleza-alfombra-rascador-de-sisal-para-gatos/MRK000208423_M.html',
  },
  {
    id: 'manguera-gardena',
    name: 'Carro y manguera Gardena 25 m',
    description:
      'Carro con manguera de 25 metros para la limpieza diaria del refugio. Una ayuda práctica para mantener las instalaciones frescas y cuidadas.',
    category: 'accesorios',
    animal: 'ambos',
    image: carroMangera,
    imageAlt: 'Carro con Manguera para limpieza',
    highlight: 'Para el refugio',
    storeUrl:
      'https://www.leroymerlin.es/productos/carro-y-manguera-equipada-con-ruedas-gardena-de-25m-de-13mm-de-81907433.html',
  },
]
