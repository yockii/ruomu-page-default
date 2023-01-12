import { Widget } from '../Widget'
import { deepClone, generateId } from '@/utils/util'
import { Property } from '../../property/Property'

export class Container extends Widget {
  children: Widget[]

  constructor (
    {
      type = '',
      group = '',
      icon = '',
      displayName = '',
      children = [],
      options = { clone () { return this } },
      selected = false,
      id = '',
      parent = null
    }: {
        type: string,
        group: string,
        icon?: string,
        displayName?: string,
        children?: Widget[],
        options?: Property,
        selected?: boolean,
        id?: string,
        parent?: Widget | null
    }
  ) {
    super({ type, group, icon, displayName, options, selected, id, parent })

    this.children = []
    children.forEach(w => {
      this.children.push(w.clone())
    })
  }

  addChild (child: Widget, index: number = -1) {
    if (index > -1) {
      this.children.splice(index, 0, child)
    } else {
      this.children.push(child)
    }
    child.parent = this
  }

  removeChildren (startIdx: number = 0, size: number = 1) {
    this.children.splice(startIdx, size)
  }

  changeAllChildrenOptions (options: Map<string, any> | Object) {
    this.children.forEach(w => {
      if (options instanceof Map) {
        options.forEach((v: any, k: string) => {
          w.options[k] = v
        })
      } else {
        Object.entries(options).forEach(([k, v]) => {
          w.options[k] = v
        })
      }
    })
  }

  copy () {
    const nc = deepClone(this)
    nc.id = nc.type + generateId()
    nc.options.name = nc.id

    return nc
  }

  unselect () {
    this.selected = false
    this.children.forEach(w => {
      w.unselect()
    })
  }

  clone (): Container {
    const cloned = new Container(this)
    cloned.id = this.type + generateId()
    cloned.options.name = cloned.id
    cloned.children = []
    this.children.forEach(c => {
      cloned.children.push(c.clone())
    })
    return cloned
  }
}
