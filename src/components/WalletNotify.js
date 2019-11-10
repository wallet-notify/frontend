import * as React from 'react'
import TextareaAutosize from 'react-autosize-textarea'

import { ReactComponent as Logo } from 'design/logo.svg'
import { ReactComponent as PlusLarge } from 'design/plus-large.svg'
import { ReactComponent as PlusSmall } from 'design/plus-small.svg'
import styles from 'components/WalletNotify.style.js'

export default function WalletNotify({ sendNotification }) {
  const [addressInput, setAddressInput] = React.useState('')
  const [imageInput, setImageInput] = React.useState('')
  const [messageInput, setMessageInput] = React.useState('')
  const [actionInput, setActionInput] = React.useState('')

  const onClickSubmit = () =>
    sendNotification({
      addressInput,
      imageInput,
      messageInput,
      actionInput,
    })

  return (
    <div style={styles.container}>
      <div style={styles.linksBar}>
        <a style={styles.linksBar_link} href='https://github.com/wallet-notify'>
          GitHub
        </a>
        <a style={styles.linksBar_link} href='https://t.me/walletnotify'>
          Telegram
        </a>
        <a
          style={styles.linksBar_link}
          href='https://github.com/ethereum/EIPs/issues'
        >
          ERC 2365
        </a>
      </div>

      <Separator unit={10} />

      <div style={styles.logo}>
        <Logo />
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
        <AttachmentImageInput
          value={imageInput}
          setValue={imageUrl => setImageInput(imageUrl)}
        />
        <AttachmentTextInput
          value={messageInput}
          onChange={event => setMessageInput(event.target.value)}
        />
        <AttachmentActionInput
          value={actionInput}
          setValue={actionUrl => setActionInput(actionUrl)}
        />
      </AttachmentFieldBox>

      <Separator unit={10} />

      <SubmitButton onClick={onClickSubmit} />
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

function AttachmentImageInput({ value, setValue }) {
  const onClick = () => {
    const imageUrl = prompt('hello')
    setValue(imageUrl)
  }
  return (
    <button
      style={{
        ...styles.attachmentImageInput,
        backgroundImage: value ? `url(${value})` : undefined,
      }}
      onClick={onClick}
    >
      {value ? (
        undefined
      ) : (
        <React.Fragment>
          <PlusLarge />
          <div style={styles.attachmentImageInput_text}>icon</div>
        </React.Fragment>
      )}
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

function AttachmentActionInput({ value, setValue }) {
  const onClick = () => {
    const actionUrl = prompt('hello')
    setValue(actionUrl)
  }
  return (
    <button style={styles.attachmentActionInput} onClick={onClick}>
      {value ? (
        <div
          style={styles.attachmentActionInput_text}
          title={`Linked to: ${value}`}
        >
          Linked
        </div>
      ) : (
        <React.Fragment>
          <PlusSmall />
          <Separator unit={1} />
          <div style={styles.attachmentActionInput_text}>URL Action</div>
        </React.Fragment>
      )}
    </button>
  )
}

function Separator({ unit }) {
  return <div style={{ width: unit * 4, height: unit * 4 }} />
}

function Textarea({ style, ...props }) {
  return (
    <TextareaAutosize
      {...props}
      style={{ ...styles.textarea, ...style }}
      rows='1'
    />
  )
}

function SubmitButton({ onClick }) {
  return (
    <button style={styles.submitButton} type='button' onClick={onClick}>
      Submit
    </button>
  )
}
