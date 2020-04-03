export const ARTICLE_TYPE_HOVER = 'article-type-hover';

export const TYPES = [
  {
    type: 'all',
    label: '全部',
    hover: ARTICLE_TYPE_HOVER
  },
  {
    type: 'frontend',
    label: '前端',
    hover: undefined
  },
  {
    type: 'algorithm',
    label: '算法',
    hover: undefined
  },
  {
    type: 'network',
    label: '网络',
    hover: undefined
  },
  {
    type: 'life',
    label: '生活',
    hover: undefined
  },
  {
    type: 'other',
    label: '其它',
    hover: undefined
  }
];

export function TYPE_TOGGLE(type) {
  switch (type) {
    case 'frontend':
      return '前端';
    case 'other':
      return '其他';
    case 'algorithm':
      return '算法';
    case 'network':
      return '网络';
    case 'life':
      return '生活';
    default:
      console.error('输入的类型有误, 请确认输入的类型是否正确!');
  }
}
