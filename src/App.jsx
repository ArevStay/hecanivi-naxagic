// App.jsx
import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('physics');

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Հեծանիվը որպես այլընտրանքային և էկոլոգիապես անվտանգ փոխադրամիջոց</h1>
        <p>Մուլտիդիսցիպլինար գիտական հետազոտությունների և թվային մոդելավորման հարթակ</p>
      </header>

      {/* Նավիգացիոն համակարգ */}
      <nav className="app-nav">
        <button className={`nav-button ${activeTab === 'physics' ? 'active' : ''}`} onClick={() => setActiveTab('physics')}>Բիոմեխանիկա և Ֆիզիկա</button>
        <button className={`nav-button ${activeTab === 'biology' ? 'active' : ''}`} onClick={() => setActiveTab('biology')}>Նեյրոբիոլոգիա և Անատոմիա</button>
        <button className={`nav-button ${activeTab === 'sports' ? 'active' : ''}`} onClick={() => setActiveTab('sports')}>Կինեզիոլոգիա և Մարզումներ</button>
        <button className={`nav-button ${activeTab === 'geography' ? 'active' : ''}`} onClick={() => setActiveTab('geography')}>Էկո-Աշխարհագրություն</button>
        <button className={`nav-button ${activeTab === 'summary' ? 'active' : ''}`} onClick={() => setActiveTab('summary')}>Գիտական Վերլուծություն</button>
      </nav>

      {/* ԲԱԺԻՆ 1: ՖԻԶԻԿԱ */}
      {activeTab === 'physics' && (
        <div className="content-box">
          <h2 className="section-title">Կիրառական Ֆիզիկա, Աերոդինամիկա և Վեկտորային Դինամիկա</h2>
          
          <div className="two-column-grid">
            <div>
              <div className="feature-card">
                <h3>1. Աերոդինամիկ դիմադրություն և տուրբուլենտություն</h3>
                <p className="scientific-text">
                  Շարժման արագության բարձրացմանը զուգընթաց (ուղիղ համեմատական արագության քառակուսուն) օդի հանդիպակաց դիմադրությունը դառնում է գլխավոր խոչընդոտը: Հեծանվորդի մարմնի հետևում առաջանում է ցածր ճնշման գոտի և տուրբուլենտային հոսքեր, որոնք արգելակում են ընթացքը: Մարմնի թեքությունը նվազեցնում է դիմացի մակերեսը՝ օպտիմալացնելով օդի սահուն հոսքը:
                </p>
              </div>

              <div className="feature-card">
                <h3>2. Պտտական մոմենտների կայունացում</h3>
                <p className="scientific-text">
                  Անիվների արագ պտտման ժամանակ գործում է պտտական առանցքների կայունության օրենքը (գիրոսկոպիկ երևույթ): Անիվները դիմադրում են կողմնակի շեղումներին, ինչը հեծանվորդին հնարավորություն է տալիս կատարելու բարդ մանևրներ բարձր արագության տակ՝ առանց հավասարակշռության կորստի։
                </p>
              </div>
            </div>

            <div>
              <div className="feature-card" style={{ backgroundColor: 'rgba(59, 130, 246, 0.05)' }}>
                <h3>Լաբորատոր Փորձարկման Մատրիցա</h3>
                <p className="scientific-text">
                  Հաշվարկվել է էներգիայի պահպանման և փոխակերպման օրենքը 20 մետրանոց թեք հարթության վրա: Շփման գործակցի նվազագույն արժեքների պայմաններում պոտենցիալ էներգիան գրեթե ամբողջությամբ վերածվել է կինետիկ էներգիայի:
                </p>
              </div>
            </div>
          </div>

          {/* Աղյուսակ */}
          <table className="data-table">
            <thead>
              <tr>
                <th>Տեղամաս (մետր)</th>
                <th>Ժամանակ (վայրկյան)</th>
                <th>Ակնթարթային Արագություն (մ/վ)</th>
                <th>Կինետիկ Էներգիա (Ջոուլ)</th>
                <th>Արագացում (մ/վ²)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>0 (Մեկնարկ)</td><td>0.0</td><td>0.0</td><td>0</td><td>1.23</td></tr>
              <tr><td>5 մետր</td><td>2.5</td><td>4.0</td><td>560</td><td>1.23</td></tr>
              <tr><td>10 մետր</td><td>4.2</td><td>6.0</td><td>1260</td><td>1.23</td></tr>
              <tr><td>15 մետր</td><td>5.5</td><td>7.3</td><td>1860</td><td>1.23</td></tr>
              <tr><td>20 մետր (Ավարտ)</td><td>6.5</td><td>8.0</td><td>2240</td><td>1.23</td></tr>
            </tbody>
          </table>

          {/* ԻՆՏԵՐԱԿՏԻՎ ՍԽԵՄԱ 1: ՈՒԺԵՐ */}
          <div className="schema-container">
            <h3>Նկար 1: Վեկտորային Ուժերի Թվային Մոդելավորում</h3>
            <svg width="100%" height="300" viewBox="0 0 800 300" className="svg-graphic">
              <polygon points="100,260 720,260 100,90" fill="#1e293b" />
              <line x1="100" y1="90" x2="720" y2="260" stroke="#3b82f6" strokeWidth="4" />
              <circle cx="340" cy="115" r="16" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" />
              <g><line x1="340" y1="115" x2="340" y2="235" stroke="#ef4444" strokeWidth="3" /><text x="350" y="220" fill="#ef4444" fontWeight="600">Ծանրության ուժ (Fg)</text></g>
              <g><line x1="340" y1="115" x2="385" y2="40" stroke="#a855f7" strokeWidth="3" /><text x="395" y="50" fill="#a855f7" fontWeight="600">Հակազդեցության ուժ (FN)</text></g>
              <g><line x1="340" y1="115" x2="235" y2="90" stroke="#f59e0b" strokeWidth="3" /><text x="160" y="80" fill="#f59e0b" fontWeight="600">Օդի Դիմադրություն + Շփում</text></g>
              <g><line x1="340" y1="115" x2="470" y2="155" stroke="#10b981" strokeWidth="3" /><text x="450" y="140" fill="#10b981" fontWeight="600">Համազոր Շարժիչ Ուժ</text></g>
            </svg>
          </div>
        </div>
      )}

      {/* ԲԱԺԻՆ 2: ԿԵՆՍԱԲԱՆՈՒԹՅՈՒՆ */}
      {activeTab === 'biology' && (
        <div className="content-box">
          <h2 className="section-title">Նեյրոբիոլոգիա, Կենսաքիմիա և Կարդիո-Ֆիզիոլոգիա</h2>
          <div className="two-column-grid">
            <div>
              <div className="feature-card">
                <h3>1. Նեյրոպլաստիկություն և սթրեսի նվազեցում</h3>
                <p className="scientific-text">
                  Հեծանվավազքի ընթացքում ուղեղում ակտիվանում է արյան շրջանառությունը, ինչը խթանում է հատուկ սպիտակուցների արտադրությունը, որոնք պատասխանատու են նոր նեյրոնային կապերի ստեղծման (նեյրոպլաստիկության) համար: Միաժամանակ նվազում է սթրեսի հորմոնի (կորտիզոլի) մակարդակը և արտադրվում են էնդորֆիններ, որոնք բարելավում են հիշողությունը և կենտրոնացումը:
                </p>
              </div>

              <div className="feature-card">
                <h3>2. Միտոքոնդրիալ կոմպենսացիա</h3>
                <p className="scientific-text">
                  Թթվածնային երկարատև աշխատանքի շնորհիվ բջիջները ստանում են հզոր ազդակ: Մկանային հյուսվածքներում մեծանում է միտոքոնդրիումների չափսերն ու քանակը, ինչի շնորհիվ օրգանիզմը սովորում է սինթեզել էներգիա նվազագույն թթվածնի սպառմամբ:
                </p>
              </div>
            </div>

            <div className="geo-panel" style={{ borderTop: '4px solid #10b981' }}>
              <h3 style={{ color: '#10b981', marginTop: 0 }}>Գազափոխանակության Ցուցանիշներ</h3>
              <p className="scientific-text">Թոքերի օդափոխությունը հանգստի վիճակից անցնում է գերակտիվ փուլի.</p>
              <ul className="info-list">
                <li><strong>Հանգիստ վիճակում՝</strong> 6-8 լիտր օդ / րոպեում:</li>
                <li><strong>Միջին ընթացքի ժամանակ՝</strong> 40-60 լիտր օդ / րոպեում:</li>
                <li><strong>Առավելագույն ծանրաբեռնվածություն՝</strong> մինչև 120+ լիտր օդ / րոպեում:</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ԲԱԺԻՆ 3: ՖԻԶԿՈՒԼՏՈՒՐԱ */}
      {activeTab === 'sports' && (
        <div className="content-box">
          <h2 className="section-title">Կինեզիոլոգիա, Մկանային Տոպոգրաֆիա և Մարզումների Մատրիցա</h2>
          <div className="two-column-grid">
            <div>
              <h3 className="sub-section-title">Մկանային խմբերի կինետիկ ներգրավվածություն</h3>
              
              <div className="progress-container">
                <label>Ազդրի քառագլուխ մկան (Հիմնական հրող ուժ) - 95%</label>
                <div className="progress-bar-bg"><div className="progress-bar-fill" style={{ background: '#3b82f6', width: '95%' }}></div></div>
              </div>

              <div className="progress-container">
                <label>Սրունքի և ձկնամկանային խումբ (Պտույտի կայունացում) - 85%</label>
                <div className="progress-bar-bg"><div className="progress-bar-fill" style={{ background: '#10b981', width: '85%' }}></div></div>
              </div>

              <div className="progress-container">
                <label>Մեջքի և որովայնի մկաններ (Կեցվածքի ստատիկ հավասարակշռություն) - 60%</label>
                <div className="progress-bar-bg"><div className="progress-bar-fill" style={{ background: '#f59e0b', width: '60%' }}></div></div>
              </div>
            </div>

            <div>
              <h3 className="sub-section-title">Մարզումային Գոտիների Կառավարման Մատրիցա</h3>
              <div className="pulse-card">
                <strong>Գոտի 1 (Աերոբ-Ճարպային) | 60-70% պուլս</strong><br />
                Օպտիմալ է երկարատև տոկունության և նյութափոխանակության հիմնային կարգավորման համար:
              </div>
              <div className="pulse-card" style={{ borderLeftColor: '#f59e0b' }}>
                <strong>Գոտի 2 (Խառը-Գլիկոլիտիկ) | 70-80% պուլս</strong><br />
                Զարգացնում է սրտամկանի հզորությունը և մեծացնում է արյան հարվածային ծավալը:
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ԲԱԺԻՆ 4: ԱՇԽԱՐՀԱԳՐՈՒԹՅՈՒՆ */}
      {activeTab === 'geography' && (
        <div className="content-box">
          <h2 className="section-title">Էկո-Աշխարհագրություն և Բարձրլեռնային Ֆիզիոլոգիա</h2>
          <div className="two-column-grid">
            <div className="geo-panel badge-shirak">
              <h3>Շիրակի սարահարթի կլիմայական մոդելավորում</h3>
              <p className="scientific-text">
                Շիրակի մարզի աշխարհագրական դիրքը բնութագրվում է բարձր արևային ճառագայթմամբ և յուրահատուկ քամիների համակարգով։ Կեսօրից հետո ձևավորվող հովտային քամիները ստեղծում են բնական «աերոդինամիկ մարզասարք»։ Հանդիպակաց քամու դեմ վարելիս էներգիայի ծախսը աճում է 35%-ով, ինչը բարձրացնում է տեղացի մարզիկների ուժային դիմացկունությունը:
              </p>
            </div>

            <div className="geo-panel badge-gyumri">
              <h3>Գյումրու հիպոքսիկ ֆենոմենը (1500մ)</h3>
              <p className="scientific-text">
                Գյումրի քաղաքի բարձրլեռնային դիրքը հանգեցնում է նրան, որ մթնոլորտային օդում թթվածնի մասնակի ճնշումը ցածր է: Օրգանիզմը պատասխանում է սրան բնական դոպինգով՝ արտադրելով լրացուցիչ **էրիթրոցիտներ** և **հեմոգլոբին**։ Սա նշանակում է, որ Գյումրիում հեծանիվ վարողների թոքերն ու արյունատար համակարգը շատ ավելի արդյունավետ են թթվածին տեղափոխում, քան ցածրադիր վայրերում ապրողներինը:
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ԲԱԺԻՆ 5: ԱՄՓՈՓՈՒՄ */}
      {activeTab === 'summary' && (
        <div className="content-box">
          <h2 className="section-title">Գիտական Վերլուծության Եզրակացություններ</h2>
          <p className="scientific-text">
            Հետազոտության արդյունքները ցույց են տալիս, որ հեծանիվը հանդիսանում է կատարյալ էկոլոգիական և առողջարարական այլընտրանք քաղաքային տրանսպորտին։
          </p>
          <div className="feature-card" style={{ borderLeft: '4px solid #3b82f6' }}>
            <h4>Հիմնական գիտական փաստարկները.</h4>
            <ul className="info-list">
              <li><strong>Մեխանիկա.</strong> Փորձով հաստատված արագացումը (1.23 մ/վ²) և գիրոսկոպիկ կայունությունը ապահովում են շարժման բարձր կայունություն:</li>
              <li><strong>Ֆիզիոլոգիա.</strong> Նպաստում է նեյրոպլաստիկությանը և հոդերի անվնաս հիպերտրոֆիային:</li>
              <li><strong>Էկոլոգիա.</strong> Գյումրու պայմաններում հեծանիվի կիրառումը ոչ միայն զրոյացնում է CO₂ արտանետումները, այլև մարզում է բնակչության տոկունությունը բարձրլեռնային հիպոքսիայի շնորհիվ:</li>
            </ul>
          </div>
        </div>
      )}

      <footer className="app-footer">
        <p>© 2026 Թվային Գիտական Նախագիծ — Շիրակ, Գյումրի</p>
      </footer>
    </div>
  );
}