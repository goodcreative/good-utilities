/**
 * messageBus - Singleton EventTarget used as a global pub/sub message bus.
 *
 * Publish:   messageBus.dispatchEvent(new CustomEvent(topic, { detail: data }))
 * Subscribe: messageBus.addEventListener(topic, handler)
 * Unsubscribe: messageBus.removeEventListener(topic, handler)
 */
const messageBus = new EventTarget();

export default messageBus;
