import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="SectionLeft">
          <div className="SubsectionLeft">
            <div className="SubOne">
              <p>1-й тур | Тинькофф РПЛ</p>
            </div>
            <div className="SubTwo">
              <div className="Club">
                <div className='Emblem Ural'></div>
                <h4>Урал</h4>
              </div>
              <div className='Score'>
              <h4>2:1</h4>
              </div>
             
                <div className="Club">
                <div className='Emblem Sochi'></div>
                <h4>Сочи</h4>
                </div>
            
            </div>
            
            <div className="SubThree">
              <div className='Date'>
                <h4>3 июля, 19:00</h4>
                <p>Екатеринбург Арена</p>
              </div>
              <button className='btn'>

              </button>
            </div>
          </div>
        </div>
        <div className="SectionCenter">
          <div className="SubsectionUp">
            <div className="SubOneC SubOne">
              <p>1-й тур | Тинькофф РПЛ</p>
            </div>
            <div className="SubTwoC SubTwo">
            <div className="Club-Center">
                <div className='EmblemC  Spartak'></div>
                <h4>Спартак</h4>
              </div>
              <div className='Time'>
              <h4>01:46:38</h4>
              </div>
                <div className="Club-Center">
                <div className='EmblemC Lokomotiv'></div>
                <h4>Локомотив</h4>
                </div>
            </div>
            <div className='SubThreeCenter'>
<div className='DateCenter Date'>
  <h4>19 июля, 19:00</h4>
  <p>Открытие Банк Арена</p>
</div>
<div className='PointCenter'>
  <div className='WinOne'>
    <p className="Circle">3.82</p>
    <p>П1</p>
  </div>
  <div className='Draw'>
  <p className="Circle">3.82</p>
    <p>X</p>
  </div>
  <div classname='WinTwo'>
  <p className="Circle Green">3.82</p>
    <p>П2</p>
  </div>
</div>
<button className='TicketCenter'>
  <div className='ImgTicket'></div>
  <h4>купить <span>билет</span></h4>
</button>
            </div>
          </div>
<div className='SubsectionDown'>
  <h4>Смотреть трансляцию матча</h4>
  <div className="dot"><div className='figure'></div>
</div>
        </div>
        </div>
        <div className="SectionRight">
        <div className="SubsectionLeft">
            <div className="SubOne">
              <p>1-й тур | Тинькофф РПЛ</p>
            </div>
            <div className="SubTwo">
              <div className="Club">
                <div className='Emblem CSKA'></div>
                <h4>ЦСКА</h4>
              </div>
              <div className='Score ScoreNone'>
              <h4>-:-</h4>
              </div>
             
                <div className="Club">
                <div className='Emblem Dinamo'></div>
                <h4>Динамо</h4>
                </div>
            
            </div>
            
            <div className="SubThree">
              <div className='Date'>
                <h4>24 июля, 19:00</h4>
                <p>ВЭБАрена</p>
              </div>
              <button className='btnRight'>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
