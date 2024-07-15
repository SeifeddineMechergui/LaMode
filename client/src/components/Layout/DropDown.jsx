import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/style';

const DropDown = ({ categoriesData, setDropDown }) => {
    const navigate = useNavigate();

    const handleSubmit = (category) => {
        navigate(`/products?category=${category.title}`);
        setDropDown(false);
        window.location.reload();
    };

    // // Debugging: Log categoriesData to ensure it contains the expected data
    // console.log(categoriesData);

    return (
        <div className='pb-4 w-[270px] bg-[#fff] absolute z-30 rounded-b-md shadow-sm'>
            {categoriesData && categoriesData.map((category, index) => (
                <div 
                    className={`${styles.normalFlex}`} 
                    onClick={() => handleSubmit(category)} 
                    key={index}
                >
                    <img 
                        src={category.imageUrl} 
                        style={{
                            width: "25px", 
                            height: "25px",
                            objectFit: "contain",
                            marginLeft: "10px",
                            userSelect: "none"
                        }} 
                        alt={category.title} 
                    />
                    <h3 className="m-3 cursor-pointer select-none">{category.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default DropDown;
