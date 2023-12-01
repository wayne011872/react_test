import Item from './Item.jsx'

const List = ({ listData }) => {
    return <div className="list">
    {
        listData.map((item) => (
            <Item/>
        ))
    }
    </div>
}

export default List