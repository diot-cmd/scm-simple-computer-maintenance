(() => {
  const copy = {
    en: {
      launcher:'Chat with Clara', title:'Clara · SCM assistant', status:'Here to help you find the right service.',
      welcome:'Hi! I’m Clara, SCM’s virtual assistant. Ask me about our services, pricing, or remote sessions.',
      placeholder:'Type a question…', send:'Send message', close:'Close chat', open:'Open SCM chat assistant',
      quick:['What services do you offer?','How much does it cost?','How does remote support work?'],
      contact:'Talk with SCM on Facebook ↗',powered:'Clara uses prepared answers and does not access your PC.',
      panelLabel:'SCM chat assistant',suggestions:'Suggested questions',
      price:'The Complete Computer Maintenance Package is $39.99. If you only need selected services, pricing is adjusted to match the work requested.',
      remote:'Message SCM on Facebook to arrange a live remote session. You stay involved and approve changes as we go.',
      safety:'SCM provides guided maintenance, not a guarantee that every issue or threat can be found or fixed. For an appointment, message SCM on Facebook.',
      lab:'Try the Tech Lab for browser-only sample activities. It is a simulation and does not access or change your device.',
      service:'SCM offers clutter cleanup, Windows and driver updates, virus scans, startup optimization, performance tuning, and Ultimate Performance Mode activation. All support is remote and guided live.',
      unknown:'I can help with services, the complete package, pricing, remote sessions, and the Tech Lab. For a personal question, message SCM on Facebook.',
      contactAnswer:'Contact SCM directly here: https://www.facebook.com/share/1Qj5sVoqzE/',
      priceTerms:['price','pricing','cost','39.99','49.99','package'],how:['remote','live','session','appointment','book','schedule'],contactTerms:['contact','get in touch','reach scm','talk to scm','message scm','speak with scm','facebook'],
      safetyTerms:['virus','virus scan','safe','security','malware','threat'],labTerms:['tech lab','demo','try','sample'],productTerms:['product','package','what do you offer','services','service','find'],
      serviceTerms:['clutter cleanup','windows and driver updates','startup optimization','performance tuning','ultimate performance mode'],
      topics:['price','remote','safety','lab','service','unknown']
    },
    fr: {
      launcher:'Discuter avec Clara', title:'Clara · Assistante SCM', status:'Je vous aide à trouver le bon service.',
      welcome:'Bonjour ! Je suis Clara, l’assistante virtuelle de SCM. Posez-moi vos questions sur nos services, nos tarifs ou l’assistance à distance.',
      placeholder:'Écrivez votre question…', send:'Envoyer le message', close:'Fermer la discussion', open:'Ouvrir l’assistante SCM',
      quick:['Quels services proposez-vous ?','Combien cela coûte-t-il ?','Comment fonctionne l’assistance à distance ?'],
      contact:'Écrire à SCM sur Facebook ↗',powered:'Clara utilise des réponses préparées et n’accède pas à votre PC.',
      panelLabel:'Assistante de discussion SCM',suggestions:'Questions suggérées',
      price:'La formule Entretien complet de votre ordinateur coûte 39,99 $. Si vous ne souhaitez que certains services, le tarif est ajusté selon le travail demandé.',
      remote:'Écrivez à SCM sur Facebook pour convenir d’une séance à distance en direct. Vous participez et approuvez les changements au fur et à mesure.',
      safety:'SCM propose un entretien guidé, sans garantir que chaque problème ou menace puisse être détecté ou résolu. Pour prendre rendez-vous, écrivez à SCM sur Facebook.',
      lab:'Essayez le Labo Tech pour des activités de démonstration dans le navigateur. La simulation n’accède pas à votre appareil et ne le modifie pas.',
      service:'SCM propose le nettoyage des fichiers inutiles, les mises à jour de Windows et des pilotes, les analyses antivirus, l’optimisation du démarrage et des performances, ainsi que l’activation du mode Performances ultimes. L’assistance se déroule à distance, en direct et avec votre participation.',
      unknown:'Je peux vous renseigner sur les services, la formule complète, les tarifs, l’assistance à distance et le Labo Tech. Pour une question personnelle, écrivez à SCM sur Facebook.',
      contactAnswer:'Contactez directement SCM ici : https://www.facebook.com/share/1Qj5sVoqzE/',
      priceTerms:['prix','tarif','coût','coûte','coute','combien','39,99','49,99','formule'],how:['distance','en direct','séance','rendez-vous','réserver','planifier'],contactTerms:['contact','contacter','joindre','parler à scm','écrire à scm','facebook'],
      safetyTerms:['virus','antivirus','sécurité','maliciel','menace'],labTerms:['labo tech','démo','essayer','exemple'],productTerms:['produit','formule','services','service','proposez'],
      serviceTerms:['nettoyage','mise à jour','mises à jour','démarrage','performances','pilotes'],topics:['price','remote','safety','lab','service','unknown']
    }
  };
  const root=document.querySelector('#scm-chatbot'); if(!root)return;
  const launcher=root.querySelector('.chat-launcher'),panel=root.querySelector('.chat-panel'),close=root.querySelector('.chat-close');
  const form=root.querySelector('.chat-form'),input=root.querySelector('.chat-input'),log=root.querySelector('.chat-messages'),quick=root.querySelector('.chat-quick');
  let greeted=false;
  const language=()=>document.documentElement.lang==='fr'?'fr':'en';
  function refresh(){
    const w=copy[language()]; launcher.setAttribute('aria-label',w.open); launcher.querySelector('.chat-launcher-label').textContent=w.launcher;
    root.querySelector('.chat-title').textContent=w.title;root.querySelector('.chat-status').textContent=w.status;
    input.placeholder=w.placeholder;input.setAttribute('aria-label',w.placeholder);form.querySelector('button').setAttribute('aria-label',w.send);
    close.setAttribute('aria-label',w.close);panel.setAttribute('aria-label',w.panelLabel);
    root.querySelector('.chat-contact').textContent=w.contact;root.querySelector('.chat-powered').textContent=w.powered;quick.setAttribute('aria-label',w.suggestions);
    quick.replaceChildren(...w.quick.map(text=>{const b=document.createElement('button');b.type='button';b.className='chat-suggestion';b.textContent=text;b.addEventListener('click',()=>submit(text));return b;}));
    log.querySelectorAll('.chat-bubble.assistant').forEach(b=>{if(b.dataset.topic)setBubbleContent(b,w[b.dataset.topic]);});
  }
  function setBubbleContent(element,text){element.replaceChildren();const urls=/(https:\/\/[^\s]+)/g;let last=0,match;while((match=urls.exec(text))!==null){element.append(document.createTextNode(text.slice(last,match.index)));const link=document.createElement('a');link.href=match[0];link.textContent=match[0];link.target='_blank';link.rel='noopener noreferrer';link.className='chat-answer-link';element.append(link);last=match.index+match[0].length;}element.append(document.createTextNode(text.slice(last)));}
  function add(text,role,topic){const p=document.createElement('p');p.className=`chat-bubble ${role}`;if(role==='assistant')setBubbleContent(p,text);else p.textContent=text;if(topic)p.dataset.topic=topic;log.appendChild(p);log.scrollTop=log.scrollHeight;return p;}
  function answer(text){const w=copy[language()],q=text.toLocaleLowerCase(language());
    if(w.contactTerms.some(t=>q.includes(t)))return['contactAnswer',w.contactAnswer];
    if(w.priceTerms.some(t=>q.includes(t)))return['price',w.price];
    if(w.how.some(t=>q.includes(t)))return['remote',w.remote];
    if(w.safetyTerms.some(t=>q.includes(t)))return['safety',w.safety];
    if(w.labTerms.some(t=>q.includes(t)))return['lab',w.lab];
    if(w.productTerms.some(t=>q.includes(t))||w.serviceTerms.some(t=>q.includes(t)))return['service',w.service];
    return['unknown',w.unknown];
  }
  function submit(text){const value=(text||'').trim();if(!value)return;add(value,'visitor');const [topic,response]=answer(value);add(response,'assistant',topic);input.value='';quick.hidden=true;input.focus();}
  function open(){panel.hidden=false;launcher.setAttribute('aria-expanded','true');if(!greeted){add(copy[language()].welcome,'assistant','welcome');greeted=true;}refresh();input.focus();}
  function shut(){panel.hidden=true;launcher.setAttribute('aria-expanded','false');launcher.focus();}
  launcher.addEventListener('click',()=>panel.hidden?open():shut());close.addEventListener('click',shut);
  form.addEventListener('submit',event=>{event.preventDefault();submit(input.value);});
  document.addEventListener('click',event=>{if(event.target.closest('#language-toggle'))refresh();});
  const observer=new MutationObserver(refresh);observer.observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  refresh();
})();
