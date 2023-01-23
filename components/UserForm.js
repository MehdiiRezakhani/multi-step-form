import React,{useState} from 'react';
import axios from 'axios'
import FormPersonalDetails from './FormPersonalDetails';
import FormProjectDetails from './FormProjectDetails';
import FormProjectExtraDetails from './FormProjectExtraDetails';
import Confirm from './Confirm';

const UserForm = () => {
    const [state,setState] = useState({
        step: 1,
        fullName:'',
        phone:'',
        gender: '',
        country: '',
        city: '',
        skype: '',
        email:'',
        birthday:'',
        primary_supervisor:'',
        is_fund:'',
        fund:'',
        main_field:'',
        sub_field:'',
        title:'',
        description:'',
        language:'',
        requirement:'',
        data_set_link:'',
        start_date:'',
        end_date:'',
        proposal:'',
    })

    // Proceed to next step
    const nextStep = () => {
        const { step } = state;
        setState({...state, step: step + 1 });
    };

    // Go back to prev step
    const prevStep = () => {
        const { step } = state;
        setState({...state, step: step - 1 });
    };

    // Handle fields change
    const handleChange = input => e => {
        setState({...state, [input]: e.target.type == "checkbox" ? e.target.checked : e.target.value});
    };
    
    const { step } = state;

    const { fullName,phone,gender,country,city,skype,email,birthday,primary_supervisor,is_fund,fund,
        main_field,sub_field,title,description,equipment,language,abstract,requirement,data_set_link,
        guarantee_percent,supervisor_guaranti_percent,reputation_percent,contract_sign,start_date,end_date,
        proposal } = state;

    const values = {fullName,phone,gender,country,city,skype,email,birthday,primary_supervisor,is_fund,fund,
            main_field,sub_field,title,description,equipment,language,abstract,requirement,data_set_link,
            guarantee_percent,supervisor_guaranti_percent,reputation_percent,contract_sign,start_date,end_date,
            proposal 
    };
    console.log(values)

    // Handle rest-api
    const confirmHandler = () => {
        const token = '92fb2b51ad3b0c90abec718a0aca32dca8c2fe5a'
        axios.post('http://tecvicotest.ir/api/create-project', {values}, 
            {   
                mode:'no-cors',
                headers: {
                    'Content-Type': 'multipart/form-data',                            
                    'Authorization': `Bearer ${token}` 
                }
            })
            .then((res) => {
                console.log(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    switch (step) {
        case 1:
            return (
            <FormPersonalDetails
                nextStep={nextStep}
                prevStep={prevStep}
                handleChange={handleChange}
                values={values}
            />
            );
        case 2:
            return (
            <FormProjectDetails
                nextStep={nextStep}
                prevStep={prevStep}
                handleChange={handleChange}
                values={values}
            />
            );
        case 3:
            return (
              <FormProjectExtraDetails
                nextStep={nextStep}
                prevStep={prevStep}
                handleChange={handleChange}
                values={values}
              />
            );
        case 4:
            return (
            <Confirm
                nextStep={nextStep}
                prevStep={prevStep}
                values={values}
                state={state}
                setState={setState}
                confirmHandler={confirmHandler}
            />
            );
        default:
            (console.log('This is a multi-step form built with React.'))
    }
}
export default UserForm;