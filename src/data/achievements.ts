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
    id: "cert1",
    studentName: "宋文龙",
    title: "蓝桥杯大赛计算机思维高级组二等奖",
    date: "2024-09.07",
    image: "/images/achievements/cert1.jpg",
    description:
      "荣获第十五届蓝桥杯全国软件和信息技术专业人才大赛青少年全国总决赛计算思维高级组二等奖。",
  },
  {
    id: "cert2",
    studentName: "宋文龙",
    title: "STEMA全国测试TOP 1%",
    date: "2024-09.07",
    image: "/images/achievements/cert2.jpg",
    description:
      "STEMA考试致力于综合评价学生的STEM水平，对学生的科技素养、逻辑思维和编程能力三方面进行客观科学的测试。作为学习结果的量化评测手段，STEMA考试为考生提供可以跨时间、跨地域比较的STEM评测成绩。STEMA，STEM Assessment，也称STEM能力测试，是蓝桥杯大赛组委会与美国普林斯顿多文化教育研究中心合作推出的考试项目。STEMA考试实践“全人STEM”的理念，以考促学，平衡科技素养、逻辑思维及编程创意的比重，促进中小学校及教育培训机构将STEM教育同学生的心理成长、社会情感和认知发展的培养有机地结合起来。",
  },
  {
    id: "cert3",
    studentName: "吴承泽",
    title: "STEMA全国测试TOP 2%",
    date: "2024-09.07",
    image: "/images/achievements/cert3.jpg",
    description:
      "STEMA考试致力于综合评价学生的STEM水平，对学生的科技素养、逻辑思维和编程能力三方面进行客观科学的测试。作为学习结果的量化评测手段，STEMA考试为考生提供可以跨时间、跨地域比较的STEM评测成绩。STEMA，STEM Assessment，也称STEM能力测试，是蓝桥杯大赛组委会与美国普林斯顿多文化教育研究中心合作推出的考试项目。STEMA考试实践“全人STEM”的理念，以考促学，平衡科技素养、逻辑思维及编程创意的比重，促进中小学校及教育培训机构将STEM教育同学生的心理成长、社会情感和认知发展的培养有机地结合起来。",
  },
  {
    id: "cert4",
    studentName: "林宏权",
    title: "STEMA全国测试TOP 8%",
    date: "2024-09.07",
    image: "/images/achievements/cert4.jpg",
    description:
      "STEMA考试致力于综合评价学生的STEM水平，对学生的科技素养、逻辑思维和编程能力三方面进行客观科学的测试。作为学习结果的量化评测手段，STEMA考试为考生提供可以跨时间、跨地域比较的STEM评测成绩。STEMA，STEM Assessment，也称STEM能力测试，是蓝桥杯大赛组委会与美国普林斯顿多文化教育研究中心合作推出的考试项目。STEMA考试实践“全人STEM”的理念，以考促学，平衡科技素养、逻辑思维及编程创意的比重，促进中小学校及教育培训机构将STEM教育同学生的心理成长、社会情感和认知发展的培养有机地结合起来。",
  },
  {
    id: "cert5",
    studentName: "朱冠瑀",
    title: "STEMA全国测试TOP 3%",
    date: "2024-09.07",
    image: "/images/achievements/cert5.jpg",
    description:
      "STEMA考试致力于综合评价学生的STEM水平，对学生的科技素养、逻辑思维和编程能力三方面进行客观科学的测试。作为学习结果的量化评测手段，STEMA考试为考生提供可以跨时间、跨地域比较的STEM评测成绩。STEMA，STEM Assessment，也称STEM能力测试，是蓝桥杯大赛组委会与美国普林斯顿多文化教育研究中心合作推出的考试项目。STEMA考试实践“全人STEM”的理念，以考促学，平衡科技素养、逻辑思维及编程创意的比重，促进中小学校及教育培训机构将STEM教育同学生的心理成长、社会情感和认知发展的培养有机地结合起来。",
  },
  // 可以继续添加更多证书...
];

export const rankings: Ranking[] = [
  {
    id: "rank1",
    title: "少儿编程机构排行榜",
    rank: "浦江县第一",
    organization: "蓝桥杯官方",
    year: "2024第一季度",
    description: "荣获蓝桥杯官方少儿编程机构排行榜中浦江县第一名",
    image: "/images/achievements/rank1.png",
  },
  // 可以继续添加更多排名...
];
