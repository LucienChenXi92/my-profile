import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, ChakraProvider, Flex, Heading, Link, Show, Spacer } from '@chakra-ui/react'
import githubLogo from './assets/github.svg';
import linkedinLogo from './assets/linkedin.svg';
import emailLogo from './assets/email.svg';
import { useState } from 'react';
import { useLanguage } from './i18n/LanguageContext';

function App() {
  const { t, toggleLanguage } = useLanguage();
  const [expandedIndex, setExpanedIndex] = useState<number>(0);

  const bgImgs: string[] = [
    'https://images.pexels.com/photos/1420003/pexels-photo-1420003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    'https://images.pexels.com/photos/2346594/pexels-photo-2346594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    'https://images.pexels.com/photos/2971098/pexels-photo-2971098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/754355/pexels-photo-754355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ]

  const sideImgs: string[] = [
    'images/lucien.jpeg',
    'images/tobeblog2.png',
    '',
    ''
  ]

  function handleAccordionChange(expandedIndex: number): void {
    setExpanedIndex(expandedIndex)
  }

  return (
    <ChakraProvider>
      <Box 
      bgPosition='center center'
      bgSize='cover'
      minHeight='100vh'
      transition='background-image 1s ease-in-out'
      bgImage={`linear-gradient(to right top, rgba(0, 15, 15, 0.95) 0 40%, rgba(0, 0, 0, 0.1)), url(${bgImgs[expandedIndex]})`} w='100%' minH='100vh' p={4} color='white'>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Box p='2'>
            <Heading size='md'>{t.header.title}</Heading>
          </Box>
          <Spacer />
          <Box p='2'>
            <Link href="https://github.com/LucienChenXi92" target='_blank'><Heading size='sm'>{t.header.github}</Heading></Link>
          </Box>
          <Box p='2'>
            <Link href="#" onClick={(e) => { e.preventDefault(); toggleLanguage(); }}><Heading size='sm'>{t.header.language}</Heading></Link>
          </Box>
          <Box p='2'>
            <Link href="https://tobetogether.xyz" target='_blank'><Heading size='sm'>{t.header.blog}</Heading></Link>
          </Box>
        </Flex>
        <Box display='flex'>
          <Accordion mt={8} maxW='500px' defaultIndex={expandedIndex} onChange={handleAccordionChange}>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                      {t.sections.about.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {t.sections.about.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                  <br/>
                  <b>{t.sections.about.hobbies}：</b>{t.sections.about.hobbiesContent}<br/>
                  <b>{t.sections.about.favoriteAuthors}：</b>{t.sections.about.favoriteAuthorsContent}<br/>
                  <b>{t.sections.about.favoriteTopics}：</b>{t.sections.about.favoriteTopicsContent}<br/>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                      {t.sections.portfolio.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <b>{t.sections.portfolio.projectTitle}</b><br/>
                  {t.sections.portfolio.projectDescription}<br/><br/>

                  {t.sections.portfolio.homepage}：<a href='https://tobetogether.xyz/'>https://tobetogether.xyz</a>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                    {t.sections.skills.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <b>{t.sections.skills.general}</b><br/>
                  {t.sections.skills.languages}<br/><br/>
                  <b>{t.sections.skills.development.title}</b><br/>
                  {t.sections.skills.development.philosophy}<br/>
                  {t.sections.skills.development.programmingLanguages}<br/>
                  {t.sections.skills.development.frontendFrameworks}<br/>
                  {t.sections.skills.development.backendFrameworks}<br/>
                  {t.sections.skills.development.databases}<br/>
                  {t.sections.skills.development.cloudProviders}<br/>
                  {t.sections.skills.development.developmentMode}<br/><br/>
                  <b>{t.sections.skills.management.title}</b><br/>
                  {t.sections.skills.management.content}<br/>

                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                      {t.sections.contact.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Flex minW='326px' mt='20px' alignItems='center' gap='2'>
                    <Box bgColor='white' borderRadius='8px' overflow='hidden'>
                      <Link href="https://github.com/LucienChenXi92" target='_blank'><img width='30px' src={githubLogo} alt="github-logo" /></Link>
                    </Box>
                    <Box bgColor='#758CA3' borderRadius='8px' overflow='hidden'>
                      <Link href="https://www.linkedin.com/in/lucien-chen-219ab6175/" target='_blank'><img width='30px' src={linkedinLogo} alt="linkedin-logo" /></Link>
                    </Box>
                    <Box bgColor='#758CA3' borderRadius='8px' overflow='hidden'>
                      <Link href="mailto:474504303@qq.com?subject=Hello Lucien!" target='_blank'><img width='30px' src={emailLogo} alt="linkedin-logo" /></Link>
                    </Box>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
          </Accordion>
          <Spacer />
          {sideImgs[expandedIndex] && <Show breakpoint='(min-width: 1000px)'>
            <Box maxWidth='360px' mx='10%' overflow='hidden' borderRadius='16px'>
              <img src={sideImgs[expandedIndex]}></img>
            </Box>
          </Show>}
        </Box>
      </Box>
      <Flex minWidth='max-content' justifyContent='center' alignItems='center' gap='2'>
        <Box p='2' justifyContent='center' >
          <Heading size='xs' textAlign='center'>{t.footer.copyright.replace('{year}', new Date().getFullYear().toString())}</Heading>
          <Heading size='xs' textAlign='center'><Link href='https://beian.miit.gov.cn'>粤ICP备19161005号-1</Link></Heading>
        </Box>
      </Flex>
    </ChakraProvider>
  )
}

export default App
