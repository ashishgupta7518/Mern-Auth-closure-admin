import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight, HiShoppingCart } from "react-icons/hi";

const ClientLogin = () => {
    const [clientdata, setclientdata] = useState([]);
    const { clientcode } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`http://localhost:5000/api/clients/${clientcode}`);
                const data = await res.json();
                setclientdata(data);
                console.log("Fetched client data:", data);
            } catch (err) {
                console.error("Failed to fetch data:", err);
            }
        };
        fetchData();
    }, [clientcode]); // Add clientcode to dependencies


    const generatePDF = (client) => {
        const doc = new jsPDF();

        doc.setFontSize(18);
        doc.text("Client Details", 20, 20);

        doc.setFontSize(12);
        doc.text(`Client Code: ${client.clientcode}`, 20, 40);
        doc.text(`Client Name: ${client.aadhar_name}`, 20, 50);
        doc.text(`Email: ${client.email}`, 20, 60);
        doc.text(`Phone: ${client.mobile_no}`, 20, 70);
        doc.text(`Father's Name: ${client.father_name}`, 20, 80);
        doc.text(`BOID: ${client.boid}`, 20, 90);
        doc.text(`Address: ${client.aadhar_house}`, 20, 100);

        doc.save(`Client_${client.clientcode}.pdf`);
    };

    const handlenext = () => {
        navigate(`/login/client/${clientcode}/success`);
        
    }


    return (
        <div className="flex h-screen bg-gray-100 items-center justify-center">
            {/* Left Section: Display client data */}
            <div className="w-1/2 bg-blue-500 h-screen p-10 text-white overflow-y-auto">
                <h2 className="text-2xl font-semibold mb-4 flex justify-center items-center">Client Info</h2>


                {clientdata.map((client, index) => (
                    <div key={index} className="mt-5 flex flex-col items-center">
                        <img
                            src={client.clientimage.replace(/^'+|'+$/g, '')}
                            alt="Client"
                            className="w-55 h-45 object-cover rounded-lg shadow"
                            onError={(e) => (e.target.style.display = "none")}
                        />

                        <div className="mt-9">
                            <ul className="border-b pb-2">
                                <span className="font-medium text-gray-900">Client Code:</span> {client.clientcode}<br />
                                <span className="font-medium text-gray-900">Client Name:</span> {client.aadhar_name}<br />
                                <span className="font-medium text-gray-900">Client BOID:</span> {client.boid}<br />
                                <span className="font-medium text-gray-900">Client Email:</span> {client.email}<br />
                                <span className="font-medium text-gray-900">Client Phone:</span> {client.mobile_no}<br />
                                <span className="font-medium text-gray-900">Father Name:</span> {client.father_name}<br />
                                <span className="font-medium text-gray-900">Address:</span> {client.aadhar_house}<br />
                            </ul>
                        </div>


                    </div>
                ))}


            </div>

            {/* Right Section: Could be your form */}
            <div className="w-1/2 p-10">
                <h2 className="text-xl font-semibold">Proceed For closure</h2>

                {clientdata.map((client, index) => (
                    <div key={index} className="mt-8 p-6 bg-white rounded-lg shadow ">
                        <input type="checkbox" className="w-5 h-5 " /> <span>I hereby give my consent to close my Demat and Trading account held with <span className="text-red-600"> {client.clientcode}</span>. I confirm that there are no outstanding dues or holdings in the account, and I do not wish to continue trading or holding securities through this account. Please consider this as my formal request for account closure.</span>


                        <div className="flex justify-evenly mt-6"><button
                            onClick={() => generatePDF(client)}
                            className="bg-blue-600 text-white p-2 rounded  hover:bg-blue-700 transition duration-300"
                        >
                            Download PDF
                        </button>
                        <Button  onClick={()=>handlenext()}>
        Proceed
        <HiOutlineArrowRight className="ml-2 mt-2 h-5 w-5 " />
      </Button>
                        </div>
                        
                    </div>




                ))}



            </div>
        </div>
    );
};

export default ClientLogin;
