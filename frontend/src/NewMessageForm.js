import React from 'react'
import './NewMessageForm.css'


class NewMessageForm extends React.Component {
  constructor() {
        super()
        this.state = {
            text: ''
        }
    }
    onChange = (e) => {
        const {value, name} = e.target
        this.setState((prev)=>{
            prev[name]=value
            return prev
        })
    }
    render() {
        const {onClose, onSave} = this.props
        return (
          <div className="new-message-modal">
            <div className="new-message-curtain" onClick={onClose}>
            </div>
            <div className="new-message-form">
                <h3>New message</h3>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Input your message</label>
                    <textarea class="form-control" name="text" id="exampleFormControlTextarea1" rows="3" value={this.state.text} onChange={this.onChange}></textarea>
                  </div>
                <div className="new-message-form__buttons">
                    <button type="button" class="btn btn-secondary" onClick={onClose}>Close</button>
                    <button type="submit" class="btn btn-primary" onClick={()=>{onSave(this.state.text); onClose()}}>Save</button>
                </div>    
            </div>
            
          </div>
        )
    }
}

export default NewMessageForm;