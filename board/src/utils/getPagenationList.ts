const getPagenationList = (pageCounts: number) => {
  // console.log(pageCounts);
  const totalArray = Array(pageCounts)
    .fill()
    .map((_, index) => index + 1);

  const pageArray = [];

  for (let i = 0; i < totalArray.length; i += 5) {
    pageArray.push(totalArray.slice(i, i + 5));
  }

  return pageArray;
};

export default getPagenationList;
