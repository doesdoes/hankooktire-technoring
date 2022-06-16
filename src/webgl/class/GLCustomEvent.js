export function sendGLCustomEvent(msg) {
  let event = null;
  if (window.CustomEvent && typeof window.CustomEvent === 'function') {
    event = new CustomEvent('GLCustomEvent', {detail: {msg: msg}});
  } else {
    event = document.createEvent('CustomEvent');
    event.initCustomEvent('GLCustomEvent', true, true, {msg: msg});
  }

  window.dispatchEvent(event);
}