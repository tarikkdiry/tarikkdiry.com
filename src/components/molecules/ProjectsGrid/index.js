import React from "react";
import ProjectTile from "../../atoms/ProjectTile/index";
import styles from "./index.module.scss";

const ProjectsGrid = () => {
    // Projects
    const projects = [
        {
            title: "tarikkdiry.com",
            description: "👨🏽‍💻 Portfolio and Blog, built with GatsbyJS",
            link: "https://github.com/tarikkdiry/tarikkdiry.com",
            technology: [
                "GatsbyJS",
                "Sass",
                "Contentful",
                "ReactJS"
            ]
        },
        {
            title: "travel-anywhere",
            description: "✈️ Elevate your travel with a card game!",
            link: "https://github.com/tarikkdiry/travel-anywhere",
            technology: [
                "React Native",
                "Sass",
                "Firebase"
            ]
        }
    ]
    return (
        <div className={styles.container}>
            <ProjectTile 
                title={projects[0].title}
                description={projects[0].description}
                link={projects[0].link}
                technology={projects[0].technology}
            />
            <ProjectTile 
                title={projects[0].title}
                description={projects[0].description}
                link={projects[0].link}
                technology={projects[0].technology}
            />
        </div>
    );
};

export default ProjectsGrid;