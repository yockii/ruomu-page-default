import eventBus from '@/utils/eventBus'
import { PageProperty } from './property/settings/page/PageProperty'
import { Container } from './widget/container/Container'
import { Grid } from './widget/container/grid/Grid'
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

  widgetMap:Map<string, Widget> = new Map()

  findWidgetById (id: string): Widget | null {
    const r = this.widgetMap.get(id)
    if (r) {
      return r
    }
    const r0 = this.findWidgetByIdFromItems(id)
    if (r0) {
      this.widgetMap.set(id, r0)
    }
    return r0
  }

  findWidgetByIdFromItems (id: string, items: Widget[] = this.items): Widget | null {
    for (let i = 0; i < items.length; i++) {
      const w = this.items[i]
      if (w.id === id) {
        return w
      }
      const r = this.findWidgetByIdInWidget(id, w)
      if (r) {
        return r
      }
    }
    return null
  }

  findWidgetByIdInWidget (id: string, widget: Widget): Widget|null {
    if (widget instanceof Container) {
      const c = widget as Container
      return this.findWidgetByIdFromItems(id, c.children)
    }
    return null
  }

  addWidget (widget: Widget, index: number = -1) {
    const w = widget.clone() // widget.copy()
    w.parent = null
    if (index > -1) {
      this.items.splice(index, 0, w)
    } else {
      this.items.push(w)
    }
  }

  moveWidget (movedWidget: Widget, targetWidget: Widget, isAfter: boolean = false) {
    if (targetWidget.parent) {
      // 有父节点
      const parent = targetWidget.parent as Container
      const idx = parent.children.findIndex((w) => {
        return w.id === targetWidget.id
      })
      if (idx > -1) {
        this.removeFromParent(movedWidget)
        parent.addChild(movedWidget, idx)
      }
    } else {
      // 没有父节点
      const idx = this.items.findIndex((w) => {
        return w.id === targetWidget.id
      })
      if (idx > -1) {
        this.removeFromParent(movedWidget)
        this.items.splice(idx, 0, movedWidget)
      }
    }
  }

  removeFromParent (widget: Widget) {
    if (widget.parent) {
      const parent = widget.parent as Container
      const idx = parent.children.findIndex(w => {
        return w.id === widget.id
      })
      if (idx > -1) {
        parent.removeChildren(idx, 1)
      }
    } else {
      const idx = this.items.findIndex(w => w.id === widget.id)
      if (idx > -1) {
        this.items.splice(idx, 1)
      }
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
