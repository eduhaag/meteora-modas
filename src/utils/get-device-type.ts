import { mediaQueries } from '../styles/themes/media-queries'

export function getDeviceType() {
  const { innerWidth: displayWidth } = window

  if (displayWidth >= parseMediaQuerie(mediaQueries.DESKTOP)) {
    return 'desktop'
  } else if (displayWidth >= parseMediaQuerie(mediaQueries.TABLET)) {
    return 'tablet'
  } else {
    return 'mobile'
  }
}

function parseMediaQuerie(query: string) {
  return parseInt(query.replace('px', ''))
}
