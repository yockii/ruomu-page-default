import { RmFormItemProperty } from '@/components/designer/property/settings/form/RmFormItemProperty'
import { generateId } from '@/utils/util'
import { Widget } from '../Widget'

export class RmFormItem extends Widget {
  options: RmFormItemProperty = new RmFormItemProperty({})
  constructor (
    {
      type = '',
      group = 'form',
      icon = '',
      displayName = '',
      options = new RmFormItemProperty({}),
      selected = false,
      id = '',
      parent = null
    }: {
      type: string,
      group: string,
      icon: string,
      displayName: string,
      options?: RmFormItemProperty,
      selected?: boolean,
      id?: string,
      parent?: Widget | null
    }
  ) {
    super({ type, group, icon, displayName, selected, id, parent })
    this.options = options
  }

  clone (): RmFormItem {
    const cloned = new RmFormItem(this)
    cloned.id = this.type + generateId()
    cloned.options.name = cloned.id
    return cloned
  }
}
