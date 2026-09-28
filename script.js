/* =============================================================
   ✏️  PERSONALIZE AQUI
   -------------------------------------------------------------
   Todos os textos do site ficam neste objeto. Troque à vontade:
   - nome ............ o nome da aniversariante
   - carta ........... saudação, parágrafos e assinatura
   - {nome} .......... é substituído automaticamente pelo nome
   ============================================================= */
const CONFIG = {
  // 👉 MÚSICA DE FUNDO: arquivo na mesma pasta e volume (0 = mudo, 1 = máximo)
  musica: {
    arquivo: "musica.mp3",
    volume: 0.2,
  },

  // 👉 NOME: altere aqui
  nome: "Rayla",
  inicial: "R", // letra que aparece no selo e no envelope

  tituloDaPagina: "Feliz aniversário, {nome}!",

  intro: {
    chamada: "Para",
    mensagem: "Tem um presente esperando por você.",
    botao: "Abrir meu presente",
    cartaoPara: "para você",
  },

  hero: {
    chamada: "Hoje é dia de celebrar você.",
    titulo: "Feliz aniversário,",
    nome: "{nome}!",
    mensagem:
      "Algumas pessoas deixam os dias mais leves só por fazerem parte deles. Você é uma dessas pessoas. Hoje, este cantinho é seu.",
    botao: "Veja o que preparei",
  },

  lembretes: {
    chamada: "Abra um de cada vez",
    titulo: "Pequenos lembretes para você",
    dicaAbrir: "Toque para abrir",
    dicaFechar: "Toque para fechar",
    cartoes: [
      {
        titulo: "Você merece coisas boas",
        mensagem:
          "Que este novo ano venha cheio de dias tranquilos, conversas boas e abraços sinceros. Você merece receber tudo de bom que a vida tem para oferecer — e um pouquinho mais.",
      },
      {
        titulo: "Seu jeito faz diferença",
        mensagem:
          "Às vezes a gente nem percebe o quanto a nossa presença importa para alguém. Então fica aqui o lembrete: a sua importa, e muito. Amizade boa é assim — deixa tudo mais leve.",
      },
      {
        titulo: "Que venham novos capítulos",
        mensagem:
          "Um novo ciclo começa hoje. Que ele traga coragem para os sonhos grandes, calma para os dias difíceis e muitas histórias bonitas para contar depois.",
      },
    ],
  },

  // 👉 COISAS QUE ME LEMBRAM VOCÊ: fotos (arquivos na mesma pasta), títulos e legendas
  lembrancas: {
    chamada: "Uma pequena coleção",
    titulo: "Coisas que me lembram você",
    texto: "Tem coisas que aparecem por aí e, na hora, eu penso em você.",
    dica: "Toque para ampliar",
    dicaSegredo: "Psiu… toque na foto.",
    // Cada foto guarda um "segredo": ao tocar na foto ampliada, aparece a
    // mensagem com um efeito. efeito: "confete" | "capivaras" | "notas" | "brilhos"
    itens: [
      {
        foto: "img/outer-banks.jpg",
        alt: "Pôster da série Outer Banks",
        titulo: "Outer Banks",
        legenda: "Começou Outer Banks? Pronto, lembrei de você.",
        segredo: "Pogue for life. Que nunca falte aventura no seu caminho.",
        efeito: "confete",
        cores: ["#F2A65A", "#3AA7A3", "#F6E7C1", "#E07A5F", "#8FD3D1"],
      },
      {
        foto: "img/luan-santana.jpg",
        alt: "O cantor Luan Santana cantando com um violão",
        titulo: "Luan Santana",
        legenda: "Tocou Luan Santana, a primeira pessoa que vem na cabeça é você.",
        segredo: "Aumenta o som! Essa é pra cantar junto.",
        efeito: "notas",
      },
      {
        foto: "img/capivara.jpg",
        alt: "Uma capivara mostrando a língua, com fundo rosa",
        titulo: "Capivara",
        legenda: "É ver uma capivara e pensar em você na hora.",
        segredo: "Chuva de capivaras liberada!",
        efeito: "capivaras",
      },
      {
        foto: "img/espanha.jpg",
        alt: "A bandeira da Espanha tremulando",
        titulo: "Espanha",
        legenda: "Vermelho e amarelo da Espanha? Lembro de você.",
        segredo: "¡Feliz cumpleaños, {nome}! Que la vida te sonría siempre.",
        efeito: "confete",
        cores: ["#C60B1E", "#FFC400", "#AA151B", "#F1BF00"],
      },
      {
        foto: "img/rayla-selfie.jpg",
        alt: "Selfie da Rayla com o cabelo cacheado solto",
        titulo: "Você",
        legenda: "E, claro, a melhor parte de toda a coleção.",
        segredo: "Nunca esqueça o quanto você é especial.",
        efeito: "brilhos",
      },
    ],
  },

  // 👉 CARTA: altere a saudação, os parágrafos e a assinatura aqui
  carta: {
    chamada: "Uma carta para {nome}",
    titulo: "Algumas palavras para guardar.",
    saudacao: "{nome},",
    paragrafos: [
      "Hoje eu queria te desejar mais do que um feliz aniversário. Queria te lembrar do quanto é bom ter você na minha vida.",
      "Que este novo ciclo traga motivos para sorrir, coragem para seguir seus sonhos e pessoas que te façam bem, daquelas que tornam qualquer aventura mais especial, igual John B e Sarah, que mesmo em meio a tantos altos e baixos, sempre encontravam um motivo para continuar juntos.",
      "Que você encontre felicidade nas grandes conquistas e também nos pequenos momentos.",
      "Preparei este cantinho com carinho, para você visitar quando quiser e lembrar que tem alguém torcendo por você.",
      "Feliz aniversário! Que não faltem boas surpresas, aventuras e histórias bonitas para viver.",
    ],
    // 👉 ASSINATURA: altere aqui
    despedida: "Com carinho,",
    assinatura: "Anonymos",
  },

  pedido: {
    chamada: "Hora do pedido",
    titulo: "Antes de continuar… faça um pedido.",
    texto: "Pensou em algo especial? Então pode apagar a velinha.",
    botao: "Apagar a velinha",
    mensagem: "Que a vida te surpreenda com coisas lindas. Feliz aniversário, {nome}!",
    repetir: "Acender de novo",
  },

  surpresa: {
    chamada: "Quase no fim",
    titulo: "Guardei uma última coisa.",
    botao: "Mais uma coisinha…",
    mensagem:
      "Este presente não cabe numa caixa, mas guarda um carinho enorme. Espero que ele tenha feito você sorrir.",
  },

  rodape: "Feito com carinho, especialmente para {nome}.",

  // Capivara escondida atrás da carta
  capivaraEscondida: "Você achou a capivara escondida!",
};

