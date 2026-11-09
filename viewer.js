(()=>{
  const $=id=>document.getElementById(id), mode=document.body.dataset.mode, total=Number(document.body.dataset.total), folder=document.body.dataset.folder;
  const label=mode==='main'?'主簡報':'補充資料', input=$('page'), img=$('slide'), frame=$('frame');
  let page=1,zoom=100, slideInfo=[];
  function updateContext(){const info=slideInfo.find(item=>item.page===page); const section=info?.section || label; $("context").textContent=`${section}｜第 ${page} / ${total} 頁`; if(info?.title) img.alt=`${label}第 ${page} 頁：${info.title}`;}
  function readSaved(){try{return Number(sessionStorage.getItem('nstc-main-page'))||1}catch{return 1}}
  function saveMain(n){try{sessionStorage.setItem('nstc-main-page',String(n))}catch{}}
  function show(n){page=Math.max(1,Math.min(total,Number.isFinite(n)?Math.trunc(n):1));input.value=page;img.src=`${folder}/slide-${String(page).padStart(2,'0')}.jpg?v=20261109-audience-v1`;img.alt=`${label}第 ${page} 頁`;updateContext();$('prev').disabled=page===1;$('next').disabled=page===total;if(mode==='main')saveMain(page);history.replaceState(null,'',`#${page}`);$('viewport').scrollTo(0,0)}
  function scale(n){zoom=Math.max(100,Math.min(250,n));frame.style.width=zoom===100?'min(100%, 1280px)':`${zoom}%`;frame.style.maxWidth=zoom===100?'1280px':'none';$('reset').textContent=zoom+'%'}
  $('prev').onclick=()=>show(page-1);$('next').onclick=()=>show(page+1);$('go').onclick=()=>show(Number(input.value));input.onkeydown=e=>{if(e.key==='Enter')show(Number(input.value))};$('out').onclick=()=>scale(zoom-25);$('in').onclick=()=>scale(zoom+25);$('reset').onclick=()=>scale(100);
  document.addEventListener('keydown',e=>{if(e.target===input)return;if(e.key==='ArrowRight')show(page+1);if(e.key==='ArrowLeft')show(page-1)});
  $('switch').addEventListener('click',()=>{if(mode==='main')saveMain(page)});
  fetch('presentation-manifest.json?v=20261109-audience-v1').then(r=>{if(!r.ok)throw Error('manifest');return r.json()}).then(data=>{const part=data[mode];if(part?.count===total&&Array.isArray(part.slides)){slideInfo=part.slides;updateContext()}}).catch(()=>{});
  if(mode==='appendix')fetch('public-source-links.json?v=20261109-audience-v1').then(r=>{if(!r.ok)throw Error('sources');return r.json()}).then(items=>{if(!Array.isArray(items))return;for(const item of items){try{const url=new URL(item.url);if(url.protocol!=='https:'||typeof item.label!=='string')continue;const li=document.createElement('li'),a=document.createElement('a');a.href=url.href;a.textContent=item.label;a.target='_blank';a.rel='noopener noreferrer';li.appendChild(a);$('source-list').appendChild(li)}catch{}}if($('source-list').children.length)$('sources').hidden=false}).catch(()=>{});
  const hash=location.hash.match(/^#(\d+)$/);show(hash?Number(hash[1]):mode==='main'?readSaved():1);
})();
