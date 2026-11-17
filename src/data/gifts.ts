import type { ImageMetadata } from 'astro'
import type { BadgeVariant, CategoryId } from './categories'

export interface Gift {
  id: string
  name: string
  description: string
  category: CategoryId
  highlight?: string
  badgeOverride?: { label: string; variant: BadgeVariant }
  image?: ImageMetadata
  imageAlt?: string
  /** TODO: replace the placeholder with the real store URL. */
  storeUrl: string
}

export const GIFTS: Gift[] = [
  {
    id: 'juguete-de-cuerda-resistente',
    name: 'Juguete de cuerda resistente',
    description:
      'Juguete de algodón trenzado ideal para el tira y afloja. Refuerza el vínculo humano-canino y mantiene a los perritos activos y entretenidos en el refugio.',
    category: 'juguetes',
    storeUrl: 'https://example.com/juguete-de-cuerda-resistente',
  },
  {
    id: 'manta-polar-navidena',
    name: 'Manta polar navideña',
    description:
      'Manta suave de forro polar con motivos navideños. Perfecta para que los perritos estén calentitos durante las noches frías del invierno en el refugio.',
    category: 'camas-mantas',
    highlight: 'Para el invierno',
    storeUrl: 'https://example.com/manta-polar-navidena',
  },
  {
    id: 'cama-ortopedica-para-perros',
    name: 'Cama ortopédica para perros',
    description:
      'Cama con espuma viscoelástica de alta densidad. Ideal para perros mayores o con problemas articulares. Un descanso de verdad para nuestros veteranos del refugio.',
    category: 'camas-mantas',
    storeUrl: 'https://example.com/cama-ortopedica-para-perros',
  },
  {
    id: 'pienso-premium-para-adultos',
    name: 'Pienso premium para adultos',
    description:
      'Alimento seco de alta calidad, rico en proteína animal y sin cereales. Formulado para cubrir las necesidades nutricionales de perros adultos en el refugio.',
    category: 'alimentacion',
    storeUrl: 'https://example.com/pienso-premium-para-adultos',
  },
  {
    id: 'cesta-de-snacks-navidenos',
    name: 'Cesta de snacks navideños',
    description:
      'Una selección de premios aptos para perros. Consulta con el refugio qué opciones se adaptan a sus necesidades antes de comprar.',
    category: 'alimentacion',
    highlight: 'Más novedad',
    badgeOverride: { label: 'Especial Navidad', variant: 'berry' },
    storeUrl: 'https://example.com/cesta-de-snacks-navidenos',
  },
  {
    id: 'kit-de-higiene-y-cuidado',
    name: 'Kit de higiene y cuidado',
    description:
      'Conjunto de productos de higiene básicos: champú natural hipoalergénico, cepillo de pelo y pasta dental canina. Cuida a los perritos por dentro y por fuera.',
    category: 'salud-cuidado',
    storeUrl: 'https://example.com/kit-de-higiene-y-cuidado',
  },
  {
    id: 'arnes-navidena-con-cascabeles',
    name: 'Arnés navideño con cascabeles',
    description:
      'Arnés acolchado de colores festivos con pequeños cascabeles decorativos. Cómodo, ajustable y perfecto para las fotos navideñas con nuestros peludos embajadores.',
    category: 'juguetes',
    badgeOverride: { label: 'Especial Navidad', variant: 'berry' },
    storeUrl: 'https://example.com/arnes-navidena-con-cascabeles',
  },
  {
    id: 'suplementos-articulares-senior',
    name: 'Suplementos articulares senior',
    description:
      'Complemento nutricional con glucosamina, condroitina y omega-3. Especialmente indicado para perros mayores del refugio que necesitan apoyo extra en sus articulaciones.',
    category: 'salud-cuidado',
    storeUrl: 'https://example.com/suplementos-articulares-senior',
  },
  {
    id: 'juguete-rellenable-antiestres',
    name: 'Juguete rellenable anti-estrés',
    description:
      'Juguete de goma resistente rellenable con pasta o snacks. Ideal para reducir el estrés y el aburrimiento en perros que esperan su hogar definitivo.',
    category: 'juguetes',
    storeUrl: 'https://example.com/juguete-rellenable-antiestres',
  },
]
