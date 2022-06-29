function superbowlWin(array) {
    let winYearElement = array.find(findWin)
    if (winYearElement) {return winYearElement.year} else {
        return undefined
    }
}

function findWin(element, index, array) {
   if (element.result === "W") {return (element.year)}
}

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]

  superbowlWin(record)

// element, index, array