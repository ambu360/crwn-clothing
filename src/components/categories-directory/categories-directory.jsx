import './categories-directory.styles.scss'
import CategoryItem from '../category-item/category-item.jsx';


const CategoriesDirectory = ({ categories }) => {

    return (
        <div className='directory-container'>
            {categories.map(category => {
                return (<CategoryItem
                    key={category.id}
                    category={category}
                />
                )
            })}
        </div>

    );
}

export default CategoriesDirectory