export interface Course {
  id: string;
  name: string;
  grades: string;
  description: string;
  highlights: string[];
  icon: string;
}

export const courses: Course[] = [
  {
    id: "scratch",
    name: "Scratch可视化编程课",
    grades: "1-4年级",
    description:
      "帮助学生掌握编程逻辑和创造力开发，通过有趣的图形化界面启蒙编程兴趣。",
    highlights: [
      "图形化编程入门",
      "培养逻辑思维",
      "激发创造力",
      "项目实战体验",
    ],
    icon: "🎮",
  },
  {
    id: "python",
    name: "Python编程课",
    grades: "3-6年级",
    description:
      "培养计算思维，学习常用算法，运用Python解决实际问题，编写有趣的电脑工具。",
    highlights: [
      "Python基础语法",
      "算法思维训练",
      "实际项目开发",
      "数据分析入门",
    ],
    icon: "🐍",
  },
  {
    id: "cpp",
    name: "C++编程课",
    grades: "4-6年级",
    description: "启发学生探索高效算法，掌握解决复杂问题的方法。",
    highlights: ["C++基础知识", "算法设计技巧", "竞赛题目训练", "项目实战开发"],
    icon: "⚡",
  },
  {
    id: "thinking",
    name: "思维训练课程",
    grades: "全年级",
    description: "提升逻辑思维、专注力与创造能力，通过趣味任务全面发展。",
    highlights: ["逻辑思维训练", "专注力提升", "创造力开发", "解决问题能力"],
    icon: "🧠",
  },
];
