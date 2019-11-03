import React from 'react'
import Layout from 'components/layout/Layout'
import Content from 'components/layout/content/Content'
import Content403 from './Content403'

const Page403: React.FC = () => {
  return (
    <Layout
      content={<Content><Content403 /></Content>}
    />
  )
}

export default Page403
