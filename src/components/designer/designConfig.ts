import eventBus from '@/utils/eventBus'
import { PageProperty } from './property/settings/page/PageProperty'
import { Widget } from './widget/Widget'

export class DesignConfig {
  items: Widget[] = []
  selected: Widget | null = null
  // 页面配置，配置项： pageType[pc/h5]
  options: PageProperty = new PageProperty({})
  history = {
    index: -1,
    maxStep: 20,
    steps: []
  }

  selectWidget (widget?: Widget) {
    this.unselectAllWidget()
    if (widget) {
      widget.selected = true
      this.selected = widget
    } else {
      this.selected = null
    }
  }

  unselectAllWidget (widget?: Widget) {
    if (widget) {
      widget.unselect()
    } else {
      this.items.forEach(w => {
        w.unselect()
      })
    }
  }

  addWidget (widget: Widget, index: number = -1) {
    console.log(widget instanceof Widget)

    const w = widget.clone() // widget.copy()

    if (index > -1) {
      this.items.splice(index, 0, w)
    } else {
      this.items.push(w)
    }
  }

  loadFromJson (json:DesignConfig) {
    if (json) {
      if (json.items) {
        this.items = json.items
      }
      if (json.options) {
        this.options = new PageProperty(json.options)
      }
      this.emit('json-imported')
    }
  }

  emit (event: string, data?: any) {
    eventBus.emit(event, data)
  }
}
