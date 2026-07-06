import { useState } from 'react'
import './App.css'

const tabs = ['탭1', '탭2', '탭3'];

function App() {

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [keyword , setKeyword] = useState('');

  const handleTab = (e) => {
    console.log(e)

    setActiveTab(e.target.innerText)
    console.log('tab : ', activeTab);
  }

  const handleSearch = () => {
    console.log('keyword : ', keyword);
  }

  return (
    <>
      <div className="index_page">
        {/* 탭 영역 */}
        <div className='tab-container'>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              onClick={(e) => handleTab(e)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 검색 영역 */}
        <div className='search-container'>
          <input
            type='text'
            placeholder='검색어를 입력하세요'
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => {
              if(e.key === 'Enter'){
                handleSearch();
              }
            }}
          />
          <button onClick={handleSearch}>검색</button>
        </div>


      </div>
    </>
  )
}

export default App
