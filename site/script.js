const shows=[["Midnight Run","#7a0f1c,#1a1a2e"],["Ocean Deep","#0f6b8f,#0b1d2a"],["Desert Kings","#c26a0a,#3a1c05"],
["Neon City","#6a1b9a,#0d0221"],["Last Signal","#1b5e20,#04140a"],["Paper Moon","#455a64,#10171a"],["Red Harvest","#b3261e,#2a0a08"],["Skyline","#1565c0,#08142b"]];
const row=document.getElementById("row");
shows.forEach((s,i)=>{const d=document.createElement("div");d.className="card";
 d.style.background=`linear-gradient(160deg,${s[1]})`;d.innerHTML=`<b>${i+1}</b>${s[0]}`;row.appendChild(d);});
document.getElementById("signup").addEventListener("submit",e=>{
 e.preventDefault();const v=document.getElementById("email").value.trim(),m=document.getElementById("msg");
 const ok=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
 m.className="msg"+(ok?" ok":"");m.textContent=ok?"Thanks! Demo only, nothing was sent.":"Enter a valid email address, for example name@example.com.";});
