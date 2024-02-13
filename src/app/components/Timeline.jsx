export const Timeline = () => {
  return (
    <div className="flex flex-col container items-center">
      <h2 className="text-4xl font-bold text-white mb-4"> My career </h2>
    <ol className="border-l border-neutral-300 dark:border-neutral-500">
      <li>
        <div className="flex-start flex items-center pt-3">
          <div
            className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
          <p className="text-sm text-neutral-500 dark:text-neutral-300">
            2017 - 2019
          </p>
        </div>
        <div className="mb-6 ml-4 mt-2">
          <h4 className="mb-1.5 text-xl font-semibold">Softars</h4>
          <p className="mb-3 text-neutral-500 dark:text-neutral-300">
            My first job as a developer was at softars, a software company focused on delivering high quality frontend solutions to clients. My main focus on this was to learn from the experts and build up my skills, I was a early beginner.
          </p>
        </div>
      </li>
      <li>
        <div className="flex-start flex items-center pt-3">
          <div
            className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
          <p className="text-sm text-neutral-500 dark:text-neutral-300">
            August 2019 - December 2019
          </p>
        </div>
        <div className="mb-6 ml-4 mt-2">
          <h4 className="mb-1.5 text-xl font-semibold">Rayen Salud</h4>
          <p className="mb-3 text-neutral-500 dark:text-neutral-300">
            Junior frontend developer at Rayen Salud, I was part of the team responsable for building up the main national health system for Chile using React, Redux and Material UI.
          </p>
        </div>
      </li>

      <li>
        <div className="flex-start flex items-center pt-2">
          <div
            className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
          <p className="text-sm text-neutral-500 dark:text-neutral-300">
            December 2019 - Now
          </p>
        </div>
        <div className="mb-6 ml-4 mt-2">
          <h4 className="mb-1.5 text-xl font-semibold">LenioLabs and ICE Mortgage Technology</h4>
          <p className="mb-3 text-neutral-500 dark:text-neutral-300">
            Started as a junior developer, becoming as of now a Semi Senior Web Developer. I am part of LenioLabs team who has several clients, one of them being ICE Mortgage Technology, a software company focused on creating software to automate the process of the mortgage world. We have created successfully a big scalable and optimal web application to handle all types of loans and mortgage operations, delivering these softwares to entities and banks such as Chase Bank. In this project I have focused mostly on the frontend development using React, Redux, Redux Toolkit and a custom design system created by ICE itself. I have also gained experience in devops with AWS and jenkis and in SCRUM methodology.
          </p>
        </div>
      </li>
    </ol>
    </div>
  )
}