import { useState } from 'react'

const AddTask = (onAdd) => {

    const [text, SetText] = useState('')
    const [day, SetDay] = useState('')
    const [reminder, SetReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            alert('Add Text')
            return
        }

        onAdd({text, day, reminder})

        SetText('')
        SetDay('')
        SetReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task'
                    value={text} onChange={(e) => SetText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Day and Time</label>
                <input type='text' placeholder='Add Day and Time'
                    value={day} onChange={(e) => SetDay(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Reminder</label>
                <input type='checkbox'
                checked={ reminder}
                    value={reminder} onChange={(e) => SetReminder(e.currentTarget.checked)} />
            </div>

            <input className='btn btn-block' type='submit' value='Save Task'></input>
        </form>
    )
}

export default AddTask
