import { Property } from '@/components/designer/property/Property'

export class RmFormProperty implements Property {
  name = ''
  labelWidth = 80

  constructor ({
    name, labelWidth
  }: {
      name?: string,
    labelWidth?: number
    }) {
    if (name && name !== '') {
      this.name = name
    }
    if (labelWidth && labelWidth > 0) {
      this.labelWidth = labelWidth
    }
  }

  setName (val: string) {
    this.name = val
  }

  setLabelWidth (val: number) {
    this.labelWidth = val
  }

  clone (): RmFormProperty {
    return new RmFormProperty(this)
  }
}
