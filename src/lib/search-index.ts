import { objections } from '@/lib/objections-data'

export type SearchEntry = {
  type: 'page' | 'objection'
  title: string
  desc: string
  href: string
  keywords: string[]
}

const pages: SearchEntry[] = [
  { type: 'page', title: 'Objection Handbook', desc: "Scripts for every objection you'll face", href: '/objections', keywords: ['objections', 'rebuttals', 'scripts'] },
  { type: 'page', title: 'SEP Check', desc: 'Real-time eligibility verification', href: '/sep-check', keywords: ['sep', 'eligibility', 'zip', 'fema', 'disaster', 'special enrollment'] },
  { type: 'page', title: 'SEP Guides', desc: 'All 37 codes organized by category', href: '/sep', keywords: ['sep codes', 'enrollment periods'] },
  { type: 'page', title: 'SEP Quick Reference', desc: 'Money codes cheat sheet', href: '/sep/quick-reference', keywords: ['money codes', 'cheat sheet', 'quick reference'] },
  { type: 'page', title: 'Compliance Sheet', desc: 'What gets agents flagged, suspended, or terminated', href: '/sep-compliance', keywords: ['compliance', 'flagged', 'suspended'] },
  { type: 'page', title: 'C-SNP Playbook', desc: 'The year-round sales opportunity in Medicare', href: '/csnp', keywords: ['csnp', 'chronic', 'snp'] },
  { type: 'page', title: 'How Calls Are Graded', desc: 'The scoring system explained', href: '/how-calls-are-graded', keywords: ['grading', 'scoring', 'graded'] },
  { type: 'page', title: 'How Objections Are Graded', desc: 'Objection conversion scoring', href: '/how-objections-are-graded', keywords: ['objection grading', 'conversion'] },
  { type: 'page', title: 'Medicare 101', desc: 'The essential knowledge baseline', href: '/medicare-101', keywords: ['basics', 'parts', 'medicare'] },
  { type: 'page', title: 'Human Layer', desc: 'The psychology of why people buy', href: '/human-layer', keywords: ['psychology', 'emotion', 'buying'] },
  { type: 'page', title: 'Call Types', desc: 'Know your caller before they speak', href: '/call-types', keywords: ['caller', 'call type'] },
  { type: 'page', title: 'Signals', desc: 'Read red, yellow, green in seconds', href: '/signals', keywords: ['red', 'yellow', 'green', 'signal'] },
  { type: 'page', title: 'Pillars', desc: 'The three foundations of every close', href: '/pillars', keywords: ['reframing', 'refocusing', 'persuasion'] },
  { type: 'page', title: 'Patterns', desc: 'Train your pattern recognition for calls', href: '/patterns', keywords: ['patterns', 'recognition'] },
  { type: 'page', title: 'Ad Reframes', desc: "Re-narrate the ad — don't argue with it", href: '/ad-reframes', keywords: ['ads', 'tv', 'commercial', 'flex card'] },
  { type: 'page', title: 'Storytelling', desc: 'Move people with narrative', href: '/storytelling', keywords: ['stories', 'narrative'] },
  { type: 'page', title: 'Math Breakdown', desc: 'Numbers that make Medicare simple', href: '/math-breakdown', keywords: ['math', 'numbers', 'annualized'] },
  { type: 'page', title: 'Psychology', desc: 'Why agents succeed or fail', href: '/psychology', keywords: ['mindset', 'agent psychology'] },
  { type: 'page', title: 'Close Confirmation', desc: 'Lock in the yes', href: '/close-confirmation', keywords: ['close', 'confirmation', 'lock in'] },
]

const objectionEntries: SearchEntry[] = objections.map((o) => ({
  type: 'objection',
  title: o.clientPhrase,
  desc: o.section,
  // Seeds the Objection Handbook's own search so the entry is on screen
  href: `/objections?q=${encodeURIComponent(o.tags?.[0] ?? o.clientPhrase.replace(/"/g, '').slice(0, 40))}`,
  keywords: o.tags ?? [],
}))

export const searchIndex: SearchEntry[] = [...pages, ...objectionEntries]
