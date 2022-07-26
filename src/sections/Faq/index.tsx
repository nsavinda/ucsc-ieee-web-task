import React from 'react';
import Faq from '../../components/faq/index'
import Head from 'react-helmet';
import {
  Heading,
  Container,
  VStack
} from '@chakra-ui/react';

import './style.css'


export default function FaqSection() {

    const data = {
        title: "",
        rows: [
            {
                title: "What is the registration process?",
                content: `We will be posting the announcements on our social media and the registration links will be available on our site.
                 You will be required to register for the workshop and compettion seperately.`,
            },
            {
                title: "What are the phases of the competition?",
                content:
                    "The competition will have three phases; the proposal submission phase, the implementation phase and the judging phase. The proposal submission stage will be open to all participants. The implementation stage will be for the top 10 teams selected from the proposal submissions.",
            },
            {
                title: "Do teams need to know how to build a mobile app to enter the contest?",
                content: `If your team gets selected to the final stage, you will be asked to implement the application proposed, but if you'e currently not comfortable with mobile development our workshops would help you to some extent.`,
            },
            {
                title: "Are there any restrictions on the programming languages?",
                content: `No, you are free to use whatever framework or programming language as you wish. Go crazy and may the best app win!`,
            },
            {
              title: "How will the final app be chosen?",
              content: `We will be choosing the best 10 teams for the final round based on the proposals submitted in the inital phase. The final 10 will be asked to implement the application and the best among them will be chosen based on various criteria.`,
          },
          {
            title: "How important will the design of the mobile app be?",
            content: `A visually pleasing application will definitely be in your favour but the importance of it will be decided by the judges.`,
        },
        ],
    };
    
    const styles = {
        bgColor: 'transparent',
        titleTextColor: "#ffffff",
        rowTitleColor: "#eeeeee",
        rowContentColor: '#cccccc',
        titleTextSize:'xx-large',
        arrowColor: "#66BB6A",
        rowTitleTextSize :'xx-large',
        rowContentTextSize: 10,
        rowContentPaddingLeft:10,
        
    };
    
    const config = {
        animate: true,
    };
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>




<div id="faq">

      <Container maxW={'7xl'} py={20}>

      <VStack spacing={2} pt={10} textAlign="center">
        <Heading as="h1" fontSize="4xl" py={10}>
        FREQUENTLY ASKED QUESTIONS 
        </Heading>

      </VStack>

      <div>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>

      </Container>
      </div>
    </>
  );
}

