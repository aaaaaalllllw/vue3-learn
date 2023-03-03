import { App } from 'vue'
import {
  ElButton,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink
} from 'element-plus'
import 'element-plus/dist/index.css'
export default function (app: App): void {
  const components = [
    ElButton,
    ElTabs,
    ElTabPane,
    ElForm,
    ElFormItem,
    ElInput,
    ElCheckbox,
    ElLink
  ]
  for (const component of components) {
    app.component(component.name, component)
  }
}
