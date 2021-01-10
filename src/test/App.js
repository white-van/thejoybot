import React from 'react';
import { ChakraProvider, Box, Center, HStack, Flex, Text } from "@chakra-ui/react"
import { ChatBox, Navbar, AccordionInfo } from '../lib';
import globalTheme from '../lib/theme';
import  '../lib/style.css';
import './style.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      user: {},
    };
  }

  componentDidMount() {
    const messages = [];
      // {
      //   "text": "Hey",
      //   "id": "1",
      //   "sender": {
      //     "name": "You",
      //     "uid": "user1",
      //     "avatar": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/facebook/65/hibiscus_1f33a.png",
      //   },
      // }
      // {
      //   "text": "Hello! How are you doing?",
      //   "id": "2",
      //   "sender": {
      //     "name": "Joy",
      //     "uid": "user2",
      //     "avatar": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/facebook/65/smiling-face-with-smiling-eyes_1f60a.png",
      //   },
      // },
      // {
      //   "text": "Not so great.",
      //   "id": "3",
      //   "sender": {
      //     "name": "You",
      //     "uid": "user1",
      //     "avatar": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/facebook/65/hibiscus_1f33a.png",
      //   },
      // },
      // {
      //   "text": "A lot happened today...",
      //   "id": "4",
      //   "sender": {
      //     "name": "You",
      //     "uid": "user1",
      //     "avatar": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/facebook/65/hibiscus_1f33a.png",
      //   },
      // },
      // {
      //   "text": "Can I tell you about it?",
      //   "id": "5",
      //   "sender": {
      //     "name": "You",
      //     "uid": "user1",
      //     "avatar": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/facebook/65/hibiscus_1f33a.png",
      //   },
      // },
      // {
      //   "text": "Of course",
      //   "id": "6",
      //   "sender": {
      //     "name": "Joy",
      //     "uid": "user2",
      //     "avatar": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/facebook/65/smiling-face-with-smiling-eyes_1f60a.png",
      //   },
      // },
      // {
      //   "text": "What happened?",
      //   "id": "7",
      //   "sender": {
      //     "name": "Joy",
      //     "uid": "user2",
      //     "avatar": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/facebook/65/smiling-face-with-smiling-eyes_1f60a.png",
      //   },
      // },
      // {
      //   "text": "So...",
      //   "id": "8",
      //   "sender": {
      //     "name": "You",
      //     "uid": "user1",
      //     "avatar": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/facebook/65/hibiscus_1f33a.png",
      //   },
      // },
    //];

    const user = {
      "uid": "user1"
    };

    this.setState({ messages: messages, user: user });
  }

  render() {
    return (
      <ChakraProvider theme={globalTheme}>
        <Center>
          <Navbar/>
        </Center>
        <HStack spacing='0px' style={{paddingTop: '60px'}} wrap='wrap'>
          <Box className='container' style={{maxWidth: '750px'}}>
            <div className='chat-header'>
              <h5>Talk With Joy Bot</h5>
            </div>
              <ChatBox messages={this.state.messages} />
          </Box>
          <Box w='250px'>
            <AccordionInfo />
          </Box>
        </HStack>
        <Center>
        <Text padding="20px" fontSize="md" color="white">Joy is a friendly bot! Your privacy is protected.</Text>
        </Center>
      </ChakraProvider>
    )
  }
}

export default App;
