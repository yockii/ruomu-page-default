import { Property } from '@/components/designer/property/Property'

export class RmColProperty implements Property {
  name = ''
  span = 24
  offset = 0
  push = 0
  pull = 0

  constructor ({
    name, span, offset, push, pull
  }: {
    name?: string,
    span?: number,
    offset?: number,
    push?: number,
    pull?:number
    }) {
    if (name && name !== '') {
      this.name = name
    }
    if (span && span > 0 && span <= 24) {
      this.span = span
    }
    if (offset && offset > 0 && offset <= 24) {
      this.offset = offset
    }
    if (push && push > 0 && push <= 24) {
      this.push = push
    }
    if (pull && pull > 0 && pull <= 24) {
      this.pull = pull
    }
  }

  clone (): RmColProperty {
    return new RmColProperty(this)
  }

  setName (val: string) {
    this.name = val
  }

  setSpan (val:number) {
    this.span = val
  }

  setOffset (val:number) {
    this.offset = val
  }

  setPush (val:number) {
    this.push = val
  }

  setPull (val:number) {
    this.pull = val
  }
}
