'use strict';
const lessons = [
 {name:'Se présenter',items:[
 ['Bonjour !','Écoute la phrase entière, puis répète sans te presser.'],
 ["Je m’appelle Lina.","Découpe en deux groupes : « Je m’appelle » puis « Lina ». Tu joues un personnage fictif."],
 ['Je parle français.','Écoute la fin de « français » puis répète la phrase entière.']]},
 {name:'Les goûts',items:[
 ["J’aime lire.","Répète d’abord « lire », puis la phrase complète."],
 ["Tu aimes dessiner ?","Écoute la question, puis essaie de reproduire son rythme."],
 ["Je n’aime pas danser.","Découpe : « Je n’aime pas » / « danser »."]]},
 {name:'La nature',items:[
 ['Il y a un arbre.','Découpe : « Il y a » / « un arbre ».'],
 ['Je protège la nature.','Écoute « nature », puis répète la phrase.'],
 ['Je ferme le robinet.','Répète « le robinet », puis ajoute « Je ferme ».']]}
];
const el = id => document.getElementById(id);
let lesson=0, index=0, recognition=null, active=false, session=0;
const Recognition=window.SpeechRecognition||window.webkitSpeechRecognition;
function current(){return lessons[lesson].items[index];}
function normalize(s){return s.toLowerCase().replace(/[’']/g,' ').replace(/[.!?,;:]/g,' ').replace(/\s+/g,' ').trim();}
function message(role,text){const p=document.createElement('p');p.className=role;p.textContent=(role==='student'?'Toi : ':'Coach : ')+text;el('chat').appendChild(p);}
function controls(){el('speak').disabled=!Recognition||!el('consent').checked||active;el('stop').disabled=!active;}
function cancel(){session++;if(recognition){recognition.abort();recognition=null;}active=false;if(window.speechSynthesis)window.speechSynthesis.cancel();controls();}
function display(){el('target').textContent=current()[0];el('tip').textContent=current()[1];}
function speak(rate){cancel();if(!window.speechSynthesis){el('status').textContent='La lecture vocale est indisponible. Demande un modèle oral à ton enseignant.';return;}
 const u=new SpeechSynthesisUtterance(current()[0]);u.lang='fr-FR';u.rate=rate;
 const v=speechSynthesis.getVoices().find(v=>v.lang.toLowerCase().startsWith('fr'));if(v)u.voice=v;
 u.onerror=()=>{el('status').textContent='Lecture indisponible. Demande un modèle à ton enseignant.';};
 speechSynthesis.speak(u);}
lessons.forEach((l,i)=>{const o=document.createElement('option');o.value=i;o.textContent=l.name;el('lesson').appendChild(o);});
el('lesson').onchange=()=>{cancel();lesson=Number(el('lesson').value);index=0;display();message('coach','Écoutons : '+current()[0]);};
el('listen').onclick=()=>speak(0.9);el('slow').onclick=()=>speak(0.65);
el('consent').onchange=()=>{if(!el('consent').checked)cancel();controls();};
el('next').onclick=()=>{cancel();index=(index+1)%lessons[lesson].items.length;display();message('coach','Nouvelle phrase : '+current()[0]);};
el('help').onclick=()=>message('coach',current()[1]);
el('clear').onclick=()=>{cancel();el('chat').replaceChildren();el('status').textContent='Échange effacé.';};
el('stop').onclick=()=>{if(recognition)recognition.stop();};
el('speak').onclick=()=>{
 if(!Recognition||!el('consent').checked||active)return;
 cancel();const token=session;const target=current()[0];const r=new Recognition();recognition=r;
 r.lang='fr-FR';r.interimResults=false;r.continuous=false;r.maxAlternatives=1;
 active=true;controls();el('status').textContent='Je t’écoute…';
 r.onresult=e=>{if(token!==session)return;const heard=e.results[0][0].transcript;message('student',heard);
 if(normalize(heard)===normalize(target))message('coach','Le navigateur a reconnu les mots attendus. Écoute encore le modèle et compare ton rythme.');
 else message('coach','Le navigateur a transcrit « '+heard+' ». La phrase attendue est « '+target+' ». Écoute-la lentement et réessaie ; une différence peut venir du micro ou de la reconnaissance.');
 el('status').textContent='Essai terminé. Cette transcription ne mesure pas tes sons.';};
 r.onerror=e=>{if(token!==session)return;const texts={'not-allowed':'Microphone refusé. Tu peux continuer avec le modèle et ton enseignant.','no-speech':'Aucune parole détectée. Réessaie quand tu es prêt.','network':'Service vocal indisponible. Continue avec les boutons d’écoute.','audio-capture':'Aucun microphone disponible.'};el('status').textContent=texts[e.error]||'Reconnaissance indisponible. Tu peux écouter et répéter avec un partenaire.';};
 r.onend=()=>{if(token!==session)return;active=false;recognition=null;controls();if(el('status').textContent==='Je t’écoute…')el('status').textContent='Écoute terminée sans transcription.';};
 try{r.start();}catch(err){active=false;recognition=null;controls();el('status').textContent='Le microphone ne peut pas démarrer. Réessaie ou travaille avec ton enseignant.';}
};
display();controls();message('coach','Bienvenue ! Écoute la phrase, puis répète. Tu peux demander un conseil.');
if(!Recognition)el('status').textContent='La reconnaissance vocale est indisponible sur ce navigateur. Utilise l’écoute et répète avec un partenaire.';
