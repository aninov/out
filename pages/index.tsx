import Head from 'next/head'
import { useEffect, useState } from 'react'
import { List } from '../components/list'
import { Search } from '../components/search'
import { callAPI } from '../utils/api/api'
import { mappingData } from '../utils/data/mapping'

export default function Home() {
  const [data, setData] = useState([])
  const onSubmit = (e) => {
    e.preventDefault()
    callAPI(e.target.search.value).then(response => {
      const data = mappingData(response)
      setData(data)
    }).catch(error => console.log(error))
  }
  return (
    <div className="container">
      <main>
        <Search onSubmit={onSubmit}/>
        <List items={data} />
        
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
