'use client'

import { useState, useEffect } from 'react'
import { Collection } from "@medusajs/medusa"
import { Button } from '@medusajs/ui/dist/cjs/components/button'

export default function CollectionSelector() {
  const [collections, setCollections] = useState<Collection[]>([])
  const [selectedCollections, setSelectedCollections] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/featured-collections')
      .then(res => res.json())
      .then(setCollections)
      .catch(err => setError(err.message))
  }, [])

  const toggleCollection = (id: string) => {
    setSelectedCollections(prev =>
      prev.includes(id) ? prev.filter(cid => cid !== id) : [...prev, id]
    )
  }

  const saveSelection = async () => {
    try {
      const response = await fetch('/api/featured-collections', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedCollections),
      })
      if (response.ok) {
        console.log('Selection saved')
      }
    } catch (error) {
      console.error('Error saving selection:', error)
    }
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (collections.length === 0) {
    return <div>Loading collections...</div>
  }

  return (
    <div>
      <h2>Select Featured Collections</h2>
      {collections.map((collection) => (
        <label key={collection.id} style={{display: 'block', margin: '10px 0'}}>
          <input
            type="checkbox"
            checked={selectedCollections.includes(collection.id)}
            onChange={() => toggleCollection(collection.id)}
          />
          {collection.title}
        </label>
      ))}
      <Button variant="primary" onClick={saveSelection}>Save Selection</Button>
    </div>
  )
}