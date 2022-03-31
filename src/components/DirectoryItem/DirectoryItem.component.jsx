import { Link } from 'react-router-dom';
import './DirectoryItem.styles.scss';

const DirectoryItem = ({ category }) => {
    const { imageUrl, title, route } = category;

    return (
        <Link
            to={route}
            className={`directory-item-container ${category.size}`}
        >
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className='body'>
                <h2>{title.toUpperCase()}</h2>
            </div>
        </Link>
    );
};

export default DirectoryItem;
