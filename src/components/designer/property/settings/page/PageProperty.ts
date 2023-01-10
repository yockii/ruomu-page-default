import { Property } from '@/components/designer/property/Property'

export class PageProperty implements Property {
  pageType = 'pc'

  constructor ({ pageType }: { pageType?: string }) {
    if (pageType && pageType !== '') {
      this.pageType = pageType
    }
  }

  setPageType (val: string) {
    this.pageType = val
  }
}
