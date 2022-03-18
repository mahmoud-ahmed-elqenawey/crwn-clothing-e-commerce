import './Directory.styles.scss';
import CategoryItem from '../CategoryItem/CategoryItem.component';
import { useState } from 'react';

const Directory = () => {
    const dateSections = [
        {
            title: 'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1,
        },
        {
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
        },
        {
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
        },
        {
            title: 'womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 4,
        },
        {
            title: 'mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            id: 5,
        },
    ];

    const [sections, setSections] = useState(dateSections);

    return (
        <div className='directory-menu'>
            {sections.map(({ id, title, imageUrl, size }) => (
                <CategoryItem
                    key={id}
                    title={title}
                    imageUrl={imageUrl}
                    size={size}
                />
            ))}
        </div>
    );
};

export default Directory;
