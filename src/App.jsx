// App.jsx
import React, { useState } from 'react';
import './App.css';

export default function App() {
  <head><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
  const [activeTab, setActiveTab] = useState('physics');

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Հեծանիվը որպես այլընտրանքային և էկոլոգիապես անվտանգ փոխադրամիջոց</h1>
        <p>Մուլտիդիսցիպլինար գիտական հետազոտությունների և թվային մոդելավորման հարթակ</p>
      </header>

      {/* Նավիգացիոն համակարգ */}
      <nav className="app-nav">
        <button className={`nav-button ${activeTab === 'physics' ? 'active' : ''}`} onClick={() => setActiveTab('physics')}>Ֆիզիկա</button>
        <button className={`nav-button ${activeTab === 'biology' ? 'active' : ''}`} onClick={() => setActiveTab('biology')}>Կենսաբանություն</button>
        <button className={`nav-button ${activeTab === 'sports' ? 'active' : ''}`} onClick={() => setActiveTab('sports')}>Ֆիզկուլտուրա</button>
        <button className={`nav-button ${activeTab === 'geography' ? 'active' : ''}`} onClick={() => setActiveTab('geography')}>Աշխարհագրություն</button>
        <button className={`nav-button ${activeTab === 'summary' ? 'active' : ''}`} onClick={() => setActiveTab('summary')}>Եզրակացություն</button>
      </nav>

      {/* ԲԱԺԻՆ 1: ՖԻԶԻԿԱ */}
      {activeTab === 'physics' && (
        <div className="content-box">
          <h2 className="section-title">Ֆիզիկա</h2>

          <div className="two-column-grid">
  {/* ՁԱԽ ՍՅՈՒՆԱԿ (Բլոկ 1 և Բլոկ 2) */}
  <div>
    <div className="feature-card">
      <h3>1. Աերոդինամիկ դիմադրություն և տուրբուլենտություն</h3>
      <p className="scientific-text">
        Շարժման արագության բարձրացմանը զուգընթաց (ուղիղ համեմատական արագության քառակուսուն) օդի հանդիպակաց դիմադրությունը դառնում է գլխավոր խոչընդոտը: Հեծանվորդի մարմնի հետևում առաջանում է ցածր ճնշման գոտի և տուրբուլենտային հոսքեր, որոնք արգելակում են ընթացքը: Մարմնի թեքությունը նվազեցնում է դիմացի մակերեսը՝ օպտիմալացնելով օդի սահուն հոսքը:
      </p>
    </div>

    <div className="feature-card">
      <h3>2. Պտտական մոմենտների կայունացում (Գիրոսկոպիկ Էֆեկտ)</h3>
      <p className="scientific-text">
        Անիվների արագ պտտման ժամանակ գործում է պտտական առանցքների կայունության օրենքը: Անիվները դիմադրում են կողմնակի շեղումներին, ինչը հեծանվորդին հնարավորություն է տալիս կատարելու բարդ մանևրներ բարձր արագության տակ՝ առանց հավասարակշռության կորստի։
      </p>
    </div>
  </div>

  {/* ԱՋ ՍՅՈՒՆԱԿ (Լաբորատոր Մատրիցա և Բլոկ 3) */}
  <div>
    <div className="feature-card" style={{ backgroundColor: 'rgba(59, 130, 246, 0.05)', borderColor: 'rgba(59, 130, 246, 0.2)' }}>
      <h3>Լաբորատոր Փորձարկման Մատրիցա</h3>
      <p className="scientific-text">
        Հաշվարկվել է էներգիայի պահպանման և փոխակերպման օրենքը 20 մետրանոց թեք հարթության վրա: Շփման գործակցի նվազագույն արժեքների պայմաններում պոտենցիալ էներգիան գրեթե ամբողջությամբ վերածվել է կինետիկ էներգիայի:
      </p>
    </div>

    <div className="feature-card">
      <h3>3. Բրեկինգի (Արգելակման) Դինամիկա և Իներցիա</h3>
      <p className="scientific-text">
        Արգելակման պահին իներցիայի ուժը մարմնի զանգվածի կենտրոնը տեղափոխում է առաջ: Դա կտրուկ մեծացնում է առջևի անիվի հակազդեցության ուժը և նվազեցնում հետևի անիվի կառչելիությունը ճանապարհին: Այս երևույթի սխալ հաշվարկը կարող է հանգեցնել հեծանիվի շրջմանը առանցքի շուրջ:
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

          {/* ՍԽԵՄԱ 1: ՈՒԺԵՐ ԹԵՔ ՀԱՐԹՈՒԹՅԱՆ ՎՐԱ */}
          <div className="schema-container">
            <h3>Նկար 1: Վեկտորային Ուժերի Թվային Մոդելավորում Թեքության Վրա</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '15px' }}>Ծանրության, հակազդեցության և շփման վեկտորների փոխազդեցությունը շարժման ընթացքում:</p>
            <svg width="100%" height="320" viewBox="0 0 800 320" className="svg-graphic">
              <polygon points="100,280 720,280 100,90" fill="#1e293b" />
              <line x1="100" y1="90" x2="720" y2="280" stroke="#3b82f6" strokeWidth="4" />
              <circle cx="380" cy="175" r="18" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" />
              <g><line x1="380" y1="175" x2="380" y2="280" stroke="#ef4444" strokeWidth="3" strokeDasharray="4 2" /><line x1="380" y1="175" x2="380" y2="270" stroke="#ef4444" strokeWidth="3" /><text x="390" y="260" fill="#ef4444" fontSize="13" fontWeight="600">Ծանրության ուժ (Fg = m·g)</text></g>
              <g><line x1="380" y1="175" x2="430" y2="90" stroke="#a855f7" strokeWidth="3" /><text x="440" y="100" fill="#a855f7" fontSize="13" fontWeight="600">Հակազդեցության ուժ (FN)</text></g>
              <g><line x1="380" y1="175" x2="280" y2="145" stroke="#f59e0b" strokeWidth="3" /><text x="210" y="130" fill="#f59e0b" fontSize="13" fontWeight="600">Շփման ուժ (Fշփում)</text></g>
              <g><line x1="380" y1="175" x2="500" y2="212" stroke="#10b981" strokeWidth="3" /><text x="490" y="200" fill="#10b981" fontSize="13" fontWeight="600">Համազոր ուժ (Fհամ)</text></g>
            </svg>
          </div>

          {/* ՍԽԵՄԱ 2: ՀԵԾԱՆԻՎԻ ԵՎ ՇՐՋԱՆԱԿԻ ԳԵՈՄԵՏՐԻԱ (ՆՈՐ) */}
          <div className="schema-container">
            <h3>Նկար 2: Շրջանակի Կառուցվածքային Գեոմետրիա և Բազային Առանցքներ</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '15px' }}>Անվային բազայի (Wheelbase) և կառուցվածքային անկյունների ազդեցությունը կայունության վրա:</p>
            <svg width="100%" height="320" viewBox="0 0 800 320" className="svg-graphic">
              {/* Անիվներ */}
              <circle cx="220" cy="220" r="65" fill="none" stroke="#475569" strokeWidth="5" strokeDasharray="5 3" />
              <circle cx="220" cy="220" r="8" fill="#64748b" />
              <circle cx="580" cy="220" r="65" fill="none" stroke="#475569" strokeWidth="5" strokeDasharray="5 3" />
              <circle cx="580" cy="220" r="8" fill="#64748b" />
              
              {/* Շրջանակ (Կմախք) */}
              <polygon points="220,220 340,220 480,120 310,120" fill="none" stroke="#f43f5e" strokeWidth="4" />
              {/* Առջևի պատառաքաղ և ղեկ */}
              <line x1="340" y1="220" x2="280" y2="80" stroke="#e11d48" strokeWidth="4" />
              <line x1="580" y1="220" x2="500" y2="70" stroke="#f43f5e" strokeWidth="4" />
              <line x1="500" y1="70" x2="460" y2="70" stroke="#ffffff" strokeWidth="5" /> {/* Ղեկ */}
              <line x1="280" y1="80" x2="250" y2="80" stroke="#ffffff" strokeWidth="5" /> {/* Նստատեղ */}

              {/* Չափման գծեր */}
              <line x1="220" y1="295" x2="580" y2="295" stroke="#10b981" strokeWidth="2" strokeDasharray="6 4" />
              <polygon points="220,295 230,290 230,300" fill="#10b981" />
              <polygon points="580,295 570,290 570,300" fill="#10b981" />
              <text x="400" y="285" fill="#10b981" fontSize="13" fontWeight="600" textAnchor="middle">Անվային Բազա (Wheelbase)</text>

              {/* Անկյուններ */}
              <path d="M 480,120 A 40,40 0 0,1 510,150" fill="none" stroke="#f59e0b" strokeWidth="2" />
              <text x="520" y="130" fill="#f59e0b" fontSize="12" fontWeight="600">α (Ղեկի անկյուն)</text>
            </svg>
          </div>

          {/* ՍԽԵՄԱ 3: ԱՐԳԵԼԱԿՄԱՆ ԴԻՆԱՄԻԿԱ ԵՎ ՍԻԼԵՐ (ՆՈՐ) */}
          <div className="schema-container">
            <h3>Նկար 3: Ուժերի Դինամիկ Վերաբաշխում Արգելակման (Տորմոզ) Պահին</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '15px' }}>Իներցիայի ուժի ազդեցությամբ ծանրության կենտրոնի տեղափոխումը դեպի առջևի առանցք:</p>
            <svg width="100%" height="320" viewBox="0 0 800 320" className="svg-graphic">
              {/* Հեծանիվի հիմք */}
              <circle cx="250" cy="220" r="55" fill="none" stroke="#334155" strokeWidth="4" />
              <circle cx="550" cy="220" r="55" fill="none" stroke="#334155" strokeWidth="4" />
              <polygon points="250,220 360,220 470,140 330,140" fill="none" stroke="#64748b" strokeWidth="3" />
              <line x1="470" y1="140" x2="550" y2="220" stroke="#64748b" strokeWidth="3" />

              {/* Զանգվածի կենտրոն (Center of Mass) */}
              <circle cx="390" cy="110" r="14" fill="#ea580c" />
              <circle cx="390" cy="110" r="6" fill="#ffffff" />
              <text x="390" y="85" fill="#ea580c" fontSize="13" fontWeight="700" textAnchor="middle">Զանգվածի Կենտրոն</text>

              {/* Վեկտորներ արգելակման ժամանակ */}
              <g><line x1="390" y1="110" x2="510" y2="110" stroke="#ef4444" strokeWidth="4" /><text x="520" y="115" fill="#ef4444" fontSize="13" fontWeight="700">Իներցիայի Ուժ (F = m·a)</text></g>
              <g><line x1="390" y1="110" x2="390" y2="190" stroke="#f59e0b" strokeWidth="3" /><text x="330" y="180" fill="#f59e0b" fontSize="12">Ծանրություն (Fg)</text></g>
              
              {/* Առջևի անիվի սեղմում */}
              <g><line x1="550" y1="220" x2="550" y2="140" stroke="#10b981" strokeWidth="4" /><text x="565" y="160" fill="#10b981" fontSize="13" fontWeight="700">Առաջնային հակազդեցություն (FN1 ↑)</text></g>
              {/* Հետևի անիվի թուլացում */}
              <g><line x1="250" y1="220" x2="250" y2="190" stroke="#38bdf8" strokeWidth="2" /><text x="140" y="185" fill="#38bdf8" fontSize="12">Հետին հակազդեցություն (FN2 ↓)</text></g>
            </svg>
          </div>

          {/* ՍԽԵՄԱ 4: ԱԵՐՈԴԻՆԱՄԻԿԱՅԻ ԳՐԱՖԻԿ (ՆՈՐ) */}
          <div className="schema-container">
            <h3>Նկար 4: Օդի Դիմադրության Էքսպոնենցիալ Աճի Գրաֆիկ</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '15px' }}>Ցույց է տալիս, թե ինչու է բարձր արագություններում էներգիայի 90%-ը ծախսվում միայն օդի պատնեշը հաղթահարելու վրա:</p>
            <svg width="100%" height="280" viewBox="0 0 800 280" className="svg-graphic">
              <line x1="80" y1="230" x2="740" y2="230" stroke="#64748b" strokeWidth="2" /> {/* X առանցք */}
              <line x1="80" y1="30" x2="80" y2="230" stroke="#64748b" strokeWidth="2" />  {/* Y առանցք */}
              
              {/* Էքսպոնենցիալ կոր (Կվադրատային կախվածություն F ~ v²) */}
              <path d="M 80,230 Q 300,220 500,140 T 700,40" fill="none" stroke="#3b82f6" strokeWidth="4" />
              
              <circle cx="500" cy="140" r="6" fill="#ef4444" /><text x="470" y="125" fill="#cbd5e1" fontSize="12">20 կմ/ժ (Միջին)</text>
              <circle cx="700" cy="40" r="6" fill="#ef4444" /><text x="590" y="35" fill="#ef4444" fontSize="13" fontWeight="700">40 կմ/ժ (Սպորտային)</text>

              <text x="40" y="130" fill="#64748b" fontSize="12" transform="rotate(-90 40,130)" textAnchor="middle">Դիմադրության Ուժ (F_air)</text>
              <text x="410" y="260" fill="#64748b" fontSize="12" textAnchor="middle">Արագություն (v)</text>
            </svg>
          </div>
        </div>
      )}

      {/* ԲԱԺԻՆ 2: ԿԵՆՍԱԲԱՆՈՒԹՅՈՒՆ */}
     {activeTab === 'biology' && (
  <div className="content-box">
    <h2 className="section-title">Կենսաբանություն</h2>

    <div className="two-column-grid">
      <div>
        <div className="feature-card">
          <h3>1. Սրտանոթային և շնչառական համակարգերի ամրապնդում</h3>
          <p className="scientific-text">
            Հեծանիվ վարելու ժամանակ սիրտը սկսում է ավելի ակտիվ աշխատել,
            իսկ շնչառությունը դառնում է ավելի խորը։ Դա օգնում է ամրացնել
            սիրտն ու թոքերը, բարձրացնել դիմացկունությունը և ավելի հեշտ
            հաղթահարել ֆիզիկական ծանրաբեռնվածությունը։
          </p>
        </div>

        <div className="feature-card">
          <h3>2. Օրգանիզմի արյան շրջանառության և թթվածնի մատակարարման բարելավում</h3>
          <p className="scientific-text">
            Հեծանիվ վարելիս արյունը ավելի արագ է շրջանառվում օրգանիզմում,
            ինչի շնորհիվ մարմնի տարբեր մասերը ստանում են ավելի շատ թթվածին
            և օգտակար նյութեր։ Դա օգնում է մարդուն զգալ ավելի էներգիայով լի
            և ակտիվ։
          </p>
        </div>
      </div>

      <div className="geo-panel" style={{ borderTop: '4px solid #10b981' }}>
        <h3 style={{ color: '#10b981', marginTop: 0 }}>
          Մկանային համակարգի զարգացում
        </h3>

        <p className="scientific-text">
          Հեծանիվ վարելը զարգացնում և ամրացնում է հատկապես ոտքերի,
          մեջքի և որովայնի մկանները։ Կանոնավոր մարզումները օգնում են
          մարմնին դառնալ ավելի ուժեղ և ճկուն։
        </p>

        <h3 style={{ color: '#10b981' }}>
          Ակտիվ և առողջ ապրելակերպի ձևավորում
        </h3>

        <p className="scientific-text">
          Հեծանիվը ոչ միայն մարզվելու միջոց է, այլ նաև առողջ սովորություն։
          Այն օգնում է ավելի շատ շարժվել, ժամանակ անցկացնել մաքուր օդում
          և պահպանել առողջ ապրելակերպ։
        </p>
      </div>
    </div>
  </div>
)}


