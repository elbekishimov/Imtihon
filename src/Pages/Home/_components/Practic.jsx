import Frame from '../../../IMG/Frame 3.png';
import post1 from '../../../IMG/post1.png'
import post2 from '../../../IMG/post2.png'
import post3 from '../../../IMG/post3.png'
import post4 from '../../../IMG/post4.png'
import post5 from '../../../IMG/post5.png'
import post6 from '../../../IMG/post6.png'

export default function Practic() {
    return (
        <>
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                        <div className="w-full lg:w-1/2 space-y-6">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Know Our <span className="text-[#0088CA]">Clients</span>
                            </h1>
                            <h3 className="text-lg text-gray-600 leading-relaxed">
                                As a trusted authority in medical billing, catering to a diverse spectrum of organizations,
                                our industry-standing reputation is a testament to our reliability and expertise.
                                Our tailored services cater to the unique billing needs of various entities,
                                ensuring seamless operations and financial transparency.
                            </h3>
                            <button className="bg-[#0088CA] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#006fa3] transition-all">
                                Schedule Appointment
                            </button>
                        </div>

                        <div className="w-full lg:w-5/12">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                                <div className="bg-[#b0e4fe] px-10 py-5 rounded-xl flex items-center justify-center">
                                    <img src={Frame} alt="Client 1" className="w-full h-auto" />
                                </div>

                                <div className="bg-[#b0e4fe] px-10 py-5 rounded-xl flex items-center justify-center">
                                    <img src={Frame} alt="Client 2" className="w-full h-auto" />
                                </div>

                                <div className="bg-[#b0e4fe] px-10 rounded-xl flex items-center justify-center">
                                    <img src={Frame} alt="Client 3" className="w-full h-auto" />
                                </div>

                                <div className="bg-[#b0e4fe] px-10 py-5 rounded-xl flex items-center justify-center">
                                    <img src={Frame} alt="Client 4" className="w-full h-auto" />
                                </div>

                                <div className="bg-[#b0e4fe] px-10 rounded-xl flex items-center justify-center">
                                    <img src={Frame} alt="Client 5" className="w-full h-auto" />
                                </div>

                                <div className="bg-[#b0e4fe] px-10 rounded-xl flex items-center justify-center">
                                    <img src={Frame} alt="Client 6" className="w-full h-auto" />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div className='mt-5'>
                <h1 className='text-4xl text-center text-[#0088CA] font-bold'>Medical Billing Services We Offer</h1>
                <div className=' grid grid-cols-3 gap-10 mt-10'>
                    <div>
                        <img src={post1} className='w-full' alt="" />
                        <h1 className='text-[#0088CA] font-medium text-2xl mt-3 mb-3'>CODING AND MEDICAL BILLING</h1>
                        <h3>Accurate medical billing and coding play a crucial role in securing reimbursements promptly. Precision is key; even minor errors can cause payment delays. At Right Medical Billing, our dedicated team ensures healthcare facilities receive rightful reimbursements from patients and payers for services rendered.</h3>
                    </div>
                    <div>
                        <img src={post2} className='w-full' alt="" />
                        <h1 className='text-[#0088CA] font-medium text-2xl mt-3 mb-3'>Streamlined Accounts Management</h1>
                        <h3>At Vcare Medical Billing, we proactively handle your practice's accounts receivable. Identifying any pending payments owed to the provider or healthcare facility, we diligently pursue outstanding balances from patients or payors. Timely payment posting ensures an efficient billing workflow.</h3>
                    </div>
                    <div>
                        <img src={post3} className='w-full' alt="" />
                        <h1 className='text-[#0088CA] font-medium text-2xl mt-3 mb-3'>Credentialing and Contract Foundation</h1>
                        <h3>Establishing a healthcare facility hinges on credentialing and contracting, forming the bedrock of relationships with both insurance companies and patients. At RMB, we negotiate insurance payer contracts and maintain their currency, enabling you to achieve optimal reimbursement rates.</h3>
                    </div>
                    <div>
                        <img src={post4} className='w-full' alt="" />
                        <h1 className='text-[#0088CA] font-medium text-2xl mt-3 mb-3'>Expert Out-of-Network Negotiations</h1>
                        <h3>At Vcare Medical Billing, we adeptly negotiate out-of-network claims with major pricing vendors like Multiplan, Zelis, Viant, and GCS. Leveraging decades of expertise, our negotiation and settlement team excels in this intricate aspect of billing. We're recognized industry-wide as specialists in out-of-network billing.</h3>
                    </div>
                    <div>
                        <img src={post5} className='w-full' alt="" />
                        <h1 className='text-[#0088CA] font-medium text-2xl mt-3 mb-3'>Eligibility and Insurance Verification</h1>
                        <h3>Accurate eligibility and insurance benefits verification are crucial for obtaining precise information on coverage and reimbursement. It's essential for healthcare facilities to confirm each patient's eligibility and benefits to secure payment for provided services. Count on us as an integral part of your team in this pivotal process.</h3>
                    </div>
                    <div>
                        <img src={post6} className='w-full' alt="" />
                        <h1 className='text-[#0088CA] font-medium text-2xl mt-3 mb-3'>Complete RCM Services</h1>
                        <h3>Vcare Medical Billing manages the entire revenue cycle, supporting from patient arrival to payment receipt. We assist in compliance, workflow, and staff training, acting as an extension of your team.
                            Beyond financial relief, we enhance your RCM operations nationwide. Your success is our success, backed by expertise, tailored solutions,</h3>
                    </div>
                </div>
            </div>
        </>

    );
}