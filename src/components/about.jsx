import React from "react";

const about = () => {
  return (
    <div>
      <div className="px-12 " id = 'about'>
        <div className="text-4xl font-bold text-center mt-60 md:text-left md:text-6xl md:ml-[3rem]">about.</div>
        <p className="mt-8 text-lg text-left md:ml-[3rem] md:text-xl">
          Dedicated and results-driven media and communication professional with
          over
          <br /> five years of experience in content creation, management, and
          strategic analysis.
        </p>

        <div className="md:ml-[20rem]">
          <ul className="mt-16 text-lg text-left list-disc md:text-xl">
            <li className="text-black rounded ">
              <div className="text-xl font-bold md:w-[65%]">
                2020-2021 Sterling Bank Plc, Lagos — Compliance Analyst
                <ul className="font-normal">
                <li className="mt-3">
                  Monitor press media at NDDC programmes and events, including
                  project commissioning, interviews with Management and
                  designated staff as required.
                </li>
                <li className="mt-3">
                  Develop press releases and print media coordination.
                </li>
                
                <li className="mt-3">Prepare draft content for website.</li>
              </ul>
              </div>
              
            </li>
            <li className="mt-10 text-black rounded ">
              <div className="text-xl font-bold  md:w-[65%] ">
                2021 - Present Niger Delta Development Commission, <br />
                Port-Harcourt — Media and Communications Officer
                <ul className="font-normal">
                <li className="mt-3">
                  Creating and implementing the Bank`s compliance program
                  through identification, mitigation and monitoring of risks.
                </li>
                <li className="mt-3">
                  Monthly review of income generated bank-wide to ensure
                  compliance and assure management of propriety and accuracy of
                  income generated.
                </li>
               
              </ul>
              </div>
             
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default about;
