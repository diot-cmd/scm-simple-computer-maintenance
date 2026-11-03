const navToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!open));
    const fr = document.documentElement.lang === 'fr';
    navToggle.setAttribute('aria-label', open ? (fr ? 'Ouvrir la navigation' : 'Open navigation') : (fr ? 'Fermer la navigation' : 'Close navigation'));
    nav.classList.toggle('open', !open);
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', document.documentElement.lang === 'fr' ? 'Ouvrir la navigation' : 'Open navigation');
    nav.classList.remove('open');
  }));
}

const translations = {
  'SCM home':'Accueil SCM','Open navigation':'Ouvrir la navigation','Close navigation':'Fermer la navigation','Main navigation':'Navigation principale','Services':'Services','Tech Lab':'Labo Tech','Pricing':'Tarifs','How it works':'Comment ça marche','About SCM':'À propos de SCM','Book a session':'Réserver une séance',
  'Personal PC help, remotely':'Assistance informatique à distance','A smoother PC.':'Un ordinateur plus fluide.','Without the guesswork.':'Sans complications.','Friendly, one-on-one computer maintenance over a live call. We’ll help clear the clutter, tune things up, and get your PC feeling like yours again.':'Un accompagnement personnalisé en direct pour entretenir votre ordinateur. Nous vous aidons à faire le ménage, à optimiser votre PC et à le retrouver comme neuf.','Schedule a session':'Planifier une séance','Explore services':'Découvrir les services','Remote support, guided live':'Assistance à distance en direct','You stay in control, every step.':'Vous gardez le contrôle à chaque étape.','Abstract purple SCM computer maintenance illustration':'Illustration abstraite violette de maintenance informatique SCM','SYSTEM CHECK':'ÉTAT DU SYSTÈME','Secure':'Sécurisé','Updated':'À jour','Optimized':'Optimisé','SCM CARE':'ASSISTANCE SCM','Maintenance gear':'Engrenage de maintenance','PC HEALTH':'SANTÉ DU PC','Care, not confusion':'De l’aide, sans confusion','Step-by-step support':'Un accompagnement étape par étape','Scroll to explore':'Défilez pour découvrir','Service highlights':'Points forts du service','One-on-one attention':'Un accompagnement personnalisé','Remote live support':'Assistance à distance en direct','Clear, guided steps':'Des étapes claires et guidées',
  'WHAT WE CAN HELP WITH':'NOS SERVICES','Small fixes.':'De petits gestes.','Big relief.':'Un grand soulagement.','Practical PC care that helps your computer run cleaner, start faster, and feel easier to use.':'Un entretien pratique pour un ordinateur plus propre, plus rapide au démarrage et plus simple à utiliser.','01 / CLEANUP':'01 / NETTOYAGE','Clutter cleanup':'Nettoyage des fichiers inutiles','Sort through temporary files and digital clutter to make room for what matters.':'Supprimez les fichiers temporaires et le désordre numérique pour libérer de l’espace.','02 / UP TO DATE':'02 / À JOUR','Windows & driver updates':'Mises à jour de Windows et des pilotes','Review updates together and help keep Windows and device drivers current.':'Examinons ensemble les mises à jour de Windows et des pilotes de vos appareils.','03 / PEACE OF MIND':'03 / TRANQUILLITÉ','Virus scans':'Analyses antivirus','Run a security scan and review its findings with clear, careful guidance.':'Lancez une analyse de sécurité et examinez les résultats avec des explications claires.','04 / FASTER STARTS':'04 / DÉMARRAGE PLUS RAPIDE','Startup optimization':'Optimisation du démarrage','Review apps that launch with your PC and choose what really needs to run.':'Examinons les applications lancées au démarrage et choisissons celles qui sont nécessaires.','05 / PERFORMANCE':'05 / PERFORMANCE','Performance tuning':'Optimisation des performances','Look for common slowdowns and tune settings with you, one sensible step at a time.':'Repérons les ralentissements courants et ajustons les paramètres avec vous, étape par étape.','06 / PERFORMANCE':'06 / PERFORMANCE','Ultimate Performance Mode Activation':'Activation du mode Performances ultimes','Enable Windows’ Ultimate Performance power plan when your PC supports it, and review its power and heat tradeoffs.':'Activez le mode d’alimentation Performances ultimes de Windows si votre PC le prend en charge, et examinez ses effets sur la consommation et la chaleur.',
  'TRY A SAMPLE TRAIL':'ESSAYEZ LE PARCOURS DÉCOUVERTE','Welcome to the':'Bienvenue dans le','Tech Lab.':'Labo Tech.','Try small, interactive previews of SCM’s maintenance services. This is a demo only; it does not access or change your device.':'Découvrez des aperçus interactifs des services d’entretien SCM. Cette démonstration n’accède pas à votre appareil et ne le modifie pas.','Choose sample items you’d review before cleaning up.':'Choisissez les éléments fictifs à examiner avant le nettoyage.','Review a mock update list, then run a sample check.':'Consultez une liste fictive de mises à jour, puis lancez une vérification de démonstration.','Start a simulated scan and see a sample safety summary.':'Lancez une analyse simulée et consultez un bilan de sécurité fictif.','Pick sample apps you’d keep from launching at startup.':'Choisissez les applications fictives que vous laisseriez démarrer avec le PC.','Explore a mock balance between visual effects and responsiveness.':'Découvrez un réglage fictif entre effets visuels et réactivité.','LANGUAGE / LANGUE':'LANGUE / LANGUAGE','Consultez le site en français.':'View the site in English.','READY WHEN YOU ARE':'À VOTRE CONVENANCE','Let’s get your PC':'Redonnons à votre PC','back in rhythm.':'son rythme optimal.','Tell us what you need help with. We’ll take it one step at a time.':'Expliquez-nous votre besoin. Nous avancerons étape par étape.','Message SCM on Facebook':'Écrire à SCM sur Facebook','Remote help • Live call • Friendly guidance':'Assistance à distance • Appel en direct • Accompagnement convivial','Less computer clutter. More peace of mind.':'Moins de désordre numérique. Plus de tranquillité.','Contact & scheduling':'Contact et rendez-vous',
  'SIMPLE, CLEAR PRICING':'DES TARIFS SIMPLES ET CLAIRS','Complete Computer':'Entretien complet','Maintenance Package':'de votre ordinateur','Keep your computer running smoothly with a complete maintenance package that covers the essentials.':'Gardez votre ordinateur en bon état grâce à une formule complète qui couvre l’essentiel.','Windows and driver updates':'Mises à jour de Windows et des pilotes','Ultimate Performance Mode activation':'Activation du mode Performances ultimes','Package price':'Prix de la formule','COMPLETE PACKAGE':'FORMULE COMPLÈTE','One complete remote maintenance session, guided live.':'Une séance complète d’entretien à distance, guidée en direct.','Schedule your session':'Planifier votre séance','Only need selected services? Pricing is adjusted to match the work requested.':'Besoin de quelques services seulement ? Le tarif est ajusté selon le travail demandé.','A competitive package price compared with similar services that may cost approximately $49.99.':'Une formule à prix compétitif : des services similaires peuvent coûter environ 49,99 $.',
  'A SIMPLE PROCESS':'UN PROCESSUS SIMPLE','Help that feels':'Une aide','human.':'plus humaine.','No confusing handoffs. We connect remotely and work through the task together on a live call.':'Pas de relais compliqué. Nous nous connectons à distance et avançons ensemble pendant un appel en direct.','Ask about a session':'Demander une séance','Reach out':'Contactez-nous','Message SCM on Facebook and tell us what’s going on with your PC.':'Écrivez à SCM sur Facebook et expliquez-nous le problème rencontré.','Pick a time':'Choisissez un horaire','We’ll coordinate a time for a live remote support session.':'Nous convenons ensemble d’un horaire pour une séance d’assistance à distance.','Work through it together':'Avançons ensemble','Follow along as we review your PC and make agreed-upon changes.':'Suivez les étapes pendant que nous examinons votre PC et effectuons les changements convenus.','A LITTLE ABOUT SCM':'À PROPOS DE SCM','Tech help, with a':'De l’aide informatique,','human on your side.':'avec une personne à vos côtés.','SCM is here to make everyday PC maintenance feel less intimidating. We explain what we’re doing, why it matters, and keep you involved throughout your remote session.':'SCM rend l’entretien informatique plus simple et moins intimidant. Nous expliquons ce que nous faisons, pourquoi c’est utile et vous accompagnons tout au long de la séance à distance.','Live, guided support':'Assistance en direct et guidée','Clear explanations':'Des explications claires','You stay in control':'Vous gardez le contrôle','Try small, interactive previews of SCM’s maintenance services. This is a demo only; it does not access or change your device.':'Découvrez des aperçus interactifs des services d’entretien SCM. Cette démonstration n’accède pas à votre appareil et ne le modifie pas.','Choose sample items you’d review before cleaning up.':'Choisissez les éléments fictifs à examiner avant le nettoyage.','Review a mock update list, then run a sample check.':'Consultez une liste fictive de mises à jour, puis lancez une vérification de démonstration.','Start a simulated scan and see a sample safety summary.':'Lancez une analyse simulée et consultez un bilan de sécurité fictif.','Pick sample apps you’d keep from launching at startup.':'Choisissez les applications fictives que vous laisseriez démarrer avec le PC.','Explore a mock balance between visual effects and responsiveness.':'Découvrez un réglage fictif entre effets visuels et réactivité.'
};

