export interface Teacher {
  id: string;
  name: string;
  title: string;
  image: string;
  description: string;
}

export const teachers: Teacher[] = [
  {
    id: "teacher1",
    name: "胡老师",
    title: "资深教育专家",
    image: "/images/teachers/teacher1.jpg",
    description: "拥有30年教育经验，专注于学生个性化发展和创新教育方法的研究。",
  },
  {
    id: "teacher2",
    name: "张老师",
    title: "招生办主任",
    image: "/images/teachers/teacher2.jpg",
    description:
      "擅长学生心理辅导，研究心理学多年，为学生提供全面的心理支持与成长建议。",
  },
  {
    id: "teacher3",
    name: "黄老师",
    title: "专业编程老师",
    image: "/images/teachers/teacher3.jpg",
    description:
      "擅长Scratch、C++和Python编程教学，致力于培养学生的逻辑思维与实践能力。",
  },
  {
    id: "teacher4",
    name: "汪老师",
    title: "思维培训老师",
    image: "/images/teachers/teacher4.jpg",
    description: "经验丰富的思维培训专家，专注于学生逻辑思维和创新能力的培养。",
  },
  {
    id: "teacher5",
    name: "沈老师",
    title: "思维培训老师",
    image: "/images/teachers/teacher5.jpg",
    description: "拥有丰富的教学经验，擅长通过互动式教学提升学生的思维能力。",
  },
];
