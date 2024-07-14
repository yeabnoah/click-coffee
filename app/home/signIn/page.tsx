// "use server";

const page = () => {
  return (
    <div className=" border border-neutral-800 w-[75vw] mt-[115px] md:mt-40 md:mx-auto min-h-[36vh] flex justify-center items-center mx-5">
      <form
        className=" flex flex-col gap-5 flex-1 md:mx-14 p-5"
        // action={handleForm}
        method="POST"
      >
        <div className=" flex flex-col md:gap-5 md:items-center text-white">
          <label className=" text-sm pb-1">Full Name</label>
          <input
            name="fullName"
            type="text"
            className=" text-sm py-2 rounded-none outline-none px-3 md:px-5  border bg-transparent text-white border-neutral-800"
            placeholder="yeabsra Ashebir"
          />
        </div>

        <div className=" flex flex-col md:gap-5 md:items-center text-white">
          <label className=" text-sm pb-1">Username</label>
          <input
            name="username"
            type="text"
            className=" text-sm py-2 rounded-none outline-none px-3 md:px-5  border bg-transparent text-white border-neutral-800"
            placeholder="TechNerd"
          />
        </div>

        <div className=" flex flex-col md:gap-5 md:items-center text-white">
          <label className=" text-sm pb-1">Language</label>
          <input
            name="ProLang"
            type="text"
            className=" text-sm py-2 rounded-none outline-none px-3 md:px-5  border bg-transparent text-white border-neutral-800"
            placeholder="TypeScript .."
          />
        </div>

        <div className=" flex flex-col md:gap-5 md:items-center text-white">
          <label className=" text-sm pb-1">Password</label>
          <input
            name="password"
            type="password"
            className=" text-sm py-2 rounded-none outline-none px-3 md:px-5  border bg-transparent text-white border-neutral-800"
            placeholder="Password"
          />
        </div>

        <div className=" flex mx-auto gap-10">
          <button
            type="submit"
            className=" text-sm  text-neutral-500 border-neutral-800 border w-fit px-2 py-1 bg-[#1C1C1C]"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
