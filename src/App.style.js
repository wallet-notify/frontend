export default {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: 1000,
    height: 1000,
    borderWidth: '1px',
    borderStyle: 'solid',
  },

  logo: {
    flex: 0.3,
    alignItems: 'center',
    width: '70%',
    borderWidth: '1px',
    borderStyle: 'solid',
  },

  address: {
    flex: 0.1,
    width: '70%',
    borderWidth: '1px',
    borderStyle: 'solid',
  },

  atachments: {
    display: 'flex',
    flexDirection: 'row',
    width: '70%',
    flex: 0.4,
    padding: '0em',
    textAlign: 'left',
  },

  atachments__icon: {
    flex: 0.3,
  },

  button: {
    flex: 0.3,
  },
}
