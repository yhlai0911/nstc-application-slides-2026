(()=>{
  const $=id=>document.getElementById(id), mode=document.body.dataset.mode, total=Number(document.body.dataset.total), folder=document.body.dataset.folder;
  const label=mode==='main'?'主簡報':'補充資料', input=$('page'), img=$('slide'), frame=$('frame');
  const chapters=mode==='main'?[{before:7,id:'chapter-1',title:'五項共同關注',description:'從審查經驗歸納跨領域的共同關注'},{before:15,id:'chapter-2',title:'選題與構想',description:'把共同關注帶入選題思考'},{before:23,id:'chapter-3',title:'起步與延伸',description:'整理下一步與延伸資源'}]:[];
  const sequence=[];
  for(let n=1;n<=total;n++){const chapter=chapters.find(c=>c.before===n);if(chapter)sequence.push({kind:'chapter',...chapter});if(mode==='main'&&n===5)sequence.push({kind:'history',id:'review-110'});sequence.push({kind:'slide',page:n});}
  let position=0, zoom=100, slideInfo=[];
  function updateContext(){const entry=sequence[position];if(entry.kind==='chapter'){$('context').textContent=`主題分隔｜${entry.title}`;return;}if(entry.kind==='history'){$('context').textContent='審查人評分表｜民國 110 年';return;}const info=slideInfo.find(item=>item.page===entry.page),section=info?.section||label;$('context').textContent=`${section}｜第 ${entry.page} / ${total} 頁`;img.alt=info?.title?`${label}第 ${entry.page} 頁：${info.title}`:`${label}第 ${entry.page} 頁`;}
  function saveMain(entry){if(mode!=='main')return;try{sessionStorage.setItem('nstc-main-location',entry.kind!=='slide'?entry.id:String(entry.page));if(entry.kind==='slide')sessionStorage.setItem('nstc-main-page',String(entry.page));}catch{}}
  function findLocation(value){const i=sequence.findIndex(e=>e.kind!=='slide'?e.id===value:String(e.page)===value);return i<0?0:i;}
  function render(n){position=Math.max(0,Math.min(sequence.length-1,n));const entry=sequence[position], isChapter=entry.kind==='chapter', isHistory=entry.kind==='history', card=$('chapter-card'), historyCard=$('history-card');
    if(card)card.hidden=!isChapter;if(historyCard)historyCard.hidden=!isHistory;img.hidden=isChapter||isHistory;
    if(isChapter){$('chapter-number').textContent=`主題 ${String(chapters.findIndex(c=>c.id===entry.id)+1).padStart(2,'0')} / 03`;$('chapter-title').textContent=entry.title;$('chapter-description').textContent=entry.description;input.value='';}
    else if(isHistory){input.value='';}else{input.value=entry.page;img.src=`${folder}/slide-${String(entry.page).padStart(2,'0')}.jpg?v=20261110-case-v3`;}
    updateContext();$('prev').disabled=position===0;$('next').disabled=position===sequence.length-1;saveMain(entry);history.replaceState(null,'',`#${entry.kind!=='slide'?entry.id:entry.page}`);$('viewport').scrollTo(0,0);
  }
  function go(){const n=Number(input.value);if(input.value!==''&&Number.isFinite(n))render(findLocation(String(Math.max(1,Math.min(total,Math.trunc(n))))));}
  function scale(n){zoom=Math.max(100,Math.min(250,n));frame.style.width=zoom===100?'min(100%, 1280px)':`${zoom}%`;frame.style.maxWidth=zoom===100?'1280px':'none';$('reset').textContent=zoom+'%'}
  $('prev').onclick=()=>render(position-1);$('next').onclick=()=>render(position+1);$('go').onclick=go;input.onkeydown=e=>{if(e.key==='Enter')go()};$('out').onclick=()=>scale(zoom-25);$('in').onclick=()=>scale(zoom+25);$('reset').onclick=()=>scale(100);
  document.addEventListener('keydown',e=>{if(e.target===input)return;if(e.key==='ArrowRight')render(position+1);if(e.key==='ArrowLeft')render(position-1)});
  $('switch').addEventListener('click',()=>saveMain(sequence[position]));
  fetch('presentation-manifest.json?v=20261110-case-v3').then(r=>{if(!r.ok)throw Error('manifest');return r.json()}).then(data=>{const part=data[mode];if(part?.count===total&&Array.isArray(part.slides)){slideInfo=part.slides;updateContext()}}).catch(()=>{});
  if(mode==='appendix')fetch('public-source-links.json?v=20261110-case-v3').then(r=>{if(!r.ok)throw Error('sources');return r.json()}).then(items=>{if(!Array.isArray(items))return;for(const item of items){try{const url=new URL(item.url);if(url.protocol!=='https:'||typeof item.label!=='string')continue;const li=document.createElement('li'),a=document.createElement('a');a.href=url.href;a.textContent=item.label;a.target='_blank';a.rel='noopener noreferrer';li.appendChild(a);$('source-list').appendChild(li)}catch{}}if($('source-list').children.length)$('sources').hidden=false}).catch(()=>{});
  let start=location.hash.slice(1);if(!start&&mode==='main'){try{start=sessionStorage.getItem('nstc-main-location')||sessionStorage.getItem('nstc-main-page')||'1'}catch{start='1'}}render(findLocation(start||'1'));
})();