const textNodes = new Map();
const attributes = [];
const noTranslate = new WeakSet();
document.querySelectorAll('[data-no-translate]').forEach((element) => noTranslate.add(element));
function captureText() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      return node.parentElement?.closest('script,style,svg,#language-toggle,#language-note,[data-no-translate]') || noTranslate.has(node) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    }
  });
  let node;
  while ((node = walker.nextNode())) if (node.textContent.trim() && !textNodes.has(node)) textNodes.set(node, node.textContent);
  document.querySelectorAll('body *').forEach((element) => {
    if (element.hasAttribute('data-no-translate')) noTranslate.add(element);
    for (const attribute of ['aria-label','title']) if (!element.closest('[data-no-translate]') && element.hasAttribute(attribute) && !attributes.some((item) => item.element === element && item.attribute === attribute)) attributes.push({element,attribute,value:element.getAttribute(attribute)});
  });
}
function translateText(value, french) {
  if (!french) return value;
  const translation = translations[value.trim()];
  if (!translation) return value;
  return (value.match(/^\s*/)?.[0] || '') + translation + (value.match(/\s*$/)?.[0] || '');
}

const labDone = new Set();
const labResults = new Map();
const progressCount = document.querySelector('#lab-progress-count');
const progressMessage = document.querySelector('#lab-progress-message');
const tuning = document.querySelector('#tuning-range');
const tuningValue = document.querySelector('#tuning-value');
const labels = {
  en:{cleanup:'Clean selected sample items',updates:'Check sample updates',scan:'Run demo scan',startup:'Review sample startup',tuning:'Apply demo setting',restart:'Reset trail',count:n=>`${n} of 5 activities tried`,hint:'Explore at your own pace. Nothing is installed or changed.',complete:'Trail complete! You explored all five sample activities.',cleanResult:n=>`Demo cleanup: ${n.toFixed(1)} GB selected for review. No files were deleted.`,updateResult:'Sample check complete: 2 demo updates are ready for review. No updates were installed.',scanResult:'Demo scan complete: no threats in this simulated sample. Your device was not scanned.',startupResult:n=>`Demo review: ${n} sample apps remain enabled at startup. No settings were changed.`,tuningResult:n=>`Demo setting applied: ${n}. This preview did not change your device.`,fast:'Fast response',balanced:'Balanced',rich:'Rich visuals',temporary:'Temporary files',cache:'App cache',downloads:'Old downloads',security:'Security app',keep:'Keep on',chat:'Chat app',game:'Game launcher',optional:'Optional',windows:'Windows security update',recommended:'Recommended',driver:'Display driver',review:'Review',optionalReview:'Optional review',samplePC:'Sample PC',demoReady:'Ready for a demo scan',ready:'READY',effects:'Visual effects',moreEffects:'More effects',warning:'Tech Lab is a guided sample activity only. It never scans, updates, cleans, or changes your actual device.'},
  fr:{cleanup:'Nettoyer les éléments fictifs sélectionnés',updates:'Vérifier les mises à jour fictives',scan:'Lancer l’analyse démo',startup:'Examiner le démarrage fictif',tuning:'Appliquer le réglage démo',restart:'Réinitialiser le parcours',count:n=>`${n} activité${n>1?'s':''} sur 5 essayée${n>1?'s':''}`,hint:'Explorez à votre rythme. Rien n’est installé ni modifié.',complete:'Parcours terminé ! Vous avez découvert les cinq activités.',cleanResult:n=>`Nettoyage démo : ${n.toFixed(1).replace('.',',')} Go sélectionné(s) pour examen. Aucun fichier n’a été supprimé.`,updateResult:'Vérification démo terminée : 2 mises à jour fictives sont à examiner. Aucune mise à jour n’a été installée.',scanResult:'Analyse démo terminée : aucune menace dans cet exemple simulé. Votre appareil n’a pas été analysé.',startupResult:n=>`Examen démo : ${n} applications fictives restent activées au démarrage. Aucun réglage n’a été modifié.`,tuningResult:n=>`Réglage démo appliqué : ${n}. Cet aperçu n’a pas modifié votre appareil.`,fast:'Réactivité élevée',balanced:'Équilibré',rich:'Effets visuels riches',temporary:'Fichiers temporaires',cache:'Cache des applications',downloads:'Anciens téléchargements',security:'Application de sécurité',keep:'À garder',chat:'Messagerie',game:'Lanceur de jeux',optional:'Facultatif',windows:'Mise à jour de sécurité Windows',recommended:'Recommandée',driver:'Pilote graphique',review:'À examiner',optionalReview:'Vérification facultative',samplePC:'PC de démonstration',demoReady:'Prêt pour une analyse de démonstration',ready:'PRÊT',effects:'Effets visuels',moreEffects:'Plus d’effets',warning:'Le Labo Tech est une démonstration guidée. Il n’analyse, ne met à jour, ne nettoie et ne modifie jamais votre véritable appareil.'}
};
function currentLanguage(){return document.documentElement.lang==='fr'?'fr':'en';}
function renderLab() {
  const w=labels[currentLanguage()];
  if(progressCount) progressCount.textContent=w.count(labDone.size);
  if(progressMessage) progressMessage.textContent=labDone.size===5?w.complete:w.hint;
  document.querySelectorAll('[data-lab-action]').forEach(button=>button.textContent=w[button.dataset.labAction]);
  const reset=document.querySelector('#lab-reset'); if(reset) reset.textContent=w.restart;
  document.querySelectorAll('.cleanup-options label').forEach(row=>{const key=row.querySelector('input').value;row.querySelector('span').textContent=w[key==='temporary'?'temporary':key==='cache'?'cache':'downloads'];});
  document.querySelectorAll('.startup-options label').forEach(row=>{const key=row.querySelector('input').value;row.querySelector('span').textContent=w[key==='security'?'security':key==='chat'?'chat':'game'];row.querySelector('small').textContent=key==='security'?w.keep:w.optional;});
  document.querySelectorAll('.lab-update-list > div').forEach((row,i)=>{row.querySelector('span span').textContent=i===0?w.windows:w.driver;row.querySelector('small').textContent=i===0?w.recommended:w.optionalReview;row.querySelector('b').textContent=i===0?w.ready:w.review;});
  const scan=document.querySelector('.scan-window'); if(scan){scan.querySelector('strong').textContent=w.samplePC;scan.querySelector('small').textContent=w.demoReady;scan.querySelector('.scan-status').textContent=w.ready;}
  if(tuningValue&&tuning)tuningValue.textContent=({'1':w.fast,'2':w.balanced,'3':w.rich})[tuning.value];
  const rangeLabel=document.querySelector('.tuning-control label > span:first-child'); if(rangeLabel)rangeLabel.textContent=w.effects;
  document.querySelectorAll('.tuning-control > div span').forEach((el,i)=>el.textContent=i===0?w.fast:w.moreEffects);
  const disclaimer=document.querySelector('.lab-disclaimer');if(disclaimer)disclaimer.textContent=w.warning;
  labResults.forEach((data,id)=>{const out=document.querySelector(`#lab-result-${id}`);if(out)out.textContent=data.kind==='cleanup'?w.cleanResult(data.value):data.kind==='updates'?w.updateResult:data.kind==='scan'?w.scanResult:data.kind==='startup'?w.startupResult(data.value):w.tuningResult(({'1':w.fast,'2':w.balanced,'3':w.rich})[data.value]);});
}
function markDone(id,kind,value){labDone.add(id);labResults.set(id,{kind,value});document.querySelector(`[data-lab-card="${id}"]`)?.classList.add('is-done');renderLab();}
document.querySelectorAll('[data-lab-action]').forEach(button=>button.addEventListener('click',()=>{const id=button.dataset.labAction;if(id==='cleanup'){const total=[...document.querySelectorAll('input[name="cleanup"]:checked')].reduce((n,input)=>n+Number(input.dataset.gb),0);markDone(id,id,total);}else if(id==='startup'){markDone(id,id,document.querySelectorAll('input[name="startup"]:checked').length);}else if(id==='tuning'){markDone(id,id,tuning.value);}else markDone(id,id,0);}));
if(tuning)tuning.addEventListener('input',renderLab);
document.querySelector('#lab-reset')?.addEventListener('click',()=>{labDone.clear();labResults.clear();document.querySelectorAll('[data-lab-card]').forEach(card=>{card.classList.remove('is-done');card.querySelector('.lab-result').textContent='';});document.querySelectorAll('input[name="cleanup"]').forEach(input=>input.checked=input.value!=='downloads');document.querySelectorAll('input[name="startup"]').forEach(input=>input.checked=true);if(tuning)tuning.value='2';renderLab();});
Object.entries({temporary:.8,cache:.5,downloads:1.2}).forEach(([key,value])=>{const input=document.querySelector(`input[name="cleanup"][value="${key}"]`);if(input)input.dataset.gb=String(value);});

