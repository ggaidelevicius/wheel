'use client'

import { Card, ScrollArea, Text, Button, TextInput } from '@mantine/core'
import { IconWeight } from '@tabler/icons-react'
import type { Place } from '../Selector'
import styles from './styles.module.css'
import { getWeightedRandomSelection } from '@/lib/helpers/selector'
import { useEffect, useRef, useState } from 'react'

export const List = ({ wheel }: { wheel: Place[] }) => {
  const [entries, setEntries] = useState(wheel)
  const [editingTitle, setEditingTitle] = useState<undefined | string>()
  const [editingWeighting, setEditingWeighting] = useState<undefined | string>()

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (editingTitle && inputRef.current) {
      inputRef.current.focus()
    }
  }, [editingTitle])

  useEffect(() => {
    if (editingWeighting && inputRef.current) {
      inputRef.current.focus()
    }
  }, [editingWeighting])

  const handleClick = () => {
    const result = getWeightedRandomSelection(wheel)
    console.log(result)
  }

  const handleChange = (entry: Place, k: string, v: string) => {
    const updatedEntry = {
      ...entry,
      [k]: v,
    }

    setEntries((prev) => {
      return prev.map((e) => (e.id === entry.id ? updatedEntry : e))
    })
  }

  return (
    <div className={styles.container}>
      <Card
        className={styles.root}
        shadow="xs"
        style={{ zIndex: '1', padding: '1.5rem 2rem' }}
      >
        <Text fw={700}>Entry</Text>
        <IconWeight stroke={2.5} size={20} />
      </Card>
      <ScrollArea h={300}>
        {entries
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((entry) => (
            <Card key={entry.id} className={styles.root}>
              {editingTitle === entry.id && (
                <TextInput
                  value={entry.title}
                  ref={inputRef}
                  onKeyUp={(e) =>
                    e.key === 'Enter' ? setEditingTitle(undefined) : undefined
                  }
                  onChange={(e) => handleChange(entry, 'title', e.target.value)}
                  style={{ width: '100%' }}
                />
              )}
              {editingTitle !== entry.id && (
                <Text
                  className={styles.text}
                  onClick={() => setEditingTitle(entry.id)}
                >
                  {entry.title}
                </Text>
              )}
              <div className={styles.weight}>
                {editingWeighting === entry.id &&
                  <TextInput
                    value={entry.weighting}
                    ref={inputRef}
                    onKeyUp={(e) =>
                      e.key === 'Enter' ? setEditingWeighting(undefined) : undefined
                    }
                    type='number'
                    onChange={(e) => handleChange(entry, 'weighting', e.target.value)}
                  />
                }
                {editingWeighting !== entry.id && (
                  <Text
                    className={styles.text}
                    onClick={() => setEditingWeighting(entry.id)}
                  >
                    {entry.weighting.toLocaleString()}
                  </Text>
                )}
              </div>
            </Card>
          ))}
      </ScrollArea>
      <Button onClick={handleClick}>roll</Button>
    </div>
  )
}
