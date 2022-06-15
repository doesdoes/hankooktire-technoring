export function sendUICustomEvent(msg) {
  let event = null;
  if (window.CustomEvent && typeof window.CustomEvent === 'function') {
    event = new CustomEvent('UICustomEvent', {detail: {msg: msg}});
  } else {
    event = document.createEvent('CustomEvent');
    event.initCustomEvent('UICustomEvent', true, true, {msg: msg});
  }

  window.dispatchEvent(event);
}