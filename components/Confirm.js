import Image from 'next/image';
import Layout from './Layout';

//media
import EditIcon from '../assets/editIcon.svg';

const Confirm = (props) => {
    const back = e => {
        e.preventDefault();
        props.prevStep();
    };

    const { values, state, setState,confirmHandler} = props;
    return (
        <Layout>
            <div className='p-5 md:p-12 bg-[#fff] flex flex-col'>
                <div className='relative grid md:grid-cols-2 p-4 border-[1px] border-N100 rounded-[10px]'>
                    <h3 className='text-sm text-N100 font-normal leading-5 capitalize my-1'>FullName: {values.fullName}</h3>
                    <h3 className='text-sm text-N100 font-normal leading-5 capitalize my-1'>Location: {values.country}, {values.city}</h3>
                    <h3 className='text-sm text-N100 font-normal leading-5 capitalize my-1'>Birthday: {values.birthday}</h3>
                    <h3 className='text-sm text-N100 font-normal leading-5 capitalize my-1'>Phone Number: {values.phone}</h3>
                    <h3 className='text-sm text-N100 font-normal leading-5 capitalize my-1'>Gender: {values.gender}</h3>
                    <h3 className='text-sm text-N100 font-normal leading-5 capitalize my-1'>Skype Id: {values.skype}</h3>
                    <Image 
                        src={EditIcon} 
                        alt="EditIcon" 
                        onClick={() => setState({...state, step:1})}
                        className='absolute right-2 top-2 cursor-pointer'
                    />
                </div>
                <div className='relative grid p-4 border-[1px] border-N100 rounded-[10px] my-5'>
                    <h3 className='text-sm text-N100 font-normal leading-5 capitalize my-1'>Project Title: {values.title}</h3>
                    <h3 className='text-sm text-N100 font-normal leading-5 capitalize my-1'>Suggested Start Day: {values.start_date}</h3>
                    <h3 className='text-sm text-N100 font-normal leading-5 capitalize my-1'>Suggested End Day: {values.end_date}</h3>
                    <h3 className='text-sm text-N100 font-normal leading-5 capitalize my-1'>Language: {values.language}</h3>
                    {values.is_fund && <h3 className='text-sm text-N100 font-normal leading-5 capitalize my-1'>Fund: {values.fund}</h3> }
                    <Image 
                        src={EditIcon} 
                        alt="EditIcon" 
                        onClick={() => setState({...state, step:2})}
                        className='absolute right-2 top-2 cursor-pointer'
                    />
                </div>
                <div className='relative grid p-4 border-[1px] border-N100 rounded-[10px]'>
                    <h3 className='text-sm text-N100 font-normal leading-5 capitalize my-1'>Description: <br/>{values.description}</h3>
                    <h3 className='text-sm text-N100 font-normal leading-5 capitalize my-3'>Required Equipment: <br/>{values.requirement}</h3>
                    <h3 className='text-sm text-N100 font-normal leading-5 capitalize my-1'>Proposal:</h3>
                    <div className='w-[150px] h-[100px] bg-N800 rounded-[5px] my-1'></div>
                    <h3 className='text-sm text-N100 font-normal leading-5 capitalize my-2'>DataSet: <a href={values.data_set_link} target="_blank">{values.data_set_link}</a></h3>
                    <Image 
                        src={EditIcon} 
                        alt="EditIcon" 
                        onClick={() => setState({...state, step:3})}
                        className='absolute right-2 top-2 cursor-pointer'
                    />
                </div>
                <div className='mt-10 self-end'>
                    <button
                        onClick={back} 
                        className='text-sm text-N500 font-medium leading-5 px-3 py-[6px] mr-3'
                    >Back</button>
                    <button 
                        type="onsubmit"
                        onClick={confirmHandler}
                        className='text-sm text-N800 font-medium leading-5 px-3 py-[6px] bg-Y400 rounded-[3px]'
                        >Confirm</button>
                </div>
            </div>
        </Layout>
    );
};

export default Confirm;