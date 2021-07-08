import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1 style={{ color: 'black' }}>{title}</h1>
            <Button color='Black' text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
        </header>
    )
}
// add static data for button 
export default Header
