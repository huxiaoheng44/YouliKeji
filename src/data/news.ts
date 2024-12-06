export interface NewsItem {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  content?: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "news-1",
    title: "有理科技秋季招生火热进行中",
    date: "2024年7月15号",
    description:
      "2024年秋季招生现已开始，欢迎广大学生和家长咨询报名。我们提供专业的少儿编程课程，助力孩子们在科技时代脱颖而出。",
    image: "/images/news/enrollment.jpg",
    content: `
      秋季招生计划现已正式启动！本次招生我们推出了多个精品课程：

      - 少儿Python编程基础班
      - Scratch创意编程进阶班
      - 青少年人工智能启蒙课程
      
      早鸟优惠：7月31日前报名可享受85折优惠。
      
      咨询电话：+86 18266921075
      招生对象：7-15岁青少年
      开课时间：2024年9月
    `,
  },
  {
    id: "news-2",
    title: "恭喜有理科技荣获金华市少儿编程排行榜第一名",
    date: "2024年6月20日",
    description:
      "在金华市教育部门组织的少儿编程教育机构评估中，有理科技凭借优质的教学质量和创新的教学方法荣登榜首。",
    image: "/images/news/award.jpg",
    content: `
      在近期金华市教育部门组织的少儿编程教育机构综合评估中，有理科技以突出的表现获得第一名的好成绩！

      本次评估涵盖多个维度：
      - 教学质量与效果
      - 师资力量
      - 课程体系完整性
      - 学生满意度
      - 创新教学方法
      
      这份殊荣是对我们长期致力于少儿编程教育的肯定。感谢所有学员和家长的支持与信任，我们将继续努力，为金华的青少年编程教育事业贡献更多力量！
    `,
  },
];
