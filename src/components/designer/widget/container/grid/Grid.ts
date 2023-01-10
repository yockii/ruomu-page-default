import { GridProperty } from '@/components/designer/property/settings/container/grid/GridProperty'
import { Widget } from '../../Widget'
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
  }
}
