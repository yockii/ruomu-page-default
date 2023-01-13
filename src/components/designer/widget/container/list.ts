import { Container } from './Container'
import { GridProperty } from '@/components/designer/property/settings/container/grid/GridProperty'
import { Grid } from './grid/Grid'
import { RmForm } from './form/RmForm'

export const containers: Container[] = [
  new RmForm({ }),
  new Grid({ }),
  new Container({
    group: 'container',
    type: 'tab',
    icon: 'tabs',
    displayName: '标签页'
  })
]

export default containers
