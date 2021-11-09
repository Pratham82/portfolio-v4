const endDate = new Date()
const startDate = new Date("02/01/2021")
const countExp = () => {
  const timeDiff = Math.abs(endDate.getTime() - startDate.getTime())
  const monthsDiff = Math.round(timeDiff / (2e3 * 3600 * 365.25))
  let years = Math.floor(monthsDiff / 12)
  let months = monthsDiff % 12
  years = years === 0 ? "" : years === 1 ? "1 Year" : `${years} Years and`
  months = months === 0 ? "" : months === 1 ? "1 Month" : `${months} Months`
  console.log(years, months)
  return `${years} ${months}`
}

export default countExp
