export interface Facility {
  id: string;
  title: string;
  description: string;
  image: string;
  features?: string[];
}

export const facilities: Facility[] = [
  {
    id: 'library',
    title: '图书馆',
    description: '现代化的图书馆配备丰富的教育资源和舒适的学习环境，为学生提供理想的学习场所。',
    image: '/images/facilities/library.jpg',
    features: [
      '超过10000册藏书',
      '电子阅览区',
      '小组讨论室',
      '24小时自习区'
    ]
  },
  {
    id: 'lab',
    title: '实验室',
    description: '配备先进的科学实验设备，让学生在实践中学习和探索。',
    image: '/images/facilities/lab.jpg',
    features: [
      '现代化实验设备',
      '专业指导教师',
      '安全防护设施',
      '小组实验区域'
    ]
  }
  // 可以继续添加更多设施...
];