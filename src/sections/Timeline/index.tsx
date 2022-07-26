import Head from 'react-helmet';
import {
  Heading,
  Container,
  VStack,
  Image
} from '@chakra-ui/react';


import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import "./style.css"

import img1 from '../../assests/images/timeline/1.png'
import img2 from '../../assests/images/timeline/2.png'
import img3 from '../../assests/images/timeline/3.png'
import img4 from '../../assests/images/timeline/4.png'
import img5 from '../../assests/images/timeline/5.png'
import img6 from '../../assests/images/timeline/6.png'




export default function Timeline() {
    const contentStyle = { background: 'rgb(76, 175, 80)', color: '#fff', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.4)' }
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>



<div id="timeline">
      <div id="container">
      <Container  maxW={'8xl'} pt={10} >

      <VStack spacing={2} pt={10} textAlign="center">
        <Heading as="h1" fontSize="4xl" py={10}>
          Timeline
        </Heading>
       
      </VStack>

     
<div >

      <VerticalTimeline  className="vertical-timeline">
  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={contentStyle}
    contentArrowStyle={{ borderRight: '7px solid  rgb(102, 187, 106)' }}
    date="25TH JULY"
    dateClassName={'vertical-timeline-element-date'}
    iconStyle={{ background: 'rgb(102, 187, 106)', color: '#fff' }}
    iconClassName={ 'vertical-timeline-element-icon' }
    icon={<Image src={img1} />}
  >
   <h3 className="vertical-timeline-element-title"> LAUNCH EVENT 🎉</h3>
    <p className='vertical-timeline-element-text'>
    We will be officially kicking off and opening registrations. Join our events and stay connected with our social media to know the latest updates. See you soon
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={contentStyle} 
       contentArrowStyle={{ borderRight: '7px solid  rgb(102, 187, 106)' }}
    date="26TH JULY"
    iconStyle={{ background: 'rgb(102, 187, 106)', color: '#fff' }}
    iconClassName={ 'vertical-timeline-element-icon' }
    icon={<Image src={img2} />}
  >
    <h3 className="vertical-timeline-element-title">WORKSHOP I 📚</h3>
    <p className='vertical-timeline-element-text'>
    Conducted by one of our knowledge partners to give you an intro to mobile application development and give you a head start. Those who wish to enter must register beforehand. Don't brain lag :P
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={contentStyle}
        contentArrowStyle={{ borderRight: '7px solid  rgb(102, 187, 106)' }}
    date="28TH JULY"
    iconStyle={{ background: 'rgb(102, 187, 106)', color: '#fff' }}
    iconClassName={ 'vertical-timeline-element-icon' }
    icon={<Image src={img2} />}
  >
    <h3 className="vertical-timeline-element-title">WORKSHOP II 📚</h3>
    <p className='vertical-timeline-element-text'>
    Conducted by one of our knowledge partners to give you an intro to mobile application development and give you a head start. Those who wish to enter must register beforehand. Don't brain lag :P
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={contentStyle}
    contentArrowStyle={{ borderRight: '7px solid  rgb(102, 187, 106)' }}
    date="30TH JULY"
    iconStyle={{ background: 'rgb(102, 187, 106)', color: '#fff' }}
    iconClassName={ 'vertical-timeline-element-icon' }
    icon={<Image src={img2} />}
  >
    <h3 className="vertical-timeline-element-title">WORKSHOP III 📚</h3>
    <p className='vertical-timeline-element-text'>
    Conducted by one of our knowledge partners to give you an intro to mobile applicattion development to give you a head start. Those who wish to enter must register beforehand.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={contentStyle}
    contentArrowStyle={{ borderRight: '7px solid  rgb(102, 187, 106)' }}
    date="7TH AUGUST"
    iconStyle={{ background: 'rgb(102, 187, 106)', color: '#fff' }}
    iconClassName={ 'vertical-timeline-element-icon' }
    icon={<Image src={img3} />}
  >
    <h3 className="vertical-timeline-element-title">IDEA STAGE CLOSES💡</h3>
    <p className='vertical-timeline-element-text'>
    The Idea stage is when the proposal submissions are called. Participants are allowed to choose any topic and category of choice to focus on in their proposal. Please note that it is not allowed to submit a proposal that has already been submitted to a competition before. Doing so will result in an immediate disqualification from the competition.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={contentStyle}
    contentArrowStyle={{ borderRight: '7px solid  rgb(102, 187, 106)' }}
    date="7TH AUGUST TO 13TH AUGUST"
    iconStyle={{ background: 'rgb(102, 187, 106)', color: '#fff' }}
    iconClassName={ 'vertical-timeline-element-icon' }
    icon={<Image src={img4} />}
  >
    <h3 className="vertical-timeline-element-title"> PROPOSAL EVALUATION STAGE 👩‍⚖️ </h3>
    <p className='vertical-timeline-element-text'>
    The proposal submitted during the idea stage will be evaluated during this period and the finalists will be announced on the 14th of August
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={contentStyle}
    contentArrowStyle={{ borderRight: '7px solid  rgb(102, 187, 106)' }}
    date="14TH AUGUST TO 28th AUGUST"
    iconStyle={{ background: 'rgb(102, 187, 106)', color: '#fff' }}
    iconClassName={ 'vertical-timeline-element-icon' }
    icon={<Image src={img5} />}
  >
    <h3 className="vertical-timeline-element-title">DEVELOPMENT STAGE 💻</h3>
    <p className='vertical-timeline-element-text'>
    The top 10 teams from the idea stage will be announced as finalists and they will be advanced to the development stage. All finalists will be allocated a period of one week for developing the app and each team will be assigned a mentor that will guide and evaluate them throughout this week.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={contentStyle}
    contentArrowStyle={{ borderRight: '7px solid  rgb(102, 187, 106)' }}
    date="30TH AUGUST"
    iconStyle={{ background: 'rgb(102, 187, 106)', color: '#fff' }}
    iconClassName={ 'vertical-timeline-element-icon' }
    icon={<Image src={img6} />}
  >
    <h3 className="vertical-timeline-element-title">FINALS 🤠</h3>
    <p className='vertical-timeline-element-text'>
    This is the final stage of the competition. In this stage, each team will be given 20 minutes to pitch their product to the judges out of which 15 mins will be allocated for the presentation and 5 mins for the Q & A. Judging Criteria for the Final Stage :
Final score = UI + UX + Usefulness + Availability
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
</div>

      </Container>
      </div>
      </div>
    </>
  );
}

