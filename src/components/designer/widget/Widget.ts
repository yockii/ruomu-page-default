import { deepClone, generateId } from '@/utils/util'
import { Property } from '../property/Property'
import { Container } from './container/Container'

export class Widget {
  type:string
  group:string
  icon:string
  displayName:string
  options: Property
  parent?: Widget | null

  selected = false
  id: string

  constructor (
    {
      type = '',
      group = '',
      icon = '',
      displayName = '',
      options = { clone () { return this } },
      selected = false,
      id = '',
      parent = null
    }: {
        type: string,
        group: string,
        icon?: string,
        displayName?: string,
        options?: Property,
        selected?: boolean,
        id?: string,
        parent?: Widget | null
    }
  ) {
    this.id = id
    this.type = type
    this.group = group
    this.icon = icon
    this.displayName = displayName

    this.options = options.clone()

    if (!this.options.name || this.options.name === '') {
      this.options.name = this.id || ''
    }

    this.parent = parent
    this.selected = selected
  }

  copy () {
    const nc = deepClone(this)
    nc.id = nc.type + generateId()
    nc.options.name = nc.id

    return nc
  }

  unselect () {
    this.selected = false
  }

  clone (): Widget {
    const cloned = new Widget(this)
    cloned.id = this.type + generateId()
    cloned.options.name = cloned.id
    return cloned
  }
}
