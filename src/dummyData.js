// src/dummyData.js

export const dummyDrops = [
  {
    id: 1,
    img: "https://via.placeholder.com/300?text=Product1",
    title: "Product #1",
    desc: "Dummy product description for Product #1",
    creator: "CREATED BY SOMEONE",
    price: "100 USD",
    detail: "This is a dummy detail of Product #1."
  },
  {
    id: 2,
    img: "https://via.placeholder.com/300?text=Product2",
    title: "Product #2",
    desc: "Dummy product description for Product #2",
    creator: "CREATED BY SOMEONE",
    price: "200 USD",
    detail: "This is a dummy detail of Product #2."
  },
  {
    id: 3,
    img: "https://via.placeholder.com/300?text=Product3",
    title: "Product #3",
    desc: "Dummy product description for Product #3",
    creator: "CREATED BY SOMEONE",
    price: "300 USD",
    detail: "This is a dummy detail of Product #3."
  }
];

export const dummyMarketItems = [
  {
    id: 1,
    img: "https://storage.googleapis.com/ol_2330_share/item1.mp4", // 画像URL
    name: "Lux heels",
    price: "3500",
    listed: true,
    category: "heels",
    type: "video" // メディアの種類を追加
  },
  {
    id: 2,
    img: "https://storage.googleapis.com/ol_2330_share/item2.mp4", // 動画URL
    name: "Sneakers",
    price: "300",
    listed: true,
    category: "shoes",
    type: "video" // メディアの種類を追加
  },
  {
    id: 3,
    img: "https://storage.googleapis.com/ol_2330_share/item3.mp4", // 画像URL
    name: "Red heels",
    price: "700",
    listed: false,
    category: "heels",
    type: "video" // メディアの種類を追加
  },
  {
    id: 4,
    img: "https://storage.googleapis.com/ol_2330_share/item4.mp4", // 動画URL
    name: "Red heels",
    price: "1200",
    listed: true,
    category: "heels",
    type: "video" // メディアの種類を追加
  },
];
