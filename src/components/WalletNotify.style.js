const fieldBoxStyles = {
  borderRadius: 8,
  borderStyle: 'solid',
  borderWidth: 1,
  borderColor: '#E6E6E6',

  paddingLeft: 16,
  paddingRight: 16,
}

const attachmentButtonStyles = {
  border: 0,
  background: '#F2F2F2',
}

export default {
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',

    padding: 80,
    maxWidth: 540,
  },

  logo: {
    display: 'flex',
    justifyContent: 'center',

    marginBottom: 48,
  },
  logo_image: {
    height: 80,
  },

  fieldLabel: {
    display: 'flex',
    alignItems: 'baseline',

    paddingLeft: 12,
    paddingRight: 12,
  },
  fieldLabel_text: {
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: -1,

    marginRight: 8,
  },
  fieldLabel_subText: {
    fontStyle: 'italic',
    fontSize: 14,
    fontWeight: '200',
    color: '#999',
  },

  fieldInput: {
    ...fieldBoxStyles,
    paddingTop: 14,
    paddingBottom: 14,

    width: '100%',
    height: 48,

    fontSize: 16,
  },

  textarea: {
    resize: 'none',
  },

  attachmentFieldBox: {
    ...fieldBoxStyles,

    marginLeft: -40,
    marginRight: -40,

    paddingTop: 12,
    paddingBottom: 12,

    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto',
    gridGap: 12,
  },

  attachmentImageInput: {
    width: 64,
    height: 64,
    borderRadius: 64 / 2,
    ...attachmentButtonStyles,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  attachmentImageInput_text: {
    fontSize: 10,
    fontWeight: '600',
    color: '#8212F2',

    marginTop: 2,
    marginBottom: -4,
  },

  attachmentTextInput: {},
  attachmentTextInput_input: {
    fontSize: 18,
    padding: 12,
    border: 0,
    width: '100%',
    marginTop: 8,
  },

  attachmentActionInput: {
    ...attachmentButtonStyles,
    borderRadius: 8,
    padding: 12,

    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
  },
  attachmentActionInput_text: {
    fontSize: 13,
    fontWeight: '700',
    color: '#8212F2',
  },
}
