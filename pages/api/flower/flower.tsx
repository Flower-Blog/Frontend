import { NextApiRequest, NextApiResponse } from "next";

type Flower = {
  id: number;
  name: string;
  language: string;
  img: string;
};

const flowers: Flower[] = [
  {
    id: 1,
    name: "玫瑰",
    language: "愛情、浪漫、美麗、熱情、溫馨、關懷、感激、勇敢、誠實、溫柔",
    img: "/playground_assets/1rose.png",
  },
  {
    id: 2,
    name: "向日葵",
    language: "忠誠、陽光、希望、堅強、自信、友善、積極、夢想、幸福、寬容",
    img: "/playground_assets/2sunflower.png",
  },
  {
    id: 3,
    name: "康乃馨",
    language: "真愛、友情、母愛、幸福、忍耐、感激、祝福、美麗、喜悅、寬容",
    img: "/playground_assets/3carnation.png",
  },
  {
    id: 4,
    name: "百合花",
    language: "純潔、寧靜、高雅、祝福、無暇、優雅、美好、真誠、祥和、善良",
    img: "/playground_assets/4lily.png",
  },
  {
    id: 5,
    name: "桃花",
    language: "愛情、美麗、純真、浪漫、喜悅、甜蜜、吉祥、和諧、幸福、恩愛",
    img: "/playground_assets/5peachblossom.png",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json(flowers);
}
