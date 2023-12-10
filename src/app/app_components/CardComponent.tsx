import React from 'react';
import css from '../../../styles/CardComponent.module.css'

interface CardProps {
    title: string;
    description: string;
    progress: number;
}

/**
 * CardComponent component for displaying a card with title, description, and progress bar.
 * @param {Object} props - React props object.
 * @param {string} props.title - The title of the card.
 * @param {string} props.description - The description of the card.
 * @param {number} props.progress - The progress value for the progress bar (between 0 and 100).
 */
const CardComponent: React.FC<CardProps> = ({title, description, progress}) => {
    return (
        <div className={css.card}>
            <h2>{title}</h2>
            <p>{description}</p>
            <label htmlFor="file">Scroll until next model:</label>
            <progress id="file" max="100" value={progress}></progress>
        </div>
    );
};

export default CardComponent;
