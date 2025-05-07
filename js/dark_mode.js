let darkmode = localStorage.getItem('darkmode');
const switchmode = document.getElementById('switch_mode');

const activerDarkmode = ()=>{
	document.body.classList.add('darktheme');
	localStorage.setItem('darkmode','active');
}
const disactiverDarkmode = () =>{
	document.body.classList.remove('darktheme');
	localStorage.setItem('darkmode','disactever')
}
if (darkmode === "active") activerDarkmode(); //on page reload

switchmode.addEventListener('click', () =>{
	darkmode = localStorage.getItem('darkmode');
	darkmode !== "active" ? activerDarkmode() : disactiverDarkmode();
});