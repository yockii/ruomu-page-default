import { Property } from '@/components/designer/property/Property'

export class RmFormItemProperty implements Property {
  name = ''
  label = ''
  constructor ({
    name, label
  }: {
      name?: string,
    label?:string
    }) {
    if (name && name !== '') {
      this.name = name
    }
    if (label && label !== '') {
      this.label = label
    }
  }

  setName (val: string) {
    this.name = val
  }

  setLabel (val: string) {
    this.label = val
  }

  clone (): RmFormItemProperty {
    return new RmFormItemProperty(this)
  }
}
