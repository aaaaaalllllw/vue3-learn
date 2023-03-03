import { App } from 'vue'
import registerElement from './register-element'
export function registerGlobal(app: App): void {
  registerElement(app)
}
