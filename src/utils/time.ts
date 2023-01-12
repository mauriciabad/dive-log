export function durationToString(durationInMs: number): string {
  const hours = Math.floor(durationInMs / (1000 * 60 * 60))
  const minutes = (durationInMs / (1000 * 60)) % 60

  const hoursText = hours > 0 ? `${hours.toFixed(0)}h` : ''
  const minutesText = minutes > 0 ? `${minutes.toFixed(0)}min` : ''

  return [hoursText, minutesText].join(' ')
}
