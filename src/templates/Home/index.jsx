import * as Styled from './styles'
import { Base } from '../Base'
import { mockBase } from '../Base/mock'
import { useEffect, useState } from 'react';
import mockData from '../../api/dados.json'
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';


function Home() {

  const [data, setData] = useState([])

  useEffect(() => {
    const load = async () => {
      const pageData = mockData[0]

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

  console.log(data)

  return (
    <Base {...mockBase} />
  );
}

export default Home
