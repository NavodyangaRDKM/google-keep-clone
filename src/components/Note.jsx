import { mdDelete } from 'react-icons/md'

function Note({ title, content, onDelete, id }) {

    return (

        <div className='note'>
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={() => onDelete(id)}> < mdDelete size={25} /></button>
        </div>
    );
}

export default Note;