const languageToggle=document.querySelector('#language-toggle');
const languageNote=document.querySelector('#language-note');
function setLanguage(language){const french=language==='fr';document.documentElement.lang=french?'fr':'en';captureText();textNodes.forEach((original,node)=>{if(!noTranslate.has(node))node.textContent=translateText(original,french);});attributes.forEach(({element,attribute,value})=>element.setAttribute(attribute,translateText(value,french)));document.querySelectorAll('.price-en').forEach(el=>el.hidden=french);document.querySelectorAll('.price-fr').forEach(el=>el.hidden=!french);if(languageToggle){languageToggle.textContent=french?'SCM in English':'SCM en français';languageToggle.setAttribute('aria-pressed',String(french));languageToggle.setAttribute('aria-label',french?'Afficher le site en anglais':'Afficher le site en français');}if(languageNote)languageNote.textContent=french?'Voir le site en anglais.':'Consultez le site en français.';document.title=french?'SCM | Entretien informatique simple':'SCM | Simple Computer Maintenance';const desc=document.querySelector('meta[name="description"]');if(desc)desc.content=french?'SCM propose un entretien informatique à distance : nettoyage, mises à jour Windows et pilotes, analyses antivirus, optimisation du démarrage et des performances.':'Simple Computer Maintenance provides friendly remote PC cleanup, Windows and driver updates, virus scans, startup optimization, and performance tuning over live calls.';renderLab();}
if(languageToggle)languageToggle.addEventListener('click',()=>setLanguage(currentLanguage()==='fr'?'en':'fr'));
Object.entries({temporary:.8,cache:.5,downloads:1.2}).forEach(([key,value])=>{const input=document.querySelector(`input[name="cleanup"][value="${key}"]`);if(input)input.dataset.gb=String(value);});
renderLab();

