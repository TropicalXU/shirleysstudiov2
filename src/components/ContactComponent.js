import React, { Component } from 'react';
import { Card, CardBody, FormGroup, Label, Form, Input, Button  } from 'reactstrap';
import { FadeTransform, Fade } from 'react-animation-components';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';


const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: '',
            user_email: '',
        };
    }

    render() {

        const AboutHeader = () => {
            return (
                <Fade in>
                    <div className='about-header d-flex justify-content-center align-items-center'>
                        <div className='row text-center text-white'>
                            <div className='col-12 align-self-center'>
                                <h1 className='font-two large-text py-5'>Contact</h1>
                            </div>
                        </div>
                    </div>
                </Fade>
            );
        }

        const RenderContactForm = () => {
            return (
                        <div>
                            <Card className='custom-card font-two'>
                                <h1 className='font-two text-center py-4'>Contact me.</h1>
                                <CardBody>
                                    <Form className='p-4' onSubmit={handleOnSubmit}>
                                        <FormGroup>
                                            <Label htmlFor='user_email'><span className='fa fa-envelope mr-2'></span><b>Email<span className='text-danger'> *</span></b></Label>
                                            <Input
                                            type='email'
                                            id='user_email'
                                            innerRef={(input) => this.user_email = input}
                                            name='user_email'
                                            placeholder='@email.com'
                                            required
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor='user_name'><span className='fa fa-user mr-2'></span><b>Full Name<span className='text-danger'> *</span></b></Label>
                                            <Input
                                            type='text'
                                            id='user_name'
                                            innerRef={(input) => this.user_name = input}
                                            name='user_name'
                                            placeholder='Full Name'
                                            required
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor='user_message'><span className='fa-solid fa-message mr-2'></span><b>Message<span className='text-danger'> *</span></b></Label>
                                            <Input
                                            type='textarea'
                                            id='user_message'
                                            name='user_message'
                                            placeholder='Message…'
                                            rows='6'
                                            required
                                            />
                                        </FormGroup>
                                        <Button type='submit' className='btn btn-contact px-4 my-3'>Send Message</Button>
                                    </Form>
                                </CardBody>
                            </Card>
                        </div>
                
            );
        }

        const handleOnSubmit = (e) => {
            e.preventDefault();
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
              .then((result) => {
                console.log(result.text);
                Swal.fire({
                  icon: 'success',
                  title: 'Message Sent Successfully'
                })
              }, (error) => {
                console.log(error.text);
                Swal.fire({
                  icon: 'error',
                  title: 'Ooops, something went wrong',
                  text: error.text,
                })
              });
            e.target.reset()
        };

        return (
            <div className='row-lt-grey'>
               
                <div className='container'>
                    <div className='row align-self-center py-5'>
                        <div className='col-12 col-md-6'>
                            <h1 className='font-two large-text pt-5 pb-2'>Have any questions?</h1>
                            <h1 className='font-two'>Get in touch!</h1>
                            <img src='/assets/images/message.png' width='360px' height='360px' />
                        </div>
                        <div className='col-12 col-md-6 align-self-center'>
                            <RenderContactForm />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;