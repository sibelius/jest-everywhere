import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Relay from 'react-relay';
import ViewerQuery from './ViewerQuery';
import { createRenderer } from './RelayUtils';
import RelayStore from './RelayStore';

RelayStore.reset(
  new Relay.DefaultNetworkLayer('http://localhost:5000/graphql')
);

class RelayApp extends Component {
  render() {
    console.log('RelayApp: ', this.props);
    return (
      <View>
        <Text>name: {this.props.viewer.users.edges[0].node.name}</Text>
        <Text>length: {this.props.viewer.users.edges.length}</Text>
      </View>
    );
  }
}

// Create a Relay.Renderer container
export default createRenderer(RelayApp, {
  queries: ViewerQuery,
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        users(first: 2) {
          edges {
            node {
              name
            }
          }
        }
      }
    `,
  },
});
