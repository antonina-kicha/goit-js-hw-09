var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("iQIUW");const l=document.querySelector('[type="submit"]'),u=document.querySelector(".form");document.querySelector('[name="delay"]'),document.querySelector('[name="step"]'),document.querySelector('[name="step"]');u.addEventListener("change",(function(e){const{elements:{delay:t,step:n,amount:o}}=e.currentTarget;a.delay=Number(t.value),a.step=Number(n.value),a.amount=Number(o.value),console.log(a)})),l.addEventListener("click",(function(){for(let e=1;e<=a.amount;e+=1)i(e,a.delay),a.delay+=a.step}));let a={delay:0,step:0,amount:0};function i(e,t){event.preventDefault();const n=Math.random()>.3;new Promise(((o,r)=>{setTimeout((()=>{n?o(`Fulfilled promis ${e} in ${t}ms`):r(`Rejected promis ${e} in ${t}ms`)}),t)})).then((e=>r.Notify.success(e))).catch((e=>r.Notify.failure(e)))}
//# sourceMappingURL=03-promises.bfa15cc5.js.map
