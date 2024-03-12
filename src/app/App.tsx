import { CardList } from '@entities/card/card'
import { Breadcrumbs } from '@shared/ui/breadcrumbs'
import { Menu } from '@widgets/menu'
import { Layout } from '../layout/index'

export const App = () => {
  return (
    <Layout>
      <Menu />
      <Breadcrumbs />
      <CardList />
    </Layout>
  )
}
