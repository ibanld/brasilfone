
const style = {
    backgroundColor: '#263859', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    width: '100vw',
    height: '100vh'
}

export default function Layout({ children }) {
    return (
        <div style={style} >
            { children }
        </div>
    )
}
