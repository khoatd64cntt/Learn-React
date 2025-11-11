import { myData, EXAMPLES } from "../data.js";
import Header from "./components/Header/Header.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';

function App() {

  //* Nội dung chính
  const [selectedTopic, setSelectedTopic] = useState("components");
  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
  }

  //* Confirm Activation BOX
  const [isActivated, setIsActivated] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  function handleActivate(){
    setIsAlertVisible(true);
  }

  function handleConfirm(){
    setIsActivated(true);
    setIsAlertVisible(false);
  }

  function handleCancel(){
    setIsActivated(false);
    setIsAlertVisible(false);
  }

  //* BT Button Click
  const [isActive, setIsActive] = useState(false);
  function handleToggle(){
    setIsActive((prev) => !prev);
  }

  
  // const [sTopic, setSTopic] = useState("Chào bạn!");
  // const currentHours = new Date().getHours();
  // const currentHours = 11.5;
  // function timeHello(selectTime){
  //   if(selectTime >= 5 && selectTime < 12){
  //     return setSTopic("Chào buổi sáng!");
  //   } else if (selectTime >= 12 && selectTime < 18){
  //     return setSTopic("Chào buổi chiều!");
  //   } else {
  //     return setSTopic("Chào buổi tối!");
  //   }
    
  // }
  // return(
  //   <section id="top-banner">
  //       <h1>Học ReactJS Cơ Bản</h1>
  //       <p>Tìm hiểu các khái niệm chính và ví dụ về ReactJS</p>

  //       <button onClick={() => timeHello(currentHours)}>Cập nhật lời chào</button>
  //       <h2>{sTopic}</h2>

  //     </section>
  // )
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Khái niệm chính trong React</h2>
        <ul>
          {/*<MainContent{...myData[0]}/>
          <MainContent{...myData[1]}/>
          <MainContent{...myData[2]}/>
          <MainContent{...myData[3]}/>*/}
          {myData.map((item) => (
            <MainContent key={item.title} {...item} />
          ))}
        </ul>
        </section>

        <section id="examples">
          <h2>Ví dụ về React</h2>
          <menu>
            <TabButton isSelected={selectedTopic==="components"} onSelect={() => {handleSelect('components')}}>Components</TabButton>
            <TabButton isSelected={selectedTopic==="jsx"} onSelect={() => {handleSelect('jsx')}}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==="state"} onSelect={() => {handleSelect('state')}}>Props</TabButton>
            <TabButton isSelected={selectedTopic==="props"} onSelect={() => {handleSelect('props')}}>Props</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic]["desc"]}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic]["code"]}
              </code>
            </pre>
          </div>
        </section>
          
        <section  >
          <div 
            id="examples" 
            style={{ 
              display: 'flex',
              justifyContent: 'center', // Căn giữa theo chiều ngang
              alignItems: 'center',     // Căn giữa theo chiều dọc
            }}
          >
            <menu style={{
              padding: '2rem',
              border: 'none', /* Loại bỏ border nếu có */
              borderRadius: '12px', // Dùng camelCase cho borderRadius
              backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dùng camelCase cho backgroundColor
              display: 'inline-block',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)', // Dùng camelCase cho boxShadow
            }}>
              {!isActivated && !isAlertVisible && (
                <button onClick={handleActivate}>Actives</button>
              )}
              
              {isAlertVisible && (
                <div id="tab-content">
                <h2>Warming!</h2>
                <p>Are you sure you want to activate this mode?</p>
                <button onClick={handleConfirm} className='confirm-btn' >Confirm</button>
                <button onClick={handleCancel} className='cancel-btn' >Cancel</button>
              </div>
              )}

              {isActivated && (
                <h3 className='success-message'>Mode Activated</h3>
              )}
            </menu>
          </div>
        </section>

        <section 
          style={{ 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', 
            color: '#ffffff',
            textAlign: 'center',
            overflow: 'hidden', 
            minHeight: '30vh', // Kích thước nhỏ vừa đủ
            width: '100%'     // Kích thước nhỏ vừa đủ
          }}
        >
          <div 
            style={{
              padding: '2rem',
              border: 'none', /* Loại bỏ border nếu có */
              borderRadius: '12px', // Dùng camelCase cho borderRadius
              backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dùng camelCase cho backgroundColor
              display: 'inline-block',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)', // Dùng camelCase cho boxShadow
            }}
          >
            <p className={isActive? "actives" : undefined}>Click vào đây!!</p>
            <button className='btn-toggle' onClick={handleToggle}>Toggle btn</button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;