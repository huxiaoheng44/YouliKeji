export interface Facility {
  id: string;
  title: string;
  description: string;
  image: string;
  features?: string[];
}

export const facilities: Facility[] = [
  {
    id: "location",
    title: "地址信息",
    description:
      "我们的培训中心位于人民广场附近，月泉西路7号有理科技。地理位置优越，交通便利，并提供充足的停车空间，方便学员和家长前来学习。",
    image: "/images/facilities/location.jpg",
    features: [
      "靠近人民广场，交通便利",
      "宽敞的停车场",
      "醒目的门头设计",
      "便捷的学习环境",
    ],
  },
  {
    id: "lobby",
    title: "大厅",
    description:
      "宽敞明亮的大厅提供一个舒适的欢迎空间，设有地图展示墙和学生互动区，体现了国际化的学习环境。",
    image: "/images/facilities/lobby.jpg",
    features: [
      "世界地图主题装饰",
      "舒适的休息区",
      "教育宣传展示",
      "环保植物布置",
    ],
  },
  {
    id: "programming-classroom-1",
    title: "编程教室 A",
    description:
      "设备齐全的编程教室，配备现代化电脑和大屏幕显示设备，为学生提供优质的编程学习环境。",
    image: "/images/facilities/programming-classroom-1.jpg",
    features: [
      "高性能电脑设备",
      "大屏幕投影仪",
      "编程专用桌椅",
      "现代化网络支持",
    ],
  },

  {
    id: "activity-room-1",
    title: "思维培训活动室 A",
    description:
      "明亮开放的活动空间，设计用于逻辑思维和创新能力的培养，提供多种互动学习工具。",
    image: "/images/facilities/activity-room-1.jpg",
    features: [
      "多功能培训桌椅",
      "主题墙装饰",
      "益智玩具与工具",
      "开放式互动空间",
    ],
  },
  {
    id: "activity-room-2",
    title: "思维培训活动室 B",
    description:
      "设备与设计更进一步优化，适合小组合作与创造性活动，支持多样化的教学方式。",
    image: "/images/facilities/activity-room-2.jpg",
    features: [
      "专用活动区域",
      "团队合作空间",
      "现代化教学设备",
      "个性化教学辅助",
    ],
  },
];
