export type BadgeVariant = 'berry' | 'forest' | 'flame' | 'ink' | 'gold'

export const CATEGORIES = {
  juguetes: { label: 'Juguetes', emoji: '🎮', badgeVariant: 'berry' },
  'camas-mantas': {
    label: 'Camas y mantas',
    emoji: '🛏️',
    badgeVariant: 'forest',
  },
  alimentacion: { label: 'Alimentación', emoji: '🍖', badgeVariant: 'flame' },
  'salud-cuidado': {
    label: 'Salud y cuidado',
    emoji: '💊',
    badgeVariant: 'ink',
  },
} as const satisfies Record<
  string,
  { label: string; emoji: string; badgeVariant: BadgeVariant }
>

export type CategoryId = keyof typeof CATEGORIES
