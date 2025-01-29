"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Button from "../Shared/Button"

const ProjectCard = ({ project }) => {
    const [seeMore, setSeeMore] = useState(false)

    return (
        <div className=" w-full h-full flex flex-col md:flex-row justify-between items-center">
            <Image
                src='/bnr4.jpg'
                width={700}
                height={300}
                alt="banner"
                className=" object-cove object-center"
            />
            <div className="px-2 text-center space-y-4 h-[400px]">
                <div className=" h-12">
                    <h1 className=" text-hero_p text-xl"> {project.title}</h1>
                </div>

                <div className={`flex flex-col items-start ${seeMore && " h-[250px]"} h-[200px] overflow-auto`}>
                    {
                        seeMore ? <p className=" text-justify text-hero text-sm leading-5"> {project.descriptions}</p> :
                            <p className=" text-justify text-hero text-sm leading-5"> {project.descriptions.slice(0, 300)}</p>
                    }
                    {
                        seeMore ? <button
                            onClick={() => setSeeMore(!seeMore)}
                            className=" space-y-2 text-blue-500">See less
                        </button> : <button
                            onClick={() => setSeeMore(!seeMore)}
                            className=" space-y-2 text-blue-500">See more
                        </button>
                    }

                </div>
                {/* grop button */}
                <div className="flex flex-wrap-reverse gap-4 justify-start items-center w-full h-20">
                    <Link href={'/contact'}>
                        <Button title={"Contact Us"} />
                    </Link>
                    <Button title={"View Details"} />
                </div>
            </div>
        </div>
    )
}

export default ProjectCard