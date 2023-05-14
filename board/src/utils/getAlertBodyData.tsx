const getAlertBodyData = ({ data }: any) => {
  const alertData: any = [];

  data.map(({ accountId }: any) => {
    alertData.push(accountId);
  });

  return alertData;
};

export default getAlertBodyData;
