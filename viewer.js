(()=>{
  const $=id=>document.getElementById(id), mode=document.body.dataset.mode, total=Number(document.body.dataset.total), folder=document.body.dataset.folder;
  const label=mode==='main'?'主簡報':'補充資料', input=$('page'), img=$('slide'), frame=$('frame');
  const chapters=mode==='main'?[{before:7,id:'chapter-1',title:'五項共同關注',description:'從審查經驗歸納跨領域的共同關注'},{before:15,id:'chapter-2',title:'選題與構想',description:'把共同關注帶入選題思考'},{before:23,id:'chapter-3',title:'起步與延伸',description:'整理下一步與延伸資源'}]:[];
  const casePages={
  "15": {
    "title": "七項任務：從想法到申請構想",
    "overview": [
      "1 盤點資源",
      "2 形成問題",
      "3 對照文獻",
      "4 說清價值",
      "5 確認可行條件",
      "6 篩選方向",
      "7 整理一頁構想"
    ]
  },
  "16": {
    "title": "任務 1：盤點資源",
    "left": [
      "從研究領域的實際現象與專長出發。",
      "盤點相關文獻、資料及可合作資源。"
    ],
    "right": [
      "現象：商品有高星等，但評論文字可能提到明顯缺點。",
      "研究起點：當評價訊號互相矛盾，消費者如何判斷可信度？",
      "資源：既有評論研究與公開商品評論資料。"
    ]
  },
  "17": {
    "title": "任務 2：形成問題",
    "left": [
      "釐清值得解釋的現象。",
      "問清楚關係、可能原因與適用情境。"
    ],
    "right": [
      "核心問題：星等與文字不一致時，消費者如何判斷並使用評論？",
      "可能機制：訊號衝突影響對評論可信度的判斷。",
      "情境差異：高風險與低風險商品，是否有不同反應？"
    ]
  },
  "18": {
    "title": "任務 3：對照文獻",
    "left": [
      "找最接近問題的研究。",
      "分辨既有發現與仍需查證的延伸。"
    ],
    "right": [
      "Husain 等（2023）：研究星等與文字一致性及評論有用性。",
      "Ahn 與 Lee（2024）：研究評論者特徵與購買意願。",
      "延伸方向：連結訊號衝突、可信度與商品風險；再比較最接近的研究。"
    ],
    "links": [
      [
        "Husain 等（2023）：評價一致性",
        "https://www.informingscience.org/Publications/5187"
      ],
      [
        "Ahn 與 Lee（2024）：評論與購買意願",
        "https://www.mdpi.com/0718-1876/19/2/55"
      ]
    ]
  },
  "19": {
    "title": "任務 4：說清價值",
    "left": [
      "指出研究可能增加什麼理解。",
      "區分概念上的貢獻與實務意義。"
    ],
    "right": [
      "概念價值：釐清評價訊號衝突如何影響資訊判斷。",
      "情境價值：比較不同商品風險下，消費者是否採用評論。",
      "實務價值：幫助平台思考如何呈現分歧資訊。"
    ]
  },
  "20": {
    "title": "任務 5：確認可行條件",
    "left": [
      "確認資料能否回答問題。",
      "盤點研究能力、資料權限與時間。"
    ],
    "right": [
      "公開評論資料可提供星等、文字與有用性回饋。",
      "消費者的信任與商品風險感受，需要確認能否另行取得。",
      "先確認資料授權、對象及可投入時間。"
    ]
  },
  "21": {
    "title": "任務 6：篩選方向",
    "left": [
      "比較研究價值與實際條件。",
      "選擇值得深入、資源可支撐的方向。"
    ],
    "right": [
      "方向一：評價衝突與評論可信度。",
      "方向二：不同商品風險下的資訊採用。",
      "優先聚焦「衝突如何影響可信度」，再視資料納入情境差異。"
    ]
  },
  "22": {
    "title": "任務 7：整理一頁構想",
    "left": [
      "把問題、論述與條件整合。",
      "讓不同領域的審查人看懂研究重點。"
    ],
    "right": [
      "候選題目：評價訊號衝突、消費者信任與商品風險。",
      "研究問題：星等與文字衝突時，消費者如何判斷評論？",
      "候選貢獻：說明資訊衝突的判斷機制及其情境差異。"
    ]
  },
  "24": {
    "title": "同一個案例：七項任務的成果",
    "overview": [
      "1 起點：評價訊號衝突",
      "2 問題：衝突與可信度",
      "3 文獻：一致性與評論判斷",
      "4 價值：判斷機制與商品情境",
      "5 條件：評論與信任資料",
      "6 取捨：聚焦可信度",
      "7 構想：訊號衝突、信任與風險"
    ]
  }
};
  const financePages={
  "15": {},
  "16": {
    "right": [
      "現象：央行升息時，不同銀行調高存款利率的速度可能不同。",
      "研究起點：數位金融普及，會不會改變銀行競爭與調價？",
      "資源：央行利率資料及銀行競爭相關文獻。"
    ]
  },
  "17": {
    "right": [
      "核心問題：數位金融普及是否與銀行存款利率調整速度有關？",
      "可能機制：比較資訊更容易，可能改變銀行爭取存款的競爭。",
      "情境差異：客戶轉換銀行的便利程度是否影響這個關係？"
    ]
  },
  "18": {
    "right": [
      "Driscoll 與 Judson（2013）：存款利率調整速度存在差異。",
      "Erel 等（2023）：研究線上銀行與貨幣政策利率傳遞。",
      "延伸方向：比較數位服務、客戶轉換與利率調整的關係；再比較最接近的研究。"
    ],
    "links": [
      [
        "Driscoll 與 Judson（2013）：存款利率調整",
        "https://www.federalreserve.gov/pubs/feds/2013/201380/"
      ],
      [
        "Erel 等（2023）：線上銀行與利率傳遞",
        "https://www.nber.org/papers/w31380"
      ],
      [
        "央行：五大銀行利率歷史資料",
        "https://www.cbc.gov.tw/tw/np-1166-1.html"
      ]
    ]
  },
  "19": {
    "right": [
      "概念價值：連結數位金融、銀行競爭與利率傳遞。",
      "待釐清的機制：資訊搜尋與轉換銀行的成本如何影響競爭。",
      "實務價值：幫助理解銀行利率調整差異。"
    ]
  },
  "20": {
    "right": [
      "央行提供五大銀行存放款利率歷史資料與牌告利率查詢。",
      "銀行別利率、數位服務使用及轉換條件資料需確認可得性。",
      "若缺少轉換資料，需調整可回答的問題範圍。"
    ]
  },
  "21": {
    "right": [
      "方向一：數位服務普及與銀行利率調整差異。",
      "方向二：存款人轉換銀行的成本與選擇。",
      "優先檢查資料能否支撐方向一，再評估機制資料。"
    ]
  },
  "22": {
    "right": [
      "候選題目：數位金融、銀行競爭與存款利率調整。",
      "研究問題：數位服務普及與銀行調整利率的速度有何關係？",
      "候選貢獻：理解數位服務與利率傳遞之間的可能機制。"
    ]
  },
  "24": {
    "overview": [
      "1 起點：銀行利率調整差異",
      "2 問題：數位金融與調整速度",
      "3 文獻：存款利率與線上銀行",
      "4 價值：競爭與利率傳遞",
      "5 條件：銀行利率與數位資料",
      "6 取捨：優先確認資料",
      "7 構想：數位金融與利率調整"
    ]
  }
};
  let selectedCase='commerce';
  try{if(sessionStorage.getItem('nstc-case-choice')==='finance')selectedCase='finance'}catch{}
  function showCase(page){
    const data=selectedCase==='finance'?{...casePages[page],...financePages[page]}:casePages[page],container=$('case-card');container.replaceChildren();
    const switches=document.createElement('nav');switches.className='case-switch';switches.setAttribute('aria-label','選題案例切換');for(const [value,text] of [['commerce','網購評論案例'],['finance','數位金融案例']]){const button=document.createElement('button');button.type='button';button.textContent=text;button.setAttribute('aria-pressed',String(selectedCase===value));button.addEventListener('click',()=>{selectedCase=value;try{sessionStorage.setItem('nstc-case-choice',value)}catch{}showCase(page)});switches.appendChild(button)}container.appendChild(switches);
    const eyebrow=document.createElement('p');eyebrow.className='case-eyebrow';eyebrow.textContent=selectedCase==='finance'?'同一選題示範：數位金融與銀行利率':'同一選題示範：評論訊號衝突與消費者信任';container.appendChild(eyebrow);
    const heading=document.createElement('h2');heading.textContent=data.title;container.appendChild(heading);
    if(data.overview){const list=document.createElement('ol');list.className='case-overview';for(const item of data.overview){const li=document.createElement('li');li.textContent=item;list.appendChild(li)}container.appendChild(list);return;}
    const content=document.createElement('div');content.className='case-columns';
    for(const [title,items,cls] of [['這一步做什麼',data.left,'case-step'],[selectedCase==='finance'?'以數位金融為例':'以網購評論為例',data.right,'case-example']]){const section=document.createElement('section');section.className=cls;const h=document.createElement('h3');h.textContent=title;section.appendChild(h);const ul=document.createElement('ul');for(const item of items){const li=document.createElement('li');li.textContent=item;ul.appendChild(li)}section.appendChild(ul);if(cls==='case-example'&&data.links){const p=document.createElement('p');p.className='case-references';for(const [text,url] of data.links){const a=document.createElement('a');a.href=url;a.textContent=text;a.target='_blank';a.rel='noopener noreferrer';p.appendChild(a)}section.appendChild(p)}content.appendChild(section)}container.appendChild(content);
  }
  const sequence=[];
  for(let n=1;n<=total;n++){const chapter=chapters.find(c=>c.before===n);if(chapter)sequence.push({kind:'chapter',...chapter});if(mode==='main'&&n===5)sequence.push({kind:'history',id:'review-110'});sequence.push({kind:'slide',page:n});}
  let position=0, zoom=100, slideInfo=[];
  function updateContext(){const entry=sequence[position];if(entry.kind==='chapter'){$('context').textContent=`主題分隔｜${entry.title}`;return;}if(entry.kind==='history'){$('context').textContent='審查人評分表｜民國 110 年';return;}const info=slideInfo.find(item=>item.page===entry.page),section=info?.section||label;$('context').textContent=`${section}｜第 ${entry.page} / ${total} 頁`;img.alt=info?.title?`${label}第 ${entry.page} 頁：${info.title}`:`${label}第 ${entry.page} 頁`;}
  function saveMain(entry){if(mode!=='main')return;try{sessionStorage.setItem('nstc-main-location',entry.kind!=='slide'?entry.id:String(entry.page));if(entry.kind==='slide')sessionStorage.setItem('nstc-main-page',String(entry.page));}catch{}}
  function findLocation(value){const i=sequence.findIndex(e=>e.kind!=='slide'?e.id===value:String(e.page)===value);return i<0?0:i;}
  function render(n){position=Math.max(0,Math.min(sequence.length-1,n));const entry=sequence[position], isChapter=entry.kind==='chapter', isHistory=entry.kind==='history', isCase=mode==='main'&&entry.kind==='slide'&&!!casePages[entry.page], card=$('chapter-card'), historyCard=$('history-card'), caseCard=$('case-card');
    if(card)card.hidden=!isChapter;if(historyCard)historyCard.hidden=!isHistory;if(caseCard)caseCard.hidden=!isCase;img.hidden=isChapter||isHistory||isCase;
    if(isChapter){$('chapter-number').textContent=`主題 ${String(chapters.findIndex(c=>c.id===entry.id)+1).padStart(2,'0')} / 03`;$('chapter-title').textContent=entry.title;$('chapter-description').textContent=entry.description;input.value='';}
    else if(isHistory){input.value='';}else if(isCase){input.value=entry.page;showCase(entry.page);}else{input.value=entry.page;img.src=`${folder}/slide-${String(entry.page).padStart(2,'0')}.jpg?v=20261110-case-v9`;}
    updateContext();$('prev').disabled=position===0;$('next').disabled=position===sequence.length-1;saveMain(entry);history.replaceState(null,'',`#${entry.kind!=='slide'?entry.id:entry.page}`);$('viewport').scrollTo(0,0);
  }
  function go(){const n=Number(input.value);if(input.value!==''&&Number.isFinite(n))render(findLocation(String(Math.max(1,Math.min(total,Math.trunc(n))))));}
  function scale(n){zoom=Math.max(100,Math.min(250,n));frame.style.width=zoom===100?'min(100%, 1280px)':`${zoom}%`;frame.style.maxWidth=zoom===100?'1280px':'none';$('reset').textContent=zoom+'%'}
  $('prev').onclick=()=>render(position-1);$('next').onclick=()=>render(position+1);$('go').onclick=go;input.onkeydown=e=>{if(e.key==='Enter')go()};$('out').onclick=()=>scale(zoom-25);$('in').onclick=()=>scale(zoom+25);$('reset').onclick=()=>scale(100);
  document.addEventListener('keydown',e=>{if(e.target===input)return;if(e.key==='ArrowRight')render(position+1);if(e.key==='ArrowLeft')render(position-1)});
  $('switch').addEventListener('click',()=>saveMain(sequence[position]));
  fetch('presentation-manifest.json?v=20261110-case-v9').then(r=>{if(!r.ok)throw Error('manifest');return r.json()}).then(data=>{const part=data[mode];if(part?.count===total&&Array.isArray(part.slides)){slideInfo=part.slides;updateContext()}}).catch(()=>{});
  if(mode==='appendix')fetch('public-source-links.json?v=20261110-case-v9').then(r=>{if(!r.ok)throw Error('sources');return r.json()}).then(items=>{if(!Array.isArray(items))return;for(const item of items){try{const url=new URL(item.url);if(url.protocol!=='https:'||typeof item.label!=='string')continue;const li=document.createElement('li'),a=document.createElement('a');a.href=url.href;a.textContent=item.label;a.target='_blank';a.rel='noopener noreferrer';li.appendChild(a);$('source-list').appendChild(li)}catch{}}if($('source-list').children.length)$('sources').hidden=false}).catch(()=>{});
  let start=location.hash.slice(1);if(!start&&mode==='main'){try{start=sessionStorage.getItem('nstc-main-location')||sessionStorage.getItem('nstc-main-page')||'1'}catch{start='1'}}render(findLocation(start||'1'));
})();
