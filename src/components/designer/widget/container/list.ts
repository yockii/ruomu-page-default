import { Container } from './Container'
import { GridProperty } from '@/components/designer/property/settings/container/grid/GridProperty'
import { Grid } from './grid/Grid'

export const containers: Container[] = [
  new Container({
    type: 'form',
    group: 'container',
    icon: 'form',
    displayName: '表单'
  }),
  new Grid({ }),
  new Container({
    group: 'container',
    type: 'tab',
    icon: 'tabs',
    displayName: '标签页'
  })
]

export default containers
