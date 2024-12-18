// src/pages/Reveal.js
import React, { useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import MediaItem from '../components/MediaItem'; // MediaItem コンポーネントを正しくインポート

const Reveal = ({ userPhoto }) => {
  // 初期アイテム定義
  const initialItems = [
    { id: 1, media: 'https://storage.googleapis.com/ol_2330_share/silver.mp4', type: 'video' },
    { id: 2, media: 'https://storage.googleapis.com/ol_2330_share/gold2.mp4', type: 'video' },
    { id: 3, media: 'https://storage.googleapis.com/ol_2330_share/gold2.mp4', type: 'video' },
    { id: 4, media: 'https://storage.googleapis.com/ol_2330_share/diamond.mp4', type: 'video' },
  ];

  // 置き換え後のメディア配列（1つ目から3つ目まで）
  const replacements = [
    { media: 'https://storage.googleapis.com/ol_2330_share/item1.mp4', type: 'video' }, // 1つ目の置き換えメディア
    { media: 'https://storage.googleapis.com/ol_2330_share/item2.mp4', type: 'video' },   // 2つ目の置き換えメディア
    { media: 'https://storage.googleapis.com/ol_2330_share/item3.mp4', type: 'video' },   // 3つ目の置き換えメディア
  ];

  // 表示用のアイテム（初期値はinitialItemsと同じ）
  const [displayedItems, setDisplayedItems] = useState(initialItems);

  // チェックボックスの状態を管理するステート
  const [checkedItems, setCheckedItems] = useState(new Set());

  // チェックボックスの状態をトグルする関数
  const handleCheck = (id) => {
    setCheckedItems(prev => {
      const newChecked = new Set(prev);
      if (newChecked.has(id)) {
        newChecked.delete(id);
      } else {
        newChecked.add(id);
      }
      return newChecked;
    });
  };

  // REVEALボタンがクリックされたときの処理
  const handleReveal = () => {
    console.log('REVEALボタンがクリックされました'); // デバッグ用ログ
    setDisplayedItems((prevItems) => {
      const updatedItems = prevItems.map((item, index) => {
        // 1つ目から3つ目までを置き換える
        if (index < replacements.length) {
          console.log(`アイテムID ${item.id} を置き換えます`); // デバッグ用ログ
          return { ...item, media: replacements[index].media, type: replacements[index].type };
        }
        return item; // 4つ目以降はそのまま
      });
      console.log('更新後の表示アイテム:', updatedItems); // デバッグ用ログ
      return updatedItems;
    });
  };

  // デバッグ: displayedItems をコンソールに出力
  console.log('現在の表示アイテム:', displayedItems);

  return (
    <>
      {/* 共通のHeaderをパディングなしで配置 */}
      <Header userPhoto={userPhoto} />

      {/* メインコンテンツをヘッダーの下に配置 */}
      <div className="min-h-screen bg-white pt-20 px-8">
        <h2 className="text-3xl font-light mb-8">REVEAL COLLECTION</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedItems.map((item) => {
            if (!item) {
              console.error('displayedItems に undefined のアイテムが含まれています');
              return null;
            }
            return (
              <MediaItem 
                key={`${item.id}-${item.media}`} // keyをユニークにするためにmediaを追加
                item={item}
                isChecked={checkedItems.has(item.id)}
                onCheck={handleCheck}
              />
            );
          })}
        </div>
      </div>

      {/* 固定位置のボタン */}
      <div className="fixed right-8 bottom-8 space-y-4">
        <button 
          className="bg-black text-white px-8 py-3 w-48 block rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
          onClick={handleReveal}
        >
          REVEAL
        </button>
        <Link to="/claim" className="bg-black text-white px-8 py-3 w-48 block text-center rounded-lg shadow-md hover:bg-gray-800 transition duration-300">
          CLAIM
        </Link>
      </div>
    </>
  );
};

export default Reveal;
