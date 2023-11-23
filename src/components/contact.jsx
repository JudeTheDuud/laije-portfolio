import React from "react";



const contact = () => {
  return (
    <div className="" id = 'contact'>
      <div className="w-screen pt-8 pb-32 mt-60 bg-primary">
        <div className="px-12 text-5xl font-bold text-center text-white mr-[17rem]">
          contact.
          <p className="px-2 mt-6 text-xl font-medium">Get in touch with me</p>
        </div>

        <div className="flex items-center justify-center w-screen mt-10 ">
          <div className="">
            <form action="" className="grid  gap-4 text-white w-[30rem] contact-form">
              <div className="grid form-group">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="h-10 text-black rounded-md indent-3"
                />
              </div>

              <div className="grid w-6/6 form-group">
                <label htmlFor="Message">Email</label>
                <input
                  type="email"
                  placeholder="johndoe@gmail.com"
                  className="h-10 text-black rounded-md indent-3"
                />
              </div>

              <div className="grid w-6/6 form-group">
                <label htmlFor="Message">Message</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="text-black rounded-md resize-none indent-3"
                ></textarea>
              </div>

              <input
                type="submit"
                value="Submit"
                className="h-10 transition duration-300 ease-in-out rounded-md cursor-pointer w-6/6 delay-15 hover:-translate-y-1 hover:scale-110 bg-secondary"
              />
            </form>
          </div>

         
        </div>
        
        
      </div>
      <p></p>
    </div>
  );
};

export default contact;
