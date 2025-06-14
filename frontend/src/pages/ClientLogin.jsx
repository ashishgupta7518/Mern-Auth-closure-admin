import { useState } from "react";
 import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";



const ClientLogin = () => {

  const [clientCode, setClientCode] = useState('');
  const [staticcode, setstaticcode] = useState('');

  const navigate = useNavigate();




const handlelogin = async () => {
  try {
     

    const response = await fetch(`http://localhost:5000/api/clients/login/${clientCode}/${staticcode}`, {
      method: 'GET'
    });

    if (!response.ok) {
      throw new Error('Login failed');
    
    }

    const data = await response.json();
    console.log('Login successful:', data);

    toast.success('Login successful!');
    navigate(`/login/client/${clientCode}`); // Redirect to makerchecker page on successful login
  } catch (error) {
    console.error('Error during login:', error);
    toast.error('Login failed. Please check your client code and static code.');
  }
};




  return (
    <>
      <div className="bg-gray-100 flex justify-center items-center h-screen">
        <ToastContainer />
        {/* Left: Image */}
        <div className="w-1/2 h-screen hidden lg:flex flex-col justify-center items-center bg-blue-500">

        <h2 className="font-semibold text-[3rem] text-white">Close Your Account</h2>
          {/* <img
            src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat"
            alt="Placeholder"
            className="object-cover w-full h-full"
          /> */}  
        </div>

        {/* Right: Login Form */}
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Login with clientcode</h1>
          <div>
            {/* Username Input */}
            <div className="mb-4">
              <label htmlFor="clientCode" className="block text-gray-600">
                Clientcode
              </label>
              <input
                type="text"
                id="clientCode"
                name="clientCode"
                value={clientCode}
                onChange={(e) => setClientCode(e.target.value)}
                required
                autoComplete="off"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="staticcode" className="block text-gray-600">
                Unique Code(6  digit)
              </label>
              <input
                type="text"
                id="staticcode"
                name="staticcode"
                value={staticcode}
                onChange={(e) => setstaticcode(e.target.value)}
                required
                autoComplete="off"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>

            

            {/* Password Input */}
            

            {/* Remember Me Checkbox */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="text-blue-500"
              />
              <label htmlFor="remember" className="text-gray-600 ml-2">
                Remember Me
              </label>
            </div>

            

            {/* Login Button */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"  onClick={()=>handlelogin()}
            >
              Login
            </button>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default ClientLogin;