{/* ԲԱԺԻՆ 3: ՖԻԶԿՈՒԼՏՈՒՐԱ */}
{activeTab === 'sports' && (
  <div className="content-box">
    <h2 className="section-title">Կինեզիոլոգիա, Մկանային Տոպոգրաֆիա և Մարզումների Մատրիցա</h2>
    
    {/* Մկանների և պուլսի բաժինը */}
    <div className="two-column-grid" style={{ marginBottom: '40px' }}>
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

    {/* ՏԵԽՆԻԿԱԿԱՆ ՔԱՐՏԵԶԻ ԲԱԺԻՆ */}
    <div className="schema-container">
      <h3 style={{ color: '#ffffff', marginBottom: '5px' }}>Նկար 5: Հեծանիվի Կառուցվածքային Մասերի Տեխնիկական Քարտեզ</h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '20px' }}>Նկար 3-ի մեկնաբանություն. Այս տեխնիկական քարտեզը ցույց է տալիս հեծանիվի բոլոր հիմնական մասերը հայերեն անվանումներով:</p>
      
      {/* Վեկտորային ադապտիվ հեծանիվ */}
      <svg width="100%" height="320" viewBox="0 0 800 320" className="svg-graphic" style={{ background: '#0d1527', marginBottom: '25px' }}>
        <circle cx="240" cy="190" r="65" fill="none" stroke="#ef4444" strokeWidth="5" />
        <circle cx="240" cy="190" r="60" fill="none" stroke="#ffffff" strokeWidth="1.5" />
        <circle cx="240" cy="190" r="62" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="3 4" />
        <circle cx="240" cy="190" r="8" fill="#cbd5e1" />

        <circle cx="560" cy="190" r="65" fill="none" stroke="#ef4444" strokeWidth="5" />
        <circle cx="560" cy="190" r="60" fill="none" stroke="#ffffff" strokeWidth="1.5" />
        <circle cx="560" cy="190" r="62" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="3 4" />
        <circle cx="560" cy="190" r="8" fill="#cbd5e1" />

        <polygon points="240,190 380,190 520,100 350,100" fill="none" stroke="#cbd5e1" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="380" y1="190" x2="350" y2="100" stroke="#cbd5e1" strokeWidth="5" />
        <line x1="560" y1="190" x2="520" y2="100" stroke="#94a3b8" strokeWidth="4" />
        <line x1="520" y1="100" x2="510" y2="65" stroke="#cbd5e1" strokeWidth="5" />
        <circle cx="510" cy="65" r="5" fill="#ef4444" />
        <line x1="510" y1="65" x2="485" y2="70" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
        <line x1="350" y1="100" x2="340" y2="60" stroke="#cbd5e1" strokeWidth="4" />
        <path d="M 315,55 Q 340,50 365,60" fill="none" stroke="#ef4444" strokeWidth="7" strokeLinecap="round" />
        <circle cx="380" cy="190" r="22" fill="none" stroke="#f59e0b" strokeWidth="3" strokeDasharray="4 2" />
        <line x1="240" y1="190" x2="380" y2="172" stroke="#f59e0b" strokeWidth="2" />
        <line x1="240" y1="190" x2="380" y2="208" stroke="#f59e0b" strokeWidth="2" />
        <line x1="380" y1="190" x2="400" y2="215" stroke="#ffffff" strokeWidth="3" />
        <rect x="390" y="215" width="20" height="6" fill="#f59e0b" rx="2" />

        <path d="M 510,65 L 610,40" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 2" />
        <text x="615" y="44" fill="#3b82f6" fontSize="12" fontWeight="700">Ղեկ (Handlebars)</text>
        <path d="M 340,55 L 250,30" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 2" />
        <text x="175" y="34" fill="#3b82f6" fontSize="12" fontWeight="700">Նստատեղ (Saddle)</text>
        <path d="M 430,140 L 530,140" fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 2" />
        <text x="540" y="144" fill="#10b981" fontSize="12" fontWeight="700">Շրջանակ (Frame)</text>
        <path d="M 380,190 L 460,250" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2" />
        <text x="470" y="254" fill="#f59e0b" fontSize="12" fontWeight="700">Ակնարախման համակարգ</text>
        <path d="M 240,190 L 140,220" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 2" />
        <text x="70" y="224" fill="#38bdf8" fontSize="12" fontWeight="700">Անիվներ (Wheels)</text>
      </svg>

      {/* ՏԵՔՍՏԵՐԸ */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px' }}>
        <ul className="info-list" style={{ fontSize: '15px', color: '#cbd5e1', lineHeight: '1.8' }}>
          <li style={{ marginBottom: '12px' }}>
            <strong style={{ color: '#60a5fa' }}>Շրջանակ՝</strong> Հեծանիվի «կմախքը», որը պահում է ամբողջ կառուցվածքը:
          </li>
          <li style={{ marginBottom: '12px' }}>
            <strong style={{ color: '#60a5fa' }}>Ակնարախման համակարգ (Drivetrain)՝</strong> Այս համակարգը ներառում է պեդալները, առաջնային ատամնանիվը, շղթան և հետին ատամնանիվները (11-32 ատամ), ինչպես նաև փոխանցման փոխարկիչները: Սա այն համակարգն է, որտեղ կատարվում է մեր հաշվարկած փոխանցման հարաբերակցության փոփոխությունը:
          </li>
          <li style={{ marginBottom: '12px' }}>
            <strong style={{ color: '#60a5fa' }}>Անիվներ՝</strong> Ապահովում են գլորումը: Նկարում երևում են ժամանակակից սկավառակային արգելակները:
          </li>
          <li style={{ marginBottom: '12px' }}>
            <strong style={{ color: '#60a5fa' }}>Ղեկ և Նստատեղ՝</strong> Հեծանվորդի կառավարման և հարմարավետության համար:
          </li>
        </ul>
      </div>
    </div>


  </div>
)}
     
      {/* ԲԱԺԻՆ 4: ԱՇԽԱՐՀԱԳՐՈՒԹՅՈՒՆ */}
      {activeTab === 'geography' && (
        <div className="content-box">
          <h2 className="section-title">Աշխարհագրություն</h2>
          <div className="two-column-grid">
            <div className="geo-panel badge-shirak">
              <h3>Շիրակի սարահարթի կլիմայական մոդելավորում</h3>
              <p className="scientific-text">
                Շիրակի մարզի աշխարհագրական դիրքը բնութագրվում է բարձր արևային ճառագայթմամբ և յուրահատուկ քամիների համակարգով։ Կեսօրից հետո ձևավորվող հովտային քամիները ստեղծում են բնական «Աերոդինամիկ մարզասարք»։ Հանդիպակց քամու դեմ վարելիս էներգիայի ծխսը պտտվում է 35%-ով, ինչը բарձրացնում է տեղցի մាឰզիկների ուժը:
              </p>
            </div>

            <div className="geo-panel badge-gyumri">
              <h3>Գյումրու հիպոքսիկ ֆենոմենը (1500մ)</h3>
              <p className="scientific-text">
                Գյումրի քաղաքի բարձրլեռնային դիրքը հանգեցնում է նրան, որ մթնոլորտային օդում թթվածնի մասնակի ճնշումը ցածր է: Օրգանիզմը պատասխանում է սրան բնական դոպիнգով՝ արտադրելով լրացուցիչ **էրիթրոցիտներ** և **հեմոգլոբին**։ Սа   nshanaqum, qani Gyumrium hecdaniv varoghneri tokhern u aryunatar hamakarg yev shat aveli ardyunavet en ththvacin terekhavorq, qan tseradriv vayreric aproghnerin en:
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
           <p> Հեծանվային սպորտը պարզապես ֆիզիկական ակտիվություն կամ ժամանց չէ. այն առողջ, գիտակից և էկոլոգիապես մաքուր կենսակերպի հիմնաքարերից է: Այս սպորտաձևի զարգացումը նպաստում է ոչ միայն անհատի ֆիզիկական ու հոգեկան առողջության պահպանմանը, այլև ունի գլոբալ նշանակություն՝ նվազեցնելով շրջակա միջավայրի աղտոտվածությունը և բեռնաթափելով քաղաքային տրանսպորտը: Հեծանվային մշակույթի արմատավորումը հասարակության մեջ ներդրում է ապագայի առողջ սերնդի և կայուն էկոհամակարգի ձևավորման գործում։</p>
          </div>
        </div>
      )}

      <footer className="app-footer">
        <p>© 2026 Թվային Գիտական Նախագիծ — Շիրակ, Գյումրի</p>
      </footer>
    </div>
  );
}