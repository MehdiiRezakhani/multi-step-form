import Layout from '@/components/Layout';

const FormProjectExtraDetails = (props) => {

    const next = e => {
        e.preventDefault();
        props.nextStep();
      };

    const back = e => {
        e.preventDefault();
        props.prevStep();
    };

    const {values, handleChange} = props;

    return (
        <Layout>
            <form 
                className='p-5 md:p-12 bg-[#fff] flex flex-col'
            >
                <div className='w-full'>
                    <div className='flex justify-between items-center'>
                        <label htmlFor='Description' className='text-xs text-N200 font-semibold leading-4 mb-1'>Description</label>
                        <p className='text-xs text-N200 font-light leading-4 mb-1'>Total charachters: 0/5000</p>
                    </div>
                    <textarea
                        id="Description"
                        type="text"
                        placeholder='Text'
                        name="Description"
                        value={values.description}
                        onChange={handleChange('description')}
                        className='w-full h-[160px] bg-N10 p-3 text-sm text-N100 font-normal leading-5 appearance-none border-[2px] border-N40 border-solid  rounded-[3px] focus:outline-none focus:ring-0 focus:border-[2px] focus:border-N40 peer'
                    ></textarea>
                </div>
                <div className='w-full mt-4'>
                    <label htmlFor='Equipment' className='text-xs text-N200 font-semibold leading-4 mb-1'>Provided equipment</label>
                    <div className='flex justify-between items-center'>
                        <p className='text-xs text-N200 font-light leading-4 mb-1'>Optional</p>
                        <p className='text-xs text-N200 font-light leading-4 mb-1'>Total charachters: 0/5000</p>
                    </div>
                    <textarea
                        id="Equipment"
                        type="text"
                        placeholder='Text'
                        name="Equipment"
                        value={values.requirement}
                        onChange={handleChange('requirement')}
                        className='w-full h-[160px] bg-N10 p-3 text-sm text-N100 font-normal leading-5 appearance-none border-[2px] border-N40 border-solid  rounded-[3px] focus:outline-none focus:ring-0 focus:border-[2px] focus:border-N40 peer'
                    ></textarea>
                </div>
                <div className='w-full'>
                    <label htmlFor='Proposal' className='text-xs text-N200 font-semibold leading-4 mb-1'>Proposal (Doc/PDF)</label>
                    <input
                        id="Proposal"
                        type="file"
                        placeholder='Text'
                        name="Proposal"
                        value={values.propsal}
                        onChange={handleChange('proposal')}
                        className='w-full h-[160px] bg-N10 p-3 text-sm text-N100 font-normal leading-5 appearance-none border-[2px] border-N40 border-solid  rounded-[3px] focus:outline-none focus:ring-0 focus:border-[2px] focus:border-N40 peer'
                    />
                </div>
                <div className='w-full mt-4 flex flex-col'>
                    <label htmlFor='DataSet' className='text-xs text-N200 font-semibold leading-4 mb-1'>Provided dataset</label>
                    <p className='text-xs text-N200 font-light leading-4 mb-1'>Optional</p>
                    <input
                        id="DataSet"
                        type="text"
                        placeholder='URL'
                        name="DataSet"
                        value={values.data_set_link}
                        onChange={handleChange('data_set_link')}
                        className='w-full h-[40px] bg-N10 p-3 text-sm text-N100 font-normal leading-5 appearance-none border-[2px] border-N40 border-solid  rounded-[3px] focus:outline-none focus:ring-0 focus:border-[2px] focus:border-N40 peer'
                    />
                </div>
                <div className='mt-10 self-end'>
                    <button
                        onClick={back} 
                        className='text-sm text-N500 font-medium leading-5 px-3 py-[6px] mr-3'
                    >Back</button>
                    <button 
                        type="onsubmit"
                        onClick={next}
                        className='text-sm text-N800 font-medium leading-5 px-3 py-[6px] bg-Y400 rounded-[3px]'
                    >Next</button>
                </div>
            </form>
        </Layout>
    );
};

export default FormProjectExtraDetails;