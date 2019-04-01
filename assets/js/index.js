const app = document.getElementById("app");

function Box({className, style, ...rest}) {
  return <div className={`box ${className}`} style={{padding: 20, ...style}} {...rest}/>
}

const boxElement = (
  <div>
    <Box className='box-small' style={{ backgroundColor: 'lightblue' }}>Small Box</Box>
    <Box className='box-medium' style={{ backgroundColor: 'orange' }}>Medium Box</Box>
    <Box className='box-large' style={{backgroundColor: 'pink'}}>Large Box</Box>
  </div>
);

ReactDOM.render(boxElement, app);