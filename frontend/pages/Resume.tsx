//includes education, experience, and skills

export default function Resume() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-12 bg-rose-300">
            <h1 className="text-4xl font-bold mb-8 text-gray-500">
                Resume
            </h1>
            <div className="mb-8 text-left text-gray-500">
                <h2 className="text-2xl font-bold mb-4 text-gray-500">
                    Education
                </h2>
                <p className="text-gray-500 mb-2 font-semibold">
                    UCLA, Master of Science in Computer Science, 2026-present
                </p>
                <p className="text-gray-500 mb-2 font-semibold">
                    UC Irvine, Bachelor of Science in Computer Science Engineering, 2023-2026
                </p>
            </div>
            <div className="mb-8 text-left">
                <h2 className="text-2xl font-bold mb-4 text-gray-500">
                    Experience
                </h2>
                <p className="text-gray-500 mb-2 font-semibold">
                    Avionics Software Engineer, UCI CubeSat (Sept. 2025 - June 2026)

                    <ul className="list-disc list-inside text-white mb-2 font-normal">
                        <li>
                            Contributed to a control algorithm to determine the satellite's orientation and adjust it using magnetic torquers.
                        </li>
                        <li>
                             Tested and validated data from the inertial measurement unit (IMU) for signal integrity and reliability.
                        </li>
                        <li>
                            Wrote documentation and setup details for sensors and actuators. 
                        </li>
                    </ul>
                </p>
                
                <p className="text-gray-500 mb-2 font-semibold">
                    Project Lead/ Project Member, Engineers for a Sustainable World @ UCI (Apr. 2024 - Dec. 2025)

                    <ul className="list-disc list-inside text-white mb-2 font-normal">
                        <li> 
                            Project lead as of January 2025
                        </li>
                        <li>
                            Led an interdisciplinary team in the development of an IoT-based air pollution monitoring system to track CO₂, ozone, and particulate matter levels across campus. 
                        </li>
                        <li>
                             Directed project milestones and task delegation, overseeing hardware and software development. 
                        </li>
                        <li>
                             Implemented C++-based data collection and storage systems for environmental monitoring. 
                        </li>
                        <li>
                             Assisted in designing and prototyping circuit boards for sensors. 
                        </li>
                    </ul>
                </p>

                <p className="text-gray-500 mb-2 font-semibold">
                    Undergraduate Researcher, Concordia University - UIUC+ Summer Program (June 2025 - Aug. 2025)

                    <ul className="list-disc list-inside text-white mb-2 font-normal">
                        <li>
                             Conducted research on automated test generation using Python and Large Language Models (LLMs).
                        </li>
                        <li>
                             Worked with CoverUp Eval to maximize code coverage (89% line and branch coverage). 
                        </li>
                        <li>
                            Evaluated the effectiveness of generated tests and identified reasons for blind spots. 
                        </li>
                        <li>
                             Leveraged Linux CLI for environment configuration and resource management. 
                        </li>


                    </ul>
                </p>

            </div>
            <div className="mb-8 text-left">
                    <h2 className="text-2xl font-bold mb-4 text-gray-500">
                        Leadership & Involvement
                    </h2>
                    <p className="text-gray-500 mb-2 font-semibold">
                        Board Member, Tau Beta Pi Engineering Honor Society (Apr. 2025 - June 2026)
                    </p>
                    <p className="text-gray-500 mb-2 font-semibold">
                        Mentor, Society of Women Engineers (SWE) (Sept. 2024 - June 2025)
                    </p>
                </div>

        </div>
    )};