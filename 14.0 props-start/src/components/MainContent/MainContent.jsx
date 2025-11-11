import PropTypes from "prop-types";

function MainContent({image, title, description}) {
    return(
        <li>
            <img src={image} alt={title}/>
            <h2>{title}</h2>
            <p>{description}</p>
        </li>
    )
}

MainContent.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
};

export default MainContent;