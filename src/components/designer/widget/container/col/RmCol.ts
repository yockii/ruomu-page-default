import { RmColProperty } from '@/components/designer/property/settings/container/col/RmColProperty'
import { generateId } from '@/utils/util'
import { Widget } from '../../Widget'
import { Container } from '../Container'

export class RmCol extends Container {
  options: RmColProperty
  accept: string[] = [
    'rmCol', // 拖拽排序需要
    'grid',
    'form',
    'tab'
  ]

  constructor (
    {
      type = 'rmCol',
      group = 'container',
      icon = '',
      displayName = '',
      children = [],
      options = new RmColProperty({}),
      selected = false,
      id = '',
      parent = null
    }: {
        type?: string,
        group?: string,
        icon?: string,
        displayName?: string,
        children?: Widget[],
        options?: RmColProperty,
        selected?: boolean,
        id?: string,
        parent?: Widget | null
    }
  ) {
    super({ type, group, icon, displayName, selected, id, parent, children })
    this.options = options
  }

  clone (): RmCol {
    const cloned = new RmCol(this)
    cloned.id = this.type + generateId()
    cloned.options.name = cloned.id
    cloned.children = []
    this.children.forEach(c => {
      const clonedChild = c.clone()
      clonedChild.parent = cloned
      cloned.children.push(clonedChild)
    })
    return cloned
  }
}
