(()=>{
  const $=id=>document.getElementById(id), mode=document.body.dataset.mode, total=Number(document.body.dataset.total), folder=document.body.dataset.folder;
  const label=mode==='main'?'主簡報':'補充資料', input=$('page'), img=$('slide'), frame=$('frame');
  const chapters=mode==='main'?[{before:7,id:'chapter-1',title:'五項共同關注',description:'從審查經驗歸納跨領域的共同關注'},{before:15,id:'chapter-2',title:'選題與構想',description:'把共同關注帶入選題思考'},{before:23,id:'chapter-3',title:'起步與延伸',description:'整理下一步與延伸資源'}]:[];
  const casePages={
    15:{title:'七項任務：從想法到申請構想',overview:['1 盤點資源','2 形成問題','3 對照文獻','4 說清價值','5 確認可行條件','6 篩選方向','7 整理一頁構想']},
    16:{title:'任務 1：盤點資源',left:['從自己熟悉的現象出發。','盤點可接觸的對象、資料與時間。'],right:['現象：網購時，消費者常看商品評論。','疑問：同樣是四顆星，寫得詳細和簡短的評論，有什麼不同？','資源：先確認能否接觸有網購經驗的人。']},
    17:{title:'任務 2：形成問題',left:['把感興趣的現象寫成具體問題。','說清楚研究對象與想了解的結果。'],right:['對象：看過網購商品評論的消費者。','關注：相同星等下，評論內容是否具體。','問題：評論寫得越具體，消費者的購買意願是否不同？']},
    18:{title:'任務 3：對照文獻',left:['找最接近問題的研究。','整理既有研究問了什麼、得到什麼發現。'],right:['Chevalier 與 Mayzlin（2006）：研究網路書評與書籍銷售。','Ahn 與 Lee（2024）：研究評論者與消費者的相似性及購買意願。','再查：相同星等下，評論內容具體程度與購買意願的研究。'],links:[['書評與銷售（2006）','https://journals.sagepub.com/doi/10.1509/jmkr.43.3.345'],['評論與購買意願（2024）','https://www.mdpi.com/0718-1876/19/2/55']]},
    19:{title:'任務 4：說清價值',left:['比較既有研究與自己的問題。','說明這個問題對誰有幫助。'],right:['候選價值：在星等相同時，看評論內容的具體程度是否與購買意願有關。','可能的用途：幫助商家理解消費者如何使用評論資訊。','與最接近研究的差異，仍需進一步確認。']},
    20:{title:'任務 5：確認可行條件',left:['盤點資料、對象、時間與研究基礎。','條件不足時，縮小研究範圍。'],right:['對象：先確認能否接觸有網購經驗的人。','資料：確認能否取得評論內容與購買意願資料。','資源：評估招募人數、所需時間與可用協助。']},
    21:{title:'任務 6：篩選方向',left:['比較候選方向的價值與可行條件。','選一個現階段最能深入的問題。'],right:['方向一：星等高低與購買意願。','方向二：相同星等下，評論具體程度與購買意願。','本例先選方向二，聚焦一個較清楚的比較。']},
    22:{title:'任務 7：整理一頁構想',left:['把前六項的結果整理成簡短構想。','讓其他領域的老師也能看懂。'],right:['問題：相同星等下，具體評論與購買意願有何關聯？','價值：幫助理解消費者如何判讀評論。','基礎與下一步：對照最相近文獻，確認研究對象與資料。']},
    24:{title:'同一個案例：七項任務的成果',overview:['1 資源：網購現象與可接觸對象','2 問題：具體評論與購買意願','3 文獻：對照評論與消費者研究','4 價值：理解評論資訊如何被使用','5 條件：確認對象、資料與時間','6 取捨：聚焦評論的具體程度','7 構想：整理問題、價值與下一步']}
  };
  const financePages={
    15:{title:casePages[15].title,overview:casePages[15].overview},
    16:{right:['現象：不少人會比較銀行的定存利率。','疑問：利率不同，是否影響存定存的意願？','資源：先確認能否接觸有存款經驗的人。']},
    17:{right:['對象：有銀行存款經驗的民眾。','條件：假設定存期限相同，年利率分別為 1.5% 和 2%。','問題：利率不同，民眾的定存意願是否不同？']},
    18:{right:['Felici 等（2022）：研究低利率與家庭儲蓄行為。','Elmendorf（1996）：回顧利率與家庭儲蓄的研究。','再查：與臺灣民眾定存意願最接近的研究。'],links:[['家庭儲蓄與低利率（2022）','https://www.ecb.europa.eu/pub/pdf/scpwps/ecb.wp2736~b79d07069c.en.pdf'],['利率與家庭儲蓄研究回顧（1996）','https://www.federalreserve.gov/pubs/feds/1996/199627/199627pap.pdf']]},
    19:{right:['候選價值：了解在相同期限下，不同定存利率與民眾存款意願的關係。','可能的用途：幫助銀行了解民眾選擇定存時重視什麼。','與最接近研究的差異，仍需進一步確認。']},
    20:{right:['對象：先確認能否接觸有銀行存款經驗的人。','資料：確認能否取得民眾對不同利率的存款意願。','資源：評估招募人數、所需時間與可用協助。']},
    21:{right:['方向一：定存利率與存款意願。','方向二：定存期限與存款意願。','本例先選方向一，先聚焦一項容易理解的條件。']},
    22:{right:['問題：期限相同時，定存利率與民眾的存款意願有何關聯？','價值：幫助理解民眾如何看待定存利率。','基礎與下一步：對照最相近文獻，確認研究對象與資料。']},
    24:{title:casePages[24].title,overview:['1 資源：定存現象與可接觸對象','2 問題：利率與定存意願','3 文獻：對照利率與儲蓄研究','4 價值：理解民眾的定存選擇','5 條件：確認對象、資料與時間','6 取捨：先聚焦定存利率','7 構想：整理問題、價值與下一步']}
  };
  let selectedCase='commerce';
  try{if(sessionStorage.getItem('nstc-case-choice')==='finance')selectedCase='finance'}catch{}
  function showCase(page){
    const data=selectedCase==='finance'?{...casePages[page],...financePages[page]}:casePages[page],container=$('case-card');container.replaceChildren();
    const switches=document.createElement('nav');switches.className='case-switch';switches.setAttribute('aria-label','選題案例切換');for(const [value,text] of [['commerce','網購評論案例'],['finance','定存利率案例']]){const button=document.createElement('button');button.type='button';button.textContent=text;button.setAttribute('aria-pressed',String(selectedCase===value));button.addEventListener('click',()=>{selectedCase=value;try{sessionStorage.setItem('nstc-case-choice',value)}catch{}showCase(page)});switches.appendChild(button)}container.appendChild(switches);
    const eyebrow=document.createElement('p');eyebrow.className='case-eyebrow';eyebrow.textContent=selectedCase==='finance'?'同一選題示範：定存利率與存款意願':'同一選題示範：網購評論與購買意願';container.appendChild(eyebrow);
    const heading=document.createElement('h2');heading.textContent=data.title;container.appendChild(heading);
    if(data.overview){const list=document.createElement('ol');list.className='case-overview';for(const item of data.overview){const li=document.createElement('li');li.textContent=item;list.appendChild(li)}container.appendChild(list);return;}
    const content=document.createElement('div');content.className='case-columns';
    for(const [title,items,cls] of [['這一步做什麼',data.left,'case-step'],[selectedCase==='finance'?'以定存利率為例':'以網購評論為例',data.right,'case-example']]){const section=document.createElement('section');section.className=cls;const h=document.createElement('h3');h.textContent=title;section.appendChild(h);const ul=document.createElement('ul');for(const item of items){const li=document.createElement('li');li.textContent=item;ul.appendChild(li)}section.appendChild(ul);if(cls==='case-example'&&data.links){const p=document.createElement('p');p.className='case-references';for(const [text,url] of data.links){const a=document.createElement('a');a.href=url;a.textContent=text;a.target='_blank';a.rel='noopener noreferrer';p.appendChild(a)}section.appendChild(p)}content.appendChild(section)}container.appendChild(content);
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
    else if(isHistory){input.value='';}else if(isCase){input.value=entry.page;showCase(entry.page);}else{input.value=entry.page;img.src=`${folder}/slide-${String(entry.page).padStart(2,'0')}.jpg?v=20261110-case-v8`;}
    updateContext();$('prev').disabled=position===0;$('next').disabled=position===sequence.length-1;saveMain(entry);history.replaceState(null,'',`#${entry.kind!=='slide'?entry.id:entry.page}`);$('viewport').scrollTo(0,0);
  }
  function go(){const n=Number(input.value);if(input.value!==''&&Number.isFinite(n))render(findLocation(String(Math.max(1,Math.min(total,Math.trunc(n))))));}
  function scale(n){zoom=Math.max(100,Math.min(250,n));frame.style.width=zoom===100?'min(100%, 1280px)':`${zoom}%`;frame.style.maxWidth=zoom===100?'1280px':'none';$('reset').textContent=zoom+'%'}
  $('prev').onclick=()=>render(position-1);$('next').onclick=()=>render(position+1);$('go').onclick=go;input.onkeydown=e=>{if(e.key==='Enter')go()};$('out').onclick=()=>scale(zoom-25);$('in').onclick=()=>scale(zoom+25);$('reset').onclick=()=>scale(100);
  document.addEventListener('keydown',e=>{if(e.target===input)return;if(e.key==='ArrowRight')render(position+1);if(e.key==='ArrowLeft')render(position-1)});
  $('switch').addEventListener('click',()=>saveMain(sequence[position]));
  fetch('presentation-manifest.json?v=20261110-case-v8').then(r=>{if(!r.ok)throw Error('manifest');return r.json()}).then(data=>{const part=data[mode];if(part?.count===total&&Array.isArray(part.slides)){slideInfo=part.slides;updateContext()}}).catch(()=>{});
  if(mode==='appendix')fetch('public-source-links.json?v=20261110-case-v8').then(r=>{if(!r.ok)throw Error('sources');return r.json()}).then(items=>{if(!Array.isArray(items))return;for(const item of items){try{const url=new URL(item.url);if(url.protocol!=='https:'||typeof item.label!=='string')continue;const li=document.createElement('li'),a=document.createElement('a');a.href=url.href;a.textContent=item.label;a.target='_blank';a.rel='noopener noreferrer';li.appendChild(a);$('source-list').appendChild(li)}catch{}}if($('source-list').children.length)$('sources').hidden=false}).catch(()=>{});
  let start=location.hash.slice(1);if(!start&&mode==='main'){try{start=sessionStorage.getItem('nstc-main-location')||sessionStorage.getItem('nstc-main-page')||'1'}catch{start='1'}}render(findLocation(start||'1'));
})();
