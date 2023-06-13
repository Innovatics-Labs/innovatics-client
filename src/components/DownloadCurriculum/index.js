import React, { useRef, useState } from 'react';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import styled from 'styled-components';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { QUERIES, WEIGHTS } from '../../constants';
import Logo from '../../assets/images/logo 1.png';
import Image from 'next/image';
import Button from '../Button';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const DownloadCurriculum = ({ title, currUrl, isOpen, onDismiss }) => {
  const formRef = useRef();
  const [tempParams, setTempParams] = useState({
    userEmail: '',
    userPhone: '',
    currUrl: currUrl,
  });

  const handleChange = (e) => {
    setTempParams({ ...tempParams, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_16ca93j',
        'template_eubl1oc',
        formRef.current,
        'M4uZtU2Eize04iEE6',
        tempParams
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === 'OK') {
            formRef.current.reset();
            toast.success(`${result.text}:Message Sent`);
            tempParams.userEmail = '';
            tempParams.userPhone = '';
          }
        },
        (error) => {
          console.log(error.text);
          toast.error('Bad User Credentials');
        }
      );
  };

  return (
    <>
      <LabOverlay isOpen={isOpen} onDismiss={onDismiss}>
        <LabContent>
          <Container>
            <Header>
              <Back onClick={onDismiss}>
                <IoMdArrowRoundBack size={20} color='white' />
                <span>Back</span>
              </Back>
              <HeaderContent>
                <Image src={Logo} alt='Innovatics Logo' />
              </HeaderContent>
            </Header>
            <Content>
              <FormContainer>
                <form ref={formRef} onSubmit={sendEmail}>
                  <Title>Download Curriculum</Title>
                  <Label htmlFor=''>
                    <p>EMAIL</p>
                    <Input
                      type='email'
                      placeholder='sample@gmail.com'
                      name='userEmail'
                      required
                      onChange={handleChange}
                    />
                  </Label>
                  <Label htmlFor=''>
                    <p>PHONE NUMBER</p>
                    <Input
                      type='tel'
                      placeholder='000 000 0000'
                      name='userPhone'
                      required
                      onChange={handleChange}
                    />
                  </Label>

                  <Button
                    type='submit'
                    value='Send'
                    title={'Send'}
                    variant='outline'
                    borderColor={'#8691A6'}
                    color='#8691A6'
                    width='100%'
                  />
                </form>
              </FormContainer>
            </Content>
          </Container>
        </LabContent>
      </LabOverlay>
    </>
  );
};

export default DownloadCurriculum;

const LabOverlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: none;
  @media ${QUERIES.phoneAndSmaller} {
    background-color: rgba(0, 0, 0);
  }
`;

const LabContent = styled(DialogContent)`
  height: 100%;
  width: 100%;
`;

const Container = styled.div`
  height: 100%;
`;

const Header = styled.div`
  width: 100%;
  background: #000000;
  padding-inline: 2rem;
  height: 80px;
  color: white;
  display: flex;
  align-items: center;
  gap: 2rem;
  @media ${QUERIES.phoneAndSmaller} {
    padding-inline: 1rem;
  }
`;

const HeaderContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Back = styled.p`
  border: 1px solid white;
  display: flex;
  gap: 0.5rem;
  height: 100%;
  align-items: center;
  padding: 0.5rem 2rem;
  margin-block: 0;
  cursor: pointer;
  @media ${QUERIES.phoneAndSmaller} {
    padding: 0.5rem 1.5rem;
  }
`;

const Content = styled.div`
  height: 100%;
  // margin-top: 6rem;
  display: grid;
  place-items: center;
  // justify-content: center;
  @media ${QUERIES.phoneAndSmaller} {
    width: 100%;
  }
`;

const FormContainer = styled.div`
  margin-top: -10rem;
  width: min(500px, 100%);
  background-color: #000;
  padding: 2rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 1.5rem;
  p {
    font-weight: 500;
    font-size: 18px;
    color: #fc69af;
    text-transform: uppercase;
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #8691a6;
  background-color: transparent;
  width: 100%;
  padding: 0.5rem;
  color: white;
  margin-bottom: 2rem;
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  color: white;
  margin-bottom: 2rem;
  // margin-top: 2rem;
`;
