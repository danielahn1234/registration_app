import React from 'react';
import { Form, Button, ButtonGroup, Container } from 'react-bootstrap';
import writeToDatabase from './Stein';

const Finish = ({steps, registrations, studentList}) => {
  const {step, addCurrentStep, backCurrentStep} = steps;
  const {registration, setRegistration} = registrations;    
  const {students, setStudents} = studentList;

  console.log(registration);
  console.log(students);
  const handleSubmit = async () => {
    await writeToDatabase(registration, students);
  }; 

  return (
    <Form>
        <Container>
          <h3>Registration Summary</h3>
          {/*   registration.students.map(student => {
              <p>{student.engName}</p> 
          }) */}
          
          Registering for: {}
          
        </Container>
        <Container>
          <h3>Terms and Conditions</h3>
            한국 학교 교장 귀하 (To: Head of the School)<br/>
            저는 위의 학생을 귀교에 입학시키기를 원하며 학부모로서의 의무를 충실히 이행할 것을 서약합니다.
            (I would like to register our child in your school and promise to support the academic & extracurricular activites of your school.) 
            <br/>
            또한 학생들 간식준비를 위해 기꺼이 도울것을 약속합니다. 
            (I also agree to volunteer to prepare and assist during the students' snack time.)
            <br/>
            I agree with the Terms and Conditions.
        <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        </Container>
       

          <Button 
              inline
              variant="info" 
              onClick={e => {
                  e.preventDefault()
                  backCurrentStep();
              }}>
              &lt; Previous
          </Button>
          <Button inline variant="success" 
            style={{float:'right'}}
            onClick={async e =>{
             e.preventDefault()
           //  e.target.value = "check";
             await handleSubmit();
            }}>
            Submit
          </Button>
    </Form>
  )
}

export default Finish;