const styles = {
  mainApp: {
    border: '5px red solid',
    height: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    margin: '.5em',
    padding: '.5em',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  left: {
    width: '40%',
    overFlow: 'auto',
    padding: '.5em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  right: {
    width: '60%',
    overFlow: 'auto',
    padding: '.5em'
  },
  musicPlayerContainer: {
    width: '100%',
    paddingTop: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  musicPlayer: {
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    borderRadius: '25px',
  },
  imageContainer: {
    width: '50%',
    height: '50%',
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '25px',
  },
  playlist: {
    border: '5px yellow solid',
    height: 'auto',
  },
};

export {
  styles
};
