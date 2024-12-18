// src/pages/MarketPlace.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { dummyMarketItems } from '../dummyData';
import Header from '../components/Header'; // 共通のHeaderコンポーネントをインポート

const MarketPlace = ({ userPhoto }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterListed, setFilterListed] = useState(null);
  const [filterCategory, setFilterCategory] = useState('');
  const [filterPriceMin, setFilterPriceMin] = useState('');
  const [filterPriceMax, setFilterPriceMax] = useState('');

  // フィルタリングロジック
  let filteredItems = dummyMarketItems.filter((item) => {
    const nameMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const listedMatch = filterListed === null ? true : item.listed === filterListed;
    const categoryMatch = filterCategory === '' ? true : item.category === filterCategory;

    let priceMatch = true;
    if (filterPriceMin) {
      const min = parseInt(filterPriceMin, 10);
      const itemPrice = parseInt(item.price, 10);
      if (itemPrice < min) priceMatch = false;
    }
    if (filterPriceMax) {
      const max = parseInt(filterPriceMax, 10);
      const itemPrice = parseInt(item.price, 10);
      if (itemPrice > max) priceMatch = false;
    }

    return nameMatch && listedMatch && categoryMatch && priceMatch;
  });

  // コスモカラー背景(紫〜黒系グラデーション)
  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #4b0082, #2c0066, #000)', // コスモカラー
    color: '#fff',
    paddingTop: '80px', // ヘッダーの高さに合わせて調整
    display: 'flex',
  };

  const leftStyle = {
    width: '250px',
    borderRight: '1px solid #333',
    padding: '20px',
  };

  const mainStyle = {
    flex: 1,
    padding: '20px',
  };

  // グリッドレイアウトの修正
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 220px)', // 固定幅のカラム
    justifyContent: 'start', // 左揃え
    gap: '20px',
  };

  const itemStyle = {
    background: '#111',
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'center',
    // width: '220px', // ここを削除して、グリッドが自動的に幅を管理
  };

  const searchBarStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    backgroundColor: '#1e0033',
    color: '#fff',
    border: '1px solid #4b0082',
    outline: 'none',
  };

  const filterSummaryStyle = {
    marginBottom: '20px',
    padding: '10px',
    backgroundColor: '#2c0066',
    borderRadius: '5px',
  };

  return (
    <div style={containerStyle}>
      {/* 共通のHeaderを使用 */}
      <Header userPhoto={userPhoto} />

      <div style={leftStyle}>
        <h3>Filter</h3>
        <div>
          <h4>Listed</h4>
          <label>
            <input type="radio" name="listed" onChange={() => setFilterListed(true)} /> Listed
          </label>
          <br />
          <label>
            <input type="radio" name="listed" onChange={() => setFilterListed(false)} /> Not Listed
          </label>
          <br />
          <label>
            <input type="radio" name="listed" onChange={() => setFilterListed(null)} defaultChecked /> All
          </label>
        </div>
        <div>
          <h4>Category</h4>
          <select onChange={(e) => setFilterCategory(e.target.value)} value={filterCategory}>
            <option value="">All</option>
            <option value="shoes">Shoes</option>
            <option value="heels">Heels</option>
            {/* 必要に応じて他のカテゴリを追加 */}
          </select>
        </div>
        <div>
          <h4>Price Range</h4>
          <input
            type="number"
            placeholder="Min"
            value={filterPriceMin}
            onChange={(e) => setFilterPriceMin(e.target.value)}
            style={{
              width: '80px',
              marginRight: '10px',
              color: '#000', // テキストカラーを黒に設定
              backgroundColor: '#fff', // 背景色を白に設定
              border: '1px solid #4b0082',
              borderRadius: '3px',
              padding: '5px',
            }}
          />
          <input
            type="number"
            placeholder="Max"
            value={filterPriceMax}
            onChange={(e) => setFilterPriceMax(e.target.value)}
            style={{
              width: '80px',
              color: '#000', // テキストカラーを黒に設定
              backgroundColor: '#fff', // 背景色を白に設定
              border: '1px solid #4b0082',
              borderRadius: '3px',
              padding: '5px',
            }}
          />
        </div>
      </div>
      <div style={mainStyle}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={searchBarStyle}
        />
        {/* フィルターサマリーの追加 */}
        <div style={filterSummaryStyle}>
          <strong>Current Filters:</strong>
          <p>
            <strong>Category:</strong> {filterCategory === '' ? 'All' : filterCategory.charAt(0).toUpperCase() + filterCategory.slice(1)}
          </p>
          <p>
            <strong>Listed:</strong> {filterListed === null ? 'All' : filterListed ? 'Listed' : 'Not Listed'}
          </p>
          {filterPriceMin || filterPriceMax ? (
            <p>
              <strong>Price Range:</strong> {filterPriceMin ? `$${filterPriceMin}` : 'Min'} - {filterPriceMax ? `$${filterPriceMax}` : 'Max'}
            </p>
          ) : null}
        </div>
        <div style={gridStyle}>
          {filteredItems.map((item) => (
            <div key={item.id} style={itemStyle}>
              {item.type === 'video' ? (
                <video
                  src={item.img}
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={item.poster} // サムネイル画像を設定（オプション）
                  style={{
                    width: '220px',
                    height: '220px',
                    objectFit: 'cover',
                    borderRadius: '5px',
                    backgroundColor: '#000', // 動画がロードされる前の背景色
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    width: '220px',
                    height: '220px',
                    objectFit: 'cover',
                    borderRadius: '5px',
                  }}
                />
              )}
              <p>{item.name}</p>
              <p>${item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