const newsGrid=document.querySelector('#news-grid');
const newsStatus=document.querySelector('#news-status');
const newsRefresh=document.querySelector('#news-refresh');
const googleNewsRss='https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGRqTVhZU0FtVnVHZ0pWVXlnQVAB?hl=en-US&gl=US&ceid=US%3Aen';
const newsApi=new URL('https://api.rss2json.com/v1/api.json');
newsApi.searchParams.set('rss_url',googleNewsRss);
let isNewsLoading=false;
function makeNewsCard(item){
  const article=document.createElement('article');article.className='news-card';
  const source=document.createElement('span');source.className='news-source';source.textContent=item.author||'TECH NEWS';
  const title=document.createElement('h3');const link=document.createElement('a');link.href=item.link;link.target='_blank';link.rel='noopener noreferrer';link.textContent=item.title||'Read this technology story';title.append(link);
  const footer=document.createElement('div');footer.className='news-card-footer';const date=document.createElement('time');const published=new Date(item.pubDate);
  if(!Number.isNaN(published.getTime())){date.dateTime=published.toISOString();date.textContent=published.toLocaleString(undefined,{dateStyle:'medium',timeStyle:'short'});}else date.textContent='Latest headline';
  const arrow=document.createElement('span');arrow.setAttribute('aria-hidden','true');arrow.textContent='↗';footer.append(date,arrow);article.append(source,title,footer);return article;
}
async function loadTechNews(){
  if(!newsGrid||!newsStatus||isNewsLoading)return;
  isNewsLoading=true;newsGrid.setAttribute('aria-busy','true');if(newsRefresh)newsRefresh.disabled=true;newsStatus.textContent='Refreshing the latest headlines…';
  try{
    const response=await fetch(newsApi,{headers:{Accept:'application/json'},cache:'no-store'});if(!response.ok)throw new Error(`News service returned ${response.status}`);
    const data=await response.json();if(data.status!=='ok'||!Array.isArray(data.items)||data.items.length===0)throw new Error('The news feed returned no stories.');
    newsGrid.replaceChildren(...data.items.slice(0,6).map(makeNewsCard));newsStatus.textContent=`Updated ${new Date().toLocaleTimeString([],{hour:'numeric',minute:'2-digit'})} · refreshes every 5 minutes`;
  }catch(error){newsStatus.textContent='Headlines could not load right now. Try again or browse Google News.';if(!newsGrid.querySelector('.news-card:not(.news-placeholder)'))newsGrid.replaceChildren();console.error('Unable to load Google News headlines:',error);}
  finally{newsGrid.setAttribute('aria-busy','false');if(newsRefresh)newsRefresh.disabled=false;isNewsLoading=false;}
}
if(newsGrid){loadTechNews();if(newsRefresh)newsRefresh.addEventListener('click',loadTechNews);window.setInterval(loadTechNews,5*60*1000);}
document.querySelector('#year').textContent=new Date().getFullYear();
