// 判断语句
if (
  navigator.userAgent.match(/Mobi/i) ||
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/iPhone/i)
) {
  // 如果返回为True执行的操作
  window.location.href="./Mobile";
}
