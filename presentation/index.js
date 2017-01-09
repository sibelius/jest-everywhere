// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  Markdown,
  Slide,
  Spectacle,
  Text,
  List,
  ListItem,
} from "spectacle";
import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  routerLogo: require('../assets/react-router-logo.png'),
  spectacleLogo: require('../assets/formidable-logo.svg'),
  twitterLogo: require('../assets/twitter-logo.svg'),
  jestLogo: require('../assets/jest.svg'),
  githubLogo: require('../assets/github.svg'),
  camera: require('../assets/camera.svg'),
};

preloader(images);

const theme = createTheme({
  primary: "#37474F",
  accent: "#ADD8E6",
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transitionDuration={500}>
          <Slide>
            <Image width="20%" src={images.jestLogo} />
            <Heading size={1} fit caps lineHeight={1}  textFont="primary">
              Jest Everywhere
            </Heading>
            <Text textColor="white">Testing everything</Text>
            <Layout style={{ marginTop: 100, justifyContent: 'space-between' }}>
              <Fill><Text textColor="accent" style={{ textAlign: 'left' }}>Sibelius Seraphini</Text></Fill>
              <Fill>
                <Link href="https://github.com/sibelius" target="_blank">
                  <Text textColor="accent" style={{ textAlign: 'center' }}>
                    <Image src={images.githubLogo} style={{ height: 25, margin: '0 0 10 0' }} />
                    sibelius
                  </Text>
                </Link>
              </Fill>
              <Fill>
                <Link href="https://twitter.com/sseraphini" target="_blank">
                  <Text textColor="accent" style={{ textAlign: 'right' }}>
                    <Image src={images.twitterLogo} style={{ height: 25, margin: '0 0 10 0' }} />
                    @sseraphini
                  </Text>
                </Link>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} margin="0 auto 100px" caps fit textColor="accent" textFont="primary">
              Who am i?
            </Heading>
            <Appear><Text textColor="white" margin="0 auto 25px">- Technical Lead @ Entria/Brand Lovers</Text></Appear>
            <Appear><Text textColor="white" margin="0 auto 25px">- Creator of React Brasil</Text></Appear>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading color="white" margin="0 auto 40px">Why Jest ?</Heading>
            <Layout>
                <List textColor="white">
                  <Appear><ListItem>Easy to Setup</ListItem></Appear>
                  <Appear><ListItem>Fast watch mode</ListItem></Appear>
                  <Appear><ListItem>Coverage out of the box</ListItem></Appear>
                  <Appear><ListItem>Support for promise and async/await</ListItem></Appear>
                  <Appear><ListItem>Work great with babel</ListItem></Appear>
                </List>
            </Layout>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading color="white" margin="0 auto 40px">Why Jest (2) ?</Heading>
            <Layout>
              <List textColor="white">
                <Appear><ListItem>Automocking</ListItem></Appear>
                <Appear><ListItem>Fake DOM (jsdom)</ListItem></Appear>
                <Appear><ListItem>Run tests in parallel</ListItem></Appear>
                <Appear><ListItem>Snapshot testing</ListItem></Appear>
                <Appear><ListItem>Works in backend, frontend, react, react native</ListItem></Appear>
              </List>
            </Layout>
          </Slide>

          <Slide>
            <Heading color="white" margin="0 auto 40px">How to Setup ?</Heading>
            <Layout>
              <List textColor="white">
                <Appear>
                  <ListItem>
                    React
                    <CodePane>
                      {`yarn add --dev jest babel-jest babel-preset-es2015 babel-preset-react react-test-renderer jest-cli`}
                    </CodePane>
                  </ListItem>
                </Appear>
                <Appear>
                  <ListItem>
                    React Native
                    <CodePane>
                      {`yarn add --dev jest babel-jest babel-jest-react-native jest-react-native react-test-renderer jest-cli`}
                    </CodePane>
                  </ListItem>
                </Appear>
                <Appear>
                  <ListItem>
                    Backend
                    <CodePane>
                      {`yarn add --dev jest babel-jest jest-cli`}
                    </CodePane>
                  </ListItem>
                </Appear>
                <Appear>
                  <ListItem>
                    Package.json
                    <CodePane
                      lang="json">
                      {`{"test": "jest --coverage", "test:watch": "jest --watch"}`}
                    </CodePane>
                  </ListItem>
                </Appear>
              </List>
            </Layout>
          </Slide>

          <Slide bgColor="primary">
            <Heading color="white" margin="0 auto 40px">Simplest Test</Heading>
            <Layout>
              <Fill>
                <Text textColor="accent">sum.js</Text>
                <CodePane
                  lang="jsx"
                  source={require("raw!../assets/code/sum")}
                  style={{
                    borderRightWidth: 1,
                    borderRightStyle: 'solid',
                    borderRightColor: 'white'
                  }}
                />
              </Fill>
              <Fill>
                <Appear><Text textColor="accent">sum.spec.js</Text></Appear>
                <Appear transition={["zoom"]}>
                  <CodePane
                    lang="jsx"
                    source={require("raw!../assets/code/__tests__/sum.spec")}
                  />
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide bgColor="primary">
            <Heading color="white" margin="0 auto 40px">Async</Heading>
            <Layout>
              <Fill>
                <Text textColor="accent">user.js</Text>
                <CodePane
                  lang="jsx"
                  source={require("raw!../assets/code/user")}
                  style={{
                    borderRightWidth: 1,
                    borderRightStyle: 'solid',
                    borderRightColor: 'white'
                  }}
                />
              </Fill>
              <Fill>
                <Appear><Text textColor="accent">sum.spec.js</Text></Appear>
                <Appear transition={["zoom"]}>
                  <CodePane
                    lang="jsx"
                    source={require("raw!../assets/code/__tests__/user.spec")}
                  />
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <Heading color="white" margin="0 auto 40px">
              Snapshot Testing
              <Image src={images.camera} style={{ height: 100, margin: '0 0 10 0' }} />
            </Heading>
            <Layout>
              <Fill>
                <List textColor="white">
                  <Appear><ListItem>Save your object to a file</ListItem></Appear>
                  <Appear><ListItem>Good to make sure it does not change without warning</ListItem></Appear>
                </List>
                <Appear>
                  <CodePane
                    lang="jsx"
                    source={require("raw!../assets/code/example.js.snap")}
                  />
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <Heading size="10" color="white" margin="0 auto 40px">Database tests - Mongoose</Heading>
            <Layout>
              <Fill>
                <Appear>
                  <CodePane
                    style={{width: '50%'}}
                    lang="jsx"
                    source={require("raw!../assets/code/mongoose.js")}
                  />
                </Appear>
              </Fill>
              <Fill>
                <Appear>
                  <CodePane
                    lang="jsx"
                    source={require("raw!../assets/code/mongoose.snap.js")}
                  />
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <Heading color="white" margin="0 auto 40px">Server tests - Koajs</Heading>
            <Layout>
              <Fill>
                <Appear>
                  <CodePane
                    lang="jsx"
                    source={require("raw!../assets/code/koa-server.js")}
                  />
                </Appear>
              </Fill>
              <Fill>
                <Appear>
                  <CodePane
                    lang="jsx"
                    source={require("raw!../assets/code/koa.js")}
                  />
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <Heading color="white" margin="0 auto 40px">GraphQL tests</Heading>
            <Layout>
              <Fill>
                <Appear>
                  <CodePane
                    lang="jsx"
                    source={require("raw!../assets/code/graphql.js")}
                  />
                </Appear>
              </Fill>
              <Fill>
                <Appear>
                  <CodePane
                    lang="jsx"
                    source={require("raw!../assets/code/graphql.snap.js")}
                  />
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <Heading color="white" margin="0 auto 40px">React tests</Heading>
            <Layout>
            </Layout>
          </Slide>

          <Slide>
            <Heading color="white" margin="0 auto 40px">React Native tests</Heading>
            <Layout>
            </Layout>
          </Slide>

          <Slide>
            <Heading color="white" margin="0 auto 40px">Relay integration tests</Heading>
            <Layout>
            </Layout>
          </Slide>

          <Slide>
            <Heading color="white" margin="0 auto 40px">UX tests - Enzyme</Heading>
            <Layout>
            </Layout>
          </Slide>

          <Slide>
            <Heading color="white" margin="0 auto 40px">Mocking</Heading>
            <Layout>
            </Layout>
          </Slide>

          <Slide>
            <Heading color="white" margin="0 auto 40px">How to migrate to Jest</Heading>
            <Layout>
              <CodePane>
                {`
                npm install -g jest-codemods
                jest-codemods
                `}
              </CodePane>
            </Layout>
          </Slide>

          <CodeSlide
            transition={["slide"]}
            lang="jsx"
            code={require("raw!../assets/v4Expanded.example")}
            ranges={[
              { loc: [2, 12], note: 'We could make this a component' },
              { loc: [4, 5] },
              { loc: [5, 6] },
              { loc: [9, 10] },
              { loc: [10, 11] }
            ]}
          />
          <Slide transition={["slide"]} bgColor={"white"}>
            <Heading fix caps textSize={46} textColor={"accent"} margin="0 auto 30">Built-in Components</Heading>
            <Markdown>
              {`
- **Match** Renders UI when a pattern matches a location.
- **Miss** Renders UI when __NO Matches__ in tree **
- **Link** Navigate preserving current location in history
- **Redirect** Navigate replacing current location in history
- **NavigationPrompt** Prevent the user from navigating
              `}
            </Markdown>
          </Slide>
          <Slide bgColor="accent" transition={["zoom"]}>
            <Heading fix caps textColor={"white"} margin="0 auto 30">But Why?</Heading>
            <Appear><Heading textSize={30} textColor="black" margin="0 auto 25px">Composition</Heading></Appear>
            <Appear><Heading textSize={30} textColor="black" margin="0 auto 25px">Declarative</Heading></Appear>
            <Appear><Heading textSize={30} textColor="black" margin="0 auto 25px">Leverage React</Heading></Appear>
          </Slide>
          <CodeSlide
            transition={["slide"]}
            lang="jsx"
            code={require("raw!../assets/v4Samples.example")}
            ranges={[
              { loc: [0, 0], title: 'v4 Samples' },
              { loc: [2, 4] },
              { loc: [6, 8] },
              { loc: [9, 10] },
              { loc: [14, 25], note: 'Composed Match' },
              { loc: [17, 18], note: 'Declarative' },
              { loc: [31, 49], note: 'Nesting Routes - /course/6/announcements/26/reply' },
              { loc: [40, 46] },
              { loc: [54, 70], note: 'Route Config' },
              { loc: [73, 79] },
            ]}
          />
          <Slide transition={["slide"]} bgColor={"white"}>
            <Heading fix caps textSize={42} textColor={"accent"} margin="0 auto 30">Router Options</Heading>
            <Markdown>
              {`
- **Hash** router location stored using hash history
- **Browser** router location stored in browser history
- **Memory** router location stored in memory
- **Server** router optimized for server rendering
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide"]} bgColor="accent">
            <Heading textColor="white">Final Thoughts...</Heading>
          </Slide>
          <Slide transition={['fade', 'zoom']} bgColor="white">
            <Heading textColor="accent">Resources</Heading>
            <Markdown>
              {`
- Slides (http://kwelch-rrv4.surge.sh)
- React Router v4 Docs (http://react-router.now.sh)
- Spectacle (https://github.com/FormidableLabs/spectacle)
- CodeSlide (https://github.com/thejameskyle/spectacle-code-slide)

*Special Thanks to*
- @sseraphini - slide review
              `}
            </Markdown>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
