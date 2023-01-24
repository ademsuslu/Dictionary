import SearchItem from './SearchItem'
import { CiSearch } from 'react-icons/ci'
import { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce'
import { generatedData } from '@/pages/[slug]'
import toast from 'react-hot-toast'

import {  NoResultMessage } from '@/Data/constants'


const searchByName = (obj, searchTerm) => {
  // Use Object.values to get an array of the values in the object
  const values = Object.values(obj)

  // Use Array.flat to flatten the array of values into a single array
  const flatValues = values.flat()

  // Use Array.filter to return an array of objects that have a name property that includes the search term
  const results = flatValues.filter((item) => {
    const regex = new RegExp(searchTerm, 'i')
    const match =
      `${item.name} ${item.wordVersion}`.match(regex) || item.md5 === searchTerm
    return match
  })

  if (results?.length === 0) {
    toast.error(NoResultMessage)
  }

  return results
}

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500)
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    if (debouncedSearchTerm === '') return setFilteredData([])
    setFilteredData(searchByName(generatedData, debouncedSearchTerm))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm])

  return (
    <>
      <main>
        <div className='Search'>
          <div className='SearchWrapper'>
            <CiSearch className='SearchIcon' />
            <input
              className='SearchInput'
              type='text'
              placeholder='Search'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </main>
      <div className='SearchItems'>
        {filteredData?.map((item) => {
          return <SearchItem item={item} key={item.slug} />
        })}
      </div>
    </>
  )
}

export default Search
