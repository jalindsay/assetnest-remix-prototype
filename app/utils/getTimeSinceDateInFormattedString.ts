export const getTimeSinceDateInFormattedString = (date: Date) => {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const minutes = Math.floor(diff / (1000 * 60))
  const hours = Math.floor(diff / (1000 * 60 * 60))
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  if (minutes === 0) {
    return 'Just Now'
  }
  if (minutes === 1) {
    return '1 minute ago'
  }
  if (minutes < 60) {
    return `${minutes} minutes ago`
  }
  if (hours === 1) {
    return '1 hour ago'
  }
  if (hours < 24) {
    return `${hours} hours ago`
  }
  if (days === 1) {
    return '1 day ago'
  }
  return `${days} days ago`
}
