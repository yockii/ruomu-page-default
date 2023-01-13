import { RmFormProperty } from '@/components/designer/property/settings/container/form/RmFormProperty'
import { generateId } from '@/utils/util'
import { RmFormItem } from '@/components/designer/widget/form/RmFormItem'
import { Widget } from '../../Widget'
import { Container } from '../Container'

export class RmForm extends Container {
  options: RmFormProperty = new RmFormProperty({})
  accept: string[] = []
  children: RmFormItem[] = []

  constructor (
    {
      type = 'rmForm',
      group = 'container',
      icon = 'form',
      displayName = '表单',
      children = [],
      options = new RmFormProperty({}),
      selected = false,
      id = '',
      parent = null
    }: {
      type?: string,
      group?: string,
      icon?: string,
      displayName?: string,
      children?: RmFormItem[],
      options?: RmFormProperty,
      selected?: boolean,
      id?: string,
      parent?: Widget | null
    }
  ) {
    super({ type, group, icon, displayName, selected, id, parent })
    this.options = options
    this.children = children
  }

  clone (): RmForm {
    const cloned = new RmForm(this)
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
