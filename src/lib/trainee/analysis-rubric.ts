export interface CallRubric {
  title: string
  agentName: string
  consumerName: string
  audioPath: string
  duration: string
}

export const callRubrics: Record<string, CallRubric> = {
  'call-1': {
    title: 'Ashley Whitehurst vs. Gerald Cramer',
    agentName: 'Ashley Whitehurst',
    consumerName: 'Gerald Cramer',
    audioPath: '/call-audio/Ashley_Whitehurst_vs_Gerald_Cramer_03-05-2026_10m02s.mp3',
    duration: '10m 02s',
  },
  'call-2': {
    title: 'Call 2',
    agentName: 'TBD',
    consumerName: 'TBD',
    audioPath: '/call-audio/call-2.mp3',
    duration: 'TBD',
  },
  'call-3': {
    title: 'Call 3',
    agentName: 'TBD',
    consumerName: 'TBD',
    audioPath: '/call-audio/call-3.mp3',
    duration: 'TBD',
  },
}
