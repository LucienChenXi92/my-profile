import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, ChakraProvider, Flex, Heading, Link, Show, Spacer } from '@chakra-ui/react'
import githubLogo from './assets/github.svg';
import linkedinLogo from './assets/linkedin.svg';
import emailLogo from './assets/email.svg';
import { useState } from 'react';

function App() {

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
      transition='background-image 1s ease-in-out'
      bgImage={`linear-gradient(to right top, rgba(0, 15, 15, 0.95) 0 40%, rgba(0, 0, 0, 0.1)), url(${bgImgs[expandedIndex]})`} w='100%' minH='100vh' p={4} color='white'>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Box p='2'>
            <Heading size='md'>Lucien's Home</Heading>
          </Box>
          <Spacer />
          <Box p='2'>
            <Link href="https://github.com/LucienChenXi92" target='_blank'><Heading size='sm'>Github</Heading></Link>
          </Box>
          <Box p='2'>
            <Link href="https://tobetogether.xyz" target='_blank'><Heading size='sm'>Blog</Heading></Link>
          </Box>
        </Flex>
        <Box display='flex'>
          <Accordion mt={8} maxW='500px' defaultIndex={expandedIndex} onChange={handleAccordionChange}>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                      个人介绍
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lucien，一个不断折腾的 IT 宅男，喜欢体验新鲜事物，追求探寻世界运行的真相。<br/><br/>
                  爱好：读书，编程，音乐，游戏，美食……还有小猫咪。<br/>
                  喜欢的作家：余华，蔡崇达 <br/>
                  喜欢的话题：技术，认知，搞钱 <br/>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                      作品集
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <b>开源博客框架：TOBE-BLOG</b><br/>
                  TOBE-BLOG 是我和几位小伙伴一起开发并运营的学习博客网站，其理念为 “Have fun together, grow up together”，意为“同欢乐，共成长”，主张长期主义的个人积累和成长（personal development）。无论是专业技能，语言学习，读书感悟，还是沟通技巧，团队管理方面，在这里都是鼓励分享的话题。未来计划会不断攒出优秀，有趣的共创项目，以创带练，以练带学。<br/><br/>

                  主页：<a href='https://tobetogether.xyz/'>https://tobetogether.xyz</a>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                    技能树
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <b>通用</b><br/>
                  自然语言：中文（普通话），英语 <br/><br/>
                  <b>开发</b><br/>
                  开发理念：技术服务于业务，不追求极致的技术，而最求极致的收益 <br/>
                  最熟悉的编程语言：Java, Javascript, SQL, Typescript, Golang <br/>
                  最熟练的前端框架：React, Angular <br/>
                  最熟练的后端框架：spring-boot 全家桶 <br/>
                  最熟悉的数据库：MySQL, Oracle, Postgre <br/>
                  最熟悉的云厂商：AWS, Alicloud <br/>
                  最喜欢的开发模式及框架：Agile + scrum <br/><br/>
                  <b>管理</b><br/>
                  5年以上敏捷开发团队管理经验，团队成员包括前后端Dev，PM，QA，DBA等。团队规模最大时达到14人。主要负责开发任务的评估，分解以及制定排期。 利用敏捷开发管理工具，确保开发任务有序开展并高质量地按时完成。 此外，2年项目管理经验，2019年获得 PMP 项目认证。 <br/>

                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                      联系方式
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Flex minW='326px' alignItems='center' gap='2'>
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
            <Box maxW='500px' mx='10%' overflow='hidden' borderRadius='16px'>
              <img src={sideImgs[expandedIndex]}></img>
            </Box>
          </Show>}
        </Box>
      </Box>
    </ChakraProvider>
  )
}

export default App
