import * as React from 'react'

import logo from 'design/logo.png'
import { ReactComponent as PlusLarge } from 'design/plus-large.svg'
import { ReactComponent as PlusSmall } from 'design/plus-small.svg'
import styles from 'components/WalletNotify.style.js'

export default function WalletNotify({ sendNotification }) {
  const [addressInput, setAddressInput] = React.useState('')
  const [notificationInput, setNotificationInput] = React.useState('')
  const [messageInput, setMessageInput] = React.useState('')
  const [urlInput, setUrlInput] = React.useState('')

  return (
    <div style={styles.container}>
      <div style={styles.logo}>
        <img style={styles.logo_image} src={logo} alt='Wallet Notify' />
      </div>

      <Separator unit={12} />

      <FieldLabel>
        <FieldLabelText>Address</FieldLabelText>
        <FieldLabelSubText>One address per line</FieldLabelSubText>
      </FieldLabel>
      <Separator unit={2} />
      <FieldInput
        placeholder='Enter addresses to send a notification'
        value={addressInput}
        onChange={event => setAddressInput(event.target.value)}
      />

      <Separator unit={10} />

      <FieldLabel>
        <FieldLabelText>Attachments</FieldLabelText>
        <FieldLabelSubText>Optional</FieldLabelSubText>
      </FieldLabel>
      <Separator unit={2} />
      <AttachmentFieldBox>
        <AttachmentImageInput />
        <AttachmentTextInput
          value={messageInput}
          onChange={event => setMessageInput(event.target.value)}
        />
        <AttachmentActionInput />
      </AttachmentFieldBox>

      {/*<div style={styles.button}>
        <button type='button' onClick={sendNotification}>
          Submit
        </button>
      </div>*/}
    </div>
  )
}

function FieldLabel({ children }) {
  return <div style={styles.fieldLabel}>{children}</div>
}

function FieldLabelText({ children }) {
  return <div style={styles.fieldLabel_text}>{children}</div>
}

function FieldLabelSubText({ children }) {
  return <div style={styles.fieldLabel_subText}>{children}</div>
}

function FieldInput({ placeholder, value, onChange }) {
  return (
    <Textarea
      placeholder={placeholder}
      style={styles.fieldInput}
      value={value}
      onChange={onChange}
    />
  )
}

function AttachmentFieldBox({ children }) {
  return <div style={styles.attachmentFieldBox}>{children}</div>
}

function AttachmentImageInput() {
  const onClick = () => {
    prompt('hello')
  }
  return (
    <button style={styles.attachmentImageInput} onClick={onClick}>
      <PlusLarge />
      <div style={styles.attachmentImageInput_text}>icon</div>
    </button>
  )
}

function AttachmentTextInput({ messageInput, onChange }) {
  return (
    <div style={styles.attachmentTextInput}>
      <Textarea
        style={styles.attachmentTextInput_input}
        placeholder='Add a message…'
        value={messageInput}
        onChange={onChange}
      />
    </div>
  )
}

function AttachmentActionInput() {
  const onClick = () => {
    prompt('hello')
  }
  return (
    <button style={styles.attachmentActionInput} onClick={onClick}>
      <PlusSmall />
      <Separator unit={1} />
      <div style={styles.attachmentActionInput_text}>URL Action</div>
    </button>
  )
}

function Separator({ unit }) {
  return <div style={{ width: unit * 4, height: unit * 4 }} />
}

function Textarea({ style, ...props }) {
  return (
    <textarea {...props} style={{ ...styles.textarea, ...style }} rows='1' />
  )
}
