import React, { Component } from "react";
import { Text, FlatList, ScrollView } from "react-native";
// import { CAMPSITES } from "../shared/campsites";
import { Card, ListItem } from "react-native-elements";
// import { PARTNERS } from "../shared/partners";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import Loading from "./LoadingComponent";

const mapStateToProps = (state) => {
  return {
    partners: state.partners
  };
};

function Mission({ campsite }) {
  return (
    <Card title="Our Mission">
      <Text style={{ margin: 10 }}>
        We present a curated database of the best campsites in the vast woods
        and backcountry of the World Wide Web Wilderness. We increase access to
        adventure for the public while promoting safe and respectful use of
        resources. The expert wilderness trekkers on our staff personally verify
        each campsite to make sure that they are up to our standards. We also
        present a platform for campers to share reviews on campsites they have
        visited with each other.
      </Text>
    </Card>
  );
}

class About extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     campsites: CAMPSITES,
  //     partners: PARTNERS
  //   };
  // }

  static navigationOptions = {
    title: "About Us"
  };

  render() {
    const renderPartner = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          subtitle={item.description}
          // leftAvatar={{ source: require("./images/bootstrap-logo.png") }}
          //Redux
          leftAvatar={{ source: { uri: baseUrl + item.image } }}
        />
      );
    };

    if (this.props.partners.isLoading) {
      return (
        <ScrollView>
          <Mission />
          <Card title="Community Partners">
            <Loading />
          </Card>
        </ScrollView>
      );
    }
    if (this.props.partners.errMess) {
      return (
        <ScrollView>
          <Mission />
          <Card title="Community Partners">
            <Text>{this.props.partners.errMess}</Text>
          </Card>
        </ScrollView>
      );
    }

    return (
      <ScrollView>
        <Mission />
        <Card title="Community Partners">
          {/* <FlatList
            data={this.state.partners}
            renderItem={renderPartner}
            keyExtractor={(item) => item.id.toString()}
          /> */}
          {/* redux */}
          <FlatList
            data={this.props.partners.partners}
            renderItem={renderPartner}
            keyExtractor={(item) => item.id.toString()}
          />
        </Card>
      </ScrollView>
    );
  }
}
// export default About;
export default connect(mapStateToProps)(About);
