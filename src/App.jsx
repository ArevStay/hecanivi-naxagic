import React, { useState } from 'react';

export default function BicycleScienceApp() {
  const [activeTab, setActiveTab] = useState('physics');

  // Սթայլեր (Styles)
  const styles = {
    container: { fontFamily: 'Segoe UI, Roboto, sans-serif', padding: '20px', maxWidth: '1200px', margin: '0 auto', color: '#333', backgroundColor: '#f9f9f9', borderRadius: '12px' },
    header: { textAlign: 'center', background: 'linear-gradient(135deg, #1e3c72, #2a5298)', color: 'white', padding: '30px', borderRadius: '10px', marginBottom: '25px' },
    nav: { display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '30px', flexWrap: 'wrap' },
    button: (isActive) => ({ padding: '12px 24px', fontSize: '16px', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer', backgroundColor: isActive ? '#2a5298' : '#e0e0e0', color: isActive ? 'white' : '#333', transition: 'all 0.3s' }),
    contentBox: { backgroundColor: 'white', padding: '25px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', marginBottom: '20px' },
    grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', alignItems: 'center' },
    title: { color: '#1e3c72', borderBottom: '2px solid #2a5298', paddingBottom: '10px', marginBottom: '15px' },
    list: { lineHeight: '1.8', paddingLeft: '20px' },
    alertBox: { backgroundColor: '#eef2f7', padding: '15px', borderRadius: '8px', borderLeft: '5px solid #2a5298', marginTop: '15px' }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h3>Հեծանիվը որպես այլընտրանքային և էկոլոգիապես անվտանգ փոխադրամիջոց</h3>
        <p>Գիտական հայացք հեծանվային սպորտին և տրանսպորտին</p>
      </header>

      {/* Նավիգացիա */}
      <nav style={styles.nav}>
        <button style={styles.button(activeTab === 'physics')} onClick={() => setActiveTab('physics')}>Ֆիզիկա</button>
        <button style={styles.button(activeTab === 'biology')} onClick={() => setActiveTab('biology')}>Կենսաբանություն</button>
        <button style={styles.button(activeTab === 'sports')} onClick={() => setActiveTab('sports')}>Ֆիզկուլտուրա</button>
        <button style={styles.button(activeTab === 'geography')} onClick={() => setActiveTab('geography')}>Աշխարհագրություն (Շիրակ/Գյումրի)</button>
      </nav>

      {/* Բաժին 1: Ֆիզիկա */}
      {activeTab === 'physics' && (
        <div style={styles.contentBox}>
          <h2 style={styles.title}>Ֆիզիկայի օրենքները հեծանվավազքում</h2>
          <div style={styles.grid}>
            <div>
              <h3>Հիմնական ուժերը և մեխանիզմները.</h3>
              <ul style={styles.list}>
                <li><strong>Կինետիկ էներգիա:</strong> Մկանային ուժը ոտնակների միջոցով փոխանցվում է անիվներին՝ վերածվելով շարժման էներգիայի։</li>
                <li><strong>Շփման ուժ և Կառչում:</strong> Անվադողի և ասֆալտի միջև շփումն ապահովում է անվտանգ շարժումն ու արգելակումը։</li>
                <li><strong>Օդի դիմադրություն:</strong> Բարձր արագության ժամանակ սա հիմնական ուժն է, որը հեծանվորդը պետք է հաղթահարի (այդ պատճառով ընդունում են աերոդինամիկ դիրք)։</li>
                <li><strong>Լծակի սկզբունք:</strong> Ոտնակները և աստղանիվները գործում են որպես մեխանիզմ, որը թույլ է տալիս փոխել արագությունն ու ուժի հարաբերակցությունը։</li>
              </ul>
            </div>
            <div>
              {/* Գրաֆիկ 1: Արագության և Օդի դիմադրության կապը */}
              <h4 style={{textAlign: 'center', marginBottom: '5px'}}>Օդի դիմադրության ուժի կախվածությունը արագությունից</h4>
              <svg width="100%" height="200" viewBox="0 0 400 200" style={{backgroundColor: '#f0f4f8', borderRadius: '8px'}}>
                {/* Առանցքներ */}
                <line x1="50" y1="20" x2="50" y2="170" stroke="#333" strokeWidth="2" />
                <line x1="50" y1="170" x2="380" y2="170" stroke="#333" strokeWidth="2" />
                {/* Կոր գիծ */}
                <path d="M 50 170 Q 200 160, 350 40" fill="none" stroke="#e74c3c" strokeWidth="3" />
                {/* Նշումներ հայերենով */}
                <text x="35" y="25" fill="#333" fontSize="12" textAnchor="end">Ուժ</text>
                <text x="370" y="190" fill="#333" fontSize="12" textAnchor="end">Արագություն</text>
                <text x="220" y="110" fill="#e74c3c" fontSize="12" fontWeight="bold">Դիմադրության աճ</text>
              </svg>

              {/* Գրաֆիկ 2: Արգելակման ճանապարհը */}
              <h4 style={{textAlign: 'center', marginTop: '15px', marginBottom: '5px'}}>Արգելակման ճանապարհի երկարությունը ըստ արագության</h4>
              <svg width="100%" height="150" viewBox="0 0 400 150" style={{backgroundColor: '#f0f4f8', borderRadius: '8px', marginTop: '10px'}}>
                <line x1="50" y1="10" x2="50" y2="120" stroke="#333" strokeWidth="2" />
                <line x1="50" y1="120" x2="380" y2="120" stroke="#333" strokeWidth="2" />
                {/* Սյունակներ */}
                <rect x="70" y="90" width="40" height="30" fill="#3498db" />
                <rect x="150" y="60" width="40" height="60" fill="#3498db" />
                <rect x="230" y="20" width="40" height="100" fill="#3498db" />
                
                <text x="35" y="20" fill="#333" fontSize="11" textAnchor="end">Մետրեր</text>
                <text x="370" y="140" fill="#333" fontSize="11" textAnchor="end">Արագություն (կմ/ժ)</text>
                <text x="90" y="135" fill="#333" fontSize="10" textAnchor="middle">20 կմ/ժ</text>
                <text x="170" y="135" fill="#333" fontSize="10" textAnchor="middle">30 կմ/ժ</text>
                <text x="250" y="135" fill="#333" fontSize="10" textAnchor="middle">40 կմ/ժ</text>
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Բաժին 2: Կենսաբանություն */}
      {activeTab === 'biology' && (
        <div style={styles.contentBox}>
          <h2 style={styles.title}>Ազդեցությունը մարդու օրգանիզմի վրա</h2>
          <div style={styles.grid}>
            <div>
              <h3>Օրգան-համակարգերի աշխատանքը.</h3>
              <ul style={styles.list}>
                <li><strong>Սիրտ-անոթային համակարգ:</strong> Մեծանում է սրտի մկանի կծկման ուժը, բարելավվում է արյան շրջանառությունը, հյուսվածքները հարստանում են թթվածնով։</li>
                <li><strong>Շնչառական համակարգ:</strong> Թոքերի կենսական տարողությունը մեծանում է, շնչառությունը դառնում է ավելի խորը և արդյունավետ։</li>
                <li><strong>Նյութափոխանակություն:</strong> Ակտիվանում է ճարպերի և ածխաջրերի քայքայումը՝ նպաստելով էներգիայի ճիշտ ծախսին։</li>
                <li><strong>Նյարդային համակարգ:</strong> Արտադրվում են էնդորֆիններ («երջանկության հորմոններ»), որոնք նվազեցնում են սթրեսի մակարդակը։</li>
              </ul>
            </div>
            <div style={{textAlign: 'center', backgroundColor: '#e8f5e9', padding: '20px', borderRadius: '10px'}}>
              <h3>Ծախսված էներգիա (Կալորիաներ / 1 ժամում)</h3>
              <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', background: 'white', padding: '10px', borderRadius: '5px'}}>
                  <span>Դանդաղ զբոսանք (15 կմ/ժ)</span>
                  <strong style={{color: '#2e7d32'}}>~300 կկալ</strong>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', background: 'white', padding: '10px', borderRadius: '5px'}}>
                  <span>Միջին արագություն (20 կմ/ժ)</span>
                  <strong style={{color: '#2e7d32'}}>~550 կկալ</strong>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', background: 'white', padding: '10px', borderRadius: '5px'}}>
                  <span>Ինտենսիվ վազք (25+ կմ/ժ)</span>
                  <strong style={{color: '#2e7d32'}}>~800+ կկալ</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Բաժին 3: Ֆիզկուլտուրա */}
      {activeTab === 'sports' && (
        <div style={styles.contentBox}>
          <h2 style={styles.title}>Ֆիզիկական կուլտուրա և մարզումներ</h2>
          <h3>Մկանային խմբերի զարգացում</h3>
          <p>Հեծանիվ վարելիս աշխատում է մարդու մարմնի մկանների զգալի մասը։ Ստորև ներկայացված է մկանների ծանրաբեռնվածության աստիճանը.</p>
          
          <div style={{margin: '20px 0'}}>
            <label>Ազդրի քառագլուխ մկան (ամենամեծ ծանրաբեռնվածությունը) - 95%</label>
            <div style={{background: '#eee', height: '20px', borderRadius: '10px', overflow: 'hidden', marginBottom: '10px'}}>
              <div style={{background: '#f39c12', width: '95%', height: '100%'}}></div>
            </div>

            <label>Ձկնամկաններ (սրունք) - 80%</label>
            <div style={{background: '#eee', height: '20px', borderRadius: '10px', overflow: 'hidden', marginBottom: '10px'}}>
              <div style={{background: '#e67e22', width: '80%', height: '100%'}}></div>
            </div>

            <label>Նստատեղի մկաններ - 70%</label>
            <div style={{background: '#eee', height: '20px', borderRadius: '10px', overflow: 'hidden', marginBottom: '10px'}}>
              <div style={{background: '#d35400', width: '70%', height: '100%'}}></div>
            </div>

            <label>Որովայնի մամլիչ (պրես) և մեջքի մկաններ (կայունացում) - 50%</label>
            <div style={{background: '#eee', height: '20px', borderRadius: '10px', overflow: 'hidden', marginBottom: '10px'}}>
              <div style={{background: '#bdc3c7', width: '50%', height: '100%'}}></div>
            </div>
          </div>

          <div style={styles.alertBox}>
            <strong>Կարևոր կանոն հեծանվորդի համար.</strong> Մարզումից առաջ անհրաժեշտ է կատարել հոդերի տաքացում (հատկապես ծնկների), իսկ վարելու ընթացքում պահպանել ջրային հաշվեկշիռը։
          </div>
        </div>
      )}

      {/* Բաժին 4: Աշխարհագրություն */}
      {activeTab === 'geography' && (
        <div style={styles.contentBox}>
          <h2 style={styles.title}>Աշխարհագրական միջավայր. Շիրակ և Գյումրի</h2>
          <p>Հեծանվային տրանսպորտի զարգացումը ուղղակիորեն կապված է տեղանքի ռելիեֆի (լանդշաֆտի) և կլիմայական պայմանների հետ։</p>
          
          <div style={styles.grid}>
            {/* Շիրակի մարզ */}
            <div style={{background: '#fff3e0', padding: '15px', borderRadius: '8px'}}>
              <h3>Շիրակի մարզի ռելիեֆն ու կլիման</h3>
              <p><strong>Ռելիեֆ:</strong> Շիրակի սարահարթը հիմնականում հարթավայրային է՝ շրջապատված լեռնաշղթաներով (Արագած, Փամբակ): Սա ստեղծում է հիանալի նախադրյալներ երկար հեռավորության վրա հեծանվային արշավներ կազմակերպելու համար։</p>
              <p><strong>Կլիմա:</strong> Խիստ ցամաքային է։ Ձմեռը երկարատև է և ձնառատ (ինչը դժվարացնում է ձմեռային հեծանվավազքը), իսկ ամառը՝ զով և արևոտ, ինչը լավագույն շրջանն է ակտիվ վարելու համար։</p>
            </div>

            {/* Գյումրի քաղաք */}
            <div style={{background: '#e0f7fa', padding: '15px', borderRadius: '8px'}}>
              <h3>Գյումրու ռելիեֆն ու կլիման</h3>
              <p><strong>Ռելիեֆ:</strong> Գյումրին գտնվում է մոտ 1500-1550 մետր բարձրության վրա։ Քաղաքի ներքին ռելիեֆը հիմնականում հարթ է, առանց կտրուկ և հոգնեցուցիչ վերելքների։ Սա ιδεալական է հեծանիվը որպես **ամենօրյա էկոլոգիական տրանսպորտ** օգտագործելու համար։</p>
              <p><strong>Կլիմա:</strong> Բնորոշ են մաքուր լեռնային օդը և ուժեղ քամիները (հատկապես երեկոյան ժամերին): Հեծանվորդները պետք է հաշվի առնեն հարավային կամ արևմտյան քամիների ուղղությունը, որոնք ֆիզիկայից հայտնի օդի դիմադրության պատճառով կարող են ազդել արագության վրա։</p>
            </div>
          </div>

          <div style={{...styles.alertBox, backgroundColor: '#e0f2f1', borderLeftColor: '#009688'}}>
            <h4>Էկոլոգիական հեռանկարը Գյումրիում.</h4>
            <p>Քանի որ Գյումրին ունի հարմարավետ հարթ տարածություն, հեծանվային ուղիների ներդրումը կարող է կտրուկ նվազեցնել քաղաքի կենտրոնի մեքենաների ծանրաբեռնվածությունը և պահպանել լեռնային մաքուր օդը:</p>
          </div>
        </div>
      )}

      <footer style={{textAlign: 'center', marginTop: '30px', color: '#777', fontSize: '14px'}}>
        <p>© 2026 Էկոլոգիական և Գիտական Նախագիծ — Հեծանիվը բոլոր գիտություններում</p>
      </footer>
    </div>
  );
}