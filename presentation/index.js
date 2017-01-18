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
//import CodeSlide from 'spectacle-code-slide';

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
                  source={require("raw!../assets/code/sum.js")}
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
                    source={require("raw!../assets/code/__tests__/sum.spec.js")}
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
                  source={require("raw!../assets/code/user.js")}
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
                    source={require("raw!../assets/code/__tests__/user.spec.js")}
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
            <Heading color="white" margin="0 auto 40px">
              Snapshot Example
            </Heading>
            <Layout>
              <Fill>
                <Appear>
                  <CodePane
                    lang="jsx"
                    source={require("raw!../assets/code/enzyme/Incrementor")}
                  />
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <Heading color="white" margin="0 auto 40px">
              Tests Comparison
            </Heading>
            <Layout>
              <Fill>
                <Text textColor="white">Without Snapshot</Text>
                <Appear>
                  <CodePane
                    lang="jsx"
                    source={require("raw!../assets/code/snapshot/without-snapshot.js")}
                  />
                </Appear>
              </Fill>
              <Fill>
                <Text textColor="white">With Snapshot</Text>
                <Appear>
                  <CodePane
                    lang="jsx"
                    source={require("raw!../assets/code/snapshot/with-snapshot.js")}
                  />
                </Appear>
              </Fill>
            </Layout>
          </Slide>


          <Slide>
            <Heading size="10" textColor="white" margin="0 auto 40px">Database tests - Mongoose</Heading>
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
            <Heading color="white" margin="0 auto 40px">React tests (UI)</Heading>
            <Layout>
              <Fill>
                <Appear>
                  <CodePane
                    textSize={10}
                    lang="jsx"
                    source={require("raw!../assets/code/react/Link.js")}
                  />
                </Appear>
              </Fill>
              <Fill>
                <Appear>
                  <CodePane
                    lang="jsx"
                    source={require("raw!../assets/code/react/Link-test.js")}
                  />
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <Heading color="white" margin="0 auto 40px">React test (UI) result</Heading>
            <Layout>
              <Appear>
                <CodePane
                  textSize={10}
                  lang="jsx"
                  source={require("raw!../assets/code/react/Link.snap.js")}
                />
              </Appear>
            </Layout>
          </Slide>

          <Slide>
            <Heading color="white" margin="0 auto 40px">UX tests - Enzyme</Heading>
            <Layout>
              <Fill>
                <Appear>
                  <CodePane
                    lang="jsx"
                    source={require("raw!../assets/code/enzyme/Incrementor.js")}
                  />
                </Appear>
              </Fill>
              <Fill>
                <Appear>
                  <CodePane
                    lang="jsx"
                    source={require("raw!../assets/code/enzyme/Incrementor-test.js")}
                  />
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <Heading color="white" margin="0 auto 40px">React Native tests</Heading>
            <Layout>
              <Fill>
                <Appear>
                  <CodePane
                    lang="jsx"
                    source={require("raw!../assets/code/reactnative/app.js")}
                  />
                </Appear>
              </Fill>
              <Fill>
                <Appear>
                  <CodePane
                    lang="jsx"
                    source={require("raw!../assets/code/reactnative/app-test.js")}
                  />
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <Heading color="white" margin="0 auto 40px">React Native result</Heading>
            <Layout>
              <Appear>
                <CodePane
                  lang="jsx"
                  source={require("raw!../assets/code/reactnative/app.snap.js")}
                />
              </Appear>
            </Layout>
          </Slide>

          <Slide>
            <Heading color="white" margin="0 auto 40px">Relay tests</Heading>
            <Layout>
              <Fill>
                <Appear>
                  <CodePane
                    textSize={8}
                    lang="jsx"
                    source={require("raw!../assets/code/relay/app.js")}
                  />
                </Appear>
              </Fill>
              <Fill>
                <Appear>
                  <CodePane
                    lang="jsx"
                    source={require("raw!../assets/code/relay/app-test.js")}
                  />
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <Heading color="white" margin="0 auto 40px">Relay tests result</Heading>
            <Layout>
              <Appear>
                <CodePane
                  lang="jsx"
                  source={require("raw!../assets/code/relay/app.snap.js")}
                />
              </Appear>
            </Layout>
          </Slide>

          <Slide>
            <Heading color="white" margin="0 auto 40px">Mocking</Heading>
            <Layout>
              <List textColor="white">
                <ListItem>Mock functions</ListItem>
                <ListItem>Manual mock</ListItem>
              </List>
            </Layout>
          </Slide>

          <Slide>
            <Heading color="white" margin="0 auto 40px">Mock functions</Heading>
            <Layout>
              <Appear>
                <CodePane
                  lang="jsx"
                  source={require("raw!../assets/code/mock/functions.js")}
                />
              </Appear>
            </Layout>
          </Slide>

          <Slide>
            <Heading color="white" margin="0 auto 40px">Mock functions - return value</Heading>
            <Layout>
              <Appear>
                <CodePane
                  lang="jsx"
                  source={require("raw!../assets/code/mock/func-return-value.js")}
                />
              </Appear>
            </Layout>
          </Slide>

          <Slide>
            <Heading color="white" margin="0 auto 40px">Manual Mock</Heading>
            <Text textColor="white">Inside __mocks__/ subdirectory</Text>
            <Layout>
              <Appear>
                <CodePane
                  lang="jsx"
                  source={require("raw!../assets/code/mock/aws-sdk.js")}
                />
              </Appear>
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
            <Layout>
              <Text textColor="white">https://facebook.github.io/jest/docs/migration-guide.html</Text>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="accent">
            <Heading textColor="white">Final Thoughts...</Heading>
          </Slide>
          <Slide transition={['fade', 'zoom']} bgColor="white">
            <Heading textColor="accent">Resources</Heading>
            <Markdown>
              {`
- Slides (https://github.com/sibelius/jest-everywhere)
- Jest Docs (http://facebook.github.io/jest/)
- Hot React Testing Practices (https://medium.com/in-the-hudl/hot-react-testing-practices-1eb10bd61135#.ed382u52x)
- Spectacle (https://github.com/FormidableLabs/spectacle)

*Special Thanks to*
- @kylewelch - spectacle slide reference code
- @lucasbento - slide review
              `}
            </Markdown>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
