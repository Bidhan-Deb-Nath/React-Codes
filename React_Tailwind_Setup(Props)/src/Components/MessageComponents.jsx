/** @format */

const MessageComponents = ({ username, job_taitle, button_name, myImage }) => {
  return (
    <div>
      <div className="mt-5 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-2xl space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img
          className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          src={myImage} // Use the passed image source here
          alt={username}
        />

        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">{username}</p>
            <p className="text-slate-500 font-medium">{job_taitle}</p>
          </div>
          <button className="px-4 py-1 text-sm items-center text-sky-700 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-sky-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
            {button_name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageComponents;
