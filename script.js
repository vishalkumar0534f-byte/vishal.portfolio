const topBtn=document.getElementById('top');
window.addEventListener('scroll',()=>{topBtn.style.display=scrollY>500?'flex':'none'});
topBtn.style.display='none';
topBtn.style.alignItems='center';topBtn.style.justifyContent='center';
topBtn.onclick=()=>scrollTo({top:0,behavior:'smooth'});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const el=document.querySelector(a.getAttribute('href'));if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'})}}));
