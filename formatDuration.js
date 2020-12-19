function formatDuration (seconds) {
  let duration = ""
  let timeSteps = [31536000, 86400, 3600, 60, 1]
  let timeName = ["year", "day", "hour", "minute", "second"]
  let times = []
  if (seconds === 0) return "now"
  timeSteps.forEach((time, i)=> {
    let count = Math.floor(seconds / time)
    seconds -= count * time
    if (count) {
      if (count === 1) {
        times.push(`1 ${timeName[i]}`)
      }
      else {
        times.push(`${count} ${timeName[i]}s`)
      }
    }
  })

  for (let i = 0; i < times.length; i++) {
    if (i === 0)
      duration += times[i]
    if ((i > 0) && (i < times.length - 1) && (times.length > 1))
      duration += ", " + times[i]
    if ((i === times.length - 1) && (times.length > 1))
      duration += " and " + times[i]
  }

  return duration
}

console.log(formatDuration(61));