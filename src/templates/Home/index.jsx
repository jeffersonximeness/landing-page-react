import * as Styled from './styles'
import { Base } from '../Base'
import { mockBase } from '../Base/mock'
import { useEffect, useState } from 'react'
import mockData from '../../api/dados.json'
import { PageNotFound } from '../PageNotFound'
import { Loading } from '../Loading'
import { mapData } from '../../api/map-data'
import { GridTwoColum } from '../../components/GridTwoColumn'
import { GridContent } from '../../components/GridContent'
import { GridText } from '../../components/GridText'
import { GridImage } from '../../components/GridImage'

function Home() {

  const [data, setData] = useState([])

  useEffect(() => {
    const load = async () => {
      const json = mapData(mockData)
      const pageData = json[0]

      await new Promise((r) => {
        return setTimeout(() => {
          setData(pageData)
          r()
        }, 2000)
      })
    }

    load()
  }, [])

  if (data === undefined) {
    return <PageNotFound />
  }

  if (data && !data.slug) {
    return <Loading />
  }

  const { menu, sections, footerHtml } = data
  const { links, text, link, srcImg } = menu

  console.log(text)
  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      {sections.map((section, index) => {
        const { component }  = section

        const key = `${index}`

        if (Object.values(section)[0] === 'section.section-two-columns') {
          return (
            <GridTwoColum key={index} {...section} />
          )
        }

        if (Object.values(section)[0] === 'section.section-content') {
          return (
            <GridContent key={index} {...section} />
          )
        }

        if (Object.values(section)[0] === 'section.section-grid-text') {
          return (
            <GridText key={index} {...section} />
          )
        }

        if (Object.values(section)[0] === 'section.section-grid-image') {
          return (
            <GridImage key={index} {...section} />
          )
        }
      })}
    </Base>
  );
}

export default Home
