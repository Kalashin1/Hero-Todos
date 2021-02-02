import { useState } from 'react'
import { useEffect } from 'react'
const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState()
  const [isPending, setIsPending] = useState(true)
  useEffect(() => {
    const abortCont = new AbortController()
    fetch(url, {signal: abortCont.signal}).then(res => {
      if(res.ok){
        return res.json()
      }
      else{
        throw Error('error fetching resource '+ res.status)
      }
    }).then( data => {
      setData(data.slice(0, 4))
      setIsPending(false)
    }).catch(err => {
      setError(err.message)
      setIsPending(false)
    })
    return () => {
      abortCont.abort()
    }
  }, [url])
  return { data, error, isPending }
}
 
export default useFetch;