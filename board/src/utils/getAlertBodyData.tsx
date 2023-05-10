const getAlertBodyData = ({ data }) => {
  const alertData = [];

  data.map(({ accountId }) => {
    alertData.push(accountId);
  });

  return alertData;
};

export default getAlertBodyData;
