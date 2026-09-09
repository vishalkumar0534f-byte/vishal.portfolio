const topBtn=document.querySelector('.top');
const menu=document.querySelector('.menu');
const navLinks=document.querySelector('.nav-links');
window.addEventListener('scroll',()=>topBtn.classList.toggle('show',window.scrollY>500));
topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
menu?.addEventListener('click',()=>{
  const open=navLinks.classList.toggle('open');
  if(open){navLinks.style.display='flex';navLinks.style.position='absolute';navLinks.style.top='76px';navLinks.style.left='0';navLinks.style.right='0';navLinks.style.padding='18px 22px';navLinks.style.background='#090a16f5';navLinks.style.borderBottom='1px solid #25263b';navLinks.style.flexDirection='column'}
  else{navLinks.removeAttribute('style')}
});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const target=document.querySelector(a.getAttribute('href'));if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'});navLinks?.classList.remove('open');if(window.innerWidth<=980)navLinks?.removeAttribute('style')}}));
