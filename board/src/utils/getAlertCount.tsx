const getAlertCount = (data: any) => {
  let num = 0;
  data.map((doc: any) => {
    if (doc?._id.readStatus === false) {
      num++;
    }
  });
  return num;
};

export default getAlertCount;
