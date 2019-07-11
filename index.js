const getFirstSelector = (selector) => {
  return document.querySelector(selector)
}

const nestedTarget = () => {
  return document.querySelector( '#nested .target')
}

const increaseRankBy(n) = (n) => {
  const rankedLists = document.querySelectorAll('.ranked-list')
  rankedList.children.map(function (element) { parseInt(element.innerHTML) + n })

}
