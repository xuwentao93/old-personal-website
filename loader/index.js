module.exports = function (source) {
  // 最后返回一个 js 对象，包含文本内容和目录列表两个属性
  return `export default {
    content: 'md-loader return',
  }`;
};
