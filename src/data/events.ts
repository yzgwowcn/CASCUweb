export interface EventInfo {
  id: string;
  title: string;
  time: string;
  location?: string;
  difficulty?: string;
  type: 'cup' | 'ride' | 'public_service' | 'training';
  status: 'open' | 'closed' | 'upcoming';
}

export const events: EventInfo[] = [
  {
    id: "cup-10",
    title: "第十届车协杯 (成都天府国际赛道)",
    time: "2026年秋季 (待定)",
    location: "成都天府国际赛道",
    difficulty: "HIGH",
    type: "cup",
    status: "upcoming"
  },
  {
    id: "ride-longquan",
    title: "周末周末热推：龙泉山观日出",
    time: "周六 05:00",
    difficulty: "MID",
    type: "ride",
    status: "open"
  },
  {
    id: "public-service",
    title: "即将开始：校园公益修车",
    time: "周日 14:00",
    location: "青春广场",
    type: "public_service",
    status: "open"
  }
];
