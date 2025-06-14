import Smsapi from "../Credential/Smsapi";
import Smtp from "../Credential/Smtp";
import Esign from "../Credential/Esign";
import Pdf from "../Credential/Pdf";
import Smstemplate from "../Credential/Smstemplate";
import Emailtemp from "../Credential/Emailtemp";
import Docid from "../Credential/Docid";
import Companydet from "../Credential/Companydet";


const Credential = () => {
  return (
    <>
      <div className="p-5 bg-white rounded-md shadow-md">
        <h2 className="text-slate-700 font-semibold text-lg">Credentials Live</h2>

        <Smsapi id={1} title="SMS API" />
        <Smtp id={2} title="SMTP API" />
        <Esign id={3} title="Esign" />
        <Pdf id={4} title="PDF" />
        <Smstemplate id={5} title="SMS Template" />
        <Emailtemp id={6} title="Email Template" />
        <Docid id={7} title="Document ID" />
        <Companydet id={8} title="Company Details" />
      </div>
      <hr className="my-5" />
      <div className="p-5 bg-white rounded-md shadow-md">
        <h2 className="text-slate-700 font-semibold text-lg">Credentials UAT</h2>

        <Smsapi id={1} title="SMS API" />
        <Smtp id={2} title="SMTP API" />
        <Esign id={3} title="Esign" />
        <Pdf id={4} title="PDF" />
        <Smstemplate id={5} title="SMS Template" />
        <Emailtemp id={6} title="Email Template" />
        <Docid id={7} title="Document ID" />
        <Companydet id={8} title="Company Details" />
      </div>
    </>
  );
};

export default Credential;
