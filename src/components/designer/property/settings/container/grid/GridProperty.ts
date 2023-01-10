import { Property } from '@/components/designer/property/Property'

export class GridProperty implements Property {
  gutter = 0
  justify = 'start'
  align = 'top'
  name = ''

  constructor ({
    gutter, justify, align, name
  }: {
    gutter?: number,
    justify?: string,
    align?: string,
    name?:string
    }) {
    if (gutter && gutter >= 0) {
      this.gutter = gutter
    }
    if (justify && justify !== '') {
      this.justify = justify
    }
    if (align && align !== '') {
      this.align = align
    }
    if (name && name !== '') {
      this.name = name
    }
  }

  clone (): GridProperty {
    return new GridProperty(this)
  }

  setGutter (val: number) {
    this.gutter = val
  }

  setJustify (val: string) {
    this.justify = val
  }

  setAlign (val: string) {
    this.align = val
  }

  setName (val: string) {
    this.name = val
  }
}
