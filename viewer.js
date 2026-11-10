(()=>{
  const $=id=>document.getElementById(id), mode=document.body.dataset.mode, total=Number(document.body.dataset.total), folder=document.body.dataset.folder;
  const label=mode==='main'?'主簡報':'補充資料', input=$('page'), img=$('slide'), frame=$('frame');
  const chapters=mode==='main'?[{before:7,id:'chapter-1',title:'五項共同關注',description:'從審查經驗歸納跨領域的共同關注'},{before:15,id:'chapter-2',title:'選題與構想',description:'把共同關注帶入選題思考'},{before:23,id:'chapter-3',title:'NSTC Skill 實際操作',description:'下載技能包，跟著操作建立研究構想'}]:[];
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
      "現象：股票與債券常被放在同一個投資組合，但有時也會一起下跌。",
      "研究起點：在不同經濟衝擊下，債券還能否分散股票風險？",
      "切入商品：股票 ETF 與不同期限的公債 ETF。"
    ]
  },
  "17": {
    "right": [
      "核心問題：通膨衝擊與景氣衝擊下，股債 ETF 的分散效果有何不同？",
      "可能原因：經濟消息可能讓股票與債券出現不同方向的反應。",
      "情境差異：短期與長期公債 ETF 的效果是否不同？"
    ]
  },
  "18": {
    "right": [
      "Campbell 等（2020）：討論總體經濟與股債風險的關係。",
      "Molenaar 等（2024）：檢視股債相關性與多資產組合風險。",
      "延伸方向：比較不同衝擊下、不同期限債券 ETF 的組合表現。"
    ],
    "links": [
      [
        "Campbell 等（2020）：總體經濟與股債風險",
        "https://www.hbs.edu/ris/Publication%20Files/CampbellPfluegerViceira_JPE2020_c649d0cf-589b-4493-b695-c51d2ac45d48.pdf"
      ],
      [
        "Molenaar 等（2024）：股債相關性",
        "https://rpc.cfainstitute.org/research/financial-analysts-journal/2024/empirical-evidence-on-the-stock-bond-correlation"
      ]
    ]
  },
  "19": {
    "right": [
      "概念價值：釐清不同經濟衝擊下，股債分散效果如何改變。",
      "候選延伸：從股債關係進一步比較不同期限債券 ETF 的組合風險。",
      "實務價值：幫助投資人理解分散效果會受到市場情境影響。"
    ]
  },
  "20": {
    "right": [
      "先確認股票與公債 ETF 的歷史行情及配息資料。",
      "確認通膨與景氣資訊、商品成立時間及資料期間。",
      "評估匯率與交易成本資料能否取得。"
    ]
  },
  "21": {
    "right": [
      "方向一：不同經濟衝擊下，股債分散效果如何變化。",
      "方向二：不同期限公債 ETF 的組合風險差異。",
      "優先聚焦方向一；資料允許時，再比較債券期限。"
    ]
  },
  "22": {
    "right": [
      "候選題目：經濟衝擊下的股債 ETF 分散效果。",
      "研究問題：通膨與景氣衝擊下，債券 ETF 分散股票風險的效果有何差異？",
      "候選貢獻：將股債關係連結到投資組合在不同情境下的風險。"
    ]
  },
  "24": {
    "title": "同一個案例：七項任務的成果",
    "overview": [
      "1 起點：股債 ETF 有時一起跌",
      "2 問題：不同衝擊下的分散效果",
      "3 文獻：總體環境與股債關係",
      "4 價值：釐清分散效果變動",
      "5 條件：確認 ETF 與經濟資料",
      "6 取捨：先聚焦經濟衝擊",
      "7 構想：股債 ETF 與組合風險"
    ]
  }
};
  let selectedCase='commerce';
  try{if(sessionStorage.getItem('nstc-case-choice')==='finance')selectedCase='finance'}catch{}
  function showCase(page){
    const data=selectedCase==='finance'?{...casePages[page],...financePages[page]}:casePages[page],container=$('case-card');container.replaceChildren();
    const switches=document.createElement('nav');switches.className='case-switch';switches.setAttribute('aria-label','選題案例切換');for(const [value,text] of [['commerce','網購評論案例'],['finance','投資組合案例']]){const button=document.createElement('button');button.type='button';button.textContent=text;button.setAttribute('aria-pressed',String(selectedCase===value));button.addEventListener('click',()=>{selectedCase=value;try{sessionStorage.setItem('nstc-case-choice',value)}catch{}showCase(page)});switches.appendChild(button)}container.appendChild(switches);
    const eyebrow=document.createElement('p');eyebrow.className='case-eyebrow';eyebrow.textContent=selectedCase==='finance'?'同一選題示範：股債 ETF 投資組合':'同一選題示範：評論訊號衝突與消費者信任';container.appendChild(eyebrow);
    const heading=document.createElement('h2');heading.textContent=data.title;container.appendChild(heading);
    if(data.overview&&page===15){
      const path=document.createElement('div');path.className='task-path';
      const groups=[['找到起點',data.overview.slice(0,2)],['建立定位',data.overview.slice(2,4)],['確認條件',data.overview.slice(4,5)],['收斂構想',data.overview.slice(5,7)]];
      for(const [stage,items] of groups){const section=document.createElement('section');section.className='task-stage';const h=document.createElement('h3');h.textContent=stage;section.appendChild(h);const list=document.createElement('ol');for(const item of items){const li=document.createElement('li');const match=item.match(/^(\d+)\s+(.+)$/);const number=document.createElement('span');number.className='task-number';number.textContent=match?match[1].padStart(2,'0'):'';const title=document.createElement('span');title.textContent=match?match[2]:item;li.append(number,title);list.appendChild(li)}section.appendChild(list);path.appendChild(section)}container.appendChild(path);return;
    }
    if(data.overview){const list=document.createElement('ol');list.className='case-overview';for(const item of data.overview){const li=document.createElement('li');li.textContent=item;list.appendChild(li)}container.appendChild(list);return;}
    const content=document.createElement('div');content.className='case-columns';
    for(const [title,items,cls] of [['這一步做什麼',data.left,'case-step'],[selectedCase==='finance'?'以股債 ETF 為例':'以網購評論為例',data.right,'case-example']]){const section=document.createElement('section');section.className=cls;const h=document.createElement('h3');h.textContent=title;section.appendChild(h);const ul=document.createElement('ul');for(const item of items){const li=document.createElement('li');li.textContent=item;ul.appendChild(li)}section.appendChild(ul);if(cls==='case-example'&&data.links){const p=document.createElement('p');p.className='case-references';for(const [text,url] of data.links){const a=document.createElement('a');a.href=url;a.textContent=text;a.target='_blank';a.rel='noopener noreferrer';p.appendChild(a)}section.appendChild(p)}content.appendChild(section)}container.appendChild(content);
  }
  const sequence=[];
  for(let n=1;n<=total;n++){const chapter=chapters.find(c=>c.before===n);if(chapter)sequence.push({kind:'chapter',...chapter});if(mode==='main'&&n===5)sequence.push({kind:'history',id:'review-110'});sequence.push({kind:'slide',page:n});}
  let position=0, zoom=100, slideInfo=[];
  function updateContext(){const entry=sequence[position];if(entry.kind==='chapter'){$('context').textContent=`主題分隔｜${entry.title}`;return;}if(entry.kind==='history'){$('context').textContent='審查人評分表｜民國 110 年';return;}const info=slideInfo.find(item=>item.page===entry.page),section=info?.section||label;$('context').textContent=`${section}｜第 ${entry.page} / ${total} 頁`;img.alt=info?.title?`${label}第 ${entry.page} 頁：${info.title}`:`${label}第 ${entry.page} 頁`;}
  function saveMain(entry){if(mode!=='main')return;try{sessionStorage.setItem('nstc-main-location',entry.kind!=='slide'?entry.id:String(entry.page));if(entry.kind==='slide')sessionStorage.setItem('nstc-main-page',String(entry.page));}catch{}}
  function findLocation(value){const i=sequence.findIndex(e=>e.kind!=='slide'?e.id===value:String(e.page)===value);return i<0?0:i;}
  function render(n){position=Math.max(0,Math.min(sequence.length-1,n));const entry=sequence[position], isChapter=entry.kind==='chapter', isHistory=entry.kind==='history', isVideo=mode==='main'&&entry.kind==='slide'&&entry.page===23, isGallery=mode==='main'&&entry.kind==='slide'&&entry.page===24, isCase=mode==='main'&&entry.kind==='slide'&&entry.page!==24&&!!casePages[entry.page], card=$('chapter-card'), historyCard=$('history-card'), caseCard=$('case-card');
    const videoCard=$('demo-video'),galleryCard=$('demo-gallery');if(videoCard){videoCard.hidden=!isVideo;if(!isVideo)videoCard.querySelector('video').pause()}if(galleryCard)galleryCard.hidden=!isGallery;if(card)card.hidden=!isChapter;if(historyCard)historyCard.hidden=!isHistory;if(caseCard)caseCard.hidden=!isCase;img.hidden=isChapter||isHistory||isCase||isVideo||isGallery;
    if(isChapter){$('chapter-number').textContent=`主題 ${String(chapters.findIndex(c=>c.id===entry.id)+1).padStart(2,'0')} / 03`;$('chapter-title').textContent=entry.title;$('chapter-description').textContent=entry.description;const download=$('skill-download');if(download)download.hidden=entry.id!=='chapter-3';input.value='';}
    else if(isHistory){input.value='';}else if(isVideo||isGallery){input.value=entry.page;}else if(isCase){input.value=entry.page;showCase(entry.page);}else{input.value=entry.page;img.src=`${folder}/slide-${String(entry.page).padStart(2,'0')}.jpg?v=20261110-nstc-demo-v2`;}
    updateContext();$('prev').disabled=position===0;$('next').disabled=position===sequence.length-1;saveMain(entry);history.replaceState(null,'',`#${entry.kind!=='slide'?entry.id:entry.page}`);$('viewport').scrollTo(0,0);
  }
  function go(){const n=Number(input.value);if(input.value!==''&&Number.isFinite(n))render(findLocation(String(Math.max(1,Math.min(total,Math.trunc(n))))));}
  function scale(n){zoom=Math.max(100,Math.min(250,n));frame.style.width=zoom===100?'min(100%, 1280px)':`${zoom}%`;frame.style.maxWidth=zoom===100?'1280px':'none';$('reset').textContent=zoom+'%'}
  const menu=$('chapter-menu'), menuToggle=$('menu-toggle');
  const menuItems=mode==='main'?[['簡報首頁','1'],['背景與來源','2'],['五項共同關注','chapter-1'],['七項選題任務','15'],['任務 1：盤點資源','16'],['任務 2：形成問題','17'],['任務 3：對照文獻','18'],['任務 4：說清價值','19'],['任務 5：確認可行條件','20'],['任務 6：篩選方向','21'],['任務 7：整理一頁構想','22'],['操作示範','chapter-3'],['示範影片與逐字稿','23']]:[['補充資料首頁','1'],['來源與評語分類','3'],['歷年配分與現行表件','17']];
  function closeMenu(restoreFocus=false){menu.hidden=true;menuToggle.setAttribute('aria-expanded','false');if(restoreFocus)menuToggle.focus()}
  menuItems.forEach(([text,id])=>{const button=document.createElement('button');button.type='button';button.textContent=text;button.addEventListener('click',()=>{render(findLocation(id));closeMenu(true)});menu.appendChild(button)});
  const other=document.createElement('a');other.href=mode==='main'?'appendix.html':'index.html';other.textContent=mode==='main'?'查看補充資料 →':'← 返回主簡報';other.addEventListener('click',()=>saveMain(sequence[position]));menu.appendChild(other);
  menuToggle.addEventListener('click',()=>{const open=menu.hidden;menu.hidden=!open;menuToggle.setAttribute('aria-expanded',String(open))});
  document.addEventListener('click',e=>{if(!e.target.closest('.chapter-menu'))closeMenu()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!menu.hidden){e.preventDefault();closeMenu(true)}});
  if(mode==='main'){
    $('view-brief').addEventListener('click',()=>render(findLocation('22')));
    $('copy-prompt').addEventListener('click',async()=>{const prompt=$('starter-prompt'),status=$('copy-status');try{await navigator.clipboard.writeText(prompt.value);status.textContent='已複製，可貼到您的 AI 對話中。'}catch{prompt.focus();prompt.select();status.textContent='請複製已選取的文字。'}});
  }
  $('prev').onclick=()=>render(position-1);$('next').onclick=()=>render(position+1);$('go').onclick=go;input.onkeydown=e=>{if(e.key==='Enter')go()};$('out').onclick=()=>scale(zoom-25);$('in').onclick=()=>scale(zoom+25);$('reset').onclick=()=>scale(100);
  document.addEventListener('keydown',e=>{if(!menu.hidden||e.target.closest('input, textarea, select, video, audio, [contenteditable=\"true\"]'))return;if(e.key==='ArrowRight')render(position+1);if(e.key==='ArrowLeft')render(position-1)});
  $('switch').addEventListener('click',()=>saveMain(sequence[position]));
  fetch('presentation-manifest.json?v=20261110-nstc-demo-v2').then(r=>{if(!r.ok)throw Error('manifest');return r.json()}).then(data=>{const part=data[mode];if(part?.count===total&&Array.isArray(part.slides)){slideInfo=part.slides;updateContext()}}).catch(()=>{});
  if(mode==='appendix')fetch('public-source-links.json?v=20261110-nstc-demo-v2').then(r=>{if(!r.ok)throw Error('sources');return r.json()}).then(items=>{if(!Array.isArray(items))return;for(const item of items){try{const url=new URL(item.url);if(url.protocol!=='https:'||typeof item.label!=='string')continue;const li=document.createElement('li'),a=document.createElement('a');a.href=url.href;a.textContent=item.label;a.target='_blank';a.rel='noopener noreferrer';li.appendChild(a);$('source-list').appendChild(li)}catch{}}if($('source-list').children.length)$('sources').hidden=false}).catch(()=>{});
  if(mode==='main') fetch('demo/transcript.json?v=20261110-transcript-v2').then(r=>{if(!r.ok)throw Error('transcript');return r.json()}).then(rows=>{const root=$('transcript-list');if(!root)return;for(const row of rows){const details=document.createElement('details'),summary=document.createElement('summary'),question=document.createElement('p'),answer=document.createElement('pre');summary.textContent=`第 ${row.turn} 輪｜${row.title}`;question.textContent=`示範者輸入：\n${row.prompt}`;answer.textContent=`Agent 回應：\n${row.reply}`;details.append(summary,question,answer);root.append(details)}}).catch(()=>{});
  let start=location.hash.slice(1);if(!start&&mode==='main'){try{start=sessionStorage.getItem('nstc-main-location')||sessionStorage.getItem('nstc-main-page')||'1'}catch{start='1'}}render(findLocation(start||'1'));
})();
