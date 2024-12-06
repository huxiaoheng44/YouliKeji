export interface Certificate {
  id: string;
  studentName: string;
  title: string;
  date: string;
  image: string;
  description: string;
}

export interface Ranking {
  id: string;
  title: string;
  rank: string;
  organization: string;
  year: string;
  description: string;
  image?: string;
}

export const certificates: Certificate[] = [
  {
    id: 'cert1',
    studentName: '张三',
    title: '全国数学竞赛一等奖',
    date: '2023-12',
    image: '/images/achievements/cert1.jpg',
    description: '在2023年全国数学竞赛中获得一等奖'
  }
  // 可以继续添加更多证书...
];

export const rankings: Ranking[] = [
  {
    id: 'rank1',
    title: '教育机构综合实力排名',
    rank: '前10',
    organization: '教育部门',
    year: '2023',
    description: '在全国教育机构综合实力评估中位列前10',
    image: '/images/achievements/rank1.jpg'
  }
  // 可以继续添加更多排名...
];