import Layout from '@/components/Layout';

const FormProjectDetails = (props) => {
    
    const next = e => {
        e.preventDefault();
        props.nextStep();
      };

    const back = e => {
        e.preventDefault();
        props.prevStep();
    };

    const { values, handleChange } = props;

    return (
        <Layout>
            <form
                onSubmit={event => formHandler(event)}
                className='p-5 md:p-12 bg-[#fff] flex flex-col'
            >
                <div className='w-full'>
                    <label htmlFor='ProjectTitle' className='text-xs text-N200 font-semibold leading-4 mb-1'>Project Title</label>
                    <input 
                        id="ProjectTitle"
                        type="text"
                        name="ProjectTitle"
                        value={values.title}
                        onChange={handleChange('title')}
                        placeholder='150 characters including spaces' 
                        className='w-full h-[40px] bg-N10 p-3 text-sm text-N100 font-normal leading-5 appearance-none border-[2px] border-N40 border-solid  rounded-[3px] focus:outline-none focus:ring-0 focus:border-[2px] focus:border-N40 peer'
                    />
                </div>
                <div className='w-full mt-6'>
                    <div className='flex items-center'>
                        <input 
                            id="PrimarySupervisor"
                            type="checkbox"
                            value={values.primary_supervisor}
                            onChange={handleChange('without_client')}
                            className='h-4 w-4 text-B400 border-B400 focus:ring-transparent rounded-[3px]'
                        />
                        <label htmlFor='PrimarySupervisor' className='text-sm text-N900 font-normal leading-5 ml-2'>The primary supervisor</label>
                    </div>
                    <p className='text-[12px] text-N200 font-normal leading-4'>I would like to be the primary supervisor for this project.</p>
                </div>
                <div className='w-full mt-6 flex flex-col'>
                    <div className='flex items-center'>
                        <input 
                            id="FundCheck"
                            type="checkbox"
                            name="FundCheck"
                            value={values.is_fund}
                            onChange={handleChange('is_fund')}
                            className='h-4 w-4 text-B400 border-B400 focus:ring-transparent rounded-[3px]'
                        />
                        <label 
                            htmlFor="FundCheck"  
                            className='text-sm text-N900 font-normal leading-5 ml-2'
                        >Fund</label>
                    </div>
                    <p className='text-[12px] text-N200 font-normal leading-4'>This is a funded project.</p>
                    <input 
                        {...values.is_fund && 'disabled'}
                        type="number"
                        placeholder='$1500'
                        name="FundAmount"
                        value={values.fund}
                        onChange={handleChange('fund')}
                        className='w-full md:w-1/2 h-[40px] bg-N10 p-3 mt-1 text-sm text-N100 font-normal leading-5 appearance-none border-[2px] border-N40 border-solid  rounded-[3px] focus:outline-none focus:ring-0 focus:border-[2px] focus:border-N40 peer'
                    />
                </div>
                <div className='w-full flex flex-col md:flex-row justify-between md:items-center mt-4'>
                    <div className='flex flex-col mt-2 md:mt-0 w-full md:mr-4'>
                        <label htmlFor='startDate' className='text-xs text-N200 font-semibold leading-4 mb-1'>Suggested start date</label>
                        <input 
                            id='startDate'
                            type='date'
                            name="startDate"
                            value={values.start_date}
                            onChange={handleChange('start_date')}
                            className="text-sm text-N100 font-normal leading-5 bg-N20 border-none rounded-[3px] appearance-none focus:outline-none focus:ring-0 focus:border-none peer"
                        />
                    </div>
                    <div className='flex flex-col mt-2 md:mt-0 w-full md:mr-4'>
                        <label htmlFor='endDate' className='text-xs text-N200 font-semibold leading-4 mb-1'>Suggested end date</label>
                        <input 
                            id='endDate'
                            type='date'
                            name="endDate"
                            value={values.end_date}
                            onChange={handleChange('end_date')}
                            className="text-sm text-N100 font-normal leading-5 bg-N20 border-none rounded-[3px] appearance-none focus:outline-none focus:ring-0 focus:border-none peer"
                        />
                    </div>
                    <div className='flex flex-col mt-2 md:mt-0 w-full'>
                        <label htmlFor='language' className='text-xs text-N200 font-semibold leading-4 mb-1'>Language</label>
                        <select 
                            id='language' 
                            className="text-sm text-N500 font-normal leading-5 bg-N20 border-none rounded-[3px] appearance-none focus:outline-none focus:ring-0 focus:border-none peer"
                            name="language"
                            value={values.language}
                            onChange={handleChange('language')}
                        >
                            <option value="English">English</option>
                            <option value="Persian">Persian</option>
                        </select>
                    </div>
                </div>
                <div className='mt-10 self-end'>
                    <button
                        onClick={back}
                        className='text-sm text-N500 font-medium leading-5 px-3 py-[6px] mr-3'
                    >Back</button>
                    <button
                        type='submit'
                        onClick={next}
                        className='text-sm text-N800 font-medium leading-5 px-3 py-[6px] bg-Y400 rounded-[3px]'
                    >Next</button>
                </div>
            </form>
        </Layout>
    );
};

export default FormProjectDetails;