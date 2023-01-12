import { GridProperty } from '@/components/designer/property/settings/container/grid/GridProperty'
import { generateId } from '@/utils/util'
import { start } from 'nprogress'
import { Widget } from '../../Widget'
import { RmCol } from '../col/RmCol'
import { Container } from '../Container'

export class Grid extends Container {
  constructor (
    {
      type = 'grid',
      group = 'container',
      icon = 'grid',
      displayName = '栅格',
      children = [],
      options = new GridProperty({}),
      selected = false,
      id = '',
      parent = null
    }: {
        type?: string,
        group?: string,
        icon?: string,
        displayName?: string,
        children?: Widget[],
        options?: GridProperty,
        selected?: boolean,
        id?: string,
        parent?: Widget | null
    }
  ) {
    super({ type, group, icon, displayName, selected, id, parent, options, children })
    if (this.children.length === 0) {
      this.addCol()
      this.addCol()
    }
  }

  removeChildren (startIdx: number = 0, size: number = 1) {
    super.removeChildren(startIdx, size)
    if (this.options.equalCols && this.children.length > 0) {
      const span = 24 / this.children.length
      this.changeAllChildrenOptions({ span })
    }
  }

  addCol () {
    this.addChild(new RmCol({
      id: 'rmCol' + generateId()
    }))
    if (this.options.equalCols) {
      this.changeAllChildrenOptions({
        span: 24 / this.children.length
      })
    }
  }
}
