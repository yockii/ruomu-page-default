import { RmColProperty } from '@/components/designer/property/settings/container/col/RmColProperty'
import { Widget } from '../../Widget'
import { Container } from '../Container'

export class RmCol extends Container {
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
    super({ type, group, icon, displayName, selected, id, parent, children, options })
  }
}
