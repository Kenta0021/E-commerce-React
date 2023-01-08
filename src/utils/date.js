export const changeDateFormat = (oldFormat) => {
  const newDate = new Date(oldFormat)
  const options = {
    year: 'numeric',
    month: 'long',
    day: '2-digt'
  }
  return newDate.toLocaleDateString('en-En'. options)
}