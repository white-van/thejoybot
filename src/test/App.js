import React from 'react';
import { ChakraProvider, Box, Center, Stack, Flex } from "@chakra-ui/react"
import { ChatBox, Navbar, AccordionInfo, ButtonMenu } from '../lib';
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
    const messages = [
      {
        "text": "Hey",
        "id": "1",
        "sender": {
          "name": "You",
          "uid": "user1",
          "avatar": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/facebook/65/hibiscus_1f33a.png",
        },
      },
      {
        "text": "Hello! How are you doing?",
        "id": "2",
        "sender": {
          "name": "Joy",
          "uid": "user2",
          "avatar": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/facebook/65/smiling-face-with-smiling-eyes_1f60a.png",
        },
      },
      {
        "text": "Not so great.",
        "id": "3",
        "sender": {
          "name": "You",
          "uid": "user1",
          "avatar": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/facebook/65/hibiscus_1f33a.png",
        },
      },
      {
        "text": "A lot happened today...",
        "id": "4",
        "sender": {
          "name": "You",
          "uid": "user1",
          "avatar": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/facebook/65/hibiscus_1f33a.png",
        },
      },
      {
        "text": "Can I tell you about it?",
        "id": "5",
        "sender": {
          "name": "You",
          "uid": "user1",
          "avatar": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/facebook/65/hibiscus_1f33a.png",
        },
      },
      {
        "text": "Of course",
        "id": "6",
        "sender": {
          "name": "Joy",
          "uid": "user2",
          "avatar": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/facebook/65/smiling-face-with-smiling-eyes_1f60a.png",
        },
      },
      {
        "text": "What happened?",
        "id": "7",
        "sender": {
          "name": "Joy",
          "uid": "user2",
          "avatar": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/facebook/65/smiling-face-with-smiling-eyes_1f60a.png",
        },
      },
      {
        "text": "So...",
        "id": "8",
        "sender": {
          "name": "You",
          "uid": "user1",
          "avatar": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/facebook/65/hibiscus_1f33a.png",
        },
      },
    ];

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
        <Flex direction='row' align='center' justify='space-between' style={{paddingTop: '60px'}} wrap='wrap'>
          <ButtonMenu minW='250px'/>
          <Box maxW='750px'>
            <div className='chat-header'>
              <h5>Talk With Joy Bot</h5>
            </div>
              <ChatBox messages={this.state.messages} />
          </Box>
          <Box w='250px'>
            <AccordionInfo />
          </Box>
        </Flex>
      </ChakraProvider>
    )
  }
}

export default App;
