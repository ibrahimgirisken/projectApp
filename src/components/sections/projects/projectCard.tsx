import { ProjectDataType } from "@/db/projectsOneData";
import Image from "next/image";
import Link from "next/link";

type ProjectCardPropsType = {
    project: ProjectDataType;
    className?: string;
    iconCalss?: string;
    isIconShow?: boolean;
    width: number;
    height: number;
}
const ProjectCard = ({ project, width, height, className, iconCalss, isIconShow = true }: ProjectCardPropsType) => {
    return (
        <div className={`project-items ${className}`}>
            <div className="project-image">
                <Image width={width} height={height} sizes="100vw" src={project.image} alt="project-img" />
                <div className="project-content">
                    <p>{project.category}</p>
                    <h4>
                        <Link href={project.link}>{project.title}</Link>
                    </h4>
                    {
                        isIconShow &&
                        <Link href={project.link} className={`${iconCalss}`}>
                            <i className="fa-solid fa-arrow-right" />
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectCard