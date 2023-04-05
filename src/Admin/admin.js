import Table from 'react-bootstrap/Table';
import { useHistory } from 'react-router-dom';
import { AppState } from '../Book/provider';
import Sidebar from '../sidebar/sidebar';

function DarkExample() {
  return (
    <Sidebar>
      <ListTable
        heading="List Of Book"
        sty="bg-info text-white"
      />
      <Isstable
        heading="List of Issued Book"
        sty="bg-warning text-dark"
      />
    </Sidebar>
  );
}

export default DarkExample;

function ListTable({ heading, sty }) {
  const { book, setBook } = AppState();
  const history = useHistory();
  const BookDelete = async (idx) => {
    try {
      const response = await fetch(`https://642c3e4b208dfe25472bac85.mockapi.io/library/libraryapp/${idx}`, {
        method: "Delete"
      })
      const data = await response.json();
      console.log(data);
      const BookAlterList = book.filter((bk) => bk.id !== idx);
      setBook(BookAlterList)

    } catch (error) {
      console.log(error)
    }


  }

  return (
    <div>
      <h1 className={sty}>{heading}</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>BOOK ID</th>
            <th>BOOK NAME</th>
            <th>BOOK AUTHOR</th>
            <th>BUTTON</th>
            <th>BOOK ENTERY</th>
          </tr>
        </thead>
        {book.map((books, index) => (
          <tbody>
            <tr key={index}>
              <td>{books.id}</td>
              <td>{books.name}</td>
              <td>{books.Author}</td>
              <td><div className='btn-group'>
                <button
                  className='button button-edit'
                  onClick={() => history.push(`/edit/book/${books.id}`)}
                >Edit
                </button>
                <button
                  className='button button-delete'
                  onClick={() => BookDelete(books.id)}
                >Delete
                </button>
              </div></td>
              <td>
                <button
                  className='button button-edit'
                  onClick={() => history.push(`/issued/book/${books.id}`)}
                >Add Card
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  )
}


export function Isstable({ heading, sty }) {
  const { issuedbook, setIssuedbook } = AppState();
  const BookDelete = async (idx) => {
    try {
      const response = await fetch(`https://642c3e4b208dfe25472bac85.mockapi.io/library/issuedbook/${idx}`, {
        method: "Delete"
      })
      const data = await response.json();
      console.log(data);
      const BookAlterList = issuedbook.filter((bk) => bk.id !== idx);
      setIssuedbook(BookAlterList)

    } catch (error) {
      console.log(error)
    }


  }

  return (
    <div>
      <h1 className={sty}>{heading}</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>BOOK NAME</th>
            <th>BOOK AUTHOR</th>
            <th>PERSON NAME</th>
            <th>PERSON EMAIL</th>
            <th>BUTTON</th>
          </tr>
        </thead>
        {issuedbook.map((issuedbooks, index) => (
          <tbody>
            <tr key={index}>
              <td>{issuedbooks.id}</td>
              <td>{issuedbooks.name}</td>
              <td>{issuedbooks.Author}</td>
              <td>{issuedbooks.parsonName}</td>
              <td>{issuedbooks.personEmail}</td>
              <td><div className='btn-group'>
                <button
                  className='button button-delete'
                  onClick={() => BookDelete(issuedbooks.id)}
                >Remove Card
                </button>
              </div></td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  )

}