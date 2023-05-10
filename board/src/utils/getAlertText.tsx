const getAlertText = data => {
  if (data.data.length > 1) {
    return `${data.data[0].name} 님 외 ${data.data.length - 1}명이 ${
      data.data[0].title
    }에 댓글을 달았습니다.`;
  } else
    return `${data.data[0].name} 님이 ${data.data[0].title}에 댓글을 달았습니다.`;
};

export default getAlertText;
