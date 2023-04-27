const getAlertCount = data => {
  let num = 0;
  data.map(doc => {
    if (doc?._id.readStatus === false) {
      num++;
    }
  });
  return num;
};

export default getAlertCount;
