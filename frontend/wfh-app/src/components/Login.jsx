const Login = () => {
  return (
    <>
      <div className="flex flex-col shadow-lg justify-center bg-white w-fit h-90 p-5 gap-3 self-center items-center rounded-xl">
        <h2 className="text-2xl font-light font-sans ">Attendance App</h2>
        <div className="flex pt-5">
            <input type="text" name="email" className="border-b border-gray-600 bg-white text-gray-400 min-w-96" placeholder="Input your email"/>
        </div>
        <div className="flex pt-5">
            <input type="password" name="password" className="border-b border-gray-600 bg-white text-gray-400 min-w-96" placeholder="Input your password"/>
        </div>
      </div>
    </>
  );
};

export default Login;
