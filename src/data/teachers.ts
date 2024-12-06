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
    description: "致力于将先进教育理念与实践相结合，培养了众多优秀学生。",
  },
];
