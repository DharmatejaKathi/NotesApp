// Write your code here
import {useState} from 'react'
import {v4 as uuid} from 'uuid'

import {
  Container,
  Heading,
  Input,
  InnerContainer,
  TextArea,
  Button,
  UnOrderedList,
  EmptyImg,
  EmptyHead,
  EmptyPara,
  EmptyContainer,
} from './styledComponents'

import NoteItem from '../NoteItem'

const Notes = () => {
  const [title, setTitle] = useState('')
  const onChangeTitle = event => setTitle(event.target.value)

  const [note, setNote] = useState('')
  const onChangeNote = event => setNote(event.target.value)

  const [noteList, setNoteList] = useState([])

  const onAddNote = event => {
    event.preventDefault()
    const newNote = {
      id: uuid(),
      title,
      note,
    }
    if (title !== '' && note !== '') {
      setNoteList(prevState => [...prevState, newNote])
    }
    setTitle('')
    setNote('')
  }

  return (
    <Container>
      <Heading>Notes</Heading>
      <InnerContainer onSubmit={onAddNote}>
        <Input placeholder="Title" value={title} onChange={onChangeTitle} />
        <TextArea
          placeholder="Take a note..."
          value={note}
          onChange={onChangeNote}
        />
        <Button type="submit">Add</Button>
      </InnerContainer>
      {noteList.length === 0 ? (
        <EmptyContainer>
          <EmptyImg
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <EmptyHead>No Notes Yet</EmptyHead>
          <EmptyPara>Notes you add will appear here</EmptyPara>
        </EmptyContainer>
      ) : (
        <UnOrderedList>
          {noteList.map(each => (
            <NoteItem itemDetails={each} key={each.id} />
          ))}
        </UnOrderedList>
      )}
    </Container>
  )
}

export default Notes
