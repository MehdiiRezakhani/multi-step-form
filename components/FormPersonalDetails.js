import Layout from '@/components/Layout';

const FormPersonalDetails = (props)  => {
    
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
                className='p-5 md:p-12 bg-[#fff] flex flex-col'
            >
                <div className='w-full'>
                    <label htmlFor='fullname' className='text-xs text-N200 font-semibold leading-4 mb-1'>Full Name</label>
                    <input 
                        id="fullname"
                        type="text"
                        name="FullName"
                        value={values.fullName}
                        onChange={handleChange('fullName')}
                        className='w-full h-[40px] bg-N10 p-3 text-sm text-N100 font-normal leading-5 appearance-none border-[2px] border-N40 border-solid  rounded-[3px] focus:outline-none focus:ring-0 focus:border-[2px] focus:border-N40 peer'
                    />
                </div>
                <div className='w-full flex flex-col md:flex-row justify-between md:items-center mt-4'>
                    <div className='w-full md:mr-4'>
                        <label htmlFor='birthday' className='text-xs text-N200 font-semibold leading-4 mb-1'>Birthday</label>
                        <input 
                            id="birthday"
                            type="date" 
                            name="Birthday"
                            value={values.birthday}
                            onChange={handleChange('birthday')}
                            className='w-full h-[40px] bg-N10 p-3 text-sm text-N100 font-normal leading-5 appearance-none border-[2px] border-N40 border-solid  rounded-[3px] focus:outline-none focus:ring-0 focus:border-[2px] focus:border-N40 peer'
                            />
                    </div>
                    <div className='flex flex-col mt-2 md:mt-0'>
                        <label htmlFor='Gender' className='text-xs text-N200 font-semibold leading-4 mb-1'>Gender</label>
                        <select 
                            id='Gender' 
                            className="text-sm text-N500 font-normal leading-5 bg-N20 border-none rounded-[3px] appearance-none focus:outline-none focus:ring-0 focus:border-none peer"
                            name="Gender"
                            value={values.gender}
                            onChange={handleChange('gender')}
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>
                <div className='w-full mt-4'>
                    <label htmlFor='phone' className='text-xs text-N200 font-semibold leading-4 mb-1'>Phone Number</label>
                    <input 
                        id="phone"
                        type='number'
                        name="Phone"
                        value={values.phone}
                        onChange={handleChange('phone')}
                        className='w-full h-[40px] bg-N10 p-3 text-sm text-N100 font-normal leading-5 appearance-none border-[2px] border-N40 border-solid  rounded-[3px] focus:outline-none focus:ring-0 focus:border-[2px] focus:border-N40 peer'
                    />
                </div>
                <div className='w-full flex flex-col md:flex-row justify-between mt-4'>
                    <div className='w-full mr-8'>
                        <label htmlFor='country' className='text-xs text-N200 font-semibold leading-4 mb-1'>Country</label>
                        <input 
                            id="country"
                            type="text"
                            name="Country"
                            value={values.country}
                            onChange={handleChange('country')}
                            className='w-full h-[40px] bg-N10 p-3 text-sm text-N100 font-normal leading-5 appearance-none border-[2px] border-N40 border-solid  rounded-[3px] focus:outline-none focus:ring-0 focus:border-[2px] focus:border-N40 peer'
                            />
                    </div>
                    <div className='w-full mt-4 md:mt-0'>
                        <label htmlFor='city' className='text-xs text-N200 font-semibold leading-4 mb-1 '>City</label>
                        <input 
                            id="city"
                            type="text"
                            name="City"
                            value={values.city}                          
                            onChange={handleChange('city')}
                            className='w-full h-[40px] bg-N10 p-3 text-sm text-N100 font-normal leading-5 appearance-none border-[2px] border-N40 border-solid  rounded-[3px] focus:outline-none focus:ring-0 focus:border-[2px] focus:border-N40 peer'
                            />
                    </div>
                </div>
                <div className='w-full mt-4'>
                    <label htmlFor='skypeId' className='text-xs text-N200 font-semibold leading-4 mb-1'>Skype ID</label>
                    <input 
                        id="skypeId"
                        type="text"
                        name="SkypeId"
                        value={values.skype}
                        onChange={handleChange('skype')}
                        className='w-full h-[40px] bg-N10 p-3 text-sm text-N100 font-normal leading-5 appearance-none border-[2px] border-N40 border-solid  rounded-[3px] focus:outline-none focus:ring-0 focus:border-[2px] focus:border-N40 peer'
                    />
                </div>
                <div className='mt-10 self-end'>
                    <button
                        disabled 
                        className='text-sm text-N500 font-medium leading-5 px-3 py-[6px] mr-3 cursor-not-allowed'
                        onClick={back}
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

export default FormPersonalDetails;