/* =============================================================
   Daqui para baixo é o funcionamento do site.
   ============================================================= */
(function () {
  "use strict";

  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const reducedMotion = () => motionQuery.matches;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* ---------- Textos ---------- */
  function getPath(obj, path) {
    return path.split(".").reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);
  }

  function fmt(text) {
    return String(text).replace(/\{nome\}/g, CONFIG.nome);
  }

  function applyTexts() {
    $$("[data-text]").forEach((el) => {
      const value = getPath(CONFIG, el.dataset.text);
      if (typeof value === "string") el.textContent = fmt(value);
    });

    $$("[data-src]").forEach((img) => {
      const src = getPath(CONFIG, img.dataset.src);
      if (typeof src === "string" && src) img.src = src;
    });
    $$("[data-alt]").forEach((img) => {
      const alt = getPath(CONFIG, img.dataset.alt);
      if (typeof alt === "string") img.alt = fmt(alt);
    });

    const body = $("[data-carta]");
    if (body && Array.isArray(CONFIG.carta.paragrafos)) {
      body.replaceChildren(
        ...CONFIG.carta.paragrafos.map((text) => {
          const p = document.createElement("p");
          p.textContent = fmt(text);
          return p;
        })
      );
    }

    $$(".card__hint-text").forEach((el) => (el.textContent = CONFIG.lembretes.dicaAbrir));
    document.title = fmt(CONFIG.tituloDaPagina);
  }

  /* ---------- Revelação ao rolar ---------- */
  function initReveal() {
    const items = $$(".reveal");
    const show = (el) => {
      el.classList.add("is-visible");
      // depois da entrada, devolve as transições próprias do elemento (hover etc.)
      window.setTimeout(() => el.classList.remove("reveal"), 1400);
    };

    if (reducedMotion() || !("IntersectionObserver" in window)) {
      items.forEach(show);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((el) => observer.observe(el));
  }

  /* ---------- Música de fundo ---------- */
  const music = (function () {
    const audio = $("#bg-music");
    const toggle = $("#music-toggle");
    const config = CONFIG.musica || {};
    const target = Math.min(Math.max(Number(config.volume) || 0.2, 0), 1);
    let gain = null;
    let ctx = null;
    let playing = false;

    if (!audio) return { start() {}, showToggle() {} };
    if (config.arquivo) audio.src = config.arquivo;

    // No iPhone o volume do <audio> não pode ser alterado por código;
    // por isso, quando o site está publicado (http/https), usamos Web Audio.
    function setupGain() {
      if (gain || !/^https?:$/.test(location.protocol)) return;
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      try {
        ctx = new AC();
        gain = ctx.createGain();
        gain.gain.value = 0;
        ctx.createMediaElementSource(audio).connect(gain).connect(ctx.destination);
      } catch (e) {
        gain = null;
      }
    }

    function fadeTo(value, seconds) {
      if (gain) {
        const now = ctx.currentTime;
        gain.gain.cancelScheduledValues(now);
        gain.gain.setValueAtTime(gain.gain.value, now);
        gain.gain.linearRampToValueAtTime(value, now + seconds);
        return;
      }
      const from = audio.volume;
      const start = performance.now();
      const step = (t) => {
        const k = Math.min(Math.max((t - start) / (seconds * 1000), 0), 1);
        audio.volume = from + (value - from) * k;
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }

    function render() {
      toggle.setAttribute("aria-pressed", String(playing));
      toggle.setAttribute("aria-label", playing ? "Pausar música" : "Tocar música");
      toggle.classList.toggle("is-playing", playing);
    }

    function play() {
      setupGain();
      if (ctx && ctx.state === "suspended") ctx.resume();
      if (!gain) audio.volume = 0;
      const attempt = audio.play();
      playing = true;
      render();
      fadeTo(target, 2.5); // entra devagar
      if (attempt && attempt.catch) {
        attempt.catch(() => {
          playing = false;
          render();
        });
      }
    }

    function pause() {
      playing = false;
      render();
      fadeTo(0, 0.4);
      window.setTimeout(() => {
        if (!playing) audio.pause();
      }, 450);
    }

    if (toggle) {
      toggle.addEventListener("click", () => (playing ? pause() : play()));
    }

    // pausa quando a aba fica em segundo plano e volta ao retornar
    let resumeOnReturn = false;
    document.addEventListener("visibilitychange", () => {
      if (document.hidden && playing) {
        resumeOnReturn = true;
        audio.pause();
      } else if (!document.hidden && resumeOnReturn) {
        resumeOnReturn = false;
        if (playing) audio.play().catch(() => {});
      }
    });

    return {
      start() {
        if (toggle) toggle.hidden = false;
        play();
      },
      showToggle() {
        if (toggle) toggle.hidden = false;
      },
    };
  })();

  /* ---------- Abertura do presente ---------- */
  function initIntro(onDone) {
    const intro = $("#intro");
    const button = $("#open-gift");
    const main = $("#conteudo");
    const footer = $(".footer");

    if (!intro || !button) {
      music.showToggle();
      onDone();
      return;
    }

    const setInert = (value) => {
      [main, footer].forEach((el) => {
        if (!el) return;
        el.inert = value;
        if (value) el.setAttribute("inert", "");
        else el.removeAttribute("inert");
      });
    };

    document.body.classList.add("is-locked");
    setInert(true);
    button.focus({ preventScroll: true });

    let opened = false;

    function open() {
      if (opened) return;
      opened = true;
      button.setAttribute("aria-disabled", "true");

      const fast = reducedMotion();
      intro.classList.add("is-opening");
      window.setTimeout(() => intro.classList.add("is-leaving"), fast ? 0 : 800);
      window.setTimeout(finish, fast ? 0 : 1250);
    }

    function finish() {
      music.showToggle();
      intro.hidden = true;
      setInert(false);
      document.body.classList.remove("is-locked");
      window.scrollTo(0, 0);
      const title = $("#hero-title");
      if (title) title.focus({ preventScroll: true });
      onDone();
    }

    button.addEventListener("click", () => {
      music.start(); // precisa acontecer dentro do clique para o navegador liberar o som
      open();
    });

    intro.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        open();
      } else if (event.key === "Tab") {
        // só existe um elemento focável na abertura: mantém o foco nele
        event.preventDefault();
        button.focus();
      }
    });
  }

  /* ---------- Cartões ---------- */
  function initCards() {
    $$(".card__toggle").forEach((toggle) => {
      const card = toggle.closest(".card");
      const message = document.getElementById(toggle.getAttribute("aria-controls"));
      const hint = $(".card__hint-text", card);

      message.setAttribute("aria-hidden", "true");

      toggle.addEventListener("click", () => {
        const open = toggle.getAttribute("aria-expanded") !== "true";
        toggle.setAttribute("aria-expanded", String(open));
        card.classList.toggle("is-open", open);
        message.setAttribute("aria-hidden", String(!open));
        hint.textContent = open ? CONFIG.lembretes.dicaFechar : CONFIG.lembretes.dicaAbrir;
      });
    });
  }

  /* ---------- Fotos: ampliar ---------- */
  function initLightbox() {
    const dialog = $("#lightbox");
    const buttons = $$(".polaroid__button");
    if (!dialog || typeof dialog.showModal !== "function") return; // sem suporte: fotos seguem visíveis

    const img = $("#lightbox-img");
    const photo = $("#lightbox-photo");
    const title = $("#lightbox-title");
    const text = $("#lightbox-text");
    const hint = $("#lightbox-hint");
    const secret = $("#lightbox-secret");
    const fxLayer = $("#fx-dialog");
    let opener = null;
    let current = null;

    function open(index, button) {
      const item = CONFIG.lembrancas.itens[index];
      const thumb = $("img", button);
      if (!item && !thumb) return;
      opener = button;
      current = item || null;
      img.src = (item && item.foto) || thumb.src;
      img.alt = thumb ? thumb.alt : "";
      title.textContent = fmt(item ? item.titulo : "");
      text.textContent = fmt(item ? item.legenda : "");
      secret.textContent = "";
      secret.classList.remove("is-visible");
      const hasSecret = Boolean(item && item.segredo);
      hint.hidden = !hasSecret;
      photo.disabled = !hasSecret;
      dialog.showModal();
      document.body.classList.add("is-locked");
      $("#lightbox-close").focus();
    }

    function close() {
      if (dialog.open) dialog.close();
    }

    // tocar na foto ampliada revela o segredo daquela lembrança
    photo.addEventListener("click", (event) => {
      event.stopPropagation();
      if (!current || !current.segredo) return;
      secret.textContent = fmt(current.segredo);
      secret.classList.remove("is-visible");
      void secret.offsetWidth;
      secret.classList.add("is-visible");
      hint.hidden = true;
      playEffect(current.efeito, { origin: photo, layer: fxLayer, cores: current.cores });
    });

    buttons.forEach((button) => {
      button.addEventListener("click", () => open(Number(button.dataset.lembranca), button));
    });

    $("#lightbox-close").addEventListener("click", close);

    // tocar fora da foto fecha
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) close();
    });

    // Esc fecha nativamente; aqui devolvemos o foco para a foto que abriu
    dialog.addEventListener("close", () => {
      document.body.classList.remove("is-locked");
      fxLayer.replaceChildren();
      if (opener) opener.focus({ preventScroll: true });
    });
  }

  /* ---------- Surpresas: efeitos ---------- */
  const rand = (min, max) => min + Math.random() * (max - min);
  const canAnimate = () => !reducedMotion() && typeof Element.prototype.animate === "function";

  function makeIcon(symbol, size, color) {
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    const use = document.createElementNS(ns, "use");
    use.setAttribute("href", `#${symbol}`);
    svg.appendChild(use);
    svg.setAttribute("width", size);
    svg.setAttribute("height", size);
    svg.style.cssText = `position:absolute;left:0;top:0;color:${color};fill:${color};overflow:visible`;
    return svg;
  }

  // ícones caindo do topo da tela (capivaras)
  function rainIcons(symbol, layer, { count = 26, sizes = [34, 60], colors = ["#fff"] } = {}) {
    if (!canAnimate()) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    for (let i = 0; i < count; i++) {
      const size = Math.round(rand(sizes[0], sizes[1]));
      const el = makeIcon(symbol, size, colors[i % colors.length]);
      layer.appendChild(el);
      const x = rand(-10, w - size + 10);
      const sway = rand(-60, 60);
      const turn = rand(-40, 40);
      el.animate(
        [
          { transform: `translate(${x}px, ${-size - 20}px) rotate(${-turn}deg)` },
          { transform: `translate(${x + sway}px, ${h * 0.5}px) rotate(${turn * 0.5}deg)`, offset: 0.5 },
          { transform: `translate(${x - sway * 0.5}px, ${h + 30}px) rotate(${turn}deg)` },
        ],
        { duration: rand(2600, 4200), delay: rand(0, 900), easing: "cubic-bezier(.35,.1,.55,1)", fill: "both" }
      ).onfinish = () => el.remove();
    }
  }

  // ícones subindo a partir de um ponto (notas musicais, brilhos)
  function floatIcons(symbol, layer, origin, { count = 16, sizes = [18, 34], colors = ["#fff"] } = {}) {
    if (!canAnimate()) return;
    const r = origin.getBoundingClientRect();
    for (let i = 0; i < count; i++) {
      const size = Math.round(rand(sizes[0], sizes[1]));
      const el = makeIcon(symbol, size, colors[i % colors.length]);
      layer.appendChild(el);
      const x0 = rand(r.left + 10, r.right - size - 10);
      const y0 = r.bottom - size - rand(0, r.height * 0.3);
      const rise = rand(160, Math.max(220, r.height + 120));
      const drift = rand(-50, 50);
      el.animate(
        [
          { transform: `translate(${x0}px, ${y0}px) scale(.4)`, opacity: 0 },
          { transform: `translate(${x0 + drift * 0.4}px, ${y0 - rise * 0.3}px) scale(1)`, opacity: 1, offset: 0.25 },
          { transform: `translate(${x0 + drift}px, ${y0 - rise}px) scale(.9) rotate(${rand(-25, 25)}deg)`, opacity: 0 },
        ],
        { duration: rand(1600, 2600), delay: rand(0, 700), easing: "cubic-bezier(.2,.6,.3,1)", fill: "both" }
      ).onfinish = () => el.remove();
    }
  }

  function playEffect(kind, { origin, layer, cores } = {}) {
    const target = layer || $("#confetti");
    if (kind === "capivaras") rainIcons("i-capy", target, { colors: ["#B27A46"] });
    else if (kind === "notas") floatIcons("i-note", target, origin, { colors: ["#E48BC0", "#F8F2F6", "#DCC5D5", "#AA3D80"] });
    else if (kind === "brilhos") floatIcons("i-sparkle", target, origin, { count: 22, sizes: [12, 30], colors: ["#F8F2F6", "#E48BC0", "#FFD89A"] });
    else launchConfetti(origin, { layer: target, cores });
  }

  let toastTimer = 0;
  function showToast(message) {
    const toast = $("#toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 3600);
  }

  function initCapyPeek() {
    const button = $("#capy-peek");
    if (!button) return;
    button.addEventListener("click", () => {
      button.classList.add("is-found");
      showToast(fmt(CONFIG.capivaraEscondida));
      playEffect("capivaras");
      window.setTimeout(() => button.classList.remove("is-found"), 900);
    });
  }

  /* ---------- Mostrar / esconder com transição ---------- */
  function showSmooth(el) {
    el.classList.add("is-hidden");
    el.hidden = false;
    void el.offsetWidth; // força o navegador a aplicar o estado inicial
    el.classList.remove("is-hidden");
  }

  function hideSmooth(el, done) {
    if (reducedMotion()) {
      el.hidden = true;
      if (done) done();
      return;
    }
    el.classList.add("is-hidden");
    window.setTimeout(() => {
      el.hidden = true;
      el.classList.remove("is-hidden");
      if (done) done();
    }, 350);
  }

  /* ---------- Confetes ---------- */
  const CONFETTI_COLORS = ["#AA3D80", "#E48BC0", "#DCC5D5", "#F8F2F6", "#78355F", "#C9579A"];

  function launchConfetti(origin, options = {}) {
    const layer = options.layer || $("#confetti");
    const colors = options.cores || CONFETTI_COLORS;
    if (!layer || reducedMotion() || typeof Element.prototype.animate !== "function") return;

    const rect = origin.getBoundingClientRect();
    const x0 = rect.left + rect.width / 2;
    const y0 = rect.top + rect.height * 0.25;
    const small = window.innerWidth < 600;
    const count = small ? 60 : 110;
    const spread = small ? 0.8 : 1.2;
    const rand = (min, max) => min + Math.random() * (max - min);

    for (let i = 0; i < count; i++) {
      const piece = document.createElement("span");
      const w = rand(6, 11);
      const round = Math.random() < 0.3;
      piece.style.left = `${x0}px`;
      piece.style.top = `${y0}px`;
      piece.style.width = `${w}px`;
      piece.style.height = `${round ? w : w * rand(0.4, 0.7)}px`;
      piece.style.borderRadius = round ? "50%" : "2px";
      piece.style.background = colors[i % colors.length];
      layer.appendChild(piece);

      const angle = rand(-Math.PI * 0.92, -Math.PI * 0.08);
      const speed = rand(140, 340) * spread;
      const dx = Math.cos(angle) * speed;
      const dy = Math.sin(angle) * speed;
      const fall = rand(220, 460);
      const spin = rand(-720, 720);

      const animation = piece.animate(
        [
          { transform: "translate(-50%, -50%) scale(0.4)", opacity: 1 },
          {
            transform: `translate(-50%, -50%) translate(${dx}px, ${dy}px) rotate(${spin * 0.4}deg) scale(1)`,
            opacity: 1,
            offset: 0.35,
          },
          {
            transform: `translate(-50%, -50%) translate(${dx * 1.35}px, ${dy + fall}px) rotate(${spin}deg) scale(0.9)`,
            opacity: 0,
          },
        ],
        { duration: rand(1500, 2500), easing: "cubic-bezier(.2,.65,.35,1)", fill: "forwards" }
      );
      animation.onfinish = () => piece.remove();
    }
  }

  /* ---------- Vela ---------- */
  function initWish() {
    const section = $("#pedido");
    const blow = $("#blow-candle");
    const relight = $("#relight-candle");
    const result = $("#wish-result");
    const message = $("#wish-message");
    const cake = $(".cake");
    if (!section || !blow) return;

    blow.addEventListener("click", () => {
      section.classList.add("is-out");
      blow.hidden = true;
      showSmooth(result);
      message.focus({ preventScroll: true });
      window.setTimeout(() => launchConfetti(cake), reducedMotion() ? 0 : 250);
    });

    relight.addEventListener("click", () => {
      hideSmooth(result, () => {
        section.classList.remove("is-out");
        blow.hidden = false;
        blow.focus({ preventScroll: true });
      });
    });
  }

  /* ---------- Surpresa final ---------- */
  function initSurprise() {
    const toggle = $("#surprise-toggle");
    const message = $("#surprise-message");
    const wrap = $(".surprise");
    if (!toggle || !message) return;

    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(open));
      wrap.classList.toggle("is-revealed", open);
      if (open) {
        showSmooth(message);
        if (!reducedMotion()) {
          window.setTimeout(() => {
            const r = message.getBoundingClientRect();
            if (r.bottom > window.innerHeight) {
              message.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }
          }, 150);
        }
      } else {
        hideSmooth(message);
      }
    });
  }

  /* ---------- Início ---------- */
  applyTexts();
  initCards();
  initLightbox();
  initCapyPeek();
  initWish();
  initSurprise();
  initIntro(initReveal);
})